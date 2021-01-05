
function f1() {
    return 'apple.jpg';
}
function f2() { return 'banana.jpg'; }
function f3() { return 'cantaloupe.jpg'; }
function f4() { return 'durian.jpg'; }
function f5() { return 'elderberry.jpg'; }
function f6() { return 'fig.jpg'; }
function f7() { return 'grape.jpg'; }
function f8() { return 'huckleberry.jpg'; }
function f9() { return 2545434685676; }
function f10() { return 'jackfruit.jpg'; }
function f11() { return 'kiwi.jpg'; }
function f12() { return 'lime.jpg'; }

function getUserChoice(){
    let num= Math.floor(Math.random() * 19)+1;
    if (num>12) {
        return 9
    } else {
        return num
    };
}

export {getUserChoice,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12}