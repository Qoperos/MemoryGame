const main = document.querySelector('main');

const getData = () => [
    { imgSrc: "./img/G1.png", name: "g1" },
    { imgSrc: "./img/G2.png", name: "g2" },
    { imgSrc: "./img/G3.png", name: "g3" },
    { imgSrc: "./img/G4.png", name: "g4" },
    { imgSrc: "./img/G5.png", name: "g5" },
    { imgSrc: "./img/G6.png", name: "g6" },
    { imgSrc: "./img/G7.png", name: "g7" },
    { imgSrc: "./img/G8.png", name: "g8" },
    { imgSrc: "./img/G1.png", name: "g1" },
    { imgSrc: "./img/G2.png", name: "g2" },
    { imgSrc: "./img/G3.png", name: "g3" },
    { imgSrc: "./img/G4.png", name: "g4" },
    { imgSrc: "./img/G5.png", name: "g5" },
    { imgSrc: "./img/G6.png", name: "g6" },
    { imgSrc: "./img/G7.png", name: "g7" },
    { imgSrc: "./img/G8.png", name: "g8" },
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

//card Generator function

const cardGenerator = () => {
    const cardData = randomize();
     //Generate the html
    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        //Attaching the cards to main section
        face.src = item.imgSrc; 
        card.setAttribute('name', item.name);
        //Attaching the cards to the section
        main.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e => {
            card.classList.toggle('toggleCard');
            checkCards(e);           
        }))
    });    
}
//grading
var scoreCount = 0;
//check check cards
const checkCards = (e) => {
    const clickCard = e.target;
    clickCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');

     //Logic
     if (flippedCards.length == 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
                scoreCount += 12.5;
                document.querySelector('.high-core').innerHTML = "High Score : " + scoreCount;
            });
        } else {
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            })
            scoreCount -= 5;
            document.querySelector('.high-core').innerHTML = "High Score : " + scoreCount;
        } 
    }
}
cardGenerator();

const section = document.querySelector('section');
const theme = document.getElementById('theme');
const lightTheme = document.getElementById('lightTheme');

theme.addEventListener('click', e => {
    section.classList.remove('lightTheme');
    section.classList.add('darkTheme');
    lightTheme.style.display = 'block';
    theme.style.display = 'none';
});
lightTheme.addEventListener('click', e => {
    section.classList.remove('darkTheme');
    section.classList.add('lightTheme');
    theme.style.display = 'block';
    lightTheme.style.display = 'none';
});

const reStart = document.getElementById("rest");
reStart.addEventListener('click', e => {
    location.reload();
})