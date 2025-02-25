import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import Allvideos from '../Components/Allvideos'
import Allcategories from '../Components/Allcategories'


const Home = () => {

  const [videoResponse,setVideoResponse]=useState("")
  const [videoDeleteResponse,setVideoDeleteResponse]=useState("")
  const [categoryVideoResponseDelete,setCategoryVideoResponseDelete]=useState("")
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
        < Allvideos allVideos={videoResponse} videoDeleteResponse={videoDeleteResponse} setCategoryVideoResponseDelete={setCategoryVideoResponseDelete}/>
      </div>

      <div className='w-50'>
        <Allcategories setVideoDeleteResponse={setVideoDeleteResponse} categoryVideoResponseDelete={categoryVideoResponseDelete}/>
      </div>
      </div>
     


    </div>
  )
}

export default Home