let patients = JSON.parse(localStorage.getItem("patients")) || [];
let editId = null;

const table = document.getElementById("patientTable");
renderPatients();

function addPatient() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  if (!name || !age) {
    alert("Fill all fields");
    return;
  }

  if (editId) {
    patients = patients.map(p =>
      p.id === editId ? { ...p, name, age } : p
    );
    editId = null;
  } else {
    patients.push({
      id: Date.now(),
      name,
      age
    });
  }

  localStorage.setItem("patients", JSON.stringify(patients));
  renderPatients();
  clearForm();
}

function renderPatients() {
  table.innerHTML = "";
  patients.forEach(p => {
    table.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>${p.age}</td>
        <td>
          <button onclick="editPatient(${p.id})">Edit</button>
          <button onclick="deletePatient(${p.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function editPatient(id) {
  let p = patients.find(p => p.id === id);
  document.getElementById("name").value = p.name;
  document.getElementById("age").value = p.age;
  editId = id;
}

function deletePatient(id) {
  patients = patients.filter(p => p.id !== id);
  localStorage.setItem("patients", JSON.stringify(patients));
  renderPatients();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}
