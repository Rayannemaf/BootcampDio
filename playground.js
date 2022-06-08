const alunos = [
    {
        nome: 'Rayanne',
        nota: 5,
        turma: '1B',

    },

    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },

    {
        nome: 'Aninha',
        nota: 6,
        turma: '2C',
    },

    {
        nome: 'Pietro',
        nota: 3,
        turma: '2C',
    },

    {
        nome: 'Rael',
        nota: 2,
        turma: '2C',
    },
];


function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){

        const { nota, nome } = arr[i];

        if(arr[i].nota >= media){
            aprovados.push(nome);
        }
    }


    return aprovados;
}