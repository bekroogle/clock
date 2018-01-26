const handHolder = document.querySelector('#hand-holder');
const face = document.querySelector('#clockface');
const margin = 14;
/**
 * Moves the hand of the clock, using radians, such that it makes a full
 * circle in 24 hours.
 */
let moveHand = () => {
    let dateTime = new Date();
    let hours = dateTime.getHours(), 
        minutes = dateTime.getMinutes(),
        seconds = dateTime.getSeconds();

    let rotateAmount = (hours * Math.PI / 12); // π÷12 => 2π÷24
    rotateAmount += minutes * Math.PI / 720;

    // There's really no reason to do this. It's not really visible:
    rotateAmount += seconds * Math.PI / 43200;

    handHolder.style.setProperty('transform', `rotate(${rotateAmount}rad)`);
};

/**
 * Determines the maximum available height and width, then sets the clock's 
 * diameter based on the smaller of the two.
 */
let maximizeClock = () => {
    var availHeight =  window.innerHeight - margin;
    var availWidth =  window.innerWidth - margin;
    availSpace = availWidth < availHeight ? availWidth : availHeight;
    face.style.setProperty('width', `${availSpace}px`);
    face.style.setProperty('height', `${availSpace}px`);
};

window.onload = function(e) {
    maximizeClock();
};

window.addEventListener('resize', function(evt) {
    maximizeClock();
});

setInterval(moveHand, 1000);