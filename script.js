function registerUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  if (password !== confirm) {
    alert("Passwords do not match");
    return false;
  }

  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Sign-Up successful!");
  window.location.href = "login.html";
  return false;
}

function loginUser() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No user found. Please sign up first.");
    return false;
  }

  if (email === savedUser.email && password === savedUser.password) {
    alert("Login successful!");
  } else {
    alert("Invalid email or password");
  }

  return false;
}
