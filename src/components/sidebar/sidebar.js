const sidebarComponent = document.getElementById("sidebarDiv");
let collapsedSidebarHeight = "56px"; 
let fullSidebarHeight = "calc(100vh - 32px)";

sidebarComponent.innerHTML = `
<aside class="sidebar">
    <!-- Sidebar header -->
    <header class="sidebar-header">
      <a href="#" class="header-logo">
        <div class="logo"></div>
      </a>
      <button class="toggler sidebar-toggler" onclick="collapseSidebar()">
        <span class="material-symbols-rounded">chevron_left</span>
      </button>
      <button class="toggler menu-toggler" onclick="menuTogglerFunction()">
        <span class="material-symbols-rounded">menu</span>
      </button>
    </header>
    <nav class="sidebar-nav">
      <!-- Primary top nav -->
      <ul class="nav-list primary-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon material-symbols-rounded">dashboard</span>
            <span class="nav-label">Dashboard</span>
          </a>
          <span class="nav-tooltip">Dashboard</span>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon material-symbols-rounded">calendar_today</span>
            <span class="nav-label">Calendar</span>
          </a>
          <span class="nav-tooltip">Calendar</span>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon material-symbols-rounded">notifications</span>
            <span class="nav-label">Notifications</span>
          </a>
          <span class="nav-tooltip">Notifications</span>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon material-symbols-rounded">group</span>
            <span class="nav-label">Team</span>
          </a>
          <span class="nav-tooltip">Team</span>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon material-symbols-rounded">insert_chart</span>
            <span class="nav-label">Analytics</span>
          </a>
          <span class="nav-tooltip">Analytics</span>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon material-symbols-rounded">star</span>
            <span class="nav-label">Bookmarks</span>
          </a>
          <span class="nav-tooltip">Bookmarks</span>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon material-symbols-rounded">settings</span>
            <span class="nav-label">Settings</span>
          </a>
          <span class="nav-tooltip">Settings</span>
        </li>
      </ul>
      <!-- Secondary bottom nav -->
      <ul class="nav-list secondary-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon material-symbols-rounded">account_circle</span>
            <span class="nav-label">Profile</span>
          </a>
          <span class="nav-tooltip">Profile</span>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon material-symbols-rounded">logout</span>
            <span class="nav-label">Logout</span>
          </a>
          <span class="nav-tooltip">Logout</span>
        </li>
      </ul>
    </nav>
  </aside>
`;

function collapseSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("collapsed");
};

const toggleMenu = (isMenuActive) => {
  const sidebar = document.querySelector(".sidebar");
  const menuToggler = document.querySelector(".menu-toggler");
  sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : collapsedSidebarHeight;
  menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
}

function menuTogglerFunction() {
  const sidebar = document.querySelector(".sidebar");
  const menuToggler = document.querySelector(".menu-toggler");
  toggleMenu(sidebar.classList.toggle("menu-active"));
};

window.addEventListener("resize", () => {
  const sidebar = document.querySelector(".sidebar");
  if (window.innerWidth >= 1024) {
    sidebar.style.height = fullSidebarHeight;
  } else {
    sidebar.classList.remove("collapsed");
    sidebar.style.height = "auto";
    toggleMenu(sidebar.classList.contains("menu-active"));
  }
});