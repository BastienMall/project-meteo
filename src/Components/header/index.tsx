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
                <div style={{height:'50px', position:'relative', top:'20px'}}>
                  <input placeholder='Rechercher une ville, un pays ...' size={40} style={{border:'solid 1px lightgrey', borderRadius:'10px', padding:'15px', position:'relative', left:'100px', fontSize:"14px"}}/>
                  <img src='../loupe.png' style={{height:'22px', width:'22px'}}/>
                  
                </div>
              </div>
              <div ></div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:"20% 60% 20%" , backgroundColor:"white", position:"initial"}}>
              <div></div>
              <div style={{ display:'grid' , gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr 1fr 1fr'}}>
                <div style={{margin:"5px", color:"#003661", fontSize:"12px" , fontWeight:"800"}}>
                  <img src='../meteo.png' style={{display:'inline-flex' , height:'17px' , width:'17px'}}/>
                  <text style={{display:'flexbox', marginLeft:'15px', position:'relative', bottom:'2px'}}>PREVISIONS</text>
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
                <div style={{border:"1px solid", margin:"5px", color:"#003661", fontSize:"12px" , fontWeight:"800"}}>
                  burger menu
                </div>
              </div>
              <div ></div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:"20% 60% 20%" , backgroundColor:"#036ba1"}}>
              <div ></div>
              <div style={{ display:'flex'}}>
                <div style={{padding:'5px', margin:"5px", color:'white' , fontWeight:'600' , fontSize:'12px'}}>
                   Ajouter une ville 
                </div>
              </div>
              <div ></div>
          </div>
        </header>

        
      </>
    )
  }