import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import quotes from './quotes.json'///import file "quotes"

//Component 1----------------------------------------------------------
function Quotes1() {
  const idx = Math.floor(Math.random() * quotes.length - 1)
  var citation = quotes[idx].quote
  var aut = quotes[idx].author
  return (
    <div>
      <div>
        {citation}<br />
        --{aut}
      </div>
    </div>
  )
}

//Component 2----------------------------------------------------------
function Quotes2() {
  const idx = Math.floor(Math.random() * quotes.length - 1)
  var citation = quotes[idx].quote
  var aut = quotes[idx].author
  return (
    <div>
      <div>
        {citation}<br />
        --{aut}
      </div>
    </div>
  )
}

//Component 3----------------------------------------------------------
function Quotes3() {
  const idx = Math.floor(Math.random() * quotes.length - 1)
  var citation = quotes[idx].quote
  var aut = quotes[idx].author
  return (
    <div>
      <div>
        {citation}<br />
        --{aut}
      </div>
    </div>
  )
}

//Principal component****************************************-------------------------------------
export default function App() {//always the name app, principal component
  return (
    < >
      <div>
        <h2>CITATIONS</h2>
        <p><Quotes1 /></p>
        <p><Quotes2 /></p>
        <p><Quotes3 /></p>

      </div>
    </>

  )
}






