# 🏁 Mario Kart.JS — Desafio do Felipão no bootcamp da dio para desenvolvimento mobile
> 🎮 Projeto criado com o objetivo de me ajudar a **relembrar e praticar conceitos essenciais de JavaScript**, como variáveis, objetos, estruturas condicionais, funções assíncronas e simulação de fluxo de jogo.

## 📚 Aprendizados
Durante o desenvolvimento deste projeto, revisei e pratiquei:
-  Declaração e uso de variáveis (`let`, `const`)
-  Manipulação de objetos em JavaScript
-  Funções assíncronas com `async/await`
-  Estruturas de decisão (`if`, `else`, `switch`)
-  Laços de repetição (`for`)
-  Regras de negócio aplicadas a lógica de jogo
---

## 🎮 Regras do Jogo
- Cada personagem tem **três atributos**:
  - **Velocidade**
  - **Manobrabilidade**
  - **Poder**

- A corrida ocorre em **5 rodadas** e a cada rodada é sorteado um tipo de pista:
  - **Reta**: soma do dado + **velocidade**
  - **Curva**: soma do dado + **manobrabilidade**
  - **Confronto**: soma do dado + **poder**

- Em cada rodada:
  - Quem tiver maior valor no tipo de pista, **ganha um ponto**
  - No caso de **Confronto**, quem perder **perde um ponto**
  - Nenhum jogador pode ficar com **pontuação negativa**
  - Ao final das 5 rodadas, **vence quem tiver mais pontos**.

