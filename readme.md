# Explicação da produção do Exercício If/Else 

A partir do exemplo do código “Variação — desenho cumulativo por quadrante” apresentado no site Hack to Improve no sumário da Aula 3-Código Criativo III, tive a ideia de fazer um site que tanto a cor, como as retas e o círculo se movimentassem e trocassem de cor conforme a posição do cursor. Com isto, quis explorar o uso do If/Else e a posição do rato como ligação ao movimento e à troca de cor.

***COR DOS QUADRANTES***

Comecei por no InDesign, fazer um esboço dos quadrantes usando retângulos, para decidir as cores que ia usar para os respetivos quadrantes.
Já no código, para fazer os 4 quadrantes (com as cores: rosa, amarelo, verde e roxo) precisei de fazer 2 if/elses dentro do if/else principal (ou seja 3 if/elses), e de usar as condições mouseX e mouseY para que o rato controlasse a mudança de cores dos quadrantes, retas e círculo.

*A condição if/else segue a seguinte lógica:*

-Se o rato na linha horizontal (mouseX) estiver à esquerda, é porque o mouseX é menor (<) que a largura a dividir por 2, se não (else) está à direita. (mouseX < width /2)

-Se o rato na linha vertical (mouseY) depois de sabermos se está na direita ou esquerda for menor (<) que a altura dividida por 2 então está em cima senão (else), está em baixo, isto porque o zero começa em cima e não em baixo.
(mouseY < height /2)

(primeiro ele ficará a saber se o mouse está à esquerda ou á direita e só depois passará para a linha do mouseY para saber se está em cima ou em baixo dependendo de que lado esteja).

***LINHAS E CÍRCULO***

Já para as retas e para o círculo, usei a line() e o circle() para fazer uma espécie de teia que se agarra aos cantos da tela e ao círculo que também está agarrado ao cursor.
Nas suas coordenadas usei o mouseY, mouseX, e nas outras duas coordenadas usei o height, width e o /2 para as linhas do meio para dizer onde seriam os cantos da tela onde ficariam posicionadas.
Ou seja, no início das coordenadas das linhas e do círculo o mouseX e mouseY estavam sempre em primeiro porque eram os pontos de começo, para que ficassem presos ao cursor mesmo que ele se movesse.

Também adicionei as mudanças de cor dentro dos 2 if/elses que estão dentro do if/else principal, usando o stroke() para as linhas e o fill() para o círculo.
Aqui a lógica é igual à dos quadrantes, pois se o cursor estiver na esquerda superior, as linhas e círculo ficarão com a cor do quadrante oposto ou seja verde, se estiverem na esquerda inferior, ficarão rosas, se estiverem na direita superior ficarão azuis, caso contrário (direita inferior) ficarão amarelos. Assumindo sempre a cor do quadrante oposto para criar contraste de cores. 

No final temos uma composição colorida que usa a condição if else e o interação do mouseX e mouseY em conjunto para controlar o background, retas e círculo e acaba por criar uma espécie de teia ou até variadas perspectivas com o uso do contraste de cor.

*Referências:*
-Código de referência: Código Criativo III (Desenho cumulativo por quadrantes)- https://hacktoimprove.com/classes/DesignDeInovacao/Sumarios/aula3/#condicionais-if-else
-if/else- https://p5js.org/reference/p5/if/ ; The Coding Train: https://www.youtube.com/watch?v=r2S7j54I68c
-mouseX- https://p5js.org/reference/p5/mouseX/
-mouseY- https://p5js.org/reference/p5/mouseY/
-line()- https://p5js.org/reference/p5/line/
-circle()- https://p5js.org/reference/p5/circle/
-Uso de IA (CLAUDE) para compreensão da lógica das coordenadas. Prompt: Explica-me a lógica da ordem das coordenadas usando o mouseY e mouseX e o /2.