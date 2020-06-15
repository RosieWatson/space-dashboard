import React from 'react'

import styles from '../app.module.scss'

const CardHeading = ({ hasFetched, isFetching, title }) => (
  <div>
    <h5 className='card-title d-inline-block text-capitalize'>
      {title}
    </h5>
    {hasFetched && isFetching && <div className={`${styles.loadingSpinnerSmall} d-inline-block float-right`}></div>}
  </div>
)

export default CardHeading