var interface = document.getElementById('interface')

var characters = [
    'morty',
    'rick',
    'summer',
    'jerry',
    'beth',
    'jessica',
    'pessoa-passaro',
    'rick-picles'
]

var createElement = (tag, className) => {
    var element = document.createElement(tag)
    element.className = className
    return element
}

var createCard = () => {
    for(var c = 0; c < 2; c++){
        for(item in shuffledArray = characters.sort(() => Math.random() -0.5)){
            var card = createElement('div', 'card')
            var front = createElement('div', 'face front')
            var back = createElement('div', 'face back')
    
            card.appendChild(back)
            card.appendChild(front)
            interface.appendChild(card)
    
            front.style.background =  `white url(imagens/${characters[item]}.jpg) center`
            front.style.backgroundSize = 'cover'
        }
    }
}

var loadGame = () => {
    createCard()
}

loadGame()
