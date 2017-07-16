import React, { Component } from 'react';
// import ReactAudioPlayer from 'react-audio-player';
import MusicPlayer from './../MusicPlayer/MusicPlayer'
import {Link} from 'react-router-dom'

import './Home.css';





class Home extends Component {
  constructor(props){
    super(props)

  }


  render() {



    return (
        <section className='main'>
          <div className='stars'>
            <div className='mountians' >
            </div>
              <div className='logo'>
                <Link className='logoInnerLink' to='/'>
                  Point Studio
                </Link>
              </div>
              <header className='header'>
                  <ul className='menuList'>
                    <Link className='headerText' to='/musicplayer'>DISCOVER</Link>
                    <Link className='headerText' to='/'>STUDIO GEAR</Link>
                    <Link className='headerText' to='/artists'>ARTISTS</Link>
                    <Link className='headerText' to='/'>ENGINEERS</Link>
                    <Link className='headerText' to='/'>ABOUT</Link>
                    <Link className='headerText' to='/'>MENU</Link>
                  </ul> 
              </header>
              <div className='homeTextBox'>
                <div className='homeText'>  
                  you'll sound<br /> better &nbsp;<span>with us</span>
                </div>
              </div>
          </div>
        </section>
    );
  }
}


export default Home;