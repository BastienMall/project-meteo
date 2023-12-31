import React from 'react'
import MapComponent from '../Map/MapComponent';


export default function Body() {

    return (
      <>
      <div className="body" style={{display:'grid', gridTemplateColumns:"20% 60% 20%" ,  backgroundColor:"#e8e8e8"}}>

              <div ></div>

              <div style={{backgroundColor:'white', margin:"15px" , borderRadius:"5px", height:"1000px" }}>
                  <MapComponent/>
              </div>

              <div ></div>
          </div>
      </>
    )
  }