// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get health metrics from URL
const heartRate = getQueryParam('heartRate');
const stepCount = getQueryParam('stepCount');
const sleepHours = getQueryParam('sleepHours');

// Update summary text
document.getElementById("summary").innerText = 
    `Heart Rate: ${heartRate || '--'} bpm, Step Count: ${stepCount || '--'}, Sleep Hours: ${sleepHours || '--'}`;

// Minimum healthy thresholds for each metric
const healthyThresholds = { heartRate: 60, stepCount: 10000, sleepHours: 7 };

// Chart contexts
const heartRateCtx = document.getElementById('heartRateChart').getContext('2d');
const stepCountCtx = document.getElementById('stepCountChart').getContext('2d');
const sleepHoursCtx = document.getElementById('sleepHoursChart').getContext('2d');

// Update charts
function updateCharts() {
    // Heart Rate Chart
    new Chart(heartRateCtx, {
        type: 'bar',
        data: {
            labels: ['Current Heart Rate', 'Healthy Minimum'],
            datasets: [{
                label: 'Heart Rate (bpm)',
                data: [heartRate, healthyThresholds.heartRate],
                backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 0.2)'],
            }]
        },
        options: { scales: { y: { beginAtZero: true, title: { display: true, text: 'BPM' } } } }
    });

    // Step Count Chart
    new Chart(stepCountCtx, {
        type: 'bar',
        data: {
            labels: ['Current Step Count', 'Healthy Minimum'],
            datasets: [{
                label: 'Step Count',
                data: [stepCount, healthyThresholds.stepCount],
                backgroundColor: ['rgba(255, 206, 86, 1)', 'rgba(255, 99, 132, 0.2)'],
            }]
        },
        options: { scales: { y: { beginAtZero: true, title: { display: true, text: 'Steps' } } } }
    });

    // Sleep Hours Chart
    new Chart(sleepHoursCtx, {
        type: 'bar',
        data: {
            labels: ['Current Sleep Hours', 'Healthy Minimum'],
            datasets: [{
                label: 'Sleep Hours',
                data: [sleepHours, healthyThresholds.sleepHours],
                backgroundColor: ['rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 0.2)'],
            }]
        },
        options: { scales: { y: { beginAtZero: true, title: { display: true, text: 'Hours' } } } }
    });
}

// Call update charts function
updateCharts();

// Go back function
function goBack() {
    window.history.back();
}
