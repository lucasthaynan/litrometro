// REQUISICAO API

fetch('dados-api.json')
  .then(response => response.json() )
  .then(data => {

    console.log(data[0].gasolina.mediana_ultimo_valor);
    console.table(data[0].gasolina);

    let dataAtualizacao = (data[0].gasolina.data_atualizacao);
    document.querySelector('#atualizacao').innerHTML = dataAtualizacao;

    let precoMedio = (data[0].gasolina.mediana_ultimo_valor);
    document.querySelector('.preco-medio .texto3').innerHTML = precoMedio;
    let precoMedioPerc = (data[0].gasolina.mediana_variacao);
    document.querySelector('.preco-medio .texto4').innerHTML = precoMedioPerc;

    let precoMenor = (data[0].gasolina.menor_ultimo_valor);
    document.querySelector('.preco-menor .texto3').innerHTML = precoMenor;
    let precoMenorPerc = (data[0].gasolina.menor_valor_variacao);
    document.querySelector('.preco-menor .texto4').innerHTML = precoMenorPerc;

    let precoMaior = (data[0].gasolina.maior_ultimo_valor);
    document.querySelector('.preco-maior .texto3').innerHTML = precoMaior;
    let precoMaiorPerc = (data[0].gasolina.maior_valor_variacao);
    document.querySelector('.preco-maior .texto4').innerHTML = precoMaiorPerc;

  })


// GRÁFICO

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

