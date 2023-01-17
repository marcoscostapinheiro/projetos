var vez = 'X'
var sort = Math.floor(Math.random() * 2 + 1)
var jogadas = [
    '', '', '',
    '', '', '',
    '', '', ''
]
var comb = [
    '0 1 2',
    '3 4 5',
    '6 7 8',
    '0 3 6',
    '1 4 7',
    '2 5 8',
    '0 4 8',
    '2 4 6'
]

if(sort == 0){
    vez = 'X'
}
if(sort == 1){
    vez = 'O'
}

document.getElementById('player').innerText += ` ${vez}`

function insert(c){
    var campo = document.getElementById(c).innerText
    if(vez == 'X' && campo == false){
        document.getElementById(c).style.color = '#E00D2A'
    }
    if(vez == 'O' && campo == false){
        document.getElementById(c).style.color = '#4860E0'
    }
    if(campo == false){
        jogadas[c] += vez
        document.getElementById(c).innerText += vez
        if(vez == 'X'){
            vez = 'O'
            document.getElementById('player').innerText = `Vez de ${vez}`
        }
        else{
            vez = 'X'
            document.getElementById('player').innerText = `Vez de ${vez}`
        }
    }
    victory()
}

function victory(){
    
}












