import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { fetchData } from '../redux/weather/getWeather'
import './Input.css'
function Input() {
   const dispatch = useDispatch()
  const [name , setName] = useState('')
  const handleName = (e)=>{
    setName(e.target.value)
  }
  const handleSubmit = (e)=>{
    if(e.key === "Enter"){
       dispatch(fetchData(name))
       setName('')
    }
  }
  return (
    <div className='input-div'>
      <input onKeyPress={handleSubmit} onChange={handleName} className='input' value={name} type='text' placeholder='Enter Location'/>
    </div>
  )
}

export default Input
