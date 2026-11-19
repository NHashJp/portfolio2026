(function () {
  var data = window.profileData || {};
  var basePath = window.portfolioHelpers.basePath;
  var statusLabel = { active: "In progress", paused: "Paused", done: "Done" };

  function escapeHtml(text) {
    return String(text).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function renderCurrent(container) {
    var list = data.currentlyWorking || [];

    container.innerHTML = list
      .map(function (item) {
        var title = escapeHtml(item.title);
        if (item.link) {
          title = '<a href="' + basePath + escapeHtml(item.link) + '">' + title + "</a>";
        }
        var tags = (item.tags || [])
          .map(function (tag) {
            return '<li class="project-tag">' + escapeHtml(tag) + "</li>";
          })
          .join("");

        return (
          '<article class="col-6 col-12-xsmall current-item">' +
          '<span class="current-status is-' + escapeHtml(item.status) + '">' +
          (statusLabel[item.status] || "") + "</span>" +
          "<h3>" + title + "</h3>" +
          '<p class="current-org">' + escapeHtml(item.org) + "</p>" +
          "<p>" + escapeHtml(item.summary) + "</p>" +
          '<ul class="project-tags">' + tags + "</ul>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderActivities(container) {
    var list = data.activities || [];

    container.innerHTML = list
      .map(function (item) {
        var points = (item.points || [])
          .map(function (point) {
            return "<li>" + escapeHtml(point) + "</li>";
          })
          .join("");
        var more = item.link
          ? '<a href="' + basePath + escapeHtml(item.link) + '">Read more</a>'
          : "";

        return (
          '<li class="cv-entry">' +
          '<p class="cv-dates">' + escapeHtml(item.start) + " – " + escapeHtml(item.end) + "</p>" +
          "<h3>" + escapeHtml(item.role) + "</h3>" +
          '<p class="cv-org">' + escapeHtml(item.org) +
          ' <span class="project-tag">' + escapeHtml(item.category) + "</span></p>" +
          "<ul>" + points + "</ul>" + more +
          "</li>"
        );
      })
      .join("");
  }

  var current = document.getElementById("current-grid");
  var cv = document.getElementById("cv-list");

  if (current) renderCurrent(current);
  if (cv) renderActivities(cv);
})();
