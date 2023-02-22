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
        <button>uatr</button>
      </Link>
      <Link to={"/uhar"}>
        <button>uhar</button>
      </Link>
      <Link to={"/ucor"}>
        <button>ucor</button>
      </Link>
      <Link to={"/uord"}>
        <button>uord</button>
      </Link>
      <Link to={"/scor"}>
        <button>scor</button>
      </Link>
      <Link to={"/sord"}>
        <button>sord</button>
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
        placeholder="Please Your Atreides Address "
        onChange={handleChange}
        />
        </form>
      <h2 className="name">{name}</h2>

      <Outlet/>
    </div>
  )
}

export default App
