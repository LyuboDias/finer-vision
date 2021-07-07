import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'AdGBe9cji49FNC0yrPZDREqpnLbStU3n';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "ykvLH7H2fKQE",
    };
  }


  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search({
      q: query,
      rating: 'g',
      limit: 30
    }, (error, result) =>  {
      this.setState({
        gifs: result.data
      });
    });
  }

   selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render () {

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <h1 className="text-center">Your List of Gifs</h1>
          <p className="text-center text-muted">Choose from the list on the right, than click and safe gifs into your list</p>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
