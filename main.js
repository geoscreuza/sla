function criaCartao(categoria, pergunta, resposta){
let container = document.getElementById('container');
let cartao = document.createElement('article');
cartao.className = 'cartao';
cartao.innerHTML = '
<div class="conteudocartao">
    <h3>categoria</h3>
    <div class="pergunta-cartao">
<p>perguntas</p>
    </div> 
     <div class="resposta-cartao">
<p>respostas</p>
     </div>
    </div>
 '   
container.appendChild(cartao);
}