let counter = 1;
let flag = 0;
let tic = [0, 0, 0];
for (let x = 0; x < 3; x++) {
    tic[x] = [0, 0, 0];
}

let arr = {row1: {i: 0, j: 0}, row2: {i: 0, j: 1}, row3: {i: 0, j: 2}, row4: {i: 1, j: 0}, 
row5: {i: 1, j: 1}, row6: {i: 1, j: 2}, row7: {i: 2, j: 0}, row8: {i: 2, j: 1}, row9: {i: 2, j: 2}
};

function play (temp) {
    let p = temp.id;
    if (counter % 2 != 0 && temp.innerHTML == "") {
        temp.innerHTML = "X";
        tic[arr[p].i][arr[p].j] = 1;
        counter++;
    } else if (counter % 2 == 0 && temp.innerHTML == "") {
        temp.innerHTML = "O";
        tic[arr[p].i][arr[p].j] = 2;
        counter++;
    }

    let end = winner(tic);
    if (end != undefined) {
        if (flag == 0) {
            let product = document.getElementById("h1tag");
            product.innerHTML = end;
            flag = 1;
            let t;
            for (let s = 1; s <= 9; s++) {
                t = "row" + s;
                document.getElementById(t).onclick = "";
            }
        }
    }
}

function winner (tac) {
    //horizontal
    let countx = 0, counto = 0;
    let win = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tac[i][j] == 1) {
                countx++;
                if (counto > 0) {
                    counto = 0;
                    break;
                }
            } else if (tac[i][j] == 2) {
                counto++;
                if (countx > 0) {
                    countx = 0;
                    break;
                }
            }
        }
        if (countx == 3) {
            win = 1;
            break;
        } else if (counto == 3) {
            win = 2;
            break;
        }
        countx = 0;
        counto = 0;
    }
    if (win != 0) {
        if (win == 1) {
            return "Player X has won!";
        } else if (win == 2) {
            return "Player O has won!";
        }
    }

    //vertical
    countx = 0, counto = 0;
    win = 0;
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            if (tac[i][j] == 1) {
                countx++;
                if (counto > 0) {
                    counto = 0;
                    break;
                }
            } else if (tac[i][j] == 2) {
                counto++;
                if (countx > 0) {
                    countx = 0;
                    break;
                }
            }
        }
        if (countx == 3) {
            win = 1;
            break;
        } else if (counto == 3) {
            win = 2;
            break;
        }
        countx = 0;
        counto = 0;
    }
    if (win != 0) {
        if (win == 1) {
            return "Player X has won!";
        } else if (win == 2) {
            return "Player O has won!";
        }
    }

    //forward diagonal
    countx = 0, counto = 0;
    win = 0;
    for (let i = 0, j = 0; i < 3 && j < 3; i++, j++) {
        if (tac[i][j] == 1) {
            countx++;
            if (counto > 0) {
                counto = 0;
                break;
            }
        } else if (tac[i][j] == 2) {
            counto++;
            if (countx > 0) {
                countx = 0;
                break;
            }
        }
    }
    if (countx == 3) {
        win = 1;
    } else if (counto == 3) {
        win = 2;
    }
    countx = 0;
    counto = 0;
    if (win != 0) {
        if (win == 1) {
            return "Player X has won!";
        } else if (win == 2) {
            return "Player O has won!";
        }
    }

    //backward diagonal
    countx = 0, counto = 0;
    win = 0;
    for (let i = 0, j = 2; i < 3 && j >= 0; i++, j--) {
        if (tac[i][j] == 1) {
            countx++;
            if (counto > 0) {
                counto = 0;
                break;
            }
        } else if (tac[i][j] == 2) {
            counto++;
            if (countx > 0) {
                countx = 0;
                break;
            }
        }
    }
    if (countx == 3) {
        win = 1;
    } else if (counto == 3) {
        win = 2;
    }
    countx = 0;
    counto = 0;
    if (win != 0) {
        if (win == 1) {
            return "Player X has won!";
        } else if (win == 2) {
            return "Player O has won!";
        }
    } else {
        if (counter > 9) {
            return "Kuch nahi aata tumhe nalle";
        }
    }
}