function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + " - Passei na promisse em " + tempo + " miliseg.");
        }, tempo);
    });
}

// Promisse.all Promisse.race Promisse.resolve Promisse.reject

const promisses = [
    // 'Primeiro valor',
    esperaAi("Promisse 1", 3000),
    esperaAi("Promisse 2", 500),
    esperaAi("Promisse 3", 1000),
    // esperaAi(1000, 1000),
    // 'Outro valor'
];

Promise.all(promisses)
    .then(valor => console.log(valor))
    .catch(err => console.log(err));

Promise.race(promisses)
    .then(valor => console.log(valor))
    .catch(err => console.log(err));

function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Página em cache');
    }

    return esperaAi('Baixei a página', 3000);
}

baixaPagina()
    .then(valor => console.log(valor))
    .catch(err => console.log(err));
