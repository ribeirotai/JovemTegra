let botao = document.querySelector("#btn");
botao.addEventListener("click", calcular);

function calcular() {
    let inputbase = document.querySelector("#base").value;
    let inputaltura = document.querySelector("#altura").value;

    let baseFixed = parseFloat(inputbase).toFixed(4);
    let alturaFixed = parseFloat(inputaltura).toFixed(4);

    let resultadoarea = (baseFixed * alturaFixed).toFixed(4);
    let resultadoperimetro = (2 * baseFixed + 2 * alturaFixed).toFixed(4);
    let resultadodiagonal = (Math.sqrt(Math.pow(baseFixed,2) + Math.pow(alturaFixed,2))).toFixed(4);

    resultado__area.textContent = `Área do retângulo: ${resultadoarea}m²`;
    resultado__perimetro.textContent = `Perímetro do retângulo: ${resultadoperimetro}m`;
    resultado__diagonal.textContent = `Diagonal do retângulo: ${resultadodiagonal}m `;
}