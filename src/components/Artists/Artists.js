import React, { Component } from 'react';
// import ReactAudioPlayer from 'react-audio-player';
import {Link} from 'react-router-dom'

import './Artists.css';





export default class Artists extends Component {
  constructor(props){
    super(props)

  }



  render() {



    return (
      <div className="">

        <div>
            <Link to='/artistprofile/clayton'>Cleighty_P</Link>
            <Link to='/artistprofile/kourtneeg'>Kourtnee G</Link>
            <Link to='/artistprofile/ari'>Ari</Link>
            <Link to='/artistprofile/pinksway'>Pink Sway</Link>
        </div>
          

      </div>
    );
  }
}