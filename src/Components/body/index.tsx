import React from 'react'
import Map from '../Map/index';
import Weather from '../api/Weather'



export default function Body() {

    return (
      <>
      <div className="body" style={{display:'grid', gridTemplateColumns:"20% 60% 20%" ,  backgroundColor:"#e8e8e8"}}>

              <div ></div>

              <div style={{backgroundColor:'white', margin:"15px" , borderRadius:"5px", height:"900px" , gridColumn:'2/3' }}>
                  <h1 className='title_body'>METEO FRANCE</h1>

                  <div style={{display:'grid' , gridTemplateColumns:"65% 35%"}}>
                    <div ><Map/></div>
                    <div style={{height:'500px', marginTop:'350px', marginRight:'5%'}}> <Weather/></div>
                  </div>
              </div>

              <div ></div>
          </div>
      </>
    )
  }