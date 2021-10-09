let table = document.getElementById("table");
let reset = document.getElementById("reset");
let player1 = window.prompt("Enter the name  of player 1","user1");
let player2 = window.prompt("Enter the name of player 2","user2");
let turn = player1;
let box2 = document.getElementById("box2");
let box = document.getElementById("box");
let spinner = document.getElementById("spin");
let needle = document.getElementById("needle");
let center = document.getElementById("center");
function choose(a,b,c,d,e = 1){
switch (e){
    case a:
        e = b;
        break;
    case b:
        e = a;
        break;
    case c:
        e = b;
        break;
    default:
        e = c;
        break;

}
return e;
}
let port;
table.style = `width: ${innerWidth}px; height: ${innerHeight}px;border: 2px solid red;`
if (innerWidth>innerHeight){
    port = innerHeight * 50/100;
}
else {
    if (innerHeight == innerWidth){
        port = innerWidth * 50/100;
    }
    else {
        port = innerWidth * 50/100;
    }
}
center.style = `width: ${port}px;height: ${port}px;border: 2px solid red;position: relative;overflow: hidden;`;
needle.style = `width: ${port/12}px;height: ${port/1.3}px;border: 2px solid red;`;
spinner.addEventListener("click",()=>{
    if (turn==player1){
        turn = player2;
    }
    else {
        turn = player1;
    }
    decison = Math.random() * 10;
    if (decison<=3){
        decison = 1;
    }
    else {
        if (decison <= 6){
            decison = 2;
        }
        else {
            if (decison <=9){
                decison = 3;
            }
            else {
                decison = 4;
            }
        }
    }
    needle.style = `transform: rotate(${(decison * 90) + (360 * decison)}deg);width: ${port/12}px;height: ${port/1.3}px;border: 2px solid red;`;
});
reset.addEventListener("click",()=>{
    decison = 0;
    needle.style = `transform: rotate(${(decison * 90) + (360 * decison)}deg);width: ${port/12}px;height: ${port/1.3}px;border: 2px solid red;`;
});
box.style = `height: ${port/2}px;width: 1000000px;position: absolute;top: 0px;left: 0px;border: 2px solid black;`;
box2.style = `height: 100000px;width: ${port/2}px;position: absolute;top: 0px;left: 0px;border: 2px solid black;`;
