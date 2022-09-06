const randomNumbers = [
    { number: 1},
    { number: 2},
];

function getRandomNumber() {
    setTimeout(() => {
        let output = '';
        randomNumbers.forEach((number, index) => {
            output += `<li>${randomNumbers.number}</li>`;
        });
        document.body.innerHTML = output;
    }, 500);
}

function createRandomNumber(number, callback) {
    setTimeout(() => {
        randomNumbers.push(number);
        callback();
    }, 2000);
}

createRandomNumber({number: 3}, getRandomNumber);