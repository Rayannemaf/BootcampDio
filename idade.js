function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: 'Rayanne',
    idade: 22,

};

const pessoa2 = {
    nome: 'Anne',
    idade: 16,
    
};

const animal = {
    nome: 'Atila',
    idade: 3,
    raca: 'Pug',
    
}

console.log(calculaIdade.apply(animal, [7]));