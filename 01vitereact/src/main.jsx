import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return(
    <div>
      <h1>Custom React!!</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props:{
//       href:'http://google.com',
//       target:'_blank'
//   },
//   children:'click me to visit instagram'
// }

const anotherElement = (
  <a href="http://google.com" target='_blank'> Visit  Google</a>
)

const anotheruser = "Chai aur react"

const ReactElement = React.createElement(
  'a',
  {href : 'http://google.com', target:'_blank'},
  'Click me to visit google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ReactElement />
//   </React.StrictMode>,
//   anotherElement 
    ReactElement
)
