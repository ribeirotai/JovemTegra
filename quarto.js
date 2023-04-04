let botao = document.querySelector("#botaoCalcular");
    botao.addEventListener("click", handleButtonClick);

function handleButtonClick() {

    let input_preco = document.querySelector ("#preco_unitario").value;
    let input_quantidade = document.querySelector ("#quantidade_comprada").value;
    let input_recebido = document.querySelector ("#dinheiro_recebido").value;

    let precoFixed = parseFloat (input_preco).toFixed(2);
    let quantidadeFixed = parseFloat (input_quantidade).toFixed(2);
    let recebidoFixed = parseFloat (input_recebido).toFixed(2);

    let resultado_troco = recebidoFixed - ( precoFixed * quantidadeFixed);

    troco.textContent = `O troco é de R$ ${resultado_troco}`
}