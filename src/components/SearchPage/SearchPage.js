import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import SearchIcon from '@material-ui/icons/Search'
import Description from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'


function SearchPage() {
  const [{ term }, dispatch] = useStateValue()
  const { data } = useGoogleSearch(term)


  console.log(data)
  return (
    <div className='searchPage'>
      <div className="searchPage__header">
        <Link to='/'>
          <img className='searchPage__logo'
            src="https://res.cloudinary.com/shafali/image/upload/v1600716007/google-logo_kjsamh.png" alt="" />
        </Link>


        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__icons">
            <div className="searchPage__iconsLeft">

              <div className="searchPage__icon">
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className="searchPage__icon">
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className="searchPage__icon">
                <LocalOfferIcon />
                <Link to='/shopping'>Shopping</Link>
              </div>
              <div className="searchPage__icon">
                <RoomIcon />
                <Link to='/maps'>Maps</Link>
              </div>
              <div className="searchPage__icon">
                <Description />
                <Link to='/news'>News</Link>
              </div>
              <div className="searchPage__icon">
                <MoreVertIcon />
                <Link to='/more'>More</Link>
              </div>

            </div>

            <div className='searchPage__iconsRight'>
              <div className="searchPage__icon">
                <Link to='/settings'>Settings</Link>
              </div>
              <div className="searchPage__icon">
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>



      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map(item => (
            <div
              className='searchPage__result'>
              <a
                className='searchPage__resultLink' href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img
                    className='searchPage__resultImage' src={
                      item.pagemap?.cse_image[0]?.src
                    }
                    alt=''
                  />
                )}

                {item.displayLink} *
              </a>

              <a
                className='searchPage__result Title'
                href={item.link}>
                <h4>{item.title}</h4>
              </a>

              <p
                className='searchPage__result Snippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


export default SearchPage
