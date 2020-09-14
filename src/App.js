import React, { useEffect, useState } from 'react'
import './App.css'
import GetToday from './components/GetToday'
import Loading from './components/Loading'
import Show from './components/Show'
import ShowTagOptions from './components/ShowTagOptions'

function App() {

  const [events, setEvents] = React.useState('')
  const [selectedDay, setSelectedDay] = React.useState(0)
  const [event, setEvent] = React.useState(0)
  const [longitude, setLongitude] = React.useState(0)
  const [latitude, setLatitude] = React.useState(0)
  const [loading, setLoading] = React.useState('LOADING')
  const [loaded, setLoaded] = useState(false)
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()
  const [area, setArea] = useState(1)
  const [times, setTimes] = useState(0)

  let letEvent;
  
  // Sivun alkuu käytetään useEffectiä jossa ladataan lista kun sivu aukeaa
  useEffect(() => {
      if (times < 10) {
      Coords();
      console.log(times)
      setTimes(times + 1)
      }
  }, [times])

  async function fetchData(lati, long, area) {
/*     let url = ""
    if (lati == undefined || long == undefined) {
      url = 'http://open-api.myhelsinki.fi/v1/events/'
    } */
    if (lati !== undefined && long !== undefined) {
      let data = await fetch('http://open-api.myhelsinki.fi/v1/events/?distance_filter=' + lati + '%2C' + long + '%2C' + area, {

        method: 'GET',
        headers: {
          "accept": "application/json"
        },
        //credentials: 'include',
        //mode: 'cors'
      })
        .then(res => {
          return res.json();
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setEvents(data.data);
      //console.log(data.data)
      setLoading('')
      setLoaded(true)
    }
  }

  const Coords = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    });
    let lati = lat
    let long = lon
    let toDay = GetToday()
    setSelectedDay(toDay)
    fetchData(lati, long, area);
  }


  const ChangeDay = (event) => {
    setSelectedDay(event.target.value)
  }

  const SeekName = (event) => {
    letEvent = event.target.value
    // Mikäli hakukentässä on enemmän kuin kolme(3) merkkiä niin sitten aletaan etsimään vastaavia sanoja
    // Muuten käy niin että hakuaika on liiiian pitkä.
    if (letEvent.length > 2) {
      setEvent(letEvent)
    }
    if (letEvent.length < 1) {
      setEvent(0)
    }
  }

  const AddArea = () => {
    if (area < 20) {
      setArea(area + 1)
      let aarea = area + 1
      setLoading('LOADING')
      fetchData(lat, lon, aarea);
    }
  }

  const SubArea = () => {
    setLoading('LOADING')
    if (area > 1) {
      setArea(area - 1)
      let aarea = area - 1
      fetchData(lat, lon, aarea);
    } else {
      setArea(1)
      let aarea = area
      fetchData(lat, lon, aarea);
    }
  }


  const ShowAll = () => {
    //Nollataan kaikki filtterit ja lista alkaa taas
    setSelectedDay(0)
    setEvent(0)
    document.getElementById("name").value = ""
    document.getElementById("Paiva").value = ""
    setArea(1)
  }


  // Niin kauan kuin loading state on 'LOADING' niin näytetään pelkästään lataus 'merkkiä'
  if (loading === 'LOADING' && !loaded) {
    return (
      <div className="App">
        <h1> </h1>
        <Loading loading={loading} loaded={loaded} />
      </div>
    )
  } else {
    // API Rest on ladattu kokonaan ja näytetään koko lista.
    return (
      <div className="App">
        <h1> </h1>
        <p>name: <input id="name" placeholder="event" onChange={SeekName} />
          <input type="date" id="Paiva" value={selectedDay} onChange={ChangeDay} />
          <br></br>
        Longitude: {lat}
          <br></br>
        Latitude: {lon}
        </p>
        <p><button onClick={ShowAll}>Show all</button></p>
        <p><button onClick={AddArea}>+1km</button><button onClick={SubArea}>-1km</button></p>
        <ShowTagOptions events={events}/>
        area:{area}km
        <Loading loading={loading} loaded={loaded}/>
        <Show events={events} event={event} selectedDay={selectedDay}/>
      </div>
    )


  }
}

export default App