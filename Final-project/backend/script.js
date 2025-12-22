const API_URL = "http://localhost:3000/api/students";

/* ===== DOM ===== */
const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentsTable");
const cancelBtn = document.getElementById("cancelBtn");

const fullName = document.getElementById("full_name");
const age = document.getElementById("age");
const address = document.getElementById("address");
const level = document.getElementById("level");
const phone = document.getElementById("phone_number");
const joinedDate = document.getElementById("joined_date");
const graduationDate = document.getElementById("expected_graduation_date");

let editId = null;

/* ===== LOAD ===== */
document.addEventListener("DOMContentLoaded", loadStudents);

async function loadStudents() {
  const res = await fetch(API_URL);
  const data = await res.json();
  renderTable(data.data);
}

/* ===== RENDER ===== */
function renderTable(students) {
  tableBody.innerHTML = "";
  students.forEach(s => {
    tableBody.innerHTML += `
      <tr>
        <td>${s.id}</td>
        <td>${s.full_name}</td>
        <td>${s.age}</td>
        <td>${s.level}</td>
        <td>
          <button class="action-btn view-btn" onclick="viewStudent(${s.id})">View</button>
          <button class="action-btn edit-btn" onclick="editStudent(${s.id})">Edit</button>
          <button class="action-btn delete-btn" onclick="deleteStudent(${s.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

/* ===== VALIDATION ===== */
function validateForm() {
  if (!fullName.value.trim()) return alert("Name required");
  if (!age.value || age.value <= 0) return alert("Valid age required");
  if (!level.value) return alert("Select level");
  if (!/^\d{10}$/.test(phone.value)) return alert("Phone must be 10 digits");
  return true;
}

/* ===== SUBMIT ===== */
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const student = {
    full_name: fullName.value,
    age: Number(age.value),
    address: address.value,
    level: level.value,
    phone_number: phone.value,
    joined_date: joinedDate.value,
    expected_graduation_date: graduationDate.value
  };

  await fetch(editId ? `${API_URL}/${editId}` : API_URL, {
    method: editId ? "PUT" : "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });

  resetForm();
  loadStudents();
});

/* ===== VIEW ===== */
async function viewStudent(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const s = (await res.json()).data;

  document.getElementById("modalBody").innerHTML = `
    <p><b>Name:</b> ${s.full_name}</p>
    <p><b>Age:</b> ${s.age}</p>
    <p><b>Address:</b> ${s.address}</p>
    <p><b>Level:</b> ${s.level}</p>
    <p><b>Phone:</b> ${s.phone_number}</p>
    <p><b>Joined:</b> ${s.joined_date}</p>
    <p><b>Graduation:</b> ${s.expected_graduation_date}</p>
  `;
  document.getElementById("studentModal").style.display = "flex";
}

/* ===== EDIT ===== */
async function editStudent(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const s = (await res.json()).data;

  fullName.value = s.full_name;
  age.value = s.age;
  address.value = s.address;
  level.value = s.level;
  phone.value = s.phone_number;
  joinedDate.value = s.joined_date?.split("T")[0];
  graduationDate.value = s.expected_graduation_date?.split("T")[0];

  editId = id;
  cancelBtn.style.display = "inline-block";
}

/* ===== DELETE ===== */
async function deleteStudent(id) {
  if (!confirm("Delete this student?")) return;
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadStudents();
}

/* ===== RESET ===== */
function resetForm() {
  form.reset();
  editId = null;
  cancelBtn.style.display = "none";
}
cancelBtn.addEventListener("click", resetForm);

/* ===== MODAL ===== */
function closeModal() {
  document.getElementById("studentModal").style.display = "none";
}
window.onclick = e => {
  if (e.target.id === "studentModal") closeModal();
};
