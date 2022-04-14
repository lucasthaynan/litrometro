
// FUNÇÃO QUE MUDA DE COR O TRECHO DE VARIAÇÃO
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


graficoCombustivel('0', 'gasolina')


// REQUISICAO API DOS DADOS DOS 3 PRIMEIROS BLOCOS

fetch('https://raw.githubusercontent.com/lucasthaynan/litrometro/main/api/dados_do_dia_litrometro.json')
  .then(response => response.json() )
  .then(data => {

    // valores iniciais das variáveis ao abrir a página
    let valorIndexApi = 0;
    let nomeTipoApi = "gasolina";

    // data de atualização
    let dataAtualizacao = (data[0].gasolina.data_atualizacao);
    document.querySelector('#atualizacao').innerHTML = dataAtualizacao;

    // chamando a função de execução do botão 'gasolina-comum'
    aciona('gasolina-comum')

    // pegando todos os butões de tipos de combustíveis e fazendo uma ação para cada um deles ao ser clicado
    const btns = document.querySelectorAll('.container-buttons > button')

    btns.forEach(button => {button.addEventListener('click', e => aciona(e.target.id))})
    function aciona(tipoCombustivel) {
      const btns = document.querySelectorAll('.container-buttons > button')
      btns.forEach(button => button.classList.remove('ativo'));
      document.querySelector('#' + tipoCombustivel).classList.add('ativo');    

      // verificando se a classe do butão tem o mesmo nome das chaves no arquivo JSON (api)
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
    

      graficoCombustivel(valorIndexApi, nomeTipoApi); 


    // PEGANDO E EXIBINDO PREÇO MÉDIO
    let precoMedio = (data[valorIndexApi][nomeTipoApi].mediana_ultimo_valor);
    
    document.querySelector('section.preco-medio').classList.add('dados-carregados')
    document.querySelector('.preco-medio .texto3').innerHTML = precoMedio;
    let precoMedioPerc = (data[valorIndexApi][nomeTipoApi].texto_variacao_mediana);
    document.querySelector('.preco-medio .texto4').innerHTML = precoMedioPerc;    

   // chamando a função de mudança de cor do texto de variação
    let statusPrecoMedio = (data[valorIndexApi][nomeTipoApi].status_mediana);
    let elementMedioCirculo = document.querySelector(".preco-medio .circulo");     
    let elementMedio = document.querySelector(".preco-medio .bloco-percentual");
    mudarCorVariacao(statusPrecoMedio, elementMedio, elementMedioCirculo);


    
    // PEGANDO E EXIBINDO PREÇO MENOR
    let precoMenor = (data[valorIndexApi][nomeTipoApi].menor_ultimo_valor);
    document.querySelector('.preco-menor .texto3').innerHTML = precoMenor;
    document.querySelector('section.preco-menor').classList.add('dados-carregados')
    let precoMenorPerc = (data[valorIndexApi][nomeTipoApi].texto_menor_valor_variacao);
    document.querySelector('.preco-menor .texto4').innerHTML = precoMenorPerc;

    // chamando a função de mudança de cor do texto de variação
    let statusPrecoMenor = (data[valorIndexApi][nomeTipoApi].status_menor);   
    let elementMenorCirculo = document.querySelector(".preco-menor .circulo"); 
    let elementMenor = document.querySelector(".preco-menor .bloco-percentual");
    mudarCorVariacao(statusPrecoMenor, elementMenor, elementMenorCirculo);

    // PEGANDO E EXIBINDO PREÇO MAIOR
    let precoMaior = (data[valorIndexApi][nomeTipoApi].maior_ultimo_valor);
    document.querySelector('.preco-maior .texto3').innerHTML = precoMaior;
    document.querySelector('section.preco-maior').classList.add('dados-carregados')
    let precoMaiorPerc = (data[valorIndexApi][nomeTipoApi].texto_variacao_maior_valor);    
    document.querySelector('.preco-maior .texto4').innerHTML = precoMaiorPerc;  

    // chamando a função de mudança de cor do texto de variação
    let statusPrecoMaior = (data[valorIndexApi][nomeTipoApi].status_maior);   
    let elementMaiorCirculo = document.querySelector(".preco-maior .circulo"); 
    let elementMaior = document.querySelector(".preco-maior .bloco-percentual");
    mudarCorVariacao(statusPrecoMaior, elementMaior, elementMaiorCirculo);       
    
    } 

  });

