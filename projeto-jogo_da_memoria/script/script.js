var interface = document.getElementById('interface')

var characters = ['morty',
    'rick',
    'summer',
    'jerry',
    'beth',
    'jessica',
    'pessoa-passaro',
    'rick-picles',
]

var firstCard = ''
var secondCard = ''
var combination = 0

var checkGame = () => {
    if(combination === 8){
        combination = 0
        setTimeout(function(){
            window.alert('VOCÊ ENCONTROU TODAS AS COMBINAÇÕES')
        }, 400)
        setTimeout(function(){
            for(item in interface.children){
                interface.children[item].classList.remove('card-reveal')
                interface.children[item].lastChild.classList.remove('disabled-card')
            }
        }, 400)
    }
    
}

var checkCombination = () => {
    var firstCharacter = firstCard.getAttribute('data-character')
    var secondCharacter = secondCard.getAttribute('data-character')

    if(firstCharacter === secondCharacter){
        setTimeout(function(){
            firstCard.lastChild.classList.add('disabled-card')
            secondCard.lastChild.classList.add('disabled-card')
            firstCard = ''
            secondCard = ''
            combination ++
            checkGame()
        }, 300)
    }
    else{
        setTimeout(function(){
            firstCard.classList.remove('card-reveal')
            secondCard.classList.remove('card-reveal')
            firstCard = ''
            secondCard = ''
        }, 500)
    }
}

var revealCard = ( {target} ) => {
    if(target.parentNode.className.includes('card-reveal')){
        return
    }
    
    if(firstCard === ''){
        target.parentNode.classList.add('card-reveal')
        firstCard = target.parentNode
    }
    else if(secondCard === ''){
        target.parentNode.classList.add('card-reveal')
        secondCard = target.parentNode
        checkCombination()
    }
}

var temporarilyReveal = () => {
    for(c = 0; c < 16; c++){
        interface.children[c].classList.add('card-reveal')
    }
    setTimeout(function(){
        for(c = 0; c < 16; c++){
            interface.children[c].classList.remove('card-reveal')
        }
    }, 1500)
}

var createElement = (tag, className) => {
    var element = document.createElement(tag)
    element.className = className
    return element
}

var createCard = () => {
    for(item in characters){
        var card = createElement('div', 'card')
        var front = createElement('div', 'face front')
        var back = createElement('div', 'face back')

        card.appendChild(back)
        card.appendChild(front)
        interface.appendChild(card)
        card.setAttribute('data-character', characters[item])

        front.style.background =  `white url(imagens/${characters[item]}.jpg) center`
        front.style.backgroundSize = 'cover'

        card.addEventListener('click', revealCard)
        
    }
}

var duplicateArray = () => {
    for(item in characters){
        characters.push(characters[item])
    }
}

var shuffledArray = () => {
    characters.sort(()=> Math.random() - 0.5)
}

var loadGame = () => {
    duplicateArray()
    shuffledArray()
    createCard()
    temporarilyReveal()
}

loadGame()
