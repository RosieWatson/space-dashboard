import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPictureOfTheDay } from '../redux/actions/pictureOfTheDay'

class PictureCard extends Component {
  componentDidMount() {
    this.props.getPictureOfTheDay()
  }

  render () {
    const { copyright, date, explanation, hasFetched, hdUrl, isFetching, title, url } = this.props.pictureOfTheDay

    return (
      <div className='picture-card card m-5 mb-0'>
        <div className='card-body'>
          <div>
            <h5 className='card-title d-inline-block'>
              Astronomy Picture of the Day
            </h5>
            {hasFetched && isFetching && <div className='loading-spinner-small d-inline-block float-right'></div>}
          </div>
          { isFetching && !hasFetched ?
           <div className='loading-spinner m-auto'></div> :
           <>
            <a href={hdUrl ? hdUrl : url} target='_blank' rel='noopener'>
              <img className='card-img-top' src={url} alt={`Astronomy Picture of the Day: ${title}`} />
            </a>
            <div className='card-body'>
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
