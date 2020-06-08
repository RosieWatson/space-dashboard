import React from 'react'

import PeopleCard from './PeopleCard'
import PictureCard from './PictureCard'

const Main = () => (
  <div id='star-overlay'>
    <h1 className='text-white m-5'>Space</h1>
    <div className='d-flex flex-wrap align-items-start justify-content-center'>
      <PictureCard />
      <PeopleCard />
    </div>
  </div>
)

export default Main
