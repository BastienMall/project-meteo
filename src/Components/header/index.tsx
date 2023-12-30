import React from 'react'

export default function Header() {

    return (
      <>
        <header id="header">
          <section id='header_top'>
            <div className="container">

              <div className="row">
                <div id="header_top_left">
                  <div style={{backgroundColor:'white', display:'flex'}}>
                      <img src='../Rep_Public_logo.png' height={'120px'} width={'120px'}/>
                    <img src='../meteo_france_logo_2.png' height={'120px'} width={'120px'} style={{scale:'0.85'}} />
                  </div>
                </div>

                <div id="header_top_middle">
                  <div id="barre_search">
                    <form className='recherche'>
                      
                      <input type="text" id='barre_search_input' placeholder='Rechercher une ville' />
                      <button type='submit' title='lancer la recherche' aria-label='lancer la recherche'><i className="fa fa-search"></i></button>
                    </form>
                  </div>
                </div>

                <div id="header_top_right">
                  <div className='icone_bar_right'>text</div>
                </div>
              </div>
            </div>
          </section>

          <section id='header_bottom'>
            <div className="container">
              <div className="row">
                <div id="barre-favoris">
                  <ul id='barre-favoris-list'>
                    <li className='last'>
                      <div id="add-favorite">
                        <div className="autocomplete">
                          <span>Ajouter une ville</span>
                          <button>+</button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </header>

        
      </>
    )
  }