// Get references
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Check saved mode in localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// Toggle on button click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Save choice
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
