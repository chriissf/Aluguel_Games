let quantJogoAlugado = 0;

function quantidadeJogoAlugado(){

    console.log(`Total de jogos alugados: ${quantJogoAlugado}`);

}
//Cria função para ação botão onclick html,cria um parâmetro para o id alterarStatus(1...)por variavel 
function alterarStatus(id){

    //Recupera tag <li> pelo id html  trocando numero id por varivel
    let gameClicado = document.getElementById(`game-${id}`);
    //recupera imagem de cada jogo alugado
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    //recuperar botão para alterar status e troca texto devolver e alugar
    let botao = gameClicado.querySelector('.dashboard__item__button');

    //Recuperar nome do jogo
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name')


    //logica troca de status
    //condição que verifica se jogo ta com a class da imagem opoca (Alugado)


    if(imagem.classList.contains('dashboard__item__img--rented')){

        //validação se deseja realmente essa ação
        if(confirm(`Deseja realmente devolver o jogo ${nomeJogo.textContent}?` )){
              //remove a stilo da imagem css
        imagem.classList.remove('dashboard__item__img--rented');
        //remove o stilo class botão css
        botao.classList.remove('dashboard__item__button--return');

        //troca o texto do botão para Alugar
        botao.textContent = 'Alugar';
        quantJogoAlugado--;

        }
      


    }else{

        //caso class estiver alugar troca class para alugado invertendo a logica
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        quantJogoAlugado++;
    }
    
    quantidadeJogoAlugado();
}

// Espera até que o conteúdo HTML da página seja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos que possuem a classe '.dashboard__item__img--rented'
    // Isso identifica todos os jogos que estão atualmente alugados na página
    quantJogoAlugado = document.querySelectorAll('.dashboard__item__img--rented').length;
    
    // Após contar quantos jogos estão alugados, chama a função para exibir esse total
    quantidadeJogoAlugado();
});