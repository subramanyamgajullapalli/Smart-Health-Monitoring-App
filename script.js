document.getElementById("health-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input values
    const heartRate = parseInt(document.getElementById("heart-rate").value);
    const stepCount = parseInt(document.getElementById("step-count").value);
    const sleepHours = parseFloat(document.getElementById("sleep-hours").value);

    // Redirect to summary page with parameters
    window.location.href = `summary.html?heartRate=${heartRate}&stepCount=${stepCount}&sleepHours=${sleepHours}`;
});
