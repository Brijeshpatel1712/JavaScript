document.addEventListener("DOMContentLoaded", () => {

  // Patients
  let patients = JSON.parse(localStorage.getItem("patients")) || [];
  let patientCountEl = document.getElementById("patientCount");

  if (patientCountEl) {
    patientCountEl.innerText = patients.length;
  }

  // Appointments
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  let appointmentCountEl = document.getElementById("appointmentCount");

  if (appointmentCountEl) {
    appointmentCountEl.innerText = appointments.length;
  }

  // Recent Appointments
  let recentList = document.getElementById("recentAppointments");

  if (recentList) {
    recentList.innerHTML = "";

    appointments.slice(-5).reverse().forEach(a => {
      let li = document.createElement("li");
      li.textContent = `${a.patient} - ${a.doctor} (${a.date})`;
      recentList.appendChild(li);
    });
  }

});
