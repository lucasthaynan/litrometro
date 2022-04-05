

function mudarCorVariacao(status, element, elementCirculo) {
  if (status == 'alta') {
    element.style.color = "#E86C72",
    elementCirculo.src = './items/alta.svg';
  } 
  if (status == 'queda') {
    element.style.color = "#61A449";
    elementCirculo.src = './items/queda.svg';
  } 
  if (status == 'sem-variacao') {
    element.style.color = "#6CAFDF";
    elementCirculo.src = './items/sem-variacao.svg';
  };
}

// REQUISICAO API

fetch('https://raw.githubusercontent.com/lucasthaynan/litrometro/main/api/dados_do_dia_litrometro.json')
  .then(response => response.json() )
  .then(data => {

    // console.log(data[0].gasolina)
    // console.table(data[0].gasolina)

    let valorIndexApi = 0;
    let nomeTipoApi = "gasolina";

    // data de atualizacao
    let dataAtualizacao = (data[0].gasolina.data_atualizacao);
    document.querySelector('#atualizacao').innerHTML = dataAtualizacao;

    aciona('gasolina-comum')


    const btns = document.querySelectorAll('.container-buttons > button')

    btns.forEach(button => {button.addEventListener('click', e => aciona(e.target.id))})
    function aciona(tipoCombustivel) {
      const btns = document.querySelectorAll('.container-buttons > button')
      btns.forEach(button => button.classList.remove('ativo'));
      document.querySelector('#' + tipoCombustivel).classList.add('ativo');

      

            
      
      // console.log(tipoCombustivel);

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

      // GERANDO GRÁFICO POR COMBUSTÍVEL
      grafico_combustivel(valorIndexApi, nomeTipoApi)
    

    // console.log(tipoCombustivel);
    // console.log(valorIndexApi);
    // console.log(nomeTipoApi);

    // console.log(data[valorIndexApi][nomeTipoApi].mediana_ultimo_valor);     
    

    

    // pegando preco medio
    let precoMedio = (data[valorIndexApi][nomeTipoApi].mediana_ultimo_valor);
    
    document.querySelector('section.preco-medio').classList.add('dados-carregados')
    document.querySelector('.preco-medio .texto3').innerHTML = precoMedio;
    let precoMedioPerc = (data[valorIndexApi][nomeTipoApi].texto_variacao_mediana);
    document.querySelector('.preco-medio .texto4').innerHTML = precoMedioPerc;    

    // CHAMANDO A FUNÇÃO PARA MUDAR COR DO TEXTO DE VARIAÇÃO
    let statusPrecoMedio = (data[valorIndexApi][nomeTipoApi].status_mediana);
    let elementMedioCirculo = document.querySelector(".preco-medio .circulo"); 
    console.log(statusPrecoMedio);
    let elementMedio = document.querySelector(".preco-medio .bloco-percentual");
    mudarCorVariacao(statusPrecoMedio, elementMedio, elementMedioCirculo);

    
    // pegando preco menor
    let precoMenor = (data[valorIndexApi][nomeTipoApi].menor_ultimo_valor);
    document.querySelector('.preco-menor .texto3').innerHTML = precoMenor;
    document.querySelector('section.preco-menor').classList.add('dados-carregados')
    let precoMenorPerc = (data[valorIndexApi][nomeTipoApi].texto_menor_valor_variacao);
    document.querySelector('.preco-menor .texto4').innerHTML = precoMenorPerc;

    // CHAMANDO A FUNÇÃO PARA MUDAR COR DO TEXTO DE VARIAÇÃO
    let statusPrecoMenor = (data[valorIndexApi][nomeTipoApi].status_menor);   
    let elementMenorCirculo = document.querySelector(".preco-menor .circulo"); 
    let elementMenor = document.querySelector(".preco-menor .bloco-percentual");
    mudarCorVariacao(statusPrecoMenor, elementMenor, elementMenorCirculo);

    // pegando preco maior
    let precoMaior = (data[valorIndexApi][nomeTipoApi].maior_ultimo_valor);
    document.querySelector('.preco-maior .texto3').innerHTML = precoMaior;
    document.querySelector('section.preco-maior').classList.add('dados-carregados')
    let precoMaiorPerc = (data[valorIndexApi][nomeTipoApi].texto_variacao_maior_valor);    
    document.querySelector('.preco-maior .texto4').innerHTML = precoMaiorPerc;  

    // CHAMANDO A FUNÇÃO PARA MUDAR COR DO TEXTO DE VARIAÇÃO
    let statusPrecoMaior = (data[valorIndexApi][nomeTipoApi].status_maior);   
    let elementMaiorCirculo = document.querySelector(".preco-maior .circulo"); 
    let elementMaior = document.querySelector(".preco-maior .bloco-percentual");
    mudarCorVariacao(statusPrecoMaior, elementMaior, elementMaiorCirculo);   

    
    
    } 

  });

// GERANDO GRAFICO

function grafico_combustivel(valorIndexApi, nomeTipoApi) {
  fetch('https://raw.githubusercontent.com/lucasthaynan/litrometro/main/api/historico.json')
  .then(response => response.json())
  .then(data => {

    // console.log(data[0].gasolina.preco_medio)

    console.log(Object.keys(data[valorIndexApi][nomeTipoApi].preco_medio));

    console.log(Object.values(data[valorIndexApi][nomeTipoApi].preco_medio));

    // console.log(Object.values(data[0]).filter(d => d != 'Gasolina'))

    var grafico = new Chart("Chart-js", {
      type: "line",
      data: {
        // valores do eixo X
        labels: Object.keys(data[valorIndexApi][nomeTipoApi].preco_medio),
        datasets: [{
          // valores do eixo Y
          data: Object.values(data[valorIndexApi][nomeTipoApi].preco_medio),
          borderColor: '#E86C72',
          fill: true,
          label: nomeTipoApi
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
   } 
  )

}



// GRÁFICO

// function updateChart(){
//   grafico.data.datasets[0].data = [10,10,30]; grafico.update();
//   };

// updateChart()


// REQUISAO POSTS AGENCIA TATU


function carregarMaterias(numeroContainerNews) {
  fetch('https://raw.githubusercontent.com/lucasthaynan/litrometro/main/api/materias_tatu.json')
    .then(response => response.json())
    .then(data => {
      console.log('ok')
      console.log(data)
      let tituloMateria = data[numeroContainerNews].titulo_materia;
      let urlMateria = data[numeroContainerNews].url_materia; 
      let urlFotoMateria = data[numeroContainerNews].url_foto_materia;
      //     // console.log(urlFotoMateria);
      // let apiFotosMateria = data[numeroContainerNews]._links['wp:featuredmedia'][0]['href'];
      console.log(tituloMateria);
      console.log(urlMateria);
      console.log(urlFotoMateria)

      // fetch(apiFotosMateria)
      //   .then(response => response.json() )
      //   .then(data => {
      //     let urlFotoMateria = data.source_url;
      //     // console.log(urlFotoMateria);   
          
      // ADICIONANDO URL DA MATERIA E FOTOS NA PAGINA        

      document.querySelectorAll('section.noticias .news > img')[numeroContainerNews].src = urlFotoMateria;
      // console.log()
      document.querySelectorAll('section.noticias .news > a')[numeroContainerNews].href = urlMateria;
      document.querySelectorAll('section.noticias .news > a')[numeroContainerNews].innerHTML = tituloMateria;

      //   })    
    })
};

// CHAMANDO A FUNÇÃO DE CARREGAR AS MATERIAS
// let listaMaterias = [0,1,2,3];

// for (let materia in listaMaterias) {
//   carregarMaterias(materia)
// };
carregarMaterias(0);
carregarMaterias(1);
carregarMaterias(2);
carregarMaterias(3);