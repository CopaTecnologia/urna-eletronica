export default class Display {

    constructor(what) {
        const root = this.root = document.querySelector(what);
        this.position = root.querySelector('.display-position');
        this.number = root.querySelector('.display-number');
        this.img = root.querySelector('.display-img');
        this.blank_img = this.img.src;
        this.name = root.querySelector('.display-name');
        this.party = root.querySelector('.display-party');
        this.body = root.querySelector('.display-body');
        this.footer = root.querySelector('.display-footer');
    }

    setNumber(n) {
        this.number.textContent = n.trim();
    }

    setPosition(p) {
        this.position.textContent = p.trim();
    }

    set(candy) {
        this.img.src = candy.img || this.blank_img;
        this.name.textContent = candy.name.trim();
        this.party.textContent = candy.party.trim();
        this.body.removeAttribute('hidden');
        this.footer.removeAttribute('hidden');
        if (candy.isBlank) this.root.classList.add('blank');
    }

    setBlank() {
        this.set({
            img: '',
            name: 'VOTO EM BRANCO',
            party: '',
            isBlank: true
        });
    }

    clear() {
        this.img.src = this.blank_img;
        this.name.textContent = '';
        this.party.textContent = '';
        this.body.setAttribute('hidden', true);
        this.footer.setAttribute('hidden', true);
        this.root.classList.remove('blank');
    }

}