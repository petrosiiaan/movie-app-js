function actors() {
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