// Event listeners
document.getElementById("showSidebar").addEventListener("click", showSidebar);
document.getElementById("hideSidebar").addEventListener("click", hideSidebar);

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
