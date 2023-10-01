// VARIAVAEIS GLOBAIS
let question = document.querySelector('#question')
let answer = document.querySelector('#answers')
let pontos = 0
let placar = document.querySelector('.plc')

function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }

function newPergunt(){
    placar.innerText = `placar: ${pontos}`
    question.innerText = `${Math.floor(Math.random() * 1000)} + ${Math.floor(Math.random() * 1000)}`
    
    const questCorrect = eval(question.innerText)
    const divCorrect = document.createElement('section')
    const divErred1 = document.createElement('section')
    const divErred2 = document.createElement('section')

    
    divErred1.innerText = Math.floor(Math.random() * 1000)
    divErred2.innerText = Math.floor(Math.random() * 1000)
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