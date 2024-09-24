let boxes = document.querySelectorAll(".grid_box");
document.querySelector(".bg").style.left = "0";

let turn = "X";
let isGameOver = false;
let xCount = 0;
let oCount = 0;

boxes.forEach(e =>{
    e.innerHTML = ""
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML = turn;
            cheakWin();
            cheakDraw();
            changeTurn();
        }
    })
})

function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
        document.querySelector(".bg").style.backgroundColor = "#dcbf3c";
    }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "0";
        document.querySelector(".bg").style.backgroundColor = "#72cefb";
    }
}

function cheakWin(){
    let win = [
        [0, 1, 2], [3, 4, 5], 
        [6, 7, 8], [0, 3, 6], 
        [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<win.length; i++){

        let v0 = boxes[win[i][0]].innerHTML;
        let v1 = boxes[win[i][1]].innerHTML;
        let v2 = boxes[win[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            document.querySelector(".win_display").innerHTML = turn + " wins !";
            document.querySelector(".win_display").style.color = "white";
            if(turn === "X"){
                xCount += 1;
                document.querySelector(".score_x").innerHTML = xCount;
                for(j = 0; j<3; j++){
                    boxes[win[i][j]].style.backgroundColor = "#72cefb"
                    boxes[win[i][j]].style.color = "white"
                }
            }
            else{
                oCount += 1;
                document.querySelector(".score_o").innerHTML = oCount;
                for(j = 0; j<3; j++){
                    boxes[win[i][j]].style.backgroundColor = "#dcbf3c"
                    boxes[win[i][j]].style.color = "white"
                }
            }

            
        }
    }
}

function cheakDraw(){
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") 
                isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            document.querySelector(".win_display").innerHTML = "Draw";
            document.querySelector(".win_display").style.color = "white";
        }
    }
}


document.querySelector(".play_again").addEventListener("click", ()=>{
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector(".win_display").innerHTML = "";

    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
    })
})