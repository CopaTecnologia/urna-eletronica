import {ballot} from './ballot';
import Candy from './Candy';

// const FIREBASE_AUTH = firebase.auth();
// const FIREBASE_DATABASE = firebase.database();

const ballot_steps = [{
        position: 'Deputado Estadual',
        limit: 5,
        candies: [
            new Candy('11111', 'Felipe Neto', 'PG'),
            new Candy('22222', 'Alexandre Ottoni', 'PJN'),
            new Candy('33333', 'Deive Pazos', 'PO'),
            new Candy('44444', 'Felipe Castanhari', 'PNos')
        ]
    },
    {
        position: 'Deputado Federal',
        limit: 5,
        candies: [
            new Candy('11111', 'Silas Malafaia', 'PG'),
            new Candy('22222', 'Yago Martins', 'PTeo'),
            new Candy('33333', 'Kauê Moura', 'PIJAMA'),
            new Candy('44444', 'Pirula', 'PSc')
        ]
    },
    {
        position: 'Presidente',
        limit: 2,
        candies: [
            new Candy('11', 'Rodrigo Bibo de Aquino', 'PTeo'),
            new Candy('22', 'Marcos Castro', 'P do NPR'),
            new Candy('33', 'Rogerinho do Ingá', 'PC de C'),
            new Candy('44', 'Érico Borgo', 'PO')
        ]
    }
];

ballot.start(ballot_steps);

const panelAction = {
    digitar: function () {
        ballot.insert(this.textContent.trim())
    },
    branco: function () {
        ballot.blank()
    },
    corrigir: function () {
        ballot.clear()
    },
    confirmar: function () {
        const votes = ballot.confirm();
        votes && sendBallot(votes);
    }
};

Array.prototype.forEach.call(
    document.querySelectorAll('.panel button'),
    btn => btn.addEventListener('click', function () {
        panelAction[this.dataset.click].call(this);
    })
);

function sendBallot(votes) {
    console.log('Enviando votos');

    const results = votes.map(v => {
        const {
            position,
            candies,
            vote
        } = v;
        const candy = !vote ?
            Candy.blankCandy() :
            candies.filter(c => c.number === vote)[0] ||
            Candy.nullCandy();
        const {
            name,
            party
        } = candy;
        return {
            position,
            vote,
            name,
            party
        };
    });

    console.table(results);
}