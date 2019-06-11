import React from 'react'

import youtube from '../apis/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'

export default class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onSearchBarSearch('buildings')
    }

    onSearchBarSearch = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '15px'}}>
                <SearchBar onSubmit={this.onSearchBarSearch} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}