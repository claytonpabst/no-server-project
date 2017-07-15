import React, { Component } from 'react';
// import ReactAudioPlayer from 'react-audio-player';
import {Link} from 'react-router-dom'
import MusicPlayer from './../MusicPlayer/MusicPlayer'
import axios from 'axios';

import './Artists.css';





export default class Artists extends Component {
  constructor(props){
    super(props)

  }

  componentDidMount () {
    var test = 'Brad Pitt'
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${ test }&api_key=d4ed0114c75c4e4e961030332aaf000a&limit=5`)
    .then( (response) => {
      console.log(response)
    })
  }


  render() {



    return (
      <div className="">
        {/*<iframe src={ }></iframe>*/}

        <div>
            <Link to='/artistprofile/cleightyp'>Cleighty_P</Link>
            <Link to='/artistprofile/kourtneeg'>Kourtnee G</Link>
            <Link to='/artistprofile/ari'>Ari</Link>
            <Link to='/artistprofile/pinksway'>Pink Sway</Link>
        </div>
          {/*<MusicPlayer />*/}

      </div>
    );
  }
}