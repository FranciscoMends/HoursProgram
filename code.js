function carregar(){
    var text = window.document.getElementById('msg')
    var pic = window.document.getElementById('imagem1')
    var date = new Date()
    var hours = date.getHours()
    //var hours = 12
    text.innerHTML = `<strong>Agora são ${hours} horas!</strong>`
    if (hours >= 0 && hours < 12){
        pic.srs = 'manha.png'
        document.body.style.background = '#65b5ff'
    } else if (hours >= 12 && hours < 18){
        pic.src = 'tarde.png'
        document.body.style.background = '#e4ab3d'
    } else{
        pic.src = 'noite.png'
        document.body.style.background = '#aba79e'
    }
}
