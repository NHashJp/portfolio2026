const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const rootDir = __dirname;
loadDotEnv(path.join(rootDir, ".env"));
const port = Number(process.env.PORT || 3000);
const resendApiKey = process.env.RESEND_API_KEY || "";
const toEmail = process.env.CONTACT_TO_EMAIL || "";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "";
const maxBodySize = 1024 * 1024;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".eot": "application/vnd.ms-fontobject",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function loadDotEnv(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const envFile = fs.readFileSync(filePath, "utf8");

  envFile.split(/\r?\n/).forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith("#")) {
      return;
    }

    const separatorIndex = trimmedLine.indexOf("=");

    if (separatorIndex === -1) {
      return;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    const value = trimmedLine.slice(separatorIndex + 1).trim();

    if (!process.env[key]) {
      process.env[key] = value;
    }
  });
}

function isValidEmail(email) {
  return emailPattern.test(email);
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(payload));
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });
}

async function sendResendEmail(payload) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const responseBody = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      responseBody.message ||
      responseBody.error ||
      "Email provider rejected the request.";
    throw new Error(message);
  }

  return responseBody;
}

async function handleContact(request, response) {
  if (!resendApiKey || !toEmail || !fromEmail) {
    sendJson(response, 500, {
      error:
        "Email service is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL.",
    });
    return;
  }

  let rawBody = "";

  request.on("data", (chunk) => {
    rawBody += chunk;

    if (rawBody.length > maxBodySize) {
      request.destroy();
    }
  });

  request.on("end", async () => {
    let data;

    try {
      data = JSON.parse(rawBody || "{}");
    } catch {
      sendJson(response, 400, { error: "Invalid request payload." });
      return;
    }

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const message = String(data.message || "").trim();
    if (!name || !message) {
      sendJson(response, 400, { error: "Name and message are required." });
      return;
    }

    if (!isValidEmail(email)) {
      sendJson(response, 400, { error: "Please provide a valid email address." });
      return;
    }

    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedMessage = escapeHtml(message).replace(/\n/g, "<br>");

    try {
      await sendResendEmail({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Portfolio contact from ${name}`,
        html: `
          <h2>New portfolio contact message</h2>
          <p><strong>Name:</strong> ${escapedName}</p>
          <p><strong>Email:</strong> ${escapedEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${escapedMessage}</p>
        `,
      });

      sendJson(response, 200, { ok: true });
    } catch (error) {
      sendJson(response, 502, {
        error: error.message || "Unable to send email right now.",
      });
    }
  });

  request.on("error", () => {
    sendJson(response, 500, { error: "Unable to read the request." });
  });
}

function resolveStaticPath(urlPath) {
  const requestedPath = urlPath === "/" ? "/index.html" : urlPath;
  const normalizedPath = path
    .normalize(requestedPath)
    .replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(rootDir, normalizedPath);

  if (!filePath.startsWith(rootDir)) {
    return "";
  }

  return filePath;
}

function serveStatic(request, response) {
  const filePath = resolveStaticPath(new URL(request.url, `http://${request.headers.host}`).pathname);

  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extension] || "application/octet-stream";

    response.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(filePath).pipe(response);
  });
}

const server = http.createServer((request, response) => {
  if (request.method === "POST" && request.url === "/api/contact") {
    handleContact(request, response);
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405);
    response.end("Method not allowed");
    return;
  }

  serveStatic(request, response);
});

server.listen(port, () => {
  console.log(`Portfolio server running at http://localhost:${port}`);
});
