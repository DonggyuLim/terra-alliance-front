import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './component/header'

import axios from 'axios'
import config from './config'


function App() {
  const [rank,setRank] = useState()
  useEffect(() => {
    async function FetchData() {
      const data = await axios.get(config.endpoint+ config.port)
      console.log( Array.isArray(data.data))
      data.data.sort((a,b)=> a.total.total - b.total.total)
      
      setRank(data.data.map(value => {
        return {
          address:value.address,
          total:value,
        }
      }))

    }
    FetchData()
  },[])
  console.log(rank)
  return (
    <div className="App">   
      <Header />
      
      <button>uatr</button>
      <button>uhar</button>
      <button>ucor</button>
      <button>uord</button>
      <button>scor</button>
      <button>sord</button>
      <button>total</button>
      <div className='rank_nav_container'>
        <div className='rank_nav_nav'>Rank</div>
        <div className='rank_nav_address'>Address</div>
        <div className='nav_token'>UATR</div>
        <div className='nav_token'>UHAR</div>
        <div className='nav_token'>UCOR</div>
        <div className='nav_token'>UORD</div>
        <div className='nav_token'>SCOR</div>
        <div className='nav_token'>SORD</div>
        <div className='nav_token'>Total</div>
      </div>
      <ul className='container'>
        {Array.isArray(rank)? rank.map((value,index) => {
          return (
            <li className='rank_container' key={index}>
              <div className='rank'>{index}</div>
              <div className='address'>{value.address}</div>
              <div className='token'>{value.total.uatr}</div>
              <div className='token'>{value.total.uhar }</div>
              <div className='token'>{value.total.ucor}</div>
              <div className='token'>{value.total.uord}</div>
              <div className='token'>{value.total.scor}</div>
              <div className='token'>{value.total.sord}</div> 
              <div className='token'>{value.total.total}</div>
            </li>
          )
        }):""}
      </ul>
	  
    </div>
  )
}

export default App
