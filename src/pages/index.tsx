import PageAccueil from '@/Components/PageAccueil'
import Head from 'next/head'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}"
  return (
    <>
      <Head>
        <title>Meteo France</title>
        <meta name="description" content="ostad w9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/meteo_france_logo.png" />
        
      </Head>
      <main>
        <PageAccueil/>
      </main>
    </>
  )
}
