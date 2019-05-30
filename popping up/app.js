const scrollAppear = () => {
    let introText = document.getElementById('intro-text')
    let introPosition = introText.getBoundingClientRect().top
    let screenPosition = window.innerHeight 

    if(introPosition < screenPosition){
        introText.classList.add('intro-appear')
    } else {
        console.log('wtf is going on')
    }
}

window.addEventListener('scroll', scrollAppear)


