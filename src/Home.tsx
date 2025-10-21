import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Results from './Results'
import Search from './Search'
import Upload from './Upload'
import ColorPage from './ColorPage'

function Home() {
  return (
    <BrowserRouter basename='/colortube/'>
      <nav>
        <header>
          <h1>ColorTube</h1>
          <p className='subtext'><sub><i>Any color, any time.</i></sub></p>
        </header>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/upload">Upload</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Results />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/:red/:green/:blue' element={<Results />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/color/:colorId' element={<ColorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Home
