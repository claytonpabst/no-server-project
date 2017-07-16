import React, { Component } from 'react';
// import ReactAudioPlayer from 'react-audio-player';
import MusicPlayer from './../MusicPlayer/MusicPlayer'
import axios from 'axios'

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
                    'http://localhost:3000/audio/whistle.ogg'
                ]
            },
            {
                name: 'Kourtnee G',
                img: '',
                songs: [
                    'http://localhost:3000/audio/sorry.mp3'
                ]
            },
            {
                name: 'Pink Swey',
                img: '',
                songs: [
                
                ]
            },             
            {
                name: 'Ari',
                img: '',
                songs: [
                    
                ]               
            }
        ],
        userGifInput: '',
        gifToDisplay: ''
    }

    this.componentDidMount = this.componentDidMount.bind(this);

  }

//   componentDidMount() {
//       axios
//       console.log(this.state.artistID)
//   }

  componentDidMount () {
    var userGifInput = 'check this out'
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${ userGifInput }&api_key=d4ed0114c75c4e4e961030332aaf000a&limit=5`)
    .then( (response) => {
      console.log(response)
      this.setState({
          gifToDisplay: response.data.data[0].embed_url
      })
    })
  }

  render() {

    let artist='';
    if (this.state.artistID === 'cleightyp') {
        artist = this.state.artists[0];
    } else if (this.state.artistID === 'kourtneeg') {
        artist = this.state.artists[1];
    } else if (this.state.artistID === 'ari') {
        artist = this.state.artists[3];
    } else if (this.state.artistID === 'pinkswey') {
        artist = this.state.artists[2];
    }


    return (
      <div className="">
        <iframe src={ this.state.gifToDisplay }></iframe>
          <MusicPlayer audioSrc={artist.songs[0]}/>
     

        
      </div>
    );
  }
}