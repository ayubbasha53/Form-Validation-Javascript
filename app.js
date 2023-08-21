const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const fileInput = document.querySelector("#file");
const tasks = document.querySelector(".tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const namevalue = name.value.trim();
  const emailvalue = email.value.trim();
  const phonevalue = phone.value.trim();
  const filevalue = fileInput.files[0]?.name || "No file";

  if (namevalue === "") {
    alert("Please provide the name.");
    name.focus();
    return;
  }
  if (!isNaN(namevalue)) {
    alert("Please provide a valid name.");
    name.focus();
    return;
  }
  if (emailvalue === "") {
    alert("Please provide an email.");
    email.focus();
    return;
  }

  if (phonevalue === "" || phonevalue.length !== 10) {
    alert("Please provide a valid 10-digit Phone Number.");
    phone.focus();
    return;
  }

  const passwordvalue = password.value.trim(); // Add this line
  if (passwordvalue === "") {
    alert("Please provide the password.");
    password.focus();
    return;
  }
  if (passwordvalue.length <= 5) {
    alert("Password must be more than 5 characters.");
    password.focus();
    return;
  }

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${namevalue}</td>
        <td>${emailvalue}</td>
        <td>${phonevalue}</td>
        <td>${filevalue}</td>
      `;
  tasks.appendChild(newRow);

  name.value = "";
  email.value = "";
  phone.value = "";
  password.value = "";
  fileInput.value = null;

  alert("Data submitted successfully.");
});
