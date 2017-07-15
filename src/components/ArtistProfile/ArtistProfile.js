import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import MusicPlayer from './../MusicPlayer/MusicPlayer'

import './ArtistProfile.css';





export default class ArtistProfile extends Component {
  constructor(props){
    super(props)

    this.state = {
        artistID: this.props.match.params.id,
        artists: [
            {
                name: 'cleighty_p',
                img: '',
                songs: [
                    './audio/whistle.ogg'
                ]
            },
            {
                name: 'Kourtnee G',
                img: '',
                songs: ''
            },
            {
                name: 'Pink Sway',
                img: '',
                songs: ''
            },             
            {
                name: 'Ari',
                img: '',
                songs: ''                
            }
        ],
    }

  }

//   componentDidMount() {
//       axios
//       console.log(this.state.artistID)
//   }

  render() {

    // let artist=this.state.artists[0];
    // if (this.state.artistID === 'cleightyp') {
    //     artist = this.state.artists[0];
    // } else if (this.state.artistID === 'kourtneeg') {
    //     artist = this.state.artists[1];
    // } else if (this.state.artistID === 'ari') {
    //     artist = this.state.artists[3];
    // } else if (this.state.artistID === 'pinksway') {
    //     artist = this.state.artists[2];
    // }


    return (
      <div className="">

          <MusicPlayer  source='./audio/whistle.ogg'/>
     
{/*audioSrc={artist.songs[0]}*/}
        
      </div>
    );
  }
}