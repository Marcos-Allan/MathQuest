// VARIAVAEIS GLOBAIS
let question = document.querySelector('#question')
let answer = document.querySelector('#answers')

function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }

function newPergunt(){
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
        answer.appendChild(divErred1)
        answer.appendChild(divErred2)
    }else if(pos == 2){
        answer.appendChild(divErred1)
        answer.appendChild(divCorrect)
        answer.appendChild(divErred2)
    }else{
        answer.appendChild(divErred1)
        answer.appendChild(divErred2)
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
        el.target.style.backgroundColor = '#7cf255'
        console.log('acertou miseravi')
        setTimeout(() => {
            answer.innerHTML = ''
            newPergunt()
        }, 3000);
    }else{
        el.target.style.backgroundColor = '#ed3434'
        console.log('errou miseravi')
        setTimeout(() => {
            el.target.style.backgroundColor = 'transparent'
        }, 3000);
    }
}