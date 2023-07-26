// Retrieve the canvas element
const doughnutChartCanvas = document.getElementById('doughnut');

// Create the pie chart
const doughnutChart = new Chart(doughnutChartCanvas, {
  type: 'doughnut',
  data: {
    labels: ['Pending', 'Completed', 'In Progress'],
    datasets: [{
      data: [/* provide the data here */],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(75, 192, 192, 0.7)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true
  }
});

// Update the pie chart data whenever it changes
function updateDoughnutChart(pending, completed, inProgress) {
  doughnutChart.data.datasets[0].data = [pending, completed, inProgress];
  doughnutChart.update();
}

// Example usage
updateDoughnutChart(10, 20, 15); // Replace with the actual data
