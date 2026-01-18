let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
let editAppId = null;

const appTable = document.getElementById("appointmentTable");
renderAppointments();

function saveAppointment() {
  let patient = document.getElementById("patient").value;
  let doctor = document.getElementById("doctor").value;
  let date = document.getElementById("date").value;

  if (!patient || !doctor || !date) {
    alert("Fill all fields");
    return;
  }

  if (editAppId) {
    appointments = appointments.map(a =>
      a.id === editAppId
        ? { ...a, patient, doctor, date }
        : a
    );
    editAppId = null;
  } else {
    appointments.push({
      id: Date.now(),
      patient,
      doctor,
      date,
      status: "Pending"
    });
  }

  localStorage.setItem("appointments", JSON.stringify(appointments));
  renderAppointments();
  clearForm();
}

function renderAppointments() {
  appTable.innerHTML = "";
  appointments.forEach(a => {
    appTable.innerHTML += `
      <tr>
        <td>${a.patient}</td>
        <td>${a.doctor}</td>
        <td>${a.date}</td>
        <td>
          <select onchange="updateStatus(${a.id}, this.value)">
            <option ${a.status === "Pending" ? "selected" : ""}>Pending</option>
            <option ${a.status === "Confirmed" ? "selected" : ""}>Confirmed</option>
            <option ${a.status === "Cancelled" ? "selected" : ""}>Cancelled</option>
          </select>
        </td>
        <td>
          <button onclick="editAppointment(${a.id})">Edit</button>
          <button onclick="deleteAppointment(${a.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function editAppointment(id) {
  let a = appointments.find(a => a.id === id);
  document.getElementById("patient").value = a.patient;
  document.getElementById("doctor").value = a.doctor;
  document.getElementById("date").value = a.date;
  editAppId = id;
}

function deleteAppointment(id) {
  appointments = appointments.filter(a => a.id !== id);
  localStorage.setItem("appointments", JSON.stringify(appointments));
  renderAppointments();
}

function updateStatus(id, status) {
  appointments = appointments.map(a =>
    a.id === id ? { ...a, status } : a
  );
  localStorage.setItem("appointments", JSON.stringify(appointments));
}

function clearForm() {
  document.getElementById("patient").value = "";
  document.getElementById("doctor").value = "";
  document.getElementById("date").value = "";
}
