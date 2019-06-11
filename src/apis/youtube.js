import axios from 'axios'

const KEY = "AIzaSyB1kRkHGDec2JTsAAxyNRtBVHj4vr2INP4"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})