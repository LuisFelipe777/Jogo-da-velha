const resultado = document.querySelector('.resultado');
let btns = [];

let contador = 0;
let combinacaoEscolhidaX = [];
let combinacaoEscolhidaO = [];

const combinacao1 = [1, 2, 3].sort();
const combinacao2 = [4, 5, 6].sort();
const combinacao3 = [7, 8, 9].sort();
const combinacao4 = [1, 4, 7].sort();
const combinacao5 = [2, 5, 8].sort();
const combinacao6 = [3, 6, 9].sort();
const combinacao7 = [1, 5, 9].sort();
const combinacao8 = [7, 5, 3].sort();

const combinacoes = [combinacao1, combinacao2, combinacao3, combinacao4, combinacao5, combinacao6, combinacao7, combinacao8];

const insereJogada = valor => {
    if (valor.target.nodeName == "BUTTON") {
        if (valor.target.classList.value !== "x" && valor.target.classList.value !== "o") {
            contador++;
            btns.push(valor.target.classList.value);
            if (contador % 2 == 0) {
                insereX(valor);
            }
            else {
                insereO(valor);
            }
        }
    }
}
document.addEventListener("click", insereJogada);

const insereX = valor => {

    if (valor.target.classList.value !== "x" && valor.target.classList.value !== "o") {
        valor.target.classList.value = "x";

        combinacaoEscolhidaX.push(parseInt(valor.target.firstChild.textContent));

        verificaCombinações();

    }
}
const insereO = valor => {
    if (valor.target.classList.value !== "x" && valor.target.classList.value !== "o") {
        valor.target.classList.value = "o";

        combinacaoEscolhidaO.push(parseInt(valor.target.firstChild.textContent));

        verificaCombinações();
    }
}

const verificaCombinações = () => {
    const combinacaoO = [];
    combinacaoO.push(JSON.stringify(combinacaoEscolhidaO.sort()));
    const combinacaoX = [];
    combinacaoX.push(JSON.stringify(combinacaoEscolhidaX.sort()));

    for (let i of combinacoes) {
        if ((combinacaoO[0].includes(JSON.stringify(i)[1])
            && combinacaoO[0].includes(JSON.stringify(i)[3])
            && combinacaoO[0].includes(JSON.stringify(i)[5]))) {
            resultado.innerHTML = "Resultado: Bolinha ganhou";
            recomeca();
        } else if (combinacaoX[0].includes(JSON.stringify(i)[1])
            && combinacaoX[0].includes(JSON.stringify(i)[3])
            && combinacaoX[0].includes(JSON.stringify(i)[5])) {
            resultado.innerHTML = "Resultado: X ganhou";
            recomeca();
        }
    }
}

const recomeca = () => {
    contador = 0;
    combinacaoEscolhidaO, combinacaoEscolhidaX = [];
    btns.forEach(valor => valor = "");
    btns = 0;


}



