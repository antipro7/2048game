function getTop(i,j){
    return 20 + i*120;
} 

function getLeft(i,j){
    return 20 + j*120;
}

function getNumberBackgroundColor (number){
    switch(number){
        case 2: return "#eee4da"; break;
        case 4: return "#ede0c8"; break;
        case 8: return "#f2b179"; break;
        case 16: return "#f59563"; break;
        case 32: return "#f67c5f"; break;
        case 64: return "#f65e3b"; break;
        case 128: return "#edcf72"; break;
        case 256: return "#edcc61"; break;
        case 512: return "#9c0"; break;
        case 1024: return "#33b5e5"; break;
        case 2048: return "#09c"; break;
        case 4096: return "#a6c"; break;
    }
}

function getNumberColor (number){
    if(number <= 4){
        return "#776e65";
    }
    return "white";
}

function nospace (board){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j] ===0){
                return false;
            }
        }
    }
    return true;
}

function nomove (board){
    if(canMoveDown(board) || canMoveLeft(board) || canMoveRight(board) || canMoveUp(board)){
        return false;
    }
    return true;
}

//判断能否左移
function canMoveLeft (board){
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(board[i][j] != 0){
                //当前数字格的左边第一个值为0或者当前数字格与左边某数字格数字相同且中间无数值
                if(board[i][j-1] === 0 || board[i][j-1] === board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}
//判断能否上移
function canMoveUp (board){
    for(var i=1;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j] != 0){
                //当前数字格的上边第一个值为0或者当前数字格与上边某数字格数字相同且中间无数值
                if(board[i-1][j] === 0 || board[i-1][j] === board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}
//判断能否右移
function canMoveRight (board){
    for(var i=0;i<4;i++){
        for(var j=2;j>=0;j--){
            if(board[i][j] != 0){
                //当前数字格的右边第一个值为0或者当前数字格与右边某数字格数字相同且中间无数值
                if(board[i][j+1] === 0 || board[i][j+1] === board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}
//判断能否下移
function canMoveDown (board){
    for(var i=2;i>=0;i--){
        for(var j=0;j<4;j++){
            if(board[i][j] != 0){
                //当前数字格的下边第一个值为0或者当前数字格与下边某数字格数字相同且中间无数值
                if(board[i+1][j] === 0 || board[i+1][j] === board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

//向左移动时，判断中间没有数值
function noBlockHorizontalLeft (i,k,j,board){
    for(var a=k+1;a<j;a++){
        if(board[i][a] != 0){
            return false;
        }
    }
    return true;
}
//向上移动时，判断中间没有数值
function noBlockHorizontalUp (i,k,j,board){
    for(var a=k+1;a<i;a++){
        if(board[a][j] != 0){
            return false;
        }
    }
    return true;
}
//向右移动时，判断中间没有数值
function noBlockHorizontalRight (i,k,j,board){
    for(var a=k-1;a>j;a--){
        if(board[i][a] != 0){
            return false;
        }
    }
    return true;
}
//向下移动时，判断中间没有数值
function noBlockHorizontalDown (i,k,j,board){
    for(var a=k-1;a>i;a--){
        if(board[a][j] != 0){
            return false;
        }
    }
    return true;
}

