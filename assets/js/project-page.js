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
})();
