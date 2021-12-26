document.getElementById('logo2').style.display = 'none'
document.getElementById('paraConselho').style.display = 'none'
document.getElementById('editTxt').style.display = 'none'
document.getElementById('Autor').style.display = 'none'
document.getElementById('apontando').style.display = 'none'
document.getElementById('outro').style.display = 'none'

var msg = ''

btnCons.addEventListener('click', function(){
    document.getElementById('logo').style.display = 'none'
    document.getElementById('actImage').style.display = 'none'

    document.getElementById('logo2').style.display = 'block'
    document.getElementById('paraConselho').style.display = 'block'
    document.getElementById('editTxt').style.display = 'block'
    document.getElementById('Autor').style.display = 'block'
    document.getElementById('apontando').style.display = 'block'
    document.getElementById('outro').style.display = 'block'

    pegarImagem()
})

function pegarImagem(){
    fetch('https://api.adviceslip.com/advice')
  .then(response => response.json(), document.getElementById('editTxt').innerHTML = 
  `<progress class="progress is-small is-primary" max="100">15%</progress>`)

  .then(json => { 
        msg = json.slip.advice
        if(msg.length > 55) { reject() }

      document.getElementById('editTxt').innerHTML = `${json.slip.advice}`
    })

   .catch(err => {
        pegarImagem()
   })
}

outro.addEventListener('click', function(){
    pegarImagem()
    let randNum = parseInt(Math.random() * (300 - 200) + 200) //numero randômico entre 200 e 300
    document.getElementById('paraConselho').innerHTML = `<img src="https://picsum.photos/${randNum}/300" alt="" class="cabrinha" id="imgAleatoria">`
})