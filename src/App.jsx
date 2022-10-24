import { useState } from 'react'
import './App.css'
import quotes from './quotes.json'
import Quote from './components/Quote'
import Author from './components/Author'
import Button from './components/Button'

function App() {

  function changeQuote(){
    setIndex(Math.floor(Math.random() * quotes.length))
    setColor(Math.floor(Math.random() * colors.length))
  }

  const colors = ['#951DC0','#E90099','#FF4470','#FF8750','#FFC34B','#2F4858']
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));
  const [color, setColor] = useState(Math.floor(Math.random() * colors.length));
  const quote = quotes[index].quote;
  const author = quotes[index].author;

  return (
    <>
      <div className='main-container' style={{background: colors[color]}}>
        <div className="card">
          <Quote color={color} colors={colors} quote={quote}/>
          <Author color={color} colors={colors} author={author}/>
          <Button color={color} colors={colors} changeQuote={changeQuote}/>
        </div>
      </div>
    </>
  )
}

export default App