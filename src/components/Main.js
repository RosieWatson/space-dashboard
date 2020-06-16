import React from 'react'

import PeopleCard from './PeopleCard'
import PictureCard from './PictureCard'
import RedditCard from './RedditCard'

import styles from '../app.module.scss'

const Main = () => (
  <div className={styles.starOverlay}>
    <h1 className='text-white mx-5 pt-5'>Space</h1>
    <div className='d-flex flex-wrap align-items-start justify-content-around m-auto m-md-5'>
      <PictureCard />
      <PeopleCard />
      <RedditCard page='space' />
      <RedditCard page='nasa' />
    </div>
  </div>
)

export default Main
