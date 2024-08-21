const beginnings = [
    "You will soon",
    "In the near future",
    "Expect to",
    "Soon, you will",
    "Prepare to"
];

const middles = [
    "find great success",
    "encounter a mysterious stranger",
    "receive unexpected news",
    "achieve your dreams",
    "face a challenging situation"
];

const endings = [
    "if you stay positive.",
    "so be prepared.",
    "and trust your instincts.",
    "with the help of a friend.",
    "but beware of distractions."
];

function generateFortune() {
    const beginning = beginnings[Math.floor(Math.random() * beginnings.length)];
    const middle = middles[Math.floor(Math.random() * middles.length)];
    const ending = endings[Math.floor(Math.random() * endings.length)];

    return `${beginning} ${middle} ${ending}`;
}

document.getElementById('generateBtn').addEventListener('click', () => {
    const fortune = generateFortune();
    document.getElementById('fortuneOutput').textContent = fortune;
});

//console.log(generateFortune());