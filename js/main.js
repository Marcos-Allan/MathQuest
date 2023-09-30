// VARIAVAEIS GLOBAIS
let question = document.querySelector('#question')
let answer = document.querySelector('#answers')

function newPergunt(){
    question.innerText = `${Math.floor(Math.random() * 1000)} + ${Math.floor(Math.random() * 1000)}`
    
    const questCorrect = eval(question.innerText)
    const divCorrect = document.createElement('section')
    const divErred1 = document.createElement('section')
    const divErred2 = document.createElement('section')

    
    divErred1.innerText = Math.floor(Math.random() * 1000)
    divErred2.innerText = Math.floor(Math.random() * 1000)
    divCorrect.innerText = questCorrect
    
    answer.appendChild(divCorrect)
    answer.appendChild(divErred1)
    answer.appendChild(divErred2)
    
    divCorrect.classList.add('option')
    divErred1.classList.add('option')
    divErred2.classList.add('option')

    // SISTEMA DE INTERAÇÃO DAS RESPOSTAS
    let options = [...document.querySelectorAll('.option')]

    options.map((opt) => {
        opt.addEventListener('click', () => {
            if(eval(question.innerText) == opt.innerText){
                console.log('acertou miseravi')
                answer.innerHTML = ''
                newPergunt()
            }else{
                console.log('errou miseravi')
            }
        })
    })
}
newPergunt()