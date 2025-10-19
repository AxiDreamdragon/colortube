import { useState } from 'react'

function App() {
  const [colors, setColors] = useState<string[]>([
    '#4821ae',
    '#4abf81',
    '#eee212',
    '#ffae21',
    '#20134a',
    '#4821ae',
    '#ffae21',
    '#4abf81',
    '#eee212',
    '#4821ae',
    '#20134a',
    '#4abf81',
    '#20134a',
    '#eee212',
    '#ffae21',
    '#4821ae',
    '#4abf81',
    '#eee212',
    '#20134a',
    '#ff0000ff',
  ]);

  return (
    <div>
      <nav>
        <header>
          <h1>ColorTube</h1>
          <p className='subtext'><sub><i>Any color, any time.</i></sub></p>
        </header>
        <div className="links">
          <a href="">Home</a>
          <a href="">Search</a>
          <a href="">Upload</a>
        </div>
      </nav>
      <div className='color-container'>
        {colors.map((color, i) =>
          <div key={i} className='color' style={{ backgroundColor: color }}></div>)}
      </div>
    </div>
  )
}

export default App
