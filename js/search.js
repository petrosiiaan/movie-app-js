let form = document.getElementById('form')
let searchInput = document.querySelector('#searchInput')
let movies = document.querySelector('.movies')
let noMovies = document.querySelector('.no_movies')
let moviesInfo = document.querySelector('.movies-info')
let moviesInfoBack = document.querySelector('.movies-info-background')
let infoPhoto = document.querySelector('.movies-info-photo')
let par = document.getElementById('par')
let image = document.getElementById('image')
let actorsDiv = document.querySelector('.actors')
let border = document.querySelector('.border')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = searchInput.value
    const newUrl = url + routes.movieSearch()+"&query=" + value
    function request(method, url) {
        return new Promise((resolve, reject) => {
            let xmlReq = new XMLHttpRequest;
            xmlReq.onreadystatechange = () => {
                if(xmlReq.readyState === 4 && xmlReq.status === 200) {
                    resolve(JSON.parse(xmlReq.responseText))
                }
            }

            xmlReq.onerror = () => {
                reject(xmlReq.responseText)
            }

            xmlReq.onprogress = (e) => {
                console.log(e.loaded + "/" + e.total)
                let percent = (e.loaded / e.total) * 100 + "%"
                border.style.width = percent
            }

            if(method === "GET") {
                xmlReq.open(method, url)
                xmlReq.send()
            }
        })
    }
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
                    searchInput.value = ""
                    
                    let photoUrl = IMAGE_URL + data.results[i].backdrop_path
                    let profilePhoto = IMAGE_URL + data.results[i].poster_path

                    imageDiv.onclick = () => {
                        moviesInfo.style.display = 'block'
                        moviesInfoBack.style.backgroundImage = `url(${photoUrl})`
                        image.src = profilePhoto
                        image.style.width = 100 + "%"
                        par.textContent = data.results[i].overview

                        if(!data.results[i].backdrop_path) {
                            moviesInfoBack.style.backgroundImage = `url('https://previews.123rf.com/images/loopall/loopall1702/loopall170200007/72321698-online-cinema-art-movie-watching-with-popcorn-and-film-strip-cinematograph-concept-vintage-retro-col.jpg')`
                        }

                        let creditId = data.results[i].id
                        const actorUrl = url + `/movie/${creditId}/credits?` +  `api_key=${API_KEY}`

                        request("GET", actorUrl)
                            .then((res) => {
                                actorsDiv.innerHTML = ""
                                for(let i = 0; i < res.cast.length; i++) {
                                    if(res.cast[i].profile_path && res.cast[i].name) {
                                    console.log(res.cast[i])
                                    let actors = document.createElement('div')
                                    actors.classList.add('actors-content')

                                    let actorsImg = document.createElement('img')
                                    actorsImg.src = IMAGE_URL + res.cast[i].profile_path

                                    let actorNames = document.createElement('h4')

                                    actorNames.textContent = res.cast[i].name

                                    actors.appendChild(actorsImg)
                                    actors.appendChild(actorNames)
                                    actorsDiv.appendChild(actors)
                                }
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
