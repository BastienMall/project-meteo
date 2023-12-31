import React from 'react'
import Map from '../Map/map';
import Weather from '../api/Weather'



export default function Body() {

    return (
      <>
      <div className="body" style={{display:'grid', gridTemplateColumns:"20% 60% 20%" ,  backgroundColor:"#e8e8e8"}}>

              <div ></div>

              <div style={{backgroundColor:'white', margin:"15px" , borderRadius:"5px", height:"1500px" }}>
                  <Map/>
                  <Weather/>
              </div>

              <div ></div>
          </div>
      </>
    )
  }