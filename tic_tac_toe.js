function change(turn){

    var t;    
    if (turn === 'X')
        t = 'O'
    else
        t = 'X'

    var p1 = document.querySelector("#player_turn");
    p1.textContent = `Player ${t}\'s turn`;
    
    return t
}


function initialise(){
    console.log('game started');
    document.getElementById('start').style.pointerEvents = 'none';
    var v1 = document.querySelector("#b1");
    var v2 = document.querySelector("#b2");
    var v3 = document.querySelector("#b3");
    var v4 = document.querySelector("#b4");
    var v5 = document.querySelector("#b5");
    var v6 = document.querySelector("#b6");
    var v7 = document.querySelector("#b7");
    var v8 = document.querySelector("#b8");
    var v9 = document.querySelector("#b9");

    var turn = 'X';

    var p1 = document.querySelector("#player_turn");
    p1.textContent = `Player ${turn}\'s turn`;

    //---------------1---------------------
    v1.addEventListener("click",function(){
        if (v1.textContent === '')
        {
            v1.textContent = `${turn}`;
            console.log(`v1 ${v1.textContent}`);
            turn = change(turn);
            Won()
        }
    })

    //---------------2---------------------
    v2.addEventListener("click",function(){
        if (v2.textContent === '')
        {
            v2.textContent = `${turn}`;
            console.log(`v2 ${v2.textContent}`);
            turn = change(turn);
            Won()
        }
    })

    //---------------3---------------------
    v3.addEventListener("click",function(){
        if (v3.textContent === '')
        {
            v3.textContent = `${turn}`;
            console.log(`v3 ${v3.textContent}`);
            turn = change(turn);
            Won()
        }
    })

    //---------------4---------------------
    v4.addEventListener("click",function(){
        if (v4.textContent === '')
        {
            v4.textContent = `${turn}`;
            console.log(`v4 ${v4.textContent}`);
            turn = change(turn);
            Won()
        }
    })

    //---------------5---------------------
    v5.addEventListener("click",function(){
        if (v5.textContent === '')
        {
            v5.textContent = `${turn}`;
            console.log(`v5 ${v5.textContent}`);
            turn = change(turn);
            Won()
        }
    })

    //---------------6---------------------
    v6.addEventListener("click",function(){
        if (v6.textContent === '')
        {
            v6.textContent = `${turn}`;
            console.log(`v6 ${v6.textContent}`);
            turn = change(turn);
            Won()
        }
    })

    //---------------7---------------------
    v7.addEventListener("click",function(){
        if (v7.textContent === '')
        {
            v7.textContent = `${turn}`;
            console.log(`v7 ${v7.textContent}`);
            turn = change(turn);
            Won()
        }
    })

    //---------------8---------------------
    v8.addEventListener("click",function(){
        if (v8.textContent === '')
        {
            v8.textContent = `${turn}`;
            console.log(`v8 ${v8.textContent}`);
            turn = change(turn);
            Won()
        }
    })

    //---------------9---------------------
    v9.addEventListener("click",function(){
        if (v9.textContent === '')
        {
            v9.textContent = `${turn}`;
            console.log(`v9 ${v9.textContent}`);
            turn = change(turn);
            Won()
        }
    })

function Won(){
    console.log('called')
    var p1 = document.querySelector("#player_turn");
    if ((v1.textContent === 'X' && v2.textContent === 'X' && v3.textContent === 'X') || 
        (v4.textContent === 'X' && v5.textContent === 'X' && v6.textContent === 'X') ||
        (v7.textContent === 'X' && v8.textContent === 'X' && v9.textContent === 'X') ||
        (v1.textContent === 'X' && v4.textContent === 'X' && v7.textContent === 'X') ||
        (v2.textContent === 'X' && v5.textContent === 'X' && v8.textContent === 'X') ||
        (v3.textContent === 'X' && v6.textContent === 'X' && v9.textContent === 'X') ||
        (v1.textContent === 'X' && v5.textContent === 'X' && v9.textContent === 'X') ||
        (v7.textContent === 'X' && v5.textContent === 'X' && v3.textContent === 'X'))
        {
            document.getElementById('player_turn').style.fontSize = 'x-large';
            p1.textContent = `Player X won!!`;
            document.getElementById('reset').style.pointerEvents = 'none';

        }
    
    else if ((v1.textContent === 'O' && v2.textContent === 'O' && v3.textContent === 'O') || 
             (v4.textContent === 'O' && v5.textContent === 'O' && v6.textContent === 'O') ||
             (v7.textContent === 'O' && v8.textContent === 'O' && v9.textContent === 'O') ||
             (v1.textContent === 'O' && v4.textContent === 'O' && v7.textContent === 'O') ||
             (v2.textContent === 'O' && v5.textContent === 'O' && v8.textContent === 'O') ||
             (v3.textContent === 'O' && v6.textContent === 'O' && v9.textContent === 'O') ||
             (v1.textContent === 'O' && v5.textContent === 'O' && v9.textContent === 'O') ||
             (v7.textContent === 'O' && v5.textContent === 'O' && v3.textContent === 'O'))
        {
            document.getElementById('player_turn').style.fontSize = 'x-large';
            p1.textContent = `Player O won!!`;
            document.getElementById('reset').style.pointerEvents = 'none';
        }
    }

}

function reset(){
    window.location.reload();
}
