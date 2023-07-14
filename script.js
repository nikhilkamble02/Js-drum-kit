window.addEventListener('keydown', playsound)

function playsound(e) {

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) {
        return;
    }
    audio.play()
    audio.currentTime = 0
    key.classList.add('playing')
    document.body.classList.add('bg')

    // console.log(key);
    // console.log(e.keyCode)

}


//removing animation after clicking

let keys = document.querySelectorAll(".key");
keys.forEach(function (key) {
    key.addEventListener('transitionend', function removeTransition(e) {

        if (e.propertyName !== 'transform') return;
        key.classList.remove('playing')
        document.body.classList.remove('bg')



    })
})
