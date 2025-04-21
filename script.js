const array1 = ['Stylish', 'Smart', 'Confident', 'Fashionable']
const stylishEle = document.getElementById('stylish')

let wordIndex = 0

function typeWord(word, onComplete) {
    let charIndex = 0
    stylishEle.innerText = ''

    const typing = setInterval(() => {
      if (charIndex < word.length) {
        stylishEle.innerText += word[charIndex]
        charIndex++
      } else {
        clearInterval(typing)
        setTimeout(() => onComplete(), 1500)
      }
    }, 100)
  }

  function deleteWord(word, onComplete) {
    let charIndex = word.length

    const deleting = setInterval(() => {
      if (charIndex > 0) {
        stylishEle.innerText = word.slice(0, charIndex - 1)
        charIndex--
      } else {
        clearInterval(deleting)
        setTimeout(() => onComplete(), 300)
      }
    }, 80)
  }

  function loopTyping() {
    const word = array1[wordIndex];
    typeWord(word, () => {
      deleteWord(word, () => {
        wordIndex = (wordIndex + 1) % array1.length
        loopTyping()
      });
    });
  }

  loopTyping()

  const img = document.getElementById("hover_img");

  img.addEventListener("mouseover", () => {
    img.src = "./images/playstore2.png"
  });
  
  img.addEventListener("mouseout", () => {
    img.src = "./images/black_playstore_icon.png"
  });
