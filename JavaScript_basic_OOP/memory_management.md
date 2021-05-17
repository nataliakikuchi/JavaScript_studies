GERENCIAMENTO DE MEMÓRIA

Ao criarmos um programa em qualquer linguagem de programação precisamos utilizar variáveis para guarda valores durante a execução de nossos programas. Cada uma dessas variáveis é armazenada em um lugar da memória do computador.

Porém, vimos que dependendo dos valores que uma variável guarda o JS trata ela de forma diferente. Passando ela como uma cópia de seu valor ou como uma referência ao espaço de memória onde ela está guardada. Ele faz isso baseado justamente nos valores que a variável guarda. Tipos primitivos são sempre passados como um valor, enquanto que tipos não primitivos sempre são passados por referência.

"Mas o que são tipos primitivos?"

Tipos primitivos são os valores mais simples que a linguagem consegue trabalhar e geralmente são implementados no nível mais baixo da linguagem. Isso significa que eles não são representados como um objeto e por isso não possuem métodos ou atributos.

Um tipo primitivo é simplesmente um valor em sua forma mais simples de representação. Eles também são imutáveis, uma vez declarados seu valor nunca muda.

Em Javascript os tipos primitivos são:

String (texto)
Number (número)
Boolean
Null
undefined
Symbol
Qualquer outro tipo que encontramos em nossas aplicações, como Objetos, Arrays, etc... não são tipos primitivos e por isso o JS trata eles de forma diferente. Variáveis que não são primitivas são mutáveis por natureza e podem conter uma estrutura de dados grande e complexa o que tornaria a operação de cópia desses valores ineficiente.

"Mas se ele não copia, como ele faz?"

Quando criamos um objeto dentro do JS ele reserva um espaço de memória no local que chamamos de Heap, ao fazer isso o que ele guarda na variável que criamos não é o valor do Objeto que criamos e sim o endereço de memória onde os valores estão salvos.

Dessa forma ao passarmos uma variável que "guarda" um objeto para um método dentro do JS o que estamos passando é apenas o endereço de memória que aquela função deve usar para acessar os valores do objeto. Isso torna a operação muito mais eficiente mas causa um problema. Qualquer alteração feita naquele endereço de memória afeta todas as variáveis que referenciam ele.

Como essas variáveis apenas guardam um endereço para o espaço de memória falamos que elas guardam uma referência para onde aquele objeto está guardado e por isso falamos que são um "tipo de referência" enquanto que os primitivos são "um tipo de valor".

Outra referência: https://medium.com/@ethannam/javascripts-memory-model-7c972cd2c239
