function videos(vid) {
    video_container.innerHTML = ""
    for(let i = 0; i < 4; i++) {
        let videoContent = document.createElement('div')
        videoContent.classList.add('video-content')
        let videos = document.createElement('iframe')
        videos.classList.add('videos-iframe')
        videoContent.appendChild(videos)
        videoContent.style.position = 'relative'
        let videoPopUp = document.createElement('div')
        videoPopUp.classList.add('video-pop-up')
        videoContent.appendChild(videoPopUp)
        videos.style.height = "315"
        videos.setAttribute("frameborder", 0)
        let keyVid = vid[i].key
        videos.src = routes.youtubeVid(keyVid)
        video_container.appendChild(videoContent) 


        videoPopUp.onclick = () => {
            let vids = videos; 
            createModal(vids)(videos.src)
            videos.style.position = "fixed"
            videos.style.right = "50%"
            videos.style.left = "37%"
            videos.style.bottom = "41vh"
            videos.style.zIndex = 2
            videos.style.transition = "1s ease"
            videos.setAttribute("width", "500px")
            videos.setAttribute("height", "570px")
        }
    }
}


function createModal(videos) {
    let modal = document.createElement('div')
    modal.classList.add('modal')

    document.body.appendChild(modal)

    return function mod(keyVid){
        modal.onclick = () => {
        modal.style.display = 'none'
        videos.style.position = ""
        videos.src = keyVid
    }
    }
}