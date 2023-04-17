// gera um número aleatório de 1 a 100 
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// obtem referências aos elementos em html importântes
var sugestaoInput = document.getElementById("sugestao");
var mensagemOutput = document.getElementById("mensagem");

var numerodeTentativas = 0;

document.querySelector("form").addEventListener("submit", function(event) {
	event.preventDefault();
	
	var sugestao = parseInt(sugestaoInput.value);

	if (sugestao === numeroAleatorio) {
		numerodeTentativas ++;
		mensagemOutput.textContent = `Você acertou o número!!! em ${numerodeTentativas} tentativa(s)!`;

		sugestaoInput.disabled = true;
		event.target.querySelector("button").disabled = true;
	} else if (sugestao < numeroAleatorio) {
		numerodeTentativas++;
		mensagemOutput.textContent = "O número é maior! Tente novamente.";

		sugestaoInput.value = "";
	} else {
		numerodeTentativas++;
		mensagemOutput.textContent = "O número é menor! Tente novamente.";

		palpiteInput.value = "";
	}
});