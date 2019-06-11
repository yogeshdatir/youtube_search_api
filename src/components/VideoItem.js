import './videoitem.css'

import React from 'react'

const VideoItem = ( {video, onVideoSelect} ) => {
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)} key={video.id.videoId}>
            <img className="ui image" src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
            
        </div>
    )
}

export default VideoItem