import React from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import Allvideos from '../Components/Allvideos'
import Allcategories from '../Components/Allcategories'


const Home = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between py-5'>

        <div>
          <Add/>
        </div>

        <div>
          <Link to={'/history'}>Watch History</Link>
        </div>
      </div>


      <div className='d-flex justify-content-between py-5'>
      <div>
        < Allvideos/>
      </div>

      <div>
        <Allcategories/>
      </div>
      </div>
     


    </div>
  )
}

export default Home