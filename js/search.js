searchInput.addEventListener('keydown', () => {
    const value = searchInput.value
    const newUrl = url + routes.movieSearch()+"&query=" + value
    request()
    request("GET", newUrl)
        .then((data) => {
            console.log(data)
            movies.innerHTML = ""
            for(let i = 0; i < data.results.length; i++) {
                if(data.results[i].poster_path) {
                    let img = document.createElement('img')
                    img.classList.add('film-img')
                    img.src = IMAGE_URL + data.results[i].poster_path
                    img.setAttribute('data-movie-id', data.results[i].id)
                    let imageDiv = document.createElement('div')
                    imageDiv.appendChild(img)
                    movies.appendChild(imageDiv)
                    imageDiv.classList.add('image-div')
                    let textDiv = document.createElement('div')
                    let imgText = document.createElement('h4')
                    imgText.classList.add('img-text')
                    imgText.textContent = data.results[i].original_title
                    textDiv.appendChild(imgText)
                    imageDiv.appendChild(textDiv)
                    noMovies.style.display = 'none'

                    imageDiv.onclick = () => {
                    let photoUrl = IMAGE_URL + data.results[i].backdrop_path
                    let profilePhoto = IMAGE_URL + data.results[i].poster_path
                    image.src = profilePhoto
                    moviesInfoBack.style.backgroundImage = `url(${photoUrl})`
                    par.textContent = data.results[i].overview
                    if(!data.results[i].overview) {
                        par.textContent = "lorem ipsum dolor ha inch heto inch"
                    }
                    if(!data.results[i].backdrop_path) {
                        moviesInfoBack.style.backgroundImage = `url('https://previews.123rf.com/images/loopall/loopall1702/loopall170200007/72321698-online-cinema-art-movie-watching-with-popcorn-and-film-strip-cinematograph-concept-vintage-retro-col.jpg')`
                    }
                    movieInfo()
                    let creditId = data.results[i].id
                    const actorUrl = url + `/movie/${creditId}/credits?` +  `api_key=${API_KEY}`
                    
                    request("GET", actorUrl)
                        .then((res) => {
                            actorsDiv.innerHTML = ""
                            for(let i = 0; i < res.cast.length; i++) {
                                actors()
                            }
                        })
                        .catch((e) => console.log(e))
                    }
                    moviesInfo.style.display = 'none'
                }
            }
        })
    .catch((e) => console.log(e))  
})


function movieInfo() {
    moviesInfo.style.display = 'block'
    image.style.width = 100 + "%" 
}


