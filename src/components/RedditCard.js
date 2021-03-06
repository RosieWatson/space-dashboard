import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchRedditFeed } from '../redux/actions/reddit'

import styles from '../app.module.scss'

import CardHeading from './CardHeading'

class RedditCard extends Component {
  componentDidMount() {
    const { getRedditFeed, page } = this.props
    getRedditFeed(page)
  }

  render () {
    const { page, reddit } = this.props
    const { data, hasFetched, isFetching } = reddit[page]

    return (
      <div className={`card ${styles.infoCard} m-5 mb-0`}>
        <div className='card-body'>
          <CardHeading title={`Reddit: ${page}`} hasFetched={hasFetched} isFetching={isFetching} />
          {isFetching && !hasFetched ?
            <div className={`${styles.loadingSpinner} m-auto`}></div> :
            <div className={styles.postFeed}>
              {data && data.posts.map(post => {
                const { id, permalink, thumbnail, title } = post.data
                return <div key={id} className={styles.post}>
                  <a href={`https://www.reddit.com${permalink}`} target='_blank' rel='noopener'>
                    {thumbnail === 'self' ? null : <img className={`${styles.thumbnail} lazyload`} data-src={thumbnail} alt='post thumbnail' />}
                    <span>{title.substring(0, 75)}...</span>
                  </a>
                </div>
              })}
            </div>
           }
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
