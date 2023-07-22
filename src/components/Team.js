import React from 'react'
import img9 from '../images/girl.jpg'
import img1 from '../images/team-member-1-550x550.jpg'
import img2 from '../images/team-member-2-550x550.jpg'
import img3 from '../images/team-member-3-550x550.jpg'
import img4 from '../images/team-member-4-550x550.jpg'
import img5 from '../images/team-member-5-550x550.jpg'
import img6 from '../images//team-member-6-550x550.jpg'
import img7 from '../images/team1.jpg'
import img8 from '../images/team2.jpg'
import img12 from '../images/team4.jpg'

function team() {
  return (
   
    <div>
  <div class="team-container">
    <h2>Meet our team Experts</h2>
    <p>They are Investers</p>
  </div>

  <div class="profile-container">
    <div class="profile">
      <img src={img1} alt="logo" class="profile-picture"></img>
      <h3>John Doe</h3>
      <p>Web Developer</p>
    </div>

    <div class="profile">
      <img src={img2} alt="logo" class="profile-picture"></img>
      <h3>Jane Smith</h3>
      <p>Graphic Designer</p>
    </div>

    <div class="profile">
    <img src={img3} alt="logo" class="profile-picture"></img>
      <h3>Maragret brown</h3>
      <p>Graphic Designer</p>
    </div>

    <div class="profile">
    <img src={img4} alt="logo" class="profile-picture"></img>
      <h3>Tom wilson</h3>
      <p>android Developer</p>
    </div>

   <div class="profile">
    <img src={img5} alt="logo" class="profile-picture"></img>
      <h3>sophie white</h3>
      <p>App Designer</p>
    </div>

<div class="profile">
    <img src={img6} alt="logo" class="profile-picture"></img>
      <h3>Steve parker</h3>
      <p>web Designer</p>
    </div>

    <div class="profile">
    <img src={img7} alt="logo" class="profile-picture"></img>
      <h3>Steve parker</h3>
      <p>web Designer</p>
    </div>

    <div class="profile">
    <img src={img8} alt="logo" class="profile-picture"></img>
      <h3>Steve parker</h3>
      <p>web Designer</p>
    </div>


    <div class="profile">
    <img src={img9} alt="logo" class="profile-picture"></img>
      <h3>Steve parker</h3>
      <p>web Designer</p>
    </div>


    <div class="profile">
    <img src={img12} alt="logo" class="profile-picture"></img>
      <h3>Steve parker</h3>
      <p>web Designer</p>
    </div>
    
  </div>
  </div>




  )
}

export default team