import {
    ballot
} from './ballot';
import Candy from './Candy';

// const FIREBASE_AUTH = firebase.auth();
// const FIREBASE_DATABASE = firebase.database();

/**
 * TODO: Carregar lista de eleições {título, descrição, passos[{position, limit, candies[]}]}
 * TODO: Carregar lista de salas [{nome, turma, período}]
 * TODO: Instanciar turnos da eleição [ano]
 * TODO: Listar resultados
 */

const ballot_steps = [{
        position: 'Deputado Estadual',
        limit: 5,
        candies: [
            new Candy('11111', 'Felipe Neto', 'PG', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5hnJmF3GpbYq2nlLjgQzt8LVL2Ed1m4fq4tktKumc4PItNeRHQ'),
            new Candy('22222', 'Alexandre Ottoni', 'PJN', 'https://vignette.wikia.nocookie.net/jovem-nerd/images/3/33/Alexandre_Ottoni.jpg/revision/latest?cb=20130210162554&path-prefix=pt-br'),
            new Candy('33333', 'Deive Pazos', 'PO', 'https://skoob.s3.amazonaws.com/autores/15228/15228SK1449878482G.jpg'),
            new Candy('44444', 'Felipe Castanhari', 'PNos', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBqEhIW8IEvDqu-sKxw3HPzlSwf1VSCoy4BLU_GAieFQQLn2s')
        ]
    },
    {
        position: 'Deputado Federal',
        limit: 5,
        candies: [
            new Candy('11111', 'Silas Malafaia', 'PG', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GS7ipQfYgzU797Hu0eOiNn-yvMStP2t5h3U3Eqo3ldUNhVG2'),
            new Candy('22222', 'Yago Martins', 'PTeo', 'https://img.fstatic.com/J2-SVAOJj-NS7336X76iGe-WyDg=/195x289/smart/https://cdn.fstatic.com/media/artists/avatar/2014/03/yago-martins_a343683.jpg'),
            new Candy('33333', 'Kauê Moura', 'PIJAMA', 'https://vignette.wikia.nocookie.net/youtubestars/images/c/ca/Cau%C3%AA_Moura.png/revision/latest?cb=20130501150941&path-prefix=pt-br'),
            new Candy('44444', 'Pirula', 'PSc', 'https://pbs.twimg.com/media/Cmdt6ukWEAQo0xR.jpg')
        ]
    },
    {
        position: 'Presidente',
        limit: 2,
        candies: [
            new Candy('11', 'Rodrigo Bibo de Aquino', 'PTeo', 'http://cursos.bibotalk.com/wp-content/uploads/2017/04/bibo_1-e1491317883951.jpg'),
            new Candy('22', 'Marcos Castro', 'P do NPR', 'https://s1.vagalume.com/marcos-castro/images/profile-bigw314.jpg'),
            new Candy('33', 'Rogerinho do Ingá', 'PC de C', 'https://dg31sz3gwrwan.cloudfront.net/actor/329292/427317_medium-optimized-2.jpg'),
            new Candy('44', 'Érico Borgo', 'PO', 'https://conteudo.imguol.com.br/c/entretenimento/46/2015/11/17/erico-borgo---omelete-ccxp-2015-1447785701187_300x420.jpg')
        ]
    }
];

if (ballot.display.root) ballot.start(ballot_steps);

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