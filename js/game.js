//实现键盘上下左右逻辑
$(document).keydown(function (event){
    switch(event.keyCode){
        case 37://left
            if(moveLeft()){
                setTimeout('generateNumber()',150);//在生成一个随机数字
                //isgameover();//判断游戏是否结束
            }
            break;
        case 38://up
            if(moveUp()){
                setTimeout('generateNumber()',150);//在生成一个随机数字
                //isgameover();//判断游戏是否结束
            }
            break;
        case 39://right
            if(moveRight()){
                setTimeout('generateNumber()',150);//在生成一个随机数字
                //isgameover();//判断游戏是否结束
            }
            break;
        case 40://down
            if(moveDown()){ 
                setTimeout('generateNumber()',150);//在生成一个随机数字
                //isgameover();//判断游戏是否结束
            }
            break;
        default:
            break;
    }
});

function moveLeft (){
    if(!canMoveLeft(board)){
        return false;
    }
    //向左移动逻辑
    //遍历除第一列其他12个数字格
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            //判断有值，向左移动
            if(board[i][j]!=0){
                for(var k=0;k<j;k++){
                    //情形1：左边格子全为空
                    if(board[i][k]===0 && noBlockHorizontalLeft(i,k,j,board)){
                        showMoveAnimation(i,j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j]=0;
                    }
                    //情形2：两个数字相同数字格，且中间无其他数字
                    else if(board[i][k] === board[i][j] && noBlockHorizontalLeft(i,k,j,board) && !oneStep[i][k]){
                        showMoveAnimation(i,j,i,k);
                        board[i][k] += board[i][j];
                        board[i][j]=0;
                        //计算分数
                        score += board[i][k];
                        updateScore(score);
                        oneStep[i][k] = true;
                    }
                }
            }
        }
    }
    setTimeout('updateBoardView()',200);
    return true;
}

function moveUp (){
    if(!canMoveUp(board)){
        return false;
    }
    //向上移动逻辑
    //遍历除第一行其他12个数字格
    for(var i=1;i<4;i++){
        for(var j=0;j<4;j++){
            //判断有值，向上移动
            if(board[i][j]!=0){
                for(var k=0;k<i;k++){
                    //情形1：上边格子全为空
                    if(board[k][j]===0 && noBlockHorizontalUp(i,k,j,board)){
                        showMoveAnimation(i,j,k,j);
                        board[k][j] = board[i][j];
                        board[i][j]=0;
                    }
                    //情形2：两个数字相同数字格，且中间无其他数字
                    else if(board[k][j] === board[i][j] && noBlockHorizontalUp(i,k,j,board) && !oneStep[i][k]){
                        showMoveAnimation(i,j,k,j);
                        board[k][j] += board[i][j];
                        board[i][j]=0;
                        //计算分数
                        score += board[k][j];
                        updateScore(score);
                        oneStep[i][k] = true;
                    }
                }
            }
        }
    }
    setTimeout('updateBoardView()',200);
    return true;
}

function moveRight (){
    if(!canMoveRight(board)){
        return false;
    }
    //向右移动逻辑
    //遍历除第四列其他12个数字格
    for(var i=0;i<4;i++){
        for(var j=2;j>=0;j--){
            //判断有值，向右移动
            if(board[i][j]!=0){
                for(var k=3;k>j;k--){
                    //情形1：右边格子全为空
                    if(board[i][k]===0 && noBlockHorizontalRight(i,k,j,board)){
                        showMoveAnimation(i,j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j]=0;
                    }
                    //情形2：两个数字相同数字格，且中间无其他数字
                    else if(board[i][k] === board[i][j] && noBlockHorizontalRight(i,k,j,board) && !oneStep[i][k]){
                        showMoveAnimation(i,j,i,k);
                        board[i][k] += board[i][j];
                        board[i][j]=0;
                        //计算分数
                        score += board[i][k];
                        updateScore(score);
                        oneStep[i][k] = true;
                    }
                }
            }
        }
    }
    setTimeout('updateBoardView()',200);
    return true;
}

function moveDown (){
    if(!canMoveDown(board)){
        return false;
    }
    //向下移动逻辑
    //遍历除第四列其他12个数字格
    for(var i=2;i>=0;i--){
        for(var j=0;j<4;j++){
            //判断有值，向下移动
            if(board[i][j]!=0){
                for(var k=3;k>i;k--){
                    //情形1：下边格子全为空
                    if(board[k][j]===0 && noBlockHorizontalDown(i,k,j,board)){
                        showMoveAnimation(i,j,k,j);
                        board[k][j] = board[i][j];
                        board[i][j]=0;
                    }
                    //情形2：两个数字相同数字格，且中间无其他数字
                    else if(board[k][j] === board[i][j] && noBlockHorizontalDown(i,k,j,board) && !oneStep[i][k]){
                        showMoveAnimation(i,j,k,j);
                        board[k][j] += board[i][j];
                        board[i][j]=0;
                        //计算分数
                        score += board[k][j];
                        updateScore(score);
                        oneStep[i][k] = true;
                    }
                }
            }
        }
    }
    setTimeout('updateBoardView()',200);
    return true;
}

function isgameover (){
    if(nospace(board) && nomove(board)){
        gameover();
    }
}

function gameover (){
    //alert('asdasd00');
    $('#container').append("<div id='gameover' class='gameover'><p>本次得分为：</p><span>"+score+"</span><a href='javascript:restartgame();' id='restartgame'>别放弃！再来一局</a></div>");
    var gameover = $('#gameover');
    gameover.css('width','500px');
    gameover.css('height','500px');
    gameover.css('border-radius','6px');
    gameover.css('background-color','rgba(0,0,0,.7)');
}