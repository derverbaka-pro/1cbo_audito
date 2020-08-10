$(document).ready(function(){
    var typed = new Typed('.content-tipedtext', {
        strings: ['Бухгалтерский учёт', 'Налоговый учёт','Кадровый учёт'],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
      });
});



//document.querySelector('.i1').oninput = function(){
    //document.querySelector('.out-i1').innerHTML = document.querySelector('.i1').value;
//}
let i1 = document.querySelector('.i1');
let i2 = document.querySelector('.i2');
let outI1 = document.querySelector('.out-i1');


document.querySelector('.i1').oninput = function f1(){
    if (i1.value == 0 && i2.value == 2){
        outI1.innerHTML = '9 700 руб.';
    }else if (i1.value == 1 && i2.value == 2){
        outI1.innerHTML = '7 600 руб.';
    }else if (i1.value == 2 && i2.value == 2){
        outI1.innerHTML = '6 500 руб.';
    }else if (i1.value == 3 && i2.value == 2){
        outI1.innerHTML = '6 000 руб.';
    }else if (i1.value == 4 && i2.value == 2){
        outI1.innerHTML = '6 000 руб.';
    }else if (i1.value == 5 && i2.value == 2){
        outI1.innerHTML = '9 000 руб.';
    }else if (i1.value == 0 && i2.value == 1){
        outI1.innerHTML = '4 200 руб.';
    }else if (i1.value == 1 && i2.value == 1){
        outI1.innerHTML = '3 200 руб.';
    }else if (i1.value == 2 && i2.value == 1){
        outI1.innerHTML = '2 700 руб.';
    }else if (i1.value == 3 && i2.value == 1){
        outI1.innerHTML = '2 300 руб.';
    }else if (i1.value == 4 && i2.value == 1){
        outI1.innerHTML = '2 300 руб.';
    }else if (i1.value == 5 && i2.value == 1){
        outI1.innerHTML = '3 800 руб.';
    }else if (i1.value == 0 && i2.value == 0){
        outI1.innerHTML = '5 200 руб.';
    }else if (i1.value == 1 && i2.value == 0){
        outI1.innerHTML = '4 000 руб.';
    }else if (i1.value == 2 && i2.value == 0){
        outI1.innerHTML = '3 200 руб.';
    }else if (i1.value == 3 && i2.value == 0){
        outI1.innerHTML = '2 700 руб.';
    }else if (i1.value == 4 && i2.value == 0){
        outI1.innerHTML = '2 700 руб.';
    }else if (i1.value == 5 && i2.value == 0){
        outI1.innerHTML = '4 700 руб.';
    }
}

document.querySelector('.i2').oninput = function(){
    if (i2.value == 0 && i1.value == 0){
        outI1.innerHTML = '5 200 руб.';
        document.querySelector('.vids').style = "display: none;";
    }else if(i2.value == 0 && i1.value == 1){
        outI1.innerHTML = '4 000 руб.';
        document.querySelector('.vids').style = "display: none;";
    }else if(i2.value == 0 && i1.value == 2){
        outI1.innerHTML = '3 200 руб.';
        document.querySelector('.vids').style = "display: none;";
    }else if(i2.value == 0 && i1.value == 3){
        outI1.innerHTML = '2 700 руб.';
        document.querySelector('.vids').style = "display: none;";
    }else if(i2.value == 0 && i1.value == 4){
        outI1.innerHTML = '2 700 руб.';
        document.querySelector('.vids').style = "display: none;";
    }else if(i2.value == 0 && i1.value == 5){
        outI1.innerHTML = '4 700 руб.';
        document.querySelector('.vids').style = "display: none;";
    }else if(i2.value == 1 && i1.value == 0){
        outI1.innerHTML = '4 200 руб.';
        document.querySelector('.vids').style = "";
    }else if(i2.value == 1 && i1.value == 1){
        outI1.innerHTML = '3 200 руб.';
        document.querySelector('.vids').style = "";
    }
    else if(i2.value == 1 && i1.value == 2){
        outI1.innerHTML = '2 700 руб.';
        document.querySelector('.vids').style = "";
    }else if(i2.value == 1 && i1.value == 3){
        outI1.innerHTML = '2 300 руб.';
        document.querySelector('.vids').style = "";
    }else if(i2.value == 1 && i1.value == 4){
        outI1.innerHTML = '2 300 руб.';
        document.querySelector('.vids').style = "";
    }else if(i2.value == 1 && i1.value == 5){
        outI1.innerHTML = '3 800 руб.';
        document.querySelector('.vids').style = "";
    }else if(i2.value == 2 && i1.value == 0){
        outI1.innerHTML = '9 700 руб.';
        document.querySelector('.vids').style = "";
    }
    else if(i2.value == 2 && i1.value == 1){
        outI1.innerHTML = '7 600 руб.';
        document.querySelector('.vids').style = "";
    }else if(i2.value == 2 && i1.value == 2){
        outI1.innerHTML = '6 500 руб.';
        document.querySelector('.vids').style = "";
    }else if(i2.value == 2 && i1.value == 3){
        outI1.innerHTML = '6 000 руб.';
        document.querySelector('.vids').style = "";
    }else if(i2.value == 2 && i1.value == 4){
        outI1.innerHTML = '6 000 руб.';
        document.querySelector('.vids').style = "";
    }else if(i2.value == 2 && i1.value == 5){
        outI1.innerHTML = '9 000 руб.';
        document.querySelector('.vids').style = "";
    }
    else{
        document.querySelector('.vids').style = "";
    }
}

let switchDoc = document.querySelector('.outbtn1');
let switchDoc2 = document.querySelector('.outbtn2');
let switchDoc3 = document.querySelector('.outbtn3');
let switchDoc4 = document.querySelector('.outbtn4');


$(function f1 () {
    $('.switch-btn').click(function () {
        $(this).toggleClass('switch-on');
        if ($(this).hasClass('switch-on')) {
            $(this).trigger('on.switch');
        } else {
            $(this).trigger('off.switch');
        }
    });
    $('.switch-btn').on('on.switch', function () {
        switchDoc.innerHTML = 'Доверяю вам';
    });
    $('.switch-btn').on('off.switch', function () {
        switchDoc.innerHTML = 'Сделаю сам';
    });
});

$(function f2 () {
    $('.switch-btn1').click(function h2 () {
        $(this).toggleClass('switch-on1');
        if ($(this).hasClass('switch-on1')) {
            $(this).trigger('on1.switch');
        } else {
            $(this).trigger('off1.switch');
        }
    });
    $('.switch-btn1').on('on1.switch', function () {
        switchDoc2.innerHTML = 'Доверяю вам';
    });
    $('.switch-btn1').on('off1.switch', function () {
        switchDoc2.innerHTML = 'Сделаю сам';
    });
});
$(function f3 () {
    $('.switch-btn2').click(function h3 () {
        $(this).toggleClass('switch-on2');
        if ($(this).hasClass('switch-on2')) {
            $(this).trigger('on2.switch');
        } else {
            $(this).trigger('off2.switch');
        }
    });
    $('.switch-btn2').on('on2.switch', function () {
        switchDoc3.innerHTML = 'Доверяю вам';
    });
    $('.switch-btn2').on('off2.switch', function () {
        switchDoc3.innerHTML = 'Сделаю сам';
    });
});

$(function f4 () {
    $('.switch-btn3').click(function h4 () {
        $(this).toggleClass('switch-on3');
        if ($(this).hasClass('switch-on3')) {
            $(this).trigger('on3.switch');
        } else {
            $(this).trigger('off3.switch');
        }
    });
    $('.switch-btn3').on('on3.switch', function () {
        switchDoc4.innerHTML = 'Доверяю вам';
    });
    $('.switch-btn3').on('off3.switch', function () {
        switchDoc4.innerHTML = 'Сделаю сам';
    });
});


