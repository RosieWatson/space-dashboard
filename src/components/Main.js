import React from 'react'

import InfoCard from './InfoCard'
import PeopleCard from './PeopleCard'

const Main = () => (
  <div id='star-overlay'>
    <h1 className='text-white m-5'>Space</h1>
    <div className='container d-flex flex-wrap align-items-start justify-content-center py-5'>
      <PeopleCard />
    </div>
  </div>
)

export default Main
