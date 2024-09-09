document.addEventListener("DOMContentLoaded", function () {
    const appointmentForm = document.getElementById("appointment-form");
    const appointmentsList = document.getElementById("appointments-list");

    appointmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const doctor = document.getElementById("doctor").value;
        const appointmentDate = document.getElementById("appointmentDate").value;
        const appointmentTime = document.getElementById("appointmentTime").value;

        // Create a new table row for the new appointment
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${doctor}</td>
            <td>${appointmentDate}</td>
            <td>${appointmentTime}</td>
            <td>${name}</td>
            <td>Pending</td>
        `;

        // Append the new row to the appointments list
        appointmentsList.appendChild(newRow);

        // Show success message
        alert("Your appointment has been booked!");

        // Clear form fields
        appointmentForm.reset();
    });
});
