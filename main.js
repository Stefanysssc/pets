const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];



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
    document.getElementById("dog").innerHTML = "<img src=" + imagemDog + " style = max-width:100%; height: 100px; width: 100%; />";
   
}


function getSelectValue() {
    let guardavalor = document.getElementById("selecaoCao").value;
    //console.log(guardavalor);
    consultaApiPorNomeSelecionado(guardavalor);
}
function salvar() {
    let guardavalor = document.getElementById("salvar").value;
    document.onclick('salvar');
    localStorage.setItem(1, response.message);// guardar no LocalStorage
}



// ################################################


itens.forEach((elemento) => {
    criaElemento(elemento)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    //const quantidade = evento.target.elements['quantidade']

    const existe = itens.find(elemento => elemento.nome === nome.value)

    const itemAtual = {
        "nome": nome.value,
        // "quantidade": quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id

        atualizaElemento(itemAtual)

        itens[existe.id] = itemAtual
    } else {
        itemAtual.id = Date.now();

        criaElemento(itemAtual)

        itens.push(itemAtual)
    }

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
 

})

function criaElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "⌫"

    elementoBotao.addEventListener("click", function () {
        deletaElemento(this.parentNode, id)
    })



    return elementoBotao;
}

function deletaElemento(tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage()
}


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

///  Salvar no localStorage

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let authors = data.results;
        return authors.map(function (author) {
            let li = createNode('li');
            let img = createNode('img');
            let span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
    .catch(function (error) {
        console.log(error);
    });



let imgCachorro = document.getElementById('https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg');
imgCachorro('click', 
function () {
    fetch('https://dog.ceo/api/breed/Akita/images/random')
        .then(response => response.json())
        .then(data => {
            imgCachorro
        })

})
