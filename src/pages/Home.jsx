import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import Allvideos from '../Components/Allvideos'
import Allcategories from '../Components/Allcategories'


const Home = () => {

  const [videoResponse,setVideoResponse]=useState("")
  return (
    <div className='container'>
      <div className='d-flex justify-content-between py-5'>

        <div>
          <Add setVideoResp={setVideoResponse}/>
        </div>

        <div>
          <Link to={'/history'}>Watch History</Link>
        </div>
      </div>


      <div className='d-flex justify-content-between py-3 '>
      <div className='w-50'>
        < Allvideos allVideos={videoResponse}/>
      </div>

      <div className='w-50'>
        <Allcategories/>
      </div>
      </div>
     


    </div>
  )
}

export default Home