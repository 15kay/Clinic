// availability.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const appointmentId = urlParams.get('appointmentId');

    if (appointmentId) {
        document.getElementById('appointmentId').value = appointmentId;
    }

    document.getElementById('availability-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const availabilityDate = document.getElementById('availabilityDate').value;
        const availabilityTime = document.getElementById('availabilityTime').value;
        const appointmentId = document.getElementById('appointmentId').value;

        // Simulate sending data to a server or local storage
        console.log(`Appointment ID: ${appointmentId}, Date: ${availabilityDate}, Time: ${availabilityTime}`);

        // Update the status in local storage (simulating server update)
        localStorage.setItem(`appointment_${appointmentId}`, JSON.stringify({
            status: 'Responded',
            date: availabilityDate,
            time: availabilityTime
        }));

        // Redirect to the main dashboard or show a success message
        alert('Availability set successfully!');
        window.location.href = 'doctors.html';
    });
});
