import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

function Myapp(){
  return (
    <h1>hello everyone  this is shaan</h1>
  )
}

const reactelement=(
  <a href="https://www.instagram.com/" target='_blank'>Visit the page  </a>
)

// const reactElement={
//   type:'a',
//   props:{href:'https://google.com',
//       target:'_blank'
//   },
//   children:'click me to go to google'
// }
const just_a_variable=" variable's answer"
const reactElement=React.createElement(
  'a',
  {href:'https://www.instagram.com',target:'_blank'},
  'Ckick here to go to instagram',just_a_variable
)

ReactDOM.createRoot(document.getElementById('shaan')).render(
  // <React.StrictMode>
// reactElement
 <>
<Myapp/>
<App/>
</> 
  // {/* </React.StrictMode>, */}
)
