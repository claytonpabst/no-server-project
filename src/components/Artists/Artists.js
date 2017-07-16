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
      <div className="mainArtists">
          <div className='logo'>
            <Link className='logoInnerLink' to='/'>
              Point Studio
            </Link>
          </div>
        <div className='artistsParentParent'>
          {/*<iframe src={ }></iframe>*/}
          <div className='artistsParent'>
            <div className='artistsHeader'>Point Studio <span>Artists</span></div>
              <Link className='artistToClick' to='/artistprofile/kourtneeg'>Kourtnee G
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='http://localhost:3000/img/kourtbw.jpg'></img>
                </div>              
              </Link>
              <Link className='artistToClick' to='/artistprofile/cleightyp'>cleighty_p
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='http://localhost:3000/img/claysquare.jpg'></img>
                </div>
              </Link>
              <Link className='artistToClick' to='/artistprofile/ari'>Ari
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='https://i.ytimg.com/vi/58IRpuBU4Es/maxresdefault.jpg'></img>
                </div>              
              </Link>
              <Link className='artistToClick' to='/artistprofile/pinkswey'>Pink Swey
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='https://i1.sndcdn.com/avatars-000317452532-jk1m3o-t500x500.jpg'></img>
                </div>
              </Link>
          </div>
            {/*<MusicPlayer />*/}
        </div>
      </div>
    );
  }
}