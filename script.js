let lock = ''
let hiddenElements = document.getElementById('data')
let outputText = document.getElementById('output')
let unlock = ''

function encrypt() {
  let inputText = document.getElementById('text')
  if (inputText.value == 0) {
    alert('Insira uma palavra ou frase!')
  } else {
    for (let i = 0; i < inputText.value.length; i++) {
      if (inputText.value[i] === 'e') {
        lock += 'enter'
      } else if (inputText.value[i] === 'i') {
        lock += 'imes'
      } else if (inputText.value[i] === 'a') {
        lock += 'ai'
      } else if (inputText.value[i] === 'o') {
        lock += 'ober'
      } else if (inputText.value[i] === 'u') {
        lock += 'ufat'
      } else {
        lock += inputText.value[i]
      }
    }

    inputText.classList.add('hidden')
    let mensagem = document.getElementById('message')
    mensagem.innerHTML = 'Texto encriptografado com sucesso!'
    hiddenElements.classList.add('hidden')
    outputText.innerHTML = 'A mensagem criptografada é: ' + lock
    showButton()
    return lock
  }
}

function decrypt() {
  let inputText = document.getElementById('text')
  if (inputText.value == 0) {
    alert('Insira uma palavra ou frase!')
  } else {
    if (inputText.value != '') {
      unlock = inputText.value.replace(/enter/g, 'e') //`A palavra "enter" é convertida para "e"`
      unlock = unlock.replace(/imes/g, 'i') //`A palavra "imes" é convertida para "i"`
      unlock = unlock.replace(/ai/g, 'a') //`A palavra "ai" é convertida para "a"`
      unlock = unlock.replace(/ober/g, 'o') //`A palavra "ober" é convertida para "o"`
      unlock = unlock.replace(/ufat/g, 'u') //`A palavra "ufat" é convertida para "u"`
    }

    inputText.classList.add('hidden')
    let mensagem = document.getElementById('message')
    mensagem.innerHTML = 'Texto descriptografado com sucesso!'
    hiddenElements.classList.add('hidden')
    outputText.innerHTML = 'A mensagem descriptografada é: ' + unlock
    showButton()
  }
}

function showButton() {
  let showButton = document.getElementById('showElement')

  showButton.classList.remove('hidden')
}


