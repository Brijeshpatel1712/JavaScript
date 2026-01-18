const doctors = [
  { name: "Dr. Sharma", dept: "Cardiology", time: "10AM - 2PM" },
  { name: "Dr. Patel", dept: "Neurology", time: "1PM - 5PM" },
  { name: "Dr. Khan", dept: "Orthopedic", time: "9AM - 1PM" }
];


let editDoctorId = null;

const table = document.getElementById("doctorTable");
renderDoctors();

function saveDoctor() {
  const name = document.getElementById("docName").value;
  const dept = document.getElementById("docDept").value;
  const time = document.getElementById("docTime").value;

  if (!name || !dept || !time) {
    alert("Please fill all fields");
    return;
  }

  if (editDoctorId) {
    doctors = doctors.map(d =>
      d.id === editDoctorId ? { ...d, name, dept, time } : d
    );
    editDoctorId = null;
  } else {
    doctors.push({
      id: Date.now(),
      name,
      dept,
      time
    });
  }

  localStorage.setItem("doctors", JSON.stringify(doctors));
  renderDoctors();
  clearForm();
}

function renderDoctors() {
  table.innerHTML = "";

  if (doctors.length === 0) {
    table.innerHTML = `
      <tr>
        <td colspan="4" style="text-align:center;">No Doctors Found</td>
      </tr>
    `;
    return;
  }

  doctors.forEach(d => {
    table.innerHTML += `
      <tr>
        <td>${d.name}</td>
        <td>${d.dept}</td>
        <td>${d.time}</td>
        <td>
          <button onclick="editDoctor(${d.id})">Edit</button>
          <button onclick="deleteDoctor(${d.id})" style="background:red;">Delete</button>
        </td>
      </tr>
    `;
  });
}

function editDoctor(id) {
  const d = doctors.find(d => d.id === id);
  document.getElementById("docName").value = d.name;
  document.getElementById("docDept").value = d.dept;
  document.getElementById("docTime").value = d.time;
  editDoctorId = id;
}

function deleteDoctor(id) {
  if (!confirm("Delete this doctor?")) return;
  doctors = doctors.filter(d => d.id !== id);
  localStorage.setItem("doctors", JSON.stringify(doctors));
  renderDoctors();
}

function clearForm() {
  document.getElementById("docName").value = "";
  document.getElementById("docDept").value = "";
  document.getElementById("docTime").value = "";
}

