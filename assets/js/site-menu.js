(function () {
  var menu = document.getElementById("site-menu");
  var projects = window.portfolioProjects || [];

  if (!menu) return;

  var isProjectPage = window.location.pathname.indexOf("/projects/") !== -1;
  var basePath = isProjectPage ? "../" : "";

  var projectLinks = projects
    .map(function (project) {
      return (
        '<li><a href="' +
        basePath +
        "projects/" +
        project.slug +
        '.html">' +
        project.title +
        "</a></li>"
      );
    })
    .join("");

  menu.innerHTML =
    '<div class="site-menu-inner">' +
    '<div class="site-menu-heading">' +
    '<p class="site-menu-kicker">Site Map</p>' +
    "<h2>Navigation</h2>" +
    "</div>" +
    '<ul class="site-menu-list">' +
    '<li><a href="' +
    basePath +
    'index.html">Home</a></li>' +
    '<li><a href="' +
    basePath +
    'about-me.html">About Me</a></li>' +
    '<li class="has-dropdown">' +
    '<a href="' +
    basePath +
    'portfolio.html">Portfolio</a>' +
    '<ul class="site-submenu">' +
    projectLinks +
    "</ul>" +
    "</li>" +
    "</ul>" +
    "</div>";
})();
