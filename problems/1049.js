// Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.
// Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

// Entrada:
// A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal
// segundo a figura acima, com todas as letras minúsculas.

// Saída:
// Imprima o nome do animal correspondente à entrada fornecida.

function identificarAnimal(lines){
    const [grupo, classificacao, tipo ] = lines;

    const esquemaAnimais = {
        vertebrado: {
            ave: {
                carnivoro: 'aguia',
                onivoro: 'pomba'
            },
            mamifero: {
                onivoro: 'homem',
                herbivoro: 'vaca'
            }
        },
        invertebrado: {
            inseto: {
                hematofago: 'pulga',
                herbivoro: 'lagarta'
            },
            anelideo: {
                hematofago: 'sanguessuga',
                onivoro: 'minhoca'
            }
        }
    }

    const animal = esquemaAnimais[grupo][classificacao][tipo];

    console.log(animal);
}

//exemplo de entrada:
const lines = [
    "invertebrado",
    "anelideo",
    "onivoro"
]

identificarAnimal(lines)