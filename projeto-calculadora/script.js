function insert(num){
    var tela = document.getElementById('tela').innerText
    var last = tela.slice(-2)
    var comb = [
        '//',
        '/*',
        '/-',
        '/+',
        '/.',
        '**',
        '*/',
        '*-',
        '*+',
        '*.',
        '--',
        '-/',
        '-*',
        '-+',
        '-.',
        '++',
        '+/',
        '+*',
        '+-',
        '+.',
        '..',
        './',
        '.*',
        '.-',
        '.+'
    ]

    if(tela == false && num == '/'){
        window.alert('Digite um número primeiro')
    }

    for(var pos in comb){
        if(comb[pos] == last){
            window.alert('Não pode utilizar dois operadores juntos')
            num = ''
            document.getElementById('tela').innerText = tela.substring(0, tela.length - 1)
        }
    }

    document.getElementById('tela').innerText += num

    
}

function clean(){
    document.getElementById('tela').innerText = ''
}

function back(){
    var tela = document.getElementById('tela').innerText
    document.getElementById('tela').innerText = tela.substring(0, tela.length - 1) 
}

function calc(){
    var tela = document.getElementById('tela').innerText
    if(tela){
        document.getElementById('tela').innerText = eval(tela)
    }
    else{
        window.alert('Digite algum valor')
    }
}