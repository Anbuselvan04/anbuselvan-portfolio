import React from 'react'
import "../HomeComponent/HomeComponent.css"

const HomeComponent = () => {
  return (
    <React.Fragment>

      <div className="home-space">
        <div className="short-info">
          HI! I'M ANBUSELVAN A <br />
          SOFTWARE DEVELOPER <br />
          CHENNAI
        </div>
        <div className="picture">
          <img src="picture.jpg" alt="profile-picture" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomeComponent
