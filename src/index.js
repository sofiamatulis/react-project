// Create a new component. This component should produce some HTML
// Take this component's generated HTML and put it on the page (in the DOM).

//  const is declaring a variable that is the final value (constant -- it will never be reassigned)

// babel and webpack translate jsx to vanilla javascript that can be understood by the browser
// jsx is what produces the actual html when you render the component
// can ultimately produce html

// Silent . Code that is declared in other files hasnt access to other files, unless we explicitely say it

// 1 component per file

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyAvC6dKvqNUfAt0pFeo1Jqm78EuZMmSzKw';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
     };
     this.videoSearch('puppy');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
       </div>
    );
  }
}

// instantiate the component, before you pass it to the DOM
// App is a class, <App> is an instance of the class
// target container is where youll render it, the 2nd argument
ReactDOM.render(<App />, document.querySelector('.container'));
