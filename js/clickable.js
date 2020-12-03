let videoImg = document.querySelectorAll('.video-img')
let iframes = document.querySelectorAll('iframe')

let modal = document.createElement('div')

let iframesSrc = {
    iframeSrc1: "https://www.youtube.com/embed/qT_-ISKI8FM",
    iframeSrc2: "https://www.youtube.com/embed/vN12KY7eR8U",
    iframeSrc3: "https://www.youtube.com/embed/OlnwgS-gk8Y"
}

for(let i = 0; i < videoImg.length; i++) {
    videoImg[0].addEventListener('click', () => {
        modal.classList.add('modal')
        document.body.appendChild(modal)
        iframes[0].style.display = 'block'
        iframes[0].src = iframesSrc.iframeSrc1

    })
    videoImg[1].addEventListener('click', () => {
        modal.classList.add('modal')
        document.body.appendChild(modal)
        iframes[0].style.display = 'none'
        iframes[1].style.display = 'block'
        iframes[1].src = iframesSrc.iframeSrc2

    })
    videoImg[2].addEventListener('click', () => {
        modal.classList.add('modal')
        document.body.appendChild(modal)
        iframes[0].style.display = 'none'
        iframes[1].style.display = 'none'
        iframes[2].style.display = 'block'
        iframes[2].src = iframesSrc.iframeSrc3
    })

}

modal.addEventListener('click', () => {
    modal.remove()
    for(let i = 0; i < iframes.length; i++ ) {
        iframes[i].src = ''
        iframes[i].style.display = 'none'
    }
})



