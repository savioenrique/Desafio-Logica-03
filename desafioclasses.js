// Definir classe do Heroi
class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }

    atacar() {
        let ataque;

        switch (this.classe) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
             case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou laminas';
                break;
            default:
                ataque = 'atacou';
        }

        console.log(`O ${this.classe} atacou ${ataque}`);
    }
}

// Criando as classes de cada Heroi e chamando cada herói para atacar
const heroi1 = new Heroi('Neymar', 28, 'guerreiro');
heroi1.atacar();
const heroi2 = new Heroi('Romero', 25, 'mago');
heroi2.atacar();
const heroi3 = new Heroi('Yuri Alberto', 20, 'monge');
heroi3.atacar();
const heroi4 = new Heroi('Reinato Augusto', 50, 'ninja');
heroi4.atacar();
