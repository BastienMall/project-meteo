import React from 'react'

export default function Header() {

    return (
      <>
        <header>
          <div style={{display:'grid', gridTemplateColumns:"20% 60% 20%" }}>
              <div ></div>
              <div style={{backgroundColor:'white', display:'flex'}}>
                <img src='../Rep_Public_logo.png' height={'120px'} width={'120px'}/>
                <img src='../meteo_france_logo_2.png' height={'80px'} width={'90px'} style={{scale:'0.85'}} />
              </div>
              <div ></div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:"20% 60% 20%" , backgroundColor:"white", position:"initial"}}>
              <div ></div>
              <div style={{ display:'flex'}}>
                <div style={{border:"1px solid", margin:"5px", color:"#003661", fontSize:"12px" , fontWeight:"800"}}>
                  PREVISIONS
                </div>
                <div style={{border:"1px solid", margin:"5px", color:"#003661", fontSize:"12px" , fontWeight:"800"}}>
                  METEO MARINE
                </div>
                <div style={{border:"1px solid", margin:"5px", color:"#003661", fontSize:"12px" , fontWeight:"800"}}>
                  METEO MONTAGNE
                </div>
                <div style={{border:"1px solid", margin:"5px", color:"#003661", fontSize:"12px" , fontWeight:"800"}}>
                  CLIMAT
                </div>
                <div style={{border:"1px solid", margin:"5px", color:"#003661", fontSize:"12px" , fontWeight:"800"}}>
                  ACTU & DOSSIERS
                </div>
                <div style={{border:"1px solid", margin:"5px", color:"#003661", fontSize:"12px" , fontWeight:"800"}}>
                  NOS SERVICES
                </div>
              </div>
              <div ></div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:"20% 60% 20%" , backgroundColor:"#036ba1"}}>
              <div ></div>
              <div style={{ display:'flex'}}>
                <div style={{border:"1px solid", margin:"5px" }}>
                  <text color='white'> Ajouter une ville </text>
                </div>
              </div>
              <div ></div>
          </div>
        </header>

        
      </>
    )
  }