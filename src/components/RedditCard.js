import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchRedditFeed } from '../redux/actions/reddit'

import styles from '../app.module.scss'

class RedditCard extends Component {
  componentDidMount() {
    const { getRedditFeed, page } = this.props
    getRedditFeed(page)
  }

  render () {
    return (
      <div className={`card ${styles.infoCard} m-5 mb-0`}>
        <div className='card-body'>
          Reddit Card
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    reddit: state.reddit
  }
}

export const mapDispatchToProps = dispatch => ({
  getRedditFeed: (page) => dispatch(fetchRedditFeed(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(RedditCard)
