//生成随机数字动画
function showNumberWithAnimation (i,j,randNumber){  
    var numberCell = $("#number-cell-"+i+"-"+j);
    numberCell.css('background-color',getNumberBackgroundColor(randNumber));
    numberCell.css('color',getNumberColor(randNumber));
    numberCell.text(randNumber);
    numberCell.animate({
        width: '100px',
        height: '100px',
        top: getTop(i,j),
        left: getLeft(i,j)
    },50);
}

//移动动画
function showMoveAnimation (fromx,fromy,tox,toy){
    var numberCell = $("#number-cell-"+fromx+"-"+fromy);
    numberCell.animate({
        top: getTop(tox,toy),
        left: getLeft(tox,toy)
    },200);       
}

//改变分数
function updateScore (score){
    $("#score").text(score);
}