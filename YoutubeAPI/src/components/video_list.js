import React from 'react';
import VideoListItem from './video_list_item';

class VideoList extends React.Component {
    constructor(){
        super();

    }
    render(){
        let ListItem = this.props.videos.map(function(video){
            return <VideoListItem
                onVideoSelect={this.props.onVideoSelect}
                key={video.etag}
                video={video}
                />
        }.bind(this));
        return (
            <ul className="video-list col-md-8">
                {ListItem}
            </ul>
        );
    }
}

export default VideoList;
