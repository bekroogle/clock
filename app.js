const hand = document.querySelector('#hand');

let moveHand = () => {
    let dateTime = new Date();
    let hours = dateTime.getHours(), 
        minutes = dateTime.getMinutes(),
        seconds = dateTime.getSeconds();

    let rotateAmount = (hours * Math.PI / 12) - Math.PI/2;
    rotateAmount += minutes * Math.PI / 720;
    rotateAmount += seconds * Math.PI / 43200;
    hand.style.setProperty('transform', `rotate(${rotateAmount}rad)`);
};

setInterval(moveHand, 1000);