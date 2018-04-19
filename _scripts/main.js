import {
    ballot
} from './ballot';
import Candy from './Candy';

const FIRE_AUTH = window.firebase.auth();

// https://firebase.google.com/docs/firestore/quickstart?authuser=0
const FIRESTORE = window.firebase.firestore();

function getColletion(collName, ref, callback) {
    ref.collection(collName).get().then(snap => {
        snap.forEach(item => {
            const data = item.data();
            data.ref = item.ref;
            data.id = item.id;
            callback(data, item.ref);
        });
    });
}

const ballot_all_data = [];
getColletion('ballots', FIRESTORE, (ballData, ballRef) => {
    ballot_all_data.push(ballData);
    ballData.steps = [];
    getColletion('steps', ballRef, (stepData, stepRef) => {
        stepData.ref = stepRef;
        ballData.steps.push(stepData);
        stepData.candies = [];
        // pausar o aplicativo aqui
        getColletion('candies', stepRef, candyData => {
            // continuar a execução aqui
            stepData.candies.push(candyData);
            (new Image()).src = candyData.img;
        });
        ballot.start(ballot_all_data[0].steps);
    });
});

// https://www.youtube.com/firebase

/**
 * TODO: Carregar lista de eleições {título, descrição, passos[{position, limit, candies[]}]}
 * TODO: Carregar lista de salas [{nome, turma, período}]
 * TODO: Instanciar turnos da eleição [ano]
 * TODO: Listar resultados
 */

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