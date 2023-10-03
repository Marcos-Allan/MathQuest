// VARIAVAEIS GLOBAIS
let question = document.querySelector('#question')
let answer = document.querySelector('#answers')
let pontos = 0
let seconds = 0
let minutes = 0
let hours = 0
let placar = document.querySelector('.plc')
let tempo = document.querySelector('.timerText')

function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

const setTimer = setInterval(function() {
    seconds++
    
    tempo.innerText = `${hours}h: ${minutes}m: ${seconds}s`
    if(hours == 0){
        tempo.innerText = `${minutes}m:${seconds}s`
    }
    if(minutes == 0){
        tempo.innerText = `${seconds}s`
    }

    if(seconds >= 59){
        seconds = 0
        minutes++
    }else if(minutes >= 59){
        seconds = 0
        minutes = 0
        hours++
    }
}, 1000);

function newPergunt(){
    placar.innerText = `placar: ${pontos}`
    question.innerText = `${Math.floor(Math.random() * 1000)} + ${Math.floor(Math.random() * 1000)}`
    
    const questCorrect = eval(question.innerText)
    const divCorrect = document.createElement('section')
    const divErred1 = document.createElement('section')
    const divErred2 = document.createElement('section')

    
    divErred1.innerText = questCorrect + Math.floor(Math.random() * 10) + 1
    
    
    divErred2.innerText = questCorrect - Math.floor(Math.random() * 50) + 1
    
    divCorrect.innerText = questCorrect
    
    let pos = randomNumber(1, 3)

    if(pos == 1){
        answer.appendChild(divCorrect)
        divErred1.style.borderTop = 'none'
        answer.appendChild(divErred1)
        divErred2.style.borderTop = 'none'
        answer.appendChild(divErred2)
    }else if(pos == 2){
        answer.appendChild(divErred1)
        divCorrect.style.borderTop = 'none'
        answer.appendChild(divCorrect)
        divErred2.style.borderTop = 'none'
        answer.appendChild(divErred2)
    }else{
        answer.appendChild(divErred1)
        divErred2.style.borderTop = 'none'
        answer.appendChild(divErred2)
        divCorrect.style.borderTop = 'none'
        answer.appendChild(divCorrect)
    }
    
    divCorrect.classList.add('option')
    divErred1.classList.add('option')
    divErred2.classList.add('option')

    // SISTEMA DE INTERAÇÃO DAS RESPOSTAS
    let options = [...document.querySelectorAll('.option')]
    
    options.map((opt) => {
        opt.addEventListener('click', adivinhar)
    })
    
}

newPergunt()

window.addEventListener('keydown', (e) => {
    let options = [...document.querySelectorAll('.option')]
    // SE A TECLA PRESSIONADA FOR 1 TESTA A 1 OPÇÃO
    if(e.key == '1'){
        if(eval(question.innerText) == options[0].innerText){
            options[0].style.backgroundColor = '#91f549'
            pontos++
            setTimeout(() => {
                answer.innerHTML = ''
                newPergunt()
            }, 600);
        }else{
            options[0].style.backgroundColor = '#fa756e'
            setTimeout(() => {
                options[0].style.backgroundColor = 'transparent'
            }, 600);
        }
    }
    // SE A TECLA PRESSIONADA FOR 2 TESTA A 2 OPÇÃO
    if(e.key == '2'){
        if(eval(question.innerText) == options[1].innerText){
            options[1].style.backgroundColor = '#91f549'
            pontos++
            setTimeout(() => {
                answer.innerHTML = ''
                newPergunt()
            }, 600);
        }else{
            options[1].style.backgroundColor = '#fa756e'
            setTimeout(() => {
                options[1].style.backgroundColor = 'transparent'
            }, 600);
        }
    }
    // SE A TECLA PRESSIONADA FOR 1 TESTA A 1 OPÇÃO
    if(e.key == '3'){
        if(eval(question.innerText) == options[2].innerText){
            options[2].style.backgroundColor = '#91f549'
            pontos++
            setTimeout(() => {
                answer.innerHTML = ''
                newPergunt()
            }, 600);
        }else{
            options[2].style.backgroundColor = '#fa756e'
            setTimeout(() => {
                options[2].style.backgroundColor = 'transparent'
            }, 600);
        }
    }
})

function adivinhar(el){
    if(eval(question.innerText) == el.target.innerText){
        el.target.style.backgroundColor = '#91f549'
        pontos++
        setTimeout(() => {
            answer.innerHTML = ''
            newPergunt()
        }, 600);
    }else{
        el.target.style.backgroundColor = '#fa756e'
        setTimeout(() => {
            el.target.style.backgroundColor = 'transparent'
        }, 600);
    }
}