const API_URL = "http://localhost:3000/api/students";

/* ---------------- DOM Elements ---------------- */
const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentsTable");
const cancelBtn = document.getElementById("cancelBtn");

const fullName = document.getElementById("full_name");
const age = document.getElementById("age");
const address = document.getElementById("address");
const level = document.getElementById("level");
const phone = document.getElementById("phone_number");
const joinedDate = document.getElementById("joined_date");
const gradDate = document.getElementById("expected_graduation_date");

const errors = {
  full_name_error: document.getElementById("full_name_error"),
  age_error: document.getElementById("age_error"),
  address_error: document.getElementById("address_error"),
  level_error: document.getElementById("level_error"),
  phone_error: document.getElementById("phone_error"),
  joined_date_error: document.getElementById("joined_date_error"),
  grad_date_error: document.getElementById("grad_date_error"),
};

let students = [];
let editId = null;

/* ---------------- UI Helpers ---------------- */
function showMessage(text, type = "error") {
  const msg = document.getElementById("message");
  msg.textContent = text;
  msg.className = `message ${type}`;
  msg.style.display = "block";
  setTimeout(() => (msg.style.display = "none"), 4000);
}

function toggleLoading(show) {
  document.getElementById("loading").style.display = show ? "block" : "none";
}

/* ---------------- Validation ---------------- */
function validateField(field) {
  let isValid = true;
  const value = field.value.trim();

  switch (field.id) {
    case "full_name":
      isValid = value.length >= 3;
      errors.full_name_error.textContent = isValid ? "" : "Name must be at least 3 characters";
      break;

    case "age":
      isValid = value && value >= 1 && value <= 120;
      errors.age_error.textContent = isValid ? "" : "Enter valid age (1–120)";
      break;

    case "address":
      isValid = value.length >= 5;
      errors.address_error.textContent = isValid ? "" : "Address must be at least 5 characters";
      break;

    case "level":
      isValid = !!value;
      errors.level_error.textContent = isValid ? "" : "Please select a level";
      break;

    case "phone_number":
      isValid = /^\d{10}$/.test(value);
      errors.phone_error.textContent = isValid ? "" : "Enter a valid 10-digit phone number";
      break;

    case "joined_date":
      isValid = !!value;
      errors.joined_date_error.textContent = isValid ? "" : "Select joined date";
      break;

    case "expected_graduation_date":
      isValid = !!value;
      errors.grad_date_error.textContent = isValid ? "" : "Select expected graduation date";
      break;
  }

  field.classList.toggle("valid", isValid);
  field.classList.toggle("invalid", !isValid);
  return isValid;
}

function validateForm() {
  return [fullName, age, address, level, phone, joinedDate, gradDate].every(validateField);
}

[fullName, age, address, level, phone, joinedDate, gradDate].forEach(input => {
  input.addEventListener("input", () => validateField(input));
  input.addEventListener("blur", () => validateField(input));
});

/* ---------------- API ---------------- */
async function fetchStudents() {
  toggleLoading(true);
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`Fetch failed (${res.status})`);

    const result = await res.json();
    students = Array.isArray(result)
      ? result
      : Array.isArray(result.data)
      ? result.data
      : [];

    renderStudents(students);
  } catch (e) {
    showMessage("Cannot connect to backend", "error");
    tableBody.innerHTML = `<tr><td colspan="5">Backend not connected</td></tr>`;
  } finally {
    toggleLoading(false);
  }
}

async function saveStudent(data) {
  const isEdit = Boolean(editId);
  const url = isEdit ? `${API_URL}/${editId}` : API_URL;

  try {
    const res = await fetch(url, {
      method: isEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(`Save failed (${res.status})`);

    showMessage(isEdit ? "Student updated successfully" : "Student added successfully", "success");

    resetForm();
    await fetchStudents(); // resyncing the data reload
  } catch (e) {
    showMessage("Cannot connect to backend", "error");
  }
}

async function deleteStudent(id) {
  if (!confirm("Delete this student?")) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error(`Delete failed (${res.status})`);

    showMessage("Student deleted successfully", "success");
    await fetchStudents(); // ✅ instant update
  } catch (e) {
    showMessage("Cannot connect to backend", "error");
  }
}

/* ---------------- Render ---------------- */
function renderStudents(list) {
  tableBody.innerHTML = "";

  if (!list.length) {
    tableBody.innerHTML = `<tr><td colspan="5">No students found</td></tr>`;
    return;
  }

  list.forEach((s, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${s.full_name}</td>
      <td>${s.age}</td>
      <td>${s.level}</td>
      <td>
        <button class="action-btn view-btn">View</button>
        <button class="action-btn edit-btn">Edit</button>
        <button class="action-btn delete-btn">Delete</button>
      </td>
    `;

    tr.querySelector(".view-btn").onclick = () => viewStudent(s.id);
    tr.querySelector(".edit-btn").onclick = () => editStudent(s.id);
    tr.querySelector(".delete-btn").onclick = () => deleteStudent(s.id);

    tableBody.appendChild(tr);
  });
}

/* ---------------- Edit ---------------- */
function editStudent(id) {
  const s = students.find(st => st.id == id);
  if (!s) return;

  editId = id;
  fullName.value = s.full_name;
  age.value = s.age;
  address.value = s.address;
  level.value = s.level;
  phone.value = s.phone_number;
  joinedDate.value = s.joined_date;
  gradDate.value = s.expected_graduation_date;

  cancelBtn.style.display = "inline-block";
}

/* ---------------- View ---------------- */
function viewStudent(id) {
  const s = students.find(st => st.id == id);
  if (!s) return;

  document.getElementById("modal_full_name").textContent = s.full_name;
  document.getElementById("modal_age").textContent = s.age;
  document.getElementById("modal_address").textContent = s.address;
  document.getElementById("modal_level").textContent = s.level;
  document.getElementById("modal_phone").textContent = s.phone_number;
  document.getElementById("modal_joined_date").textContent = s.joined_date;
  document.getElementById("modal_grad_date").textContent = s.expected_graduation_date;

  document.getElementById("studentModal").style.display = "flex";
}

/* ---------------- Modal Close ---------------- */
document.querySelector(".close-btn").onclick = () => {
  document.getElementById("studentModal").style.display = "none";
};

window.onclick = e => {
  if (e.target.id === "studentModal") {
    document.getElementById("studentModal").style.display = "none";
  }
};

/* ---------------- Search & Filter ---------------- */
document.getElementById("searchInput").addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  renderStudents(students.filter(s => s.full_name.toLowerCase().includes(term)));
});

document.getElementById("filterLevel").addEventListener("change", e => {
  const lvl = e.target.value;
  renderStudents(lvl ? students.filter(s => s.level === lvl) : students);
});

/* ---------------- Sort ---------------- */
function sortByAge() {
  renderStudents([...students].sort((a, b) => a.age - b.age));
}

/* ---------------- Form ---------------- */
form.addEventListener("submit", e => {
  e.preventDefault();
  if (!validateForm()) return;

  saveStudent({
    full_name: fullName.value.trim(),
    age: Number(age.value),
    address: address.value.trim(),
    level: level.value,
    phone_number: phone.value.trim(),
    joined_date: joinedDate.value,
    expected_graduation_date: gradDate.value,
  });
});

/* ---------------- Reset ---------------- */
function resetForm() {
  form.reset();
  editId = null;
  cancelBtn.style.display = "none";
  [fullName, age, address, level, phone, joinedDate, gradDate].forEach(f =>
    f.classList.remove("valid", "invalid")
  );
}

cancelBtn.onclick = resetForm;

/* ---------------- Init ---------------- */
fetchStudents();
