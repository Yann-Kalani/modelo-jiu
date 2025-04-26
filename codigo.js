function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector ('div#res')
    if  ( fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados preenchidos e tente novamente!')
    }
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML = `Sua idade para a CBJJ é de: ${idade} anos `
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
            if (idade >=0 && idade <=17) { 
                img.setAttribute('src','baby.png')
            }    
            else if (idade <=29) {
                img.setAttribute('src','mica.png')
            } 
            else if (idade <=100) {
                img.setAttribute('src','Helio-Gracie jiu.png')
            }
            else {
                window.alert ('Você está fazendo hora extra na Terra')
            }
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade <=17) {
            img.setAttribute('src','baby.png')
        }
        else if (idade <=29) {
            img.setAttribute('src','sara_galvao_round.png')
        }
        else if (idade <=100){
            img.setAttribute('src','senhora_jiu.png')
        }
        else {
            window.alert('Você está fazendo hora extra na Terra')
        }
    }
    res.appendChild(img)
}


