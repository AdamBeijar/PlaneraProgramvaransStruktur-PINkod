let yourPIN = []
const rightPIN = [1,2,3,4]
let i = 0;
function addPIN(key){
    yourPIN[i] = key
    i++;
    console.log("yourPIN = " + yourPIN);
}
function correctPIN(){
    document.querySelector('#input').textContent = yourPIN.join('')
    if (yourPIN.length == rightPIN.length) {
        if (JSON.stringify(yourPIN)==JSON.stringify(rightPIN)) {
            console.log("rätt");
        } else {
            console.log("fel kod");
        }
    } else {
        console.log("för lång");
    }
    yourPIN = []
    i = 0;
}