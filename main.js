var xValues = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];

new Chart("Chart-js", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,4800,5000,3002, 2760],
      borderColor: '#E86C72',
      fill: false
    },{
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,6800,7000, 7200],
      borderColor: "#E9A82F",
      fill: false
    },{
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100,100,100],
      borderColor: "#61A449",
      fill: false
    }]
  },
  options: {
    legend: {display: false},

    interaction: {
        intersect: false,
        mode: 'index',
      },
      
  }
});

