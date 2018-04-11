export default class Candy {
    constructor(number, name, party, img) {
        this.img = img;
        this.name = name;
        this.party = party;
        this.number = number;
    }
    static nullCandy() {
        return new Candy('', 'NÚMERO ERRADO', 'VOTO NULO');
    }
    static blankCandy() {
        return new Candy('', '', 'VOTO EM BRANCO');
    }
}
