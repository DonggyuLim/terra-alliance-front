import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import  './App.css'
import Header from './component/header'



function App({name}) {
  const [address, setAddress] = useState("")
  const navigate = useNavigate()
  const handleChange = (e) => {
    
    setAddress(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    
    navigate("/account", {
      state: {
        address:address,
      }
    })
    setAddress("")
  }
  console.log(address)
  return (
    <div className="App">   
      <Header />
      <Link to={"/uatr"}>
        <button>atr</button>
      </Link>
      <Link to={"/uhar"}>
        <button>har</button>
      </Link>
      <Link to={"/ucor"}>
        <button>cor</button>
      </Link>
      <Link to={"/uord"}>
        <button>ord</button>
      </Link>
      <Link to={"/scor"}>
        <button>scor</button>
      </Link>
      <Link to={"/sord"}>
        <button>sord</button>
      </Link>
      <Link to={"/satr"}>
        <button>satr</button>
      </Link>
      <Link to={"/shar"}>
        <button>shar</button>
      </Link>
      <Link to={"/"}>
      <button  >total</button>
      </Link>
      <form
        onSubmit={handleSubmit}
      >
      <input
        className='search'
        type="text"
        value ={address}
        placeholder="Account Search"
        onChange={handleChange}
        />
        </form>
      <h2 className="name">{name}</h2>

      <Outlet/>
    </div>
  )
}

export default App
