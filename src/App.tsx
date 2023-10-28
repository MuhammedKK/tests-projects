import './App.css'
import {Link} from 'react-router-dom'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/blog'}>Blog</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default App
