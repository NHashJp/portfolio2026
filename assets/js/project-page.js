(function () {
  var slug = document.body.getAttribute("data-project-slug");
  var projects = window.portfolioProjects || [];

  if (!slug) return;

  var project = projects.find(function (item) {
    return item.slug === slug;
  });

  if (!project) return;

  var title = document.getElementById("project-title");
  var hero = document.getElementById("project-hero");
  var summary = document.getElementById("project-summary");
  var description = document.getElementById("project-description");
  var tags = document.getElementById("project-tags");
  var subtitle = document.getElementById("project-subtitle");
  var sections = document.getElementById("project-sections");
  var links = document.getElementById("project-links");
  var pageTitle = document.getElementById("project-page-title");
  var basePath = window.portfolioHelpers.basePath;
  var tagLabel = window.portfolioHelpers.tagLabel;

  document.title = project.title + " | Portfolio 2026";

  if (pageTitle) {
    pageTitle.textContent = project.title;
  }

  if (title) {
    title.textContent = project.title;
  }

  if (summary) {
    summary.textContent = project.summary;
  }

  if (description) {
    description.textContent = project.description;
  }

  if (hero) {
    hero.innerHTML =
      '<span class="image fit"><img src="' +
      basePath +
      project.fullImage +
      '" alt="' +
      project.title +
      '" /></span>';
  }

  if (tags) {
    tags.innerHTML = project.tags
      .map(function (tag) {
        return '<li class="project-tag">' + tagLabel(tag) + "</li>";
      })
      .join("");
  }

  function el(tagName, text, className) {
    var node = document.createElement(tagName);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function linkList(items, className) {
    var list = el("ul", "", className);

    items.forEach(function (item) {
      var li = el("li");
      var a = el("a", item.label, className === "actions" ? "button" : "");
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener";
      li.appendChild(a);
      list.appendChild(li);
    });

    return list;
  }

  if (subtitle) {
    subtitle.textContent = project.subtitle || "";
  }

  if (sections) {
    (project.sections || []).forEach(function (section) {
      var wrapper = el("div", "", "project-section");
      var list = el("ul");

      wrapper.appendChild(el("h3", section.heading));
      section.items.forEach(function (text) {
        list.appendChild(el("li", text));
      });
      wrapper.appendChild(list);

      if (section.links) {
        wrapper.appendChild(linkList(section.links, "project-links"));
      }

      sections.appendChild(wrapper);
    });
  }

  if (links && project.links && project.links.length) {
    links.appendChild(linkList(project.links, "actions"));
  }
})();
