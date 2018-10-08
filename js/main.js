var board = new Array();
var score = 0;
var oneStep = new Array();//避免一次移动加两次

$(function (){
    newgame();
});

function newgame (){
    //游戏界面初始化
    init();
    //生成两个随机数字
    generateNumber();
    generateNumber();
}

function init (){
    for(var i=0;i<4;i++){
        //定义二维数组
        board[i] = new Array();
        oneStep[i] = new Array();
        for(var j=0;j<4;j++){
            board[i][j] = 0;
            oneStep[i][j] = false;
            //匹配每个小格子
            var gridCell = $("#grid-cell-"+i+'-'+j);
            gridCell.css('top',getTop(i,j)+'px');
            gridCell.css('left',getLeft(i,j)+'px');
        }
    }
    updateBoardView();
    $('#score').text(0);
}

function restartgame (){
    $('#gameover').remove();
    updateScore(0);
    newgame();
}

function updateBoardView (){
    //首先清空之前的数字格子内容
    $(".number-cell").remove();
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            //向棋盘格上覆盖数字格子
            $("#container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>");
            var numberCell = $("#number-cell-"+i+"-"+j);
            //如果值为0，数字格宽高为0
            if(board[i][j]===0){
                numberCell.css('width','0px');
                numberCell.css('height','0px');
                numberCell.css('top',getTop(i,j)+50);
                numberCell.css('left',getLeft(i,j)+50);
            }else{
                numberCell.css('width','100px');
                numberCell.css('height','100px');
                numberCell.css('top',getTop(i,j));
                numberCell.css('left',getLeft(i,j));
                numberCell.css('background-color',getNumberBackgroundColor(board[i][j]));
                numberCell.css('color',getNumberColor(board[i][j]));
                numberCell.text(board[i][j]);
            }
            oneStep[i][j] = false;
        }
    }
}

//生成一个随机位置的随机数字
function generateNumber (){
    //生成随机的位置
    var randX = parseInt(Math.floor(Math.random()*4));
    var randY = parseInt(Math.floor(Math.random()*4));
    while (true){
        if(board[randX][randY]===0){
            break;
        }
        var randX = parseInt(Math.floor(Math.random()*4));
        var randY = parseInt(Math.floor(Math.random()*4));
    }
    //生成随机的数字
    var randNumber = Math.random() < 0.5 ? 2 : 4;
    //在位置上显示数字
    board[randX][randY] = randNumber;
    showNumberWithAnimation(randX,randY,randNumber);
}