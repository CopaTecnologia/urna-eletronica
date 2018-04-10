import {ballot} from './ballot';

// const FIREBASE_AUTH = firebase.auth();
// const FIREBASE_DATABASE = firebase.database();

ballot.start([{
        position: 'Deputado Estadual',
        limit: 5
    },
    {
        position: 'Deputado Federal',
        limit: 5
    },
    {
        position: 'Presidente',
        limit: 2
    }
]);

const panelAction = {
    digitar: function () {
        findCandidate(ballot.insert(this.textContent.trim()))
    },
    branco: function () {
        ballot.blank()
    },
    corrigir: function () {
        ballot.clear()
    },
    confirmar: function () {
        console.log(ballot.confirm())
    }
};

Array.prototype.forEach.call(
    document.querySelectorAll('.panel button'),
    btn => btn.addEventListener('click', function () {
        panelAction[this.dataset.click].call(this);
    })
);

function findCandidate(num) {
    if (!num) return;
    ballot.display.set({img:'', name: '', party: ''});
    console.log('looking for ' + num);
}