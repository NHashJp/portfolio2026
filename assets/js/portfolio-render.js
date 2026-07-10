(function () {
  var grid = document.getElementById("portfolio-grid");
  var filters = document.getElementById("portfolio-filters");
  var emptyState = document.getElementById("portfolio-empty");
  var projects = window.portfolioProjects || [];

  if (!grid) return;

  var isProjectPage = window.location.pathname.indexOf("/projects/") !== -1;
  var basePath = isProjectPage ? "../" : "";
  var pageMode = document.body.getAttribute("data-portfolio-view") || "all";
  var activeTag = "all";
  var preferredTagOrder = [
    "python",
    "java",
    "c++",
    "javascript",
    "web",
    "sensors",
    "robotics",
    "game-dev",
    "simulation",
  ];

  function uniqueTags() {
    var seen = {};

    projects.forEach(function (project) {
      project.tags.forEach(function (tag) {
        seen[tag] = true;
      });
    });

    return preferredTagOrder.filter(function (tag) {
      return seen[tag];
    });
  }

  function tagLabel(tag) {
    if (tag === "javascript") return "JavaScript";
    if (tag === "c++") return "C++";
    return tag.charAt(0).toUpperCase() + tag.slice(1);
  }

  function visibleProjects() {
    var list = projects.slice();

    if (activeTag !== "all") {
      list = list.filter(function (project) {
        return project.tags.indexOf(activeTag) !== -1;
      });
    }

    if (pageMode === "featured") {
      list = list.slice(0, 6);
    }

    return list;
  }

  function renderCards() {
    var list = visibleProjects();

    grid.innerHTML = list
      .map(function (project) {
        var tags = project.tags
          .map(function (tag) {
            return '<li class="project-tag">' + tagLabel(tag) + "</li>";
          })
          .join("");

        return (
          '<article class="col-6 col-12-xsmall work-item">' +
          '<a href="' +
          basePath +
          project.fullImage +
          '" class="image fit thumb"><img src="' +
          basePath +
          project.thumbImage +
          '" alt="' +
          project.title +
          '" /></a>' +
          '<h3><a href="' +
          basePath +
          "projects/" +
          project.slug +
          '.html">' +
          project.title +
          "</a></h3>" +
          "<p>" +
          project.summary +
          "</p>" +
          '<ul class="project-tags">' +
          tags +
          "</ul>" +
          "</article>"
        );
      })
      .join("");

    if (emptyState) {
      emptyState.hidden = list.length > 0;
    }
  }

  function renderFilters() {
    if (!filters || pageMode !== "all") return;

    var buttons = [
      '<button type="button" class="is-active" data-tag="all">All</button>',
    ];

    uniqueTags().forEach(function (tag) {
      buttons.push(
        '<button type="button" data-tag="' +
          tag +
          '">' +
          tagLabel(tag) +
          "</button>",
      );
    });

    filters.innerHTML = buttons.join("");
  }

  renderFilters();
  renderCards();

  if (filters) {
    filters.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-tag]");

      if (!button) return;

      activeTag = button.getAttribute("data-tag");

      filters.querySelectorAll("button").forEach(function (item) {
        item.classList.toggle(
          "is-active",
          item.getAttribute("data-tag") === activeTag,
        );
      });

      renderCards();
    });
  }
})();
