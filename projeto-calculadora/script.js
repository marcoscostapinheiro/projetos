function insert(num){
    var tela = document.getElementById('tela').innerText
    var last = tela.slice(-1)
    var op = [
        '/',
        '*',
        '-',
        '+',
        '.'
    ]

    function verTela(){
        for(var pos in op){
            if(tela.length == 0 && num == op[pos]){
                num = ''
                window.alert('Adicione um número primeiro')
            }
        }
    }

    function opsIguais(){
        for(var pos in op){
            for(var pos2 in op){
                if(num == op[pos] && last == op[pos2]){
                    window.alert('Não pode utilizar dois operadores juntos')
                    num = ''
                }
            }
        }
    }

    

    if(verTela()){
        
    }

    if(opsIguais()){
        
    }

    else{
        document.getElementById('tela').innerText += num
    }
    
    

    
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