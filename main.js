const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];
const selecaoCao = document.getElementById('selecaoCao');


function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText;
}

function consultaApiPorNomeSelecionado(opcao) {

    let requeste = fazGet(`https://dog.ceo/api/breed/${opcao}/images/random`);
    let response = JSON.parse(requeste);
    let imagemDog = response.message;
    document.getElementById("dog").innerHTML = "<img src=" + imagemDog + " style = max-width:100%; height: 100px; width: 100%; id='imagemCao'/>";
   
}

function getSelectValue() {
    let guardavalor = document.getElementById("selecaoCao").value;
    //console.log(guardavalor);
    consultaApiPorNomeSelecionado(guardavalor);
}


///  Salvar no localStorage
function salvaImagem(i){
    let itemSalvo={
        id:Math.floor(Math.random() * 2000000),
        raca: selecaoCao.value,
        imagem:document.getElementById('imagemCao').src
    }
    itens.push(itemSalvo);
    localStorage.setItem("itens",JSON.stringify(itens));
    listarImagem();
}

// funcion lista imagem
function listarImagem() {
    let galeriaImagem = document.getElementById('galeria');
    galeriaImagem.innerHTML = "";
    for (let index = 0; index < itens.length; index++) {
        let url = itens[index].imagem; 
        let criaHtml = 
                        `
                        <div id="imagem-galeria" >
                        <img src="${url}" alt="">
                        <button onclick= 'excluir(${itens[index].id})'>excluir</button>
                        </div>       
                        `;
        galeriaImagem.innerHTML   += criaHtml;
    }   
}
    
function excluir(id){
    let index = itens.findIndex(item => item.id == id);
    itens.splice(index, 1);
    localStorage.setItem("itens",JSON.stringify(itens));
    listarImagem();
}
