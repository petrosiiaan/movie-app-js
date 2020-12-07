searchInput.addEventListener('keydown', () => {
    const value = searchInput.value
    const newUrl = url + routes.movieSearch()+"&query=" + value
    request()
    request("GET", newUrl)
        .then((data) => {
            console.log(data)
            movies.innerHTML = ""
            const DATA = data.results
            get(DATA)
           
        })
    .catch((e) => console.log(e))  
})


function movieInfo() {
    moviesInfo.style.display = 'block'
    image.style.width = 100 + "%" 
}


function get(data) {
     for(let i = 0; i < data.length; i++) {
        if(data[i].poster_path) {
            let img = document.createElement('img')
            img.classList.add('film-img')
            img.src = IMAGE_URL + data[i].poster_path
            img.setAttribute('data-movie-id', data[i].id)
            let imageDiv = document.createElement('div')
            imageDiv.appendChild(img)
            movies.appendChild(imageDiv)
            imageDiv.classList.add('image-div')
            let textDiv = document.createElement('div')
            let imgText = document.createElement('h4')
            imgText.classList.add('img-text')
            if(data[i].release_date) {
                imgText.textContent = data[i].original_title + `(${data[i].release_date})`
            }
            else {
                imgText.textContent = data[i].original_title
            }
            textDiv.appendChild(imgText)
            imageDiv.appendChild(textDiv)
            noMovies.style.display = 'none'

            imageDiv.onclick = () => {
            let photoUrl = IMAGE_URL + data[i].backdrop_path
            let profilePhoto = IMAGE_URL + data[i].poster_path
            image.src = profilePhoto
            moviesInfoBack.style.backgroundImage = `url(${photoUrl})`
            par.textContent = data[i].overview
            if(!data[i].overview) {
                par.textContent = "lorem ipsum dolor ha inch heto inch"
            }
            if(!data[i].backdrop_path) {
                moviesInfoBack.style.backgroundImage = `url('https://previews.123rf.com/images/loopall/loopall1702/loopall170200007/72321698-online-cinema-art-movie-watching-with-popcorn-and-film-strip-cinematograph-concept-vintage-retro-col.jpg')`
            }
            movieInfo()
            }

            getActorsDiv()
            moviesInfo.style.display = 'none'
        }
    }
}



function getActorsDiv() {
    document.onclick = (e) => {
    const target = e.target
    if(target.className === 'film-img') {
        let movieId = target.dataset.movieId
        request("GET", routes.actorsUrl(movieId))
            .then(data => {
            const actorData = data.cast
            getActors(actorData)
        })
        request("GET", routes.getVideos(movieId))
        .then(response => {
            let data = response.results
            videos(data)
        })
        .catch((e) => console.log(e))
        console.log(routes.getVideos(movieId))
    }
}
}




function getActors(actors) {
    actorsDiv.innerHTML = ""
    for(let i = 0; i < actors.length; i++) {
        if(actors[i].profile_path && actors[i].name) {
            let actorsImg = document.createElement('img')
            actorsImg.src = IMAGE_URL + actors[i].profile_path
            actorsImg.style.width = 200 + 'px'
            actorsImg.style.marginRight = 40 + "px"

            actorsDiv.appendChild(actorsImg)
        }
    }
}