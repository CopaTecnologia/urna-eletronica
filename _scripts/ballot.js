import Display from './Display';

const display = new Display('.display');

let number = '';
let votes = [];
let steps = [];
let step = {};
let isBlank = false;

const ballot = {
    insert: num => {
        if (isBlank) return false;
        if (isNaN(num) || num < 0) return false;
        if (number.length >= step.limit) return false;
        setNumber(number + num);
    },
    confirm: () => {
        if (number.length === step.limit || isBlank) {
            step.vote = number || null;
            votes.push(step);
            if (!setStep(step.index + 1)) {
                const results = votes;
                setStep(0);
                restart();
                return results;
            }
        }
    },
    blank: () => {
        isBlank = true;
        if (!number) display.setBlank();
    },
    start: (s) => {
        steps = s;
        setStep(0);
    },
    clear,
    votes,
    display
};

function setNumber(num) {
    number = num;
    display.setNumber(number);
    if (number.length === step.limit) {
        const candy = step.candies.filter(c => c.number === number)[0];
        if (candy) display.set(candy);
        else display.setNull();
    };
}

function clear() {
    isBlank = false;
    setNumber('');
    display.clear();
}

function setStep(i) {
    step = steps[i];
    if (!step) return false;
    step.index = i;
    display.setPosition(step.position);
    clear();
    return step;
}

function restart() {
    votes = [];
    setStep(0);
}

export {ballot};
