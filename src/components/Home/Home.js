import React, { Component } from 'react';
// import ReactAudioPlayer from 'react-audio-player';
import MusicPlayer from './../MusicPlayer/MusicPlayer'

import './Home.css';





class Home extends Component {
  constructor(props){
    super(props)

  }


  render() {



    return (
      <div className="">
        <body className='main'>
          <div className='stars'>
            <header className='header'>

            </header>
            <div className='homeTextBox'>
              <span className='homeText'>  
                you'll sound<br /> better <b>with us</b>
              </span>
            {/*<MusicPlayer />*/}
            </div>
          </div>
        </body>
      </div>
    );
  }
}


export default Home;