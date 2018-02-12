
const S = selector => document.querySelector(selector);
const $ = selector => document.querySelectorAll(selector);
const _ = iterable => Array.prototype.slice.call(iterable) || [];

const FIREBASE_AUTH = firebase.auth();
const FIREBASE_DATABASE = firebase.database();

const display = S('.display');
const buttons = $('.panel button');

_(buttons).forEach(btn => btn.addEventListener('click', function() {
    panelAction[this.dataset.click].call(this);
}));

const panelAction = {
    digitar:   function() {console.log(this.textContent.trim())},
    branco:    function() {console.log('branco para votar em branco')},
    corrigir:  function() {console.log('laranja para corrigir')},
    confirmar: function() {console.log('verde para confirmar')}
};
