
let perguntas = [
{
	titulo: 'Qual é a Linguagens de Programação Mais Usadas em 2022?',
	alternativas: ['JavaScript','Python','C#','PHP'],
	correta: 1
},
{
	titulo: 'Console.log(1+(1-0))',
	alternativas: ['0','1','2','-1'],
	correta: 0
},
{
	titulo: 'Oque sera exido no console ser utilizado typeof em uma stirng',
	alternativas: ['conteudo',"'undefined'","'string'",'Nada'],
	correta: 2
},
{
	titulo: 'Versão atual do HTML?',
	alternativas: ['PHP','5','2','X'],
	correta: 1
},
{
	titulo: 'Qual desses Frameworks server para o css?',
	alternativas: ['React Js','Django','Bootstrap','Laravel'],
	correta: 2
},{
	titulo: 'print() Qual linguagem de progamaççao usa essa função',
	alternativas: ['Python','C#','Html','JavaScript'],
	correta: 0
},{
	titulo: 'Qual desses Operadores aritméticos e o exponenciação',
	alternativas: ['²','2x','*','**'],
	correta: 3
},{
	titulo: 'Console.WriteLine()',
	alternativas: ['C#','Python','Javascript','java'],
	correta: 0
},{
	titulo: 'Oque significa !?',
	alternativas: ['Não ','Sim','Diferente','and'],
	correta: 0
},{
	titulo: '"Não idêntico" represeta ',
	alternativas: ['!==	','&&	','Ou/or','E/and'],
	correta: 0
},{
	titulo: 'Math.random() que numero ele manda',
	alternativas: ['de 0 a 9','ate 0.999','Negativos','-1'],
	correta: 1
},{
	titulo: 'Qual desses nao é uma linguagem de programação',
	alternativas: ['LOLCODE','Rockstar','English','dogcode'],
	correta: 3
},
]

let app = {
start: function(){

	this.Atualpos = 0;
	this.Totalpontos = 0;

	let alts = document.querySelectorAll('.alternativa');
	alts.forEach((element,index)=>{
		element.addEventListener('click', ()=>{
			this.checaResposta(index);
		})
	})
	this.atualizaPontos();
	app.mostraquestao(perguntas[this.Atualpos]);
},

mostraquestao: function(q){
	
	this.qatual = q;
	// mostrando o titulo
	let titleDiv = document.getElementById('titulo');
	titleDiv.textContent = q.titulo;
	// mostrando as alternativas
	let alts = document.querySelectorAll('.alternativa');
	alts.forEach(function(element,index){
		element.textContent = q.alternativas[index];
	})

},

Proximaperg: function(){
	console.log(this.Atualpos)
	this.Atualpos++;
	if(this.Atualpos == perguntas.length){
		window.location.href = "Vitoria.html";	
	}
	this.numeroAtuliza();

	console.log(this.Atualpos)

},
checaResposta: function(user){
	if(this.qatual.correta == user){
		console.log("Correta")
		this.mostraresposta(true);	
		this.Proximaperg();

		
	}
	else{
		console.log("Errada")
		this.mostraresposta(false);
		window.location.href = "Errado.html";	
	}
	this.atualizaPontos();

	this.mostraquestao(perguntas[this.Atualpos]);
},

atualizaPontos: function(){
    let scoreDiv = document.getElementById('pontos');
    scoreDiv.textContent = `Sua pontuacao: ${this.Totalpontos}`;
},

mostraresposta: function (correto) {
    let resultDiv = document.getElementById('result');
    let result = '';
    // formate a mensagem a ser exibida
    if (correto) {
      result = 'Resposta Correta!';
    }
    else {
      // obtenha a questão atual
      let pergunta = perguntas[this.Atualpos];
      // obtenha o índice da resposta correta da questão atual
      let cindice = pergunta.correta;
      // obtenha o texto da resposta correta da questão atual
      let ctexto = pergunta.alternativas[cindice];
      result = `Incorreto! Resposta Correta: ${ctexto}`;
    }
    resultDiv.textContent = result;
  },
numeroAtuliza: function() {

	let NumeroDiv = document.getElementById('Numero');
	if(this.Atualpos <= 10-2){
	
	NumeroDiv.innerHTML = "0"+(this.Atualpos+1);
}
else{
	NumeroDiv.innerHTML = (this.Atualpos+1);
}
},

}



app.start();

