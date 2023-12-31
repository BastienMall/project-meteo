import React from 'react'

export default function Footer() {

    return (
      <>
       

        <div style={{backgroundColor:'white', display:'flex', padding:'1%', justifyContent:'center'}} >
          <img src='../Rep_Public_logo.png' height={'120px'} width={'120px'}/>
          <img src='../meteo_france_logo_2.png' height={'80px'} width={'90px'} style={{scale:'0.8'}} />
        </div>
        <div style={{backgroundColor:'#145e9a', paddingTop:"1%", paddingBottom:"1%" ,color:"white", display:'flex', justifyContent:'center'}} >
            @ 2023 Copyright - Météo France
        </div>

      </>
    )
  }