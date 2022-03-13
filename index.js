const graph = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(graph, {
  type: "doughnut",
  data: {
    labels: [
      "Sommeil",
      "Ecole",
      "Travail",
      "Repas",
      "Travail",
      "Sport/Distractions",
    ],
    datasets: [
      {
        data: ["33.33", "8.33", "12.5", "8.33", "16.66", "20.83"],
        backgroundColor: ["blue", "red", "green", "yellow", "pink", "purple"],
        borderColor: ["black"],
        hoverBorderWidth: 3,
      },
    ],
  },
  options: {
    title: {
      responsive: false,
    },
  },
});
