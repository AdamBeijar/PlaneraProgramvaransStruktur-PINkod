let yourPIN = []
const rightPIN = [1,2,3,4]
let i = 0;
function addPIN(key){
    yourPIN[i] = key
    i++;
    document.getElementById("green").style.backgroundColor = "#32A60D";
    document.getElementById("red").style.backgroundColor = "#A51818";
    console.log("yourPIN = " + yourPIN);
    document.querySelector('#input').textContent = yourPIN.join('')
    if (yourPIN.length == rightPIN.length) {
        if (JSON.stringify(yourPIN)==JSON.stringify(rightPIN)) {
            document.getElementById("green").style.backgroundColor = "#4EFF16";
            yourPIN = []
            i = 0;
        } else {
            document.getElementById("red").style.backgroundColor = "#FF2525";
            yourPIN = []
            i = 0;
        }
    }
}
