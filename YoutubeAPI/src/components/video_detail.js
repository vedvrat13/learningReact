import React, {Component} from 'react';

class VideoDetails extends Component {
    render() {
        if(!this.props.video){
            return <div>Loading..</div>
        }
        let video = this.props.video;
        let embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={embedUrl} className="embed-responsive-item"></iframe>
                </div>
                <div className="details">
                    <div>
                        {video.snippet.title}
                    </div>
                    <div>
                        {video.snippet.description}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoDetails;
