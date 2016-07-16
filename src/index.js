// Imports
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Youtube API Key
const YTAPI_KEY = "YOUR_YOUTUBE_API_KEY_HERE";

// Create a new component. This component should produce some HTML.
// const App = function() { Below is identical to this statement
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('peaceful music');
	}

	videoSearch(searchTerm) {
		// Can also do this: (if parameter is same name as key)
		// this.setState({videos});
		// A.K.A this.setState({videos: videos});
		YTSearch({key: YTAPI_KEY, term: searchTerm}, (data) => {
			this.setState({
				videos: data,
				selectedVideo: data[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 500);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo}) } videos={this.state.videos} />
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)
// App is a class. <App/> is an instance of the class.
ReactDOM.render(<App/>, document.querySelector('.container'));
