function Pessoa(nomeCompleto, corFavorita){
	this.nome = nomeCompleto;
	this.corFav = corFavorita;
	this.saudacao = function(){
		console.log("Olá o meu nome é " + this.nome + " e a minha cor favorita é " + this.corFav + ".");
	}
}

var ze = new Pessoa("Zé Pereira", "roxo");
ze.saudacao();

var ana = new Pessoa("Ana Silva", "vermelho");
ana.saudacao();
