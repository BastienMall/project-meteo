import { px } from "framer-motion";
import { useRef, useState } from "react";



const Api_key = "19dd3a34799e8c44670a4be44379f209" ;



const Weather = () => {
  const inputRef = useRef(null);
  const [apiData, setApiData] = useState(null);
  const [showWeather, setShowWeather] = useState(null);

  const [loading, setLoading] = useState(false);

  const WeatherTypes = [
    {
      type: "Clear",
      img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    },
    {
      type: "Rain",
      img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    },
    {
      type: "Snow",
      img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    },
    {
      type: "Clouds",
      img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    },
    {
      type: "Haze",
      img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    },
    {
      type: "Smoke",
      img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    },
    {
      type: "Mist",
      img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    },
    {
      type: "Drizzle",
      img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
    },
  ];

  const fetchWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${Api_key}`;
    setLoading(true);
  
    try {
      const response = await fetch(URL);
      const data = await response.json();
  
      setApiData(null);
  
      if (data.cod === 404 || data.cod === 400) {
        setShowWeather([
          {
            type: "J'ai rien trouvé :)",
            img: "https://cdn-icons-png.flaticon.com/512/4275/4275497.png",
          },
        ]);
      } else {
        setShowWeather(
          WeatherTypes.filter(
            (weather) => weather.type === data.weather[0].main
          )
        );
      }
  
      console.log(data);
      setApiData(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="right-rectangle" style={{ borderRadius:'10px', height:'250px', backgroundColor:'#1c9bd4', display:'flex', justifyContent:'center'}}>
      <div >
        <div >

          <span style={{width:'275px', color:'white',fontSize:'18px',fontWeight:'600', display:'inline-block', marginTop:'10px', marginBottom:'25px'}}>
            Recherchez la météo d'une ville
          </span>

            <input
              type="text"
              ref={inputRef}
              placeholder="Rechercher une ville"
              className="text-xl border-b
            p-1 border-gray-200 font-semibold uppercase flex-1"
            style={{ display:"flex"}}
            />

            <button onClick={fetchWeather}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/758/758651.png"
                alt="icone de recherche"
                style={{height:'25px', width:'25px', display:"flex"}}
              />
            </button>

          
        </div>

        <div
          className={`duration-300 delay-75  overflow-hidden
         ${showWeather ? "h-[27rem]" : "h-0"}`}
        >
          {loading ? (
            <div className="grid place-items-center h-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png"
                alt="iamge de loading"
                className="w-14 mx-auto mb-2 animate-spin"
              />
            </div>
          ) : (
            showWeather && (
              <div className="text-center flex flex-col gap-6 mt-10" >
                {apiData && (
                  <p className="text-xl font-semibold" style={{fontSize:"large", color:'white'}}>
                    {apiData?.name + "," + apiData?.sys?.country}
                  </p>
                )}
                <img
                  src={showWeather[0]?.img}
                  alt="icone météo"
                  className="w-52 mx-auto"
                  style={{height:'30px',width:'30px', marginBottom:'20px'}}
                />
                

                {apiData && (
                  <>
                    <div className="flex justify-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/7794/7794499.png"
                        alt="icone température"
                        className="h-9 mt-1"
                        style={{height:'30px',width:'30px'}}
                      />
                      <h2 className="text-4xl font-extrabold" style={{color:'white'}}>
                        {apiData?.main?.temp}&#176;C
                      </h2>
                    </div>
                  </>
                )}
              </div>
              
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;