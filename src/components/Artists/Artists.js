import React, { Component } from 'react';
// import ReactAudioPlayer from 'react-audio-player';
import {Link} from 'react-router-dom'
// import MusicPlayer from './../MusicPlayer/MusicPlayer'
import axios from 'axios';

import './Artists.css';
// import './../Home/Home.css'





export default class Artists extends Component {
  constructor(props){
    super(props)

  }

  // componentDidMount () {
  //   var test = 'Brad Pitt'
  //   axios.get(`http://api.giphy.com/v1/gifs/search?q=${ test }&api_key=d4ed0114c75c4e4e961030332aaf000a&limit=5`)
  //   .then( (response) => {
  //     console.log(response)
  //   })
  // }


  render() {



    return (
      <section className="mainArtists">
        {/*<div className='stars'>*/}
          <div className='logo'>
            <Link className='logoInnerLink' to='/'>
              Point Studio
            </Link>
          </div>
          {/*<iframe src={ }></iframe>*/}
        <div className='artistsParentParent'>
          <div className='artistsParent'>
            <div className='artistsHeader'>Point Studio <span>Artists</span></div>
              <Link className='artistToClick' to='/artistprofile/ari'>Ari
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='https://i.ytimg.com/vi/58IRpuBU4Es/maxresdefault.jpg'></img>
                </div>              
              </Link>
              <Link className='artistToClick' to='/artistprofile/kourtneeg'>Kourtnee G
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='http://localhost:3000/img/kourtbw.jpg'></img>
                </div>              
              </Link>
              <Link className='artistToClick' to='/artistprofile/pinkswey'>Pink Swey
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='http://localhost:3000/img/pinkswey.jpg'></img>
                </div>
              </Link>
              <Link className='artistToClick' to='/artistprofile/cleightyp'>cleighty_p
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='http://localhost:3000/img/claysquare.jpg'></img>
                </div>
              </Link>
              <Link className='artistToClick' to='/artistprofile/addyd'>Addy D
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/14650518_10154095709075197_9022796594522614456_n.jpg?oh=4f5c1c24168806b9d840441a85935410&oe=59C889DE'></img>
                </div>
              </Link>
              <Link className='artistToClick' to='/artistprofile/cherie'>Cherie
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/13626403_10209548269364845_518509731036364948_n.jpg?oh=271a158e625b4535960716533f85dd85&oe=5A018DB2'></img>
                </div>
              </Link>
              <Link className='artistToClick' to='/artistprofile/clyp'>Clyp
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='https://i1.sndcdn.com/avatars-000282980764-mttzmi-t500x500.jpg'></img>
                </div>              
              </Link>
              <Link className='artistToClick' to='/artistprofile/clyp'>Last Hope
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='http://localhost:3000/img/lasthope.jpg'></img>
                </div>              
              </Link>
              <Link className='artistToClick' to='/artists'>Future Artist
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='data:image/png;base64,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'></img>
                </div>              
              </Link>
              <Link className='artistToClick' to='/artistprofile/addyd'>Future Band
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='data:image/png;base64,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'></img>
                </div>
              </Link>
              <Link className='artistToClick' to='/artists'>Future Artist
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToj8ZQkM1Q-6HFAlgwgOfnX_Y9OKN0zLzCR8jM3Pw0NvnO4jdi'></img>
                </div>              
              </Link>
              <Link className='artistToClick' to='/artistprofile/cherie'>Future Artist
                <div className='artistProfilePic'>
                  <img className='theActualPic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQpjuZOrDVKZ1CbA-qCFHvTO2rWh_2HxMerzIOEhMLMjvdjABLrIceWI'></img>
                </div>
              </Link>
          </div>
        </div>  
        {/*</div>*/}
      </section>
    );
  }
}