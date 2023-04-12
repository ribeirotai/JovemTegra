let botao = document.querySelector("#botaoCalcular");
    botao.addEventListener("click", handleButtonClick);

function handleButtonClick() {

    let inputMedidaA = document.querySelector ("#medidaA").value;
    let inputMedidaB = document.querySelector ("#medidaB").value;
    let inputMedidaC = document.querySelector ("#medidaC").value;

    let medidaAFixed = parseFloat(inputMedidaA).toFixed(4);
    let medidaBFixed = parseFloat(inputMedidaB).toFixed(4);
    let medidaCFixed = parseFloat(inputMedidaC).toFixed(4);
    
    //Área do quadrado lado A//
    let calcularQuadrado = (medidaAFixed * medidaAFixed);
    let quadradoFixed = calcularQuadrado.toFixed(4);

    //Área triangulo base A e altura B//
    let calcularTriangulo = (medidaAFixed * medidaBFixed) / 2;
    let trianguloFixed = calcularTriangulo.toFixed(4);

    //Área trapezio base A, Base B, altura C//
    let calcularTrapezio = (medidaAFixed + medidaBFixed) * medidaCFixed * 0.5;
    let trapezioFixed = calcularTrapezio.toFixed(4);

    quadrado.textContent = `Área do quadrado:${quadradoFixed} cm²`
    triangulo.textContent = `Área do triângulo:${trianguloFixed} cm²`
    trapezio.textContent = `Área do trapézio:${trapezioFixed} cm²`
}