var vez = 'X'
var iguais = 0
var sort = Math.floor(Math.random() * 2 + 1)
var jogadas = [
    '', '', '',
    '', '', '',
    '', '', ''
]
var cont = 0

if(sort == 0){
    vez = 'X'
}

else{
    vez = 'O'
}

if(vez == 'X'){
    document.getElementById('player').style.color = '#E00D2A'
}

else{
    document.getElementById('player').style.color = '#4860E0'
}

document.getElementById('player').innerText = vez

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
        cont ++
        document.getElementById(c).innerText += vez
        change()
    }

    victory()
    
}

function victory(){
    if(jogadas[0] == 'X' && jogadas[1] == 'X' && jogadas[2] == 'X' || jogadas[3] == 'X' && jogadas[4] == 'X' && jogadas[5] == 'X' || jogadas[6] == 'X' && jogadas[7] == 'X' && jogadas[8] == 'X' || jogadas[0] == 'X' && jogadas[3] == 'X' && jogadas[6] == 'X' || jogadas[1] == 'X' && jogadas[4] == 'X' && jogadas[7] == 'X' || jogadas[2] == 'X' && jogadas[5] == 'X' && jogadas[8] == 'X' || jogadas[0] == 'X' && jogadas[4] == 'X' && jogadas[8] == 'X' || jogadas[2] == 'X' && jogadas[4] == 'X' && jogadas[6] == 'X'){
        setTimeout(function(){
            window.alert('Jogador X venceu')
        }, 100)

        setTimeout(function(){
            for(var pos in jogadas){
                document.getElementById(pos).innerText = ''
            }
        }, 100)

        jogadas = [
            '', '', '',
            '', '', '',
            '', '', ''
        ]
    }

    if(jogadas[0] == 'O' && jogadas[1] == 'O' && jogadas[2] == 'O' || jogadas[3] == 'O' && jogadas[4] == 'O' && jogadas[5] == 'O' || jogadas[6] == 'O' && jogadas[7] == 'O' && jogadas[8] == 'O' || jogadas[0] == 'O' && jogadas[3] == 'O' && jogadas[6] == 'O' || jogadas[1] == 'O' && jogadas[4] == 'O' && jogadas[7] == 'O' || jogadas[2] == 'O' && jogadas[5] == 'O' && jogadas[8] == 'O' || jogadas[0] == 'O' && jogadas[4] == 'O' && jogadas[8] == 'O' || jogadas[2] == 'O' && jogadas[4] == 'O' && jogadas[6] == 'O'){
        setTimeout(function(){
            window.alert('Jogador O venceu')
        }, 100)

        setTimeout(function(){
            for(var pos in jogadas){
                document.getElementById(pos).innerText = ''
            }
        }, 100)

        jogadas = [
            '', '', '',
            '', '', '',
            '', '', ''
        ]
    }

    else if(cont == 9){
        cont = 0
        window.alert('EMPATE')
        setTimeout(function(){
            for(var pos in jogadas){
                document.getElementById(pos).innerText = ''
            }
        }, 100)

        jogadas = [
            '', '', '',
            '', '', '',
            '', '', ''
        ]
    }
}

function change(){
    if(vez == 'X'){
        vez = 'O'
        document.getElementById('player').innerText = vez
        document.getElementById('player').style.color = '#4860E0'
        
    }
    else{
        vez = 'X'
        document.getElementById('player').innerText = vez
        document.getElementById('player').style.color = '#E00D2A'
    }
}















