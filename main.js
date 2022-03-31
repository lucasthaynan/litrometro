// REQUISICAO API

// fetch('https://raw.githubusercontent.com/lucasthaynan/litrometroAPIv2/main/api/api-litrometro.json?token=GHSAT0AAAAAABMIDDLFFXUSQ3SFPAEZZZ46YSEVBBA')
//   .then(response => response.json())
//   .then(data => {

//     console.log('olá');

//     console.log(data);
    
//     })

fetch('https://raw.githubusercontent.com/lucasthaynan/litrometro/main/api/api-litrometro.json')
  .then(response => response.json() )
  .then(data => {

    let valorIndexApi = 0;
    let nomeTipoApi = "gasolina";

    // data de atualizacao
    let dataAtualizacao = (data[0].gasolina.data_atualizacao);
    document.querySelector('#atualizacao').innerHTML = dataAtualizacao;

    // pegando preco medio
    let precoMedio = (data[valorIndexApi][nomeTipoApi].mediana_ultimo_valor);
    document.querySelector('section.preco-menor').classList.add('dados-carregados')
    document.querySelector('.preco-medio .texto3').innerHTML = precoMedio;
    let precoMedioPerc = (data[valorIndexApi][nomeTipoApi].mediana_variacao);
    document.querySelector('.preco-medio .texto4').innerHTML = precoMedioPerc;

    // pegando preco menor
    let precoMenor = (data[valorIndexApi][nomeTipoApi].menor_ultimo_valor);
    document.querySelector('.preco-menor .texto3').innerHTML = precoMenor;
    let precoMenorPerc = (data[valorIndexApi][nomeTipoApi].menor_valor_variacao);
    document.querySelector('.preco-menor .texto4').innerHTML = precoMenorPerc;

    // pegando preco maior
    let precoMaior = (data[valorIndexApi][nomeTipoApi].maior_ultimo_valor);
    document.querySelector('.preco-maior .texto3').innerHTML = precoMaior;
    let precoMaiorPerc = (data[valorIndexApi][nomeTipoApi].maior_valor_variacao);    
    document.querySelector('.preco-maior .texto4').innerHTML = precoMaiorPerc;  

    // data de atualizacao
    // let dataAtualizacao = (data[0].gasolina.data_atualizacao);
    // document.querySelector('#atualizacao').innerHTML = dataAtualizacao;

    const btns = document.querySelectorAll('.container-buttons > button')

    btns.forEach(button => {button.addEventListener('click', aciona)})
    function aciona(e) {
      
      e.target.classList.add('ativo');
      

      

      console.log(e.target.id);
      let tipoCombustivel = e.target.id;
      console.log(tipoCombustivel);

      // document.querySelector('.conteudo-header button > #${tipoCombustivel}').classList.add('.ativo');

      if (tipoCombustivel == "gasolina-comum") {
        valorIndexApi = 0, 
        nomeTipoApi = "gasolina";

      } else if (tipoCombustivel == "gasolina-adt") {
        valorIndexApi = 3, 
        nomeTipoApi = "gasolina aditivada";

      } else if (tipoCombustivel == "etanol") {
        valorIndexApi = 2, 
        nomeTipoApi = "etanol";

      } else if (tipoCombustivel == "diesel") {
        valorIndexApi = 1, 
        nomeTipoApi = "diesel";

      } else if (tipoCombustivel == "gnv") {
        valorIndexApi = 4, 
        nomeTipoApi = "gnv";
      }; 
      // else {
      //   valorIndex = 4, 
      //   nomeTipoApi = "gnv";
      // };
    
    

    console.log(tipoCombustivel);
    console.log(valorIndexApi);
    console.log(nomeTipoApi);

    console.log(data[valorIndexApi][nomeTipoApi].mediana_ultimo_valor);     

    

    // pegando preco medio
    let precoMedio = (data[valorIndexApi][nomeTipoApi].mediana_ultimo_valor);
    document.querySelector('section.preco-menor').classList.add('dados-carregados')
    document.querySelector('.preco-medio .texto3').innerHTML = precoMedio;
    let precoMedioPerc = (data[valorIndexApi][nomeTipoApi].mediana_variacao);
    document.querySelector('.preco-medio .texto4').innerHTML = precoMedioPerc;

    // pegando preco menor
    let precoMenor = (data[valorIndexApi][nomeTipoApi].menor_ultimo_valor);
    document.querySelector('.preco-menor .texto3').innerHTML = precoMenor;
    let precoMenorPerc = (data[valorIndexApi][nomeTipoApi].menor_valor_variacao);
    document.querySelector('.preco-menor .texto4').innerHTML = precoMenorPerc;

    // pegando preco maior
    let precoMaior = (data[valorIndexApi][nomeTipoApi].maior_ultimo_valor);
    document.querySelector('.preco-maior .texto3').innerHTML = precoMaior;
    let precoMaiorPerc = (data[valorIndexApi][nomeTipoApi].maior_valor_variacao);    
    document.querySelector('.preco-maior .texto4').innerHTML = precoMaiorPerc;  

    

     
      
    //   if (semaforo == "verde") {
    //     mensagem = "Pode passar";
    // } else if (semaforo == "vermelho") {
    //     mensagem = "Pare";
    // } else {
    //     mensagem = "Atenção";
    // }
    
    }

    // // verificando alguns dados
    // console.log(data[0][tipoCombustivel].mediana_ultimo_valor);
    // console.table(data[0].gasolina);

    // // verificando alguns dados
    // console.log(data[1].diesel.mediana_ultimo_valor);
    // console.table(data[1].diesel);

    // // data de atualizacao
    // let dataAtualizacao = (data[0].gasolina.data_atualizacao);
    // document.querySelector('#atualizacao').innerHTML = dataAtualizacao;

    // // pegando preco medio
    // let precoMedio = (data[0].gasolina.mediana_ultimo_valor);
    // document.querySelector('section.preco-menor').classList.add('dados-carregados')
    // document.querySelector('.preco-medio .texto3').innerHTML = precoMedio;
    // let precoMedioPerc = (data[0].gasolina.mediana_variacao);
    // document.querySelector('.preco-medio .texto4').innerHTML = precoMedioPerc;

    // // pegando preco menor
    // let precoMenor = (data[0].gasolina.menor_ultimo_valor);
    // document.querySelector('.preco-menor .texto3').innerHTML = precoMenor;
    // let precoMenorPerc = (data[0].gasolina.menor_valor_variacao);
    // document.querySelector('.preco-menor .texto4').innerHTML = precoMenorPerc;

    // // pegando preco maior
    // let precoMaior = (data[0].gasolina.maior_ultimo_valor);
    // document.querySelector('.preco-maior .texto3').innerHTML = precoMaior;
    // let precoMaiorPerc = (data[0].gasolina.maior_valor_variacao);    
    // document.querySelector('.preco-maior .texto4').innerHTML = precoMaiorPerc;   


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

