import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyA0Cw8YkRekwek0F8cbArv50vMWQnJP6Iw';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.onSearchBarChange('Australia');
    }
    onSearchBarChange(term){
        YTSearch({
            "key": API_KEY,
            "term": term
        }, function(data) {
            this.setState({videos: data, selectedVideo: data[0]});
        }.bind(this));
    }
    render() {
        console.log("rendered : ");
        return (
            <div>
                <SearchBar onSearchBarChange={(term) => this.onSearchBarChange(term)}/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.querySelector('.container'));
