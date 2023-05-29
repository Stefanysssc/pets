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

consultaApiPorNomeSelecionado("pug");



// let requeste = fazGet(`https://dog.ceo/api/breed/${opcao}/images/random`);
// let response = JSON.parse(requeste);
// let imagemDog = response.message;
// document.getElementById("opcaoSelecionada").innerHTML = "<img src=" + imagemDog + " style = max-width:100%; height: 100px; width: 100%; />";

// //console.log(imagemDog);
// console.log(response);