let btn1 = document.getElementById('btnA')
let btn2 = document.getElementById('btnB')
let btn3 = document.getElementById('btnC')
let btn4 = document.getElementById('btnD')
let btn5 = document.getElementById('btnE')
let btn6 = document.getElementById('btnF')
let btn7 = document.getElementById('btnG')
let dark = document.getElementById('dark')
let Ho1 = document.querySelector('h1')
let nntop = document.getElementById('nn')
let container1 = document.getElementById('container1')
let btnClose = document.getElementById('close')
let container2 = document.getElementById('container2')
let container3 = document.getElementById('container3')
let container4 = document.getElementById('container4')
let container5 = document.getElementById('container5')
let container6 = document.getElementById('container6')
let container7 = document.getElementById('container7')

window.onscroll = function(){
    if (scrollY >=100) {
    nntop.classList.remove('hide')
    
}
else{
    nntop.classList.add('hide')
}

}

nntop.onclick = function() {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
    
}
btnClose.onclick = function(){

    this.classList.add('hide')
    btn1.classList.remove('hide')
    
    btn2.classList.remove('hide')
    btn3.classList.remove('hide')
    btn4.classList.remove('hide')
    btn5.classList.remove('hide')
    btn6.classList.remove('hide')
    btn7.classList.remove('hide')
    Ho1.classList.remove('hide')
    container1.classList.add('hide')
    container2.classList.add('hide')
    container3.classList.add('hide')
    container4.classList.add('hide')
    container5.classList.add('hide')
    container6.classList.add('hide')
    container7.classList.add('hide')
    
}
btn1.onclick = function(){

    btn2.classList.add('hide')
    btn3.classList.add('hide')
    btn4.classList.add('hide')
    btn5.classList.add('hide')
    btn6.classList.add('hide')
    btn7.classList.add('hide')
    Ho1.classList.add('hide')
    container1.classList.remove('hide')
    btnClose.classList.remove('hide')
}
btn2.onclick =function() {
    btn1.classList.add('hide')
    btn3.classList.add('hide')
    btn4.classList.add('hide')
    btn5.classList.add('hide')
    btn6.classList.add('hide')
    btn7.classList.add('hide')
    Ho1.classList.add('hide')
    container2.classList.remove('hide')
    btnClose.classList.remove('hide')
}
btn3.onclick =function() {
    btn1.classList.add('hide')
    btn2.classList.add('hide')
    btn4.classList.add('hide')
    btn5.classList.add('hide')
    btn6.classList.add('hide')
    btn7.classList.add('hide')
    Ho1.classList.add('hide')
    container3.classList.remove('hide')
    btnClose.classList.remove('hide')
}
btn4.onclick =function() {
    btn1.classList.add('hide')
    btn2.classList.add('hide')
    btn3.classList.add('hide')
    btn5.classList.add('hide')
    btn6.classList.add('hide')
    btn7.classList.add('hide')
    Ho1.classList.add('hide')
    container4.classList.remove('hide')
    btnClose.classList.remove('hide')
}
btn5.onclick =function() {
    btn1.classList.add('hide')
    btn2.classList.add('hide')
    btn3.classList.add('hide')
    btn4.classList.add('hide')
    btn6.classList.add('hide')
    btn7.classList.add('hide')
    Ho1.classList.add('hide')
    container5.classList.remove('hide')
    btnClose.classList.remove('hide')
}
btn6.onclick =function() {
    btn1.classList.add('hide')
    btn2.classList.add('hide')
    btn3.classList.add('hide')
    btn4.classList.add('hide')
    btn5.classList.add('hide')
    btn7.classList.add('hide')
    Ho1.classList.add('hide')
    container6.classList.remove('hide')
    btnClose.classList.remove('hide')
}
btn7.onclick =function() {
    btn1.classList.add('hide')
    btn2.classList.add('hide')
    btn3.classList.add('hide')
    btn4.classList.add('hide')
    btn5.classList.add('hide')
    btn6.classList.add('hide')
    Ho1.classList.add('hide')
    container7.classList.remove('hide')
    btnClose.classList.remove('hide')
} 

dark.onclick =function(){ 
    document.body.classList.toggle('dark')
    btn1.classList.toggle('dark')
    btn2.classList.toggle('dark')
    btn3.classList.toggle('dark')
    btn4.classList.toggle('dark')
    btn5.classList.toggle('dark')
    btn6.classList.toggle('dark')
    btn7.classList.toggle('dark')
    btnClose.classList.toggle('dark')
    Ho1.classList.toggle('dark')
}


