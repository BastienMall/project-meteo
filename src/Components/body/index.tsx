import React from 'react'
import Research from './Research'

export default function Body() {

    return (
      <>
        <div className="body" style={{display:'grid', gridTemplateColumns:"20% 60% 20%" ,  backgroundColor:"#e8e8e8"}}>
              <div ></div>
              <div style={{backgroundColor:'white', display:'flex', margin:"15px" , borderRadius:"5px", height:"1500px" }}>

                    <Research/>
              </div>
              <div ></div>
          </div>

      </>
    )
  }