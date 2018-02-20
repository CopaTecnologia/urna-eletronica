
const Q = selector => document.querySelector(selector);
const $ = selector => document.querySelectorAll(selector);
const _ = iterable => Array.prototype.slice.call(iterable) || [];

const FIREBASE_AUTH = firebase.auth();
const FIREBASE_DATABASE = firebase.database();

const display = (function(what) {
    const root = Q(what);
    const position  = root.querySelector('.display-position');
    const number    = root.querySelector('.display-number');
    const img       = root.querySelector('.display-img');
    const blank_img = img.src;
    const name      = root.querySelector('.display-name');
    const party     = root.querySelector('.display-party');
    const body      = root.querySelector('.display-body');
    const footer    = root.querySelector('.display-footer');
    const limit     = 2;
    return {
        insert: num => {
            if (isNaN(num) || num < 0) return false;
            if (number.textContent.length >= limit) return false;
            number.textContent += num;
            if (number.textContent.length === limit) findCandidate(number.textContent.trim());
        },
        clear: () => {
            number.textContent = '';
            img.src = blank_img;
            name.textContent = '';
            party.textContent = '';
            body.setAttribute('hidden', true);
            footer.setAttribute('hidden', true);
        },
        confirm: () => {
            console.log('verde para confirmar');
        },
        blank: () => {
            console.log('branco para votar em branco');
        }
    }
})('.display');

_($('.panel button')).forEach(btn => btn.addEventListener('click', function() {
    panelAction[this.dataset.click].call(this);
}));

const panelAction = {
    digitar:   function() {display.insert(this.textContent.trim())},
    branco:    function() {display.blank()},
    corrigir:  function() {display.clear()},
    confirmar: function() {display.confirm()}
};

function findCandidate(num) {
    console.log('Procurar candidato', num);
}
