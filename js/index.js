function enviar(){

    var nome = document.getElementById('nome').value;
    alert(nome);
    var idade = document.getElementById('idade').value;
    alert(idade);
    var sexo = document.getElementById('sexo').value;
    alert(sexo);
    var endereco = document.getElementById('endereco').value;
    alert(endereco);
    if (nome.length <=2 || nome.length>30) {
        alert('Tamanho do nome invalido!');
    }else if (idade<=0){
        alert('Idade invalida!');

    }
}
$(".btn-menu").click(function () {
    $(".menu").show();
})
$(".btn-close").click(function () {
    $(".menu").hide();
})