// GERANDO GRAFICO



// function graficoCombustivelAtualizacao(valorIndexApi, nomeTipoApi) {
//   fetch('https://raw.githubusercontent.com/lucasthaynan/litrometro/main/api/historico.json')
//   .then(response => response.json())
//   .then(data => {

//     let variaveisGrafico = Object.keys(data[valorIndexApi][nomeTipoApi].preco_medio);

//     let valoresGrafico = Object.values(data[valorIndexApi][nomeTipoApi].preco_medio); 

//     // console.log(valoresGrafico);
//     // console.log(variaveisGrafico);

//     updateGrafico('grafico', variaveisGrafico, valoresGrafico);

//     console.log('graficoCombustivelAtualizacao')
    
    
//    } 
//   )
// }

// function graficoHistotico(variaveisGrafico, valoresGrafico){  
//   var grafico = new Chart("Chart-js", {
//     type: "line",
//     data: {
//       // valores do eixo X
//       labels: variaveisGrafico,
//       datasets: [{
//         // valores do eixo Y
//         data: valoresGrafico,
//         borderColor: '#E86C72',
//         fill: true,
//         label: 'Teste'
//       }]

//     },
//     options: {
//       legend: {display: false},

//       interaction: {
//           intersect: false,
//           mode: 'index',
//         },
        
//     }
//   });
  
// }
    


function graficoCombustivel(valorIndexApi, nomeTipoApi) {
  fetch('https://raw.githubusercontent.com/lucasthaynan/litrometro/main/api/historico.json')
  .then(response => response.json())
  .then(data => {

    let variaveisGrafico = Object.keys(data[valorIndexApi][nomeTipoApi].preco_medio);

    let valoresGrafico = Object.values(data[valorIndexApi][nomeTipoApi].preco_medio);

    console.log('graficoCombustivel')

    // grafico.destroy();

    console.log('graficoCombustivelTESTE')

    var grafico = new Chart("Chart-js", {
      type: "line",
      data: {
        // valores do eixo X
        labels: variaveisGrafico,
        datasets: [{
          // valores do eixo Y
          data: valoresGrafico,
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

// function resetGrafico() {
//   grafico.destroy();
//   grafico.

// }

// function updateGrafico(grafico, variaveisGrafico, valoresGrafico) {{
//   grafico.data.labels = variaveisGrafico;
//   grafico.data.datasets.data = valoresGrafico;
//   };
//   console.log('Atualização')
//   chart.update();}






// REQUISAO POSTS AGENCIA TATU

function carregarMaterias(numeroContainerNews) {
  fetch('https://raw.githubusercontent.com/lucasthaynan/litrometro/main/api/materias_tatu.json')
    .then(response => response.json())
    .then(data => {

      // console.log('ok')
      // console.log(data)

      let tituloMateria = data[numeroContainerNews].titulo_materia;
      let urlMateria = data[numeroContainerNews].url_materia; 
      let urlFotoMateria = data[numeroContainerNews].url_foto_materia;

      // console.log(tituloMateria);
      // console.log(urlMateria);
      // console.log(urlFotoMateria)
          
      // ADICIONANDO URL DA MATERIA E FOTOS NA PAGINA        
      document.querySelectorAll('section.noticias .news > img')[numeroContainerNews].src = urlFotoMateria;

      document.querySelectorAll('section.noticias .news > a')[numeroContainerNews].href = urlMateria;

      document.querySelectorAll('section.noticias .news > a')[numeroContainerNews].innerHTML = tituloMateria;

    })
};

// CHAMANDO A FUNÇÃO DE CARREGAR AS MATERIAS

carregarMaterias(0);
carregarMaterias(1);
carregarMaterias(2);
carregarMaterias(3);

// grafico_combustivel(2, 'etanol')

// grafico_combustivel(valorIndexApi, nomeTipoApi)