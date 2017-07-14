import React, { Component } from 'react';
// import ReactAudioPlayer from 'react-audio-player';
// import MusicPlayer from './MusicPlayer'

import './Home.css';





class Home extends Component {
  constructor(props){
    super(props)

  }


  render() {



          {/*<MusicPlayer />*/}
    return (
      <div className="">
        <body className='main'>
          <header className='header'>

          </header>
          <div className='homeTextBox'>
            <span className='homeText'>  
              you'll sound<br /> better <b>with us</b>
            </span>
          </div>
        </body>
      </div>
    );
  }
}


export default Home;