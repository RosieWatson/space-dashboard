import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPictureOfTheDay } from '../redux/actions/pictureOfTheDay'

import styles from '../app.module.scss'

import CardHeading from './CardHeading'

class PictureCard extends Component {
  componentDidMount() {
    this.props.getPictureOfTheDay()
  }

  render () {
    const { copyright, date, explanation, hasFetched, hdUrl, isFetching, mediaType, title, url } = this.props.pictureOfTheDay

    return (
      <div className={`picture-card card ${styles.infoCard} m-5 mb-0`}>
        <div className='card-body'>
          <CardHeading title='Astronomy Picture of the Day' hasFetched={hasFetched} isFetching={isFetching} />
          { isFetching && !hasFetched ?
           <div className={`${styles.loadingSpinner} m-auto`}></div> :
           <>
           {mediaType === 'video' ?
            <a href={url} target='_blank' rel='noopener'>Click here to watch the video of the day</a>
           :(<div className='overflow-hidden'>
            <a href={hdUrl ? hdUrl : url} target='_blank' rel='noopener'>
              <img className={`card-img-top ${styles.dailyImage}`} src={url} alt={`Astronomy Picture of the Day: ${title}`} />
            </a>
           </div>)}
            <div className='card-body px-0'>
              <h6>{title}</h6>
              <i>{date}</i>
              <br/>
              <button
                className='btn btn-info text-dark mt-2'
                data-toggle='collapse'
                data-target='#collapse-explanation'
                aria-expanded='true'
                aria-controls='collapse-explanation'
                id='explanation-button'
              >
                Explanation
              </button>

              <div id='collapse-explanation' className='collapse' aria-labelledby='explanation-button'>
                <div className='card-body'>
                  <p>{explanation}</p>
                </div>
              </div>
              </div>
              {copyright && <small>Copyright: {copyright}</small>}
            </>
          }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    pictureOfTheDay: state.pictureOfTheDay
  }
}

export const mapDispatchToProps = dispatch => ({
  getPictureOfTheDay: () => dispatch(fetchPictureOfTheDay())
})

export default connect(mapStateToProps, mapDispatchToProps)(PictureCard)
