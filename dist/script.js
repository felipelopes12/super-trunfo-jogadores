var cartaNeymar= {
  nome: "Neymar",
  img: "https://medias.cnnbrasil.com.br/neymar-comemora-gol-contra-o-olympique-lyonnais.jpeg?format=JPEG&image=https://mediastorage.cnnbrasil.com.br/IMAGES/00/00/00/8661_E70738C3CB0FD632.jpg&width=804&height=588&resize=CROP",
  atributos: {
    ataque: 98,
    defesa: 40,
    magia: 90
  }
}
var cartaMessi = {
  nome: "Messi",
  img: "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/07/03/01-lionel-messi-foto-divulgacaobarcelona.jpg",
  atributos: {
    ataque: 95,
    defesa: 38,
    magia: 99
  }
}

var cartaRamos = {
  nome: "Sergio Ramos",
  img: "https://i.ibb.co/XL1mB7C/download-3.jpg",
  atributos: {
    ataque: 65,
    defesa: 95,
    magia: 75
  }
}
var cartaCris = {
  nome: "Cristiano Ronaldo",
  img: "https://www.rbsdirect.com.br/filestore/7/1/8/1/2_391ac4ab61771d5/21817_23741127b046f9b.jpg?w=800&h=535&a=c%201x",
  atributos: {
    ataque: 98,
    defesa: 40,
    magia: 88
  }
}
var cartaRonaldinho = {
  nome:  "Ronaldinho Gaucho",
  img: "https://i.ibb.co/3CktyFq/ronaldinho-barcelona-1slsxexo4gn5z1m0cln77mlj3h.jpg",
  atributos: {
    ataque: 99,
    defesa: 40,
    magia: 100
  }
}
var cartaRonaldo = {
  nome:  "Ronaldo Fenomeno",
  img: "https://static.corinthians.com.br/uploads/1568916745c9e37c28ce5852218032aae6f5632b13.jpg",
  atributos: {
    ataque: 100,
    defesa: 39,
    magia: 97
  }
}
var cartaRomario= {
  nome:  "Romario",
  img: "https://www.portaltucuma.com.br/wp-content/uploads/2020/08/vasco-rom%C3%A1rio-anivers%C3%A1rio.jpg",
  atributos: {
    ataque: 96,
    defesa: 45,
    magia: 93
 
  }
}
var cartaEdmundo= {
  nome:  "Edmundo",
  img: "https://1.bp.blogspot.com/-W9wvVxvKZro/Wj44cTlsoKI/AAAAAAAAL_0/_UzFC5wSUtQlEI1lAusu7eSIhcGU9xAcwCLcBGAs/s640/photo_1_0c8e3341b0e092fad28d1a83f52ee41c.jpg",
  atributos: {
    ataque: 90,
    defesa: 39,
    magia: 90
  }
}
var cartaMbappe= {
  nome:  "Mbapee",
  img: "https://conteudo.imguol.com.br/c/esporte/34/2021/02/07/kylian-mbappe-comemora-gol-pelo-psg-contra-o-olympique-de-marselha-pelo-frances-1612732714791_v2_450x337.png",
  atributos: {
    ataque: 88,
    defesa: 35,
    magia:92
  }
}
var cartaMaquina
var cartaJogador
var cartas =[cartaNeymar, cartaMessi, cartaRamos, cartaCris, cartaRonaldinho, cartaRonaldo, cartaRomario, cartaEdmundo, cartaMbappe]

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random()*9)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random()*9)
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random()*9)
  }
  cartaJogador = cartas[numeroCartaJogador]
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  renderCard(cartaJogador)
}

function renderCard(renderedCard) {
  let cardsContainer = document.getElementById('opcoes');
  let cardContainer = document.createElement('div');
  cardContainer.classList.add('cardContainer')
  
  let cardName = document.createElement('h4')
  cardName.innerText = renderedCard.nome
  
  let cardImg = document.createElement('img')
  cardImg.srcset = renderedCard.img
  
  let cardOpt = document.createElement('div')
  var opcoesTexto = ""
  for (var atributo in renderedCard.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "' id='" + atributo + "'> <label for='" + atributo + "' class='label " + atributo + "'>" + atributo + " " + renderedCard.atributos.[atributo] + "</label>"   
  }
  cardOpt.innerHTML = opcoesTexto
  
  cardContainer.append(cardImg)
  cardContainer.append(cardName)
  cardContainer.append(cardOpt)
  cardsContainer.appendChild(cardContainer)
  
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  renderCard(cartaMaquina)
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    let resultado = "ganhou"
    let texto = "Parabéns, você ganhou da máquina!"
    getResult(atributoSelecionado, resultado, texto)
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    let resultado = "perdeu"
    let texto = "Sinto muito, você perdeu para a máquina!"
    getResult(atributoSelecionado, resultado, texto)
  } else {
    let resultado = "empatou"
    let texto = "Você empatou com a máquina!"
    getResult(atributoSelecionado, resultado, texto)
  }
  document.getElementById('btnJogar').disabled = true
}

function getResult(atributoSelecionado, output, texto) {
  console.log(texto)
  let displayOutput = document.getElementById("resultado")
    displayOutput.classList.add(output)
    displayOutput.innerText = texto
  let resultado = document.querySelectorAll('.' + atributoSelecionado)
      for (i = 0; i < resultado.length; i++) {
      resultado[i].classList.add(output);
      }
}