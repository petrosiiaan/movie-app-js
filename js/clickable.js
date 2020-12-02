let videoImg = document.querySelectorAll('.video-img')
let iframes = document.getElementsByTagName('iframe')

let iframe = [...iframes]

let videos = [...videoImg]


let modal = document.createElement('div')


let iframeSrc1 = "https://www.youtube.com/embed/qT_-ISKI8FM"
let iframeSrc2 = "https://www.youtube.com/embed/vN12KY7eR8U"
let iframeSrc3 = "https://www.youtube.com/embed/OlnwgS-gk8Y"

for(let i = 0; i < videos.length; i++) {
    videos[0].addEventListener('click', () => {
        modal.classList.add('modal')
        document.body.appendChild(modal)
        iframe[0].style.display = 'block'
        iframe[0].src = iframeSrc1

    })
    videos[1].addEventListener('click', () => {
        modal.classList.add('modal')
        document.body.appendChild(modal)
        iframe[0].style.display = 'none'
        iframe[1].style.display = 'block'
        iframe[1].src = iframeSrc2

    })
    videos[2].addEventListener('click', () => {
        modal.classList.add('modal')
        document.body.appendChild(modal)
        iframe[0].style.display = 'none'
        iframe[1].style.display = 'none'
        iframe[2].style.display = 'block'
        iframe[2].src = iframeSrc3
    })

}

modal.addEventListener('click', () => {
    modal.remove()
    for(let i = 0; i < iframe.length; i++ ) {
        iframe[i].src = ''
    }
})



