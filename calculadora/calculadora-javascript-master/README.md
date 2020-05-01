# Exercício de JavaScript

Para treinar o JavaScript de vocês, vamos desenvolver uma calculadora em JavaScript.

## Como Fazer

No repositório clonado de vocês, haverá um arquivo *Calculadora.html* com o laout da calculadora já pronto. Vocês devem desenvolver os scripts de vocês e incluir nesse arquivo para fazer a calculadora funcionar, seguindo os requisitos listados abaixo.

Quando estiverem prontos para testar, inclua os scripts que vocês produziram no arquivo *SpecRunner.html* para testar. Não esqueça de adicionar os arquivos novos no git antes de entregar.

A entrega será aceita APENAS por git.

## Requisitos da calculadora

Os seguintes requisitos devem ser levados em consideração para a calculadora:

 * Os números ao serem clicados devem aparecer no campo de id *resultado*.
 * As operações também devem adicionar o símbolo no campo de resultado.
 * *NÃO* pode ser incluído uma operação se não houver nenhum número ou se já houver alguma operação no resultado.
 * O ponto é utilizado para números decimais.
 * Ao clicar no igual (=), o resultado da operação deve substituir a expressão no campo resultado.
 * Se houver apenas um número no campo, o botão igual não faz nada (mantém o número).
 * Se houver o primeiro número e a operação, sem o segundo número, o botão igual deve colocar uma mensagem de erro no resultado: _Erro de operação_.
 * O ponto (.) só pode ser adicionado uma vez por número.

## Informações adicionais

Como os scripts precisarão do DOM carregado, não esqueçam de usar a palavra chave _defer_.

Strings no JavaScript são como vetores, podemos acessar letra a letra pelo seu índice.

Algumas funções podem ser interessantes para o exercício (pesquisem!):
 * isNaN(): diz se uma expressão é um número ou não.
 * parseInt(): transforma uma String em inteiro.
 * parseFloat(): transforma uma String em um decimal.
 * substring(): devolve parte de uma String, baseado no índice passado.