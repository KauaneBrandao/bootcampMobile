//declarando uma  variavél que não pode mudar(do tipo constante)
const jogador1 ={
    Nome: "Mario",
    Velocidade: 4,
    Manobracidade:3,
    Poder: 3,
    Pontos:0,
};

const jogador2 ={
    Nome: "Luigi",
    Velocidade: 3,
    Manobracidade:4,
    Poder: 4,
    Pontos:0,
};

//floor é para arredondar o valor, ou seja, transformar o número em int
//math é para calcular .random chama um número aleatório 
async function rolarDados(){
  return Math.floor(Math.random() * 6) + 1 ; 
}

async function getRandomBlock() {
    let random = Math.random()
    let result

    switch(true){
        case random < 0.33:
            result = "Reta";
            break;
        case random < 0.66:
            result = "curva";
        default:
            result = "Confronto";
    }
    return result;
}

//encapsulando uma função
async function logRollResult(personagem,block,Rdados,attribute) {
     console.log(`
        ${personagem} 🎲Rolou um dado de ${block} ${Rdados} + ${attribute} = ${
            Rdados + attribute
        }` 
     );
}

async function motoPrincipal(personagem1, personagem2) {
    for(let round = 1; round<=5; round++){
        console.log(`🏁 rodada ${round}`);

        //Sorteia os blocos
        let block = await getRandomBlock()
        console.log(`Bloco ${block}`);

        //Rolar os dados
        let Rdados = await rolarDados();
        let Rdados2 = await rolarDados();

        //Teste de habilidades
        let totalTestSkill = 0;
        let totalTestSkill2 = 0;

        if(block == "Reta"){
            totalTestSkill = Rdados + personagem1.Velocidade
            totalTestSkill2 = Rdados2 + personagem2.Velocidade

            await logRollResult(
                personagem1.Nome,
                "velocidade",
                Rdados,
                personagem1.Velocidade
            );
        
            await logRollResult(
                personagem2.Nome,
                "velocidade",
                Rdados2,
                personagem2.Velocidade
            );

        }else if(block == "curva"){
            totalTestSkill = Rdados + personagem1.Manobracidade
            totalTestSkill2 = Rdados2 + personagem2.Manobracidade

               await logRollResult(
                personagem1.Nome,
                "Manobracidade",
                Rdados,
                personagem1.Manobracidade
            );
        
            await logRollResult(
                personagem2.Nome,
                "Manobracidade",
                Rdados2,
                personagem2.Manobracidade
            );
        }else{
            //escopo de variaveis
            let powerResult = Rdados + personagem1.Poder
            let powerResult2 = Rdados2 + personagem2.Poder

            console.log(`${personagem1.Nome} confrontou ${personagem2.Nome} 🤼`);

               await logRollResult(
                personagem1.Nome,
                "poder",
                Rdados,
                personagem1.Poder
            );
        
            await logRollResult(
                personagem2.Nome,
                "poder",
                Rdados2,
                personagem2.Poder
            );
           
            if(powerResult > powerResult2 && personagem1.Pontos > 0){
                console.log(
                    `${personagem1.Nome} Venceu o confronto! ${personagem2.Nome} perdeu 1 ponto`
                );
                 personagem2.Pontos--;
                
            }else if (powerResult2 > powerResult  && personagem2.Pontos > 0){
                console.log(
                    `${personagem2.Nome} Venceu o confronto! ${personagem1.Nome} perdeu 1 ponto`
                );
                 personagem1.Pontos--;

            }else if (powerResult2 === powerResult){
                console.log("Empate! Ninguem perdeu pontos...")
            }
        }

        //verificando o vencedor
        if(totalTestSkill > totalTestSkill2){
            console.log(`${personagem1.Nome} Marcou ponto!🥳`);
            personagem1.Pontos++; 
        }else if(totalTestSkill2 > totalTestSkill){
            console.log(`${personagem2.Nome} Marcou ponto!🥳`);
            personagem2.Pontos++;   
        }
        console.log("--------------------------");
    } 
}

async function vencedor(personagem1, personagem2) {
    console.log("Resultado final:");
    console.log(`${personagem1.Nome} : ${personagem1.Pontos} ponto(s)`);
    console.log(`${personagem2.Nome} : ${personagem2.Pontos} ponto(s)`);
    if (personagem1.Pontos > personagem2.Pontos) {
        console.log(`\n${personagem1.Nome} Venceu!!🥳`);
    }else if (personagem2.Pontos > personagem1.Pontos){
        console.log(`\n${personagem2.Nome} Venceu!!🥳`);    
    }else{
        console.log("Deu empate!");
    }
    
}
//uma função auto invocada, ou seja, não preciso chama-lá "main();"
(async function main() {
    console.log(`🏁 A corrida entre ${jogador1.Nome} e ${jogador2.Nome} está começando...\n`);
    //await é para a função esperar a primeira função executar para executar a outra
    //encadeamento de funções.
    await motoPrincipal(jogador1,jogador2);
    await vencedor(jogador1,jogador2)
})();
