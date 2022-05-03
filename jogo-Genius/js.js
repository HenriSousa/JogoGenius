let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
// cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = CreateColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
//pisca a cor que é para apertar
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });    
}
//checa se os botoes são os mesmos da ordem no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver(); break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert('Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!');
        nextLevel();
    }
}

//funcao para o clicque do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    CreateColorElement(color).classList.add('selected');

    setTimeout (() => {
        CreateColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);    
}

//funcao que retorna a cor
let CreateColorElement = (color) => {
    if(color == 0){
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//funcao para o proximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao o jogador perde
let gameOver = () => {
    alert('Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para reiniciar');
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao para iniciar o jogo
let playGame = () => {
    alert('Bem vindo')
    score = 0;
    
    nextLevel();
}

// funcao de click para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

playGame();