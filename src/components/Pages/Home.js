import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import AppIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import Search from '../Search/Search'

function Home() {
  return (
    <div className='home'>
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img src="https://res.cloudinary.com/shafali/image/upload/v1600669253/google-logo-_ol2kje.png" alt="" />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home
