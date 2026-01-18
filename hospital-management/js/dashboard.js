document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("dashboardTable");

  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  table.innerHTML = "";

  if (appointments.length === 0) {
    table.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center;">No Appointments Found</td>
      </tr>
    `;
    return;
  }

  appointments.forEach(app => {
    table.innerHTML += `
      <tr>
        <td>${app.patient}</td>
        <td>${app.doctor}</td>
        <td>${app.date}</td>
        <td>
          <span class="status ${app.status.toLowerCase()}">
            ${app.status}
          </span>
        </td>
        <td>
          <button onclick="deleteAppointment(${app.id})">Delete</button>
        </td>
      </tr>
    `;
  });
});

function deleteAppointment(id) {
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments = appointments.filter(a => a.id !== id);

  localStorage.setItem("appointments", JSON.stringify(appointments));
  location.reload();
}
