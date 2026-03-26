function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  // super basic check (you can change this)
  if (user === "admin" && pass === "1234") {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    error.textContent = "Invalid username or password";
  }
}

function cancel() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
