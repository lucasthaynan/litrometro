

function mudarCorVariacao(status, element, elementCirculo) {
  if (status == 'alta') {
    element.style.color = "#E86C72",
    elementCirculo.src = '/items/alta.svg';
  } 
  if (status == 'queda') {
    element.style.color = "#61A449";
    elementCirculo.src = '/items/queda.svg';
  } 
  if (status == 'sem-variacao') {
    element.style.color = "#6CAFDF";
    elementCirculo.src = '/items/sem-variacao.svg';
  };
}

// REQUISICAO API

fetch('https://raw.githubusercontent.com/lucasthaynan/litrometro/main/api/api-litrometro.json')
  .then(response => response.json() )
  .then(data => {

    console.log(data[0].gasolina)
    console.table(data[0].gasolina)

    let valorIndexApi = 0;
    let nomeTipoApi = "gasolina";

    // data de atualizacao
    let dataAtualizacao = (data[0].gasolina.data_atualizacao);
    document.querySelector('#atualizacao').innerHTML = dataAtualizacao;

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

    

    // data de atualizacao
    // let dataAtualizacao = (data[0].gasolina.data_atualizacao);
    // document.querySelector('#atualizacao').innerHTML = dataAtualizacao;

    const btns = document.querySelectorAll('.container-buttons > button')

    btns.forEach(button => {button.addEventListener('click', aciona)})
    function aciona(e) {
      
      // e.target.classList.add('ativo');
      
      // let buttonColor = document.querySelector(".container-buttons button")
      // e.target.style.backgroundColor = "#ffff"

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


// REQUISAO POSTS AGENCIA TATU


function carregarMaterias(numeroContainerNews) {
  fetch('https://agenciatatu.com.br/wp-json/wp/v2/posts?tags=69,70,64',{
    mode:'cors',
    headers: {  
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
    }})
    .then(response => response.json())
    .then(data => {
      let tituloMateria = data[numeroContainerNews].title.rendered;
      let urlMateria = data[numeroContainerNews].link; 
      let apiFotosMateria = data[numeroContainerNews]._links['wp:featuredmedia'][0]['href'];
      console.log(tituloMateria);
      console.log(urlMateria);

      fetch(apiFotosMateria)
        .then(response => response.json() )
        .then(data => {
          let urlFotoMateria = data.source_url;
          console.log(urlFotoMateria);   
          
          // ADICIONANDO URL DA MATERIA E FOTOS NA PAGINA        

          document.querySelectorAll('section.noticias .news > img')[numeroContainerNews].src = urlFotoMateria;
          console.log()
          document.querySelectorAll('section.noticias .news > a')[numeroContainerNews].href = urlMateria;
          document.querySelectorAll('section.noticias .news > a')[numeroContainerNews].innerHTML = tituloMateria;

        })    
    })
};

let listaMaterias = [0,1,2,3];

for (let materia in listaMaterias) {
  carregarMaterias(materia)
};

