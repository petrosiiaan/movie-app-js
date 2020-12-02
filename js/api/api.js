const API_KEY = '0c5f2b907bc8f17ef35da2a9100cdeee'
const url = "https://api.themoviedb.org/3"
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
// const IMAGE_URL_ORG = "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"

const routes = {
    movieSearch: () => {
        return '/search/movie?' + 'api_key=' + API_KEY
    },
}