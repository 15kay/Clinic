// staff_dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.respond-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const appointmentId = event.target.getAttribute('data-id');
            window.location.href = `availability.html?appointmentId=${appointmentId}`;
        });
    });
});
