import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReactCardFlip from 'react-card-flip'

import { fetchPeopleInSpace } from '../redux/actions/peopleInSpace'

import styles from '../app.module.scss'

import CardHeading from './CardHeading'

class PeopleCard extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isFlipped: false,
      personIndex: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getPeopleInSpace()
  }

  handleClick(e, index) {
    e.preventDefault()

    this.setState(state => {
      return {
        isFlipped: !state.isFlipped,
        personIndex: index
      }
    })
  }

  renderFlipCardFront() {
    const { error, hasFetched, isFetching, number, people } = this.props.peopleInSpaceData

    if (isFetching && !hasFetched) return <div className='mt-3 pt-5 pt-sm-0'><div className={`${styles.loadingSpinner} m-auto`}></div></div>

    if (error) return <p>We are currently not able to get data on the amount of people in space, try again in a bit!</p>

    if (number < 1) return <div>There is currently no one in space! What is happening!?</div>

    return (<>
      <p>Click for more information on each Astronaut</p>
        <div className='d-flex flex-wrap justify-content-around'>
          {people && people.map((person, index) => {
            return <div key={person.name} onClick={(e) => this.handleClick(e, index)} >
              <i className={`fas fa-user-astronaut fa-4x ${styles.icon} ${styles.pointer} m-2`} />
            </div>
          })}
        </div>
    </>)
  }

  renderFlipCardBack() {
    const people = this.props.peopleInSpaceData.people
    const person = people && people[this.state.personIndex]

    return(
      <div className='card-body'>
        <h5 className='card-title mt-3 pb-3'>{ person && person.name }</h5>
        <div className='card-text'>
          <p><b>Craft:</b> { person && person.craft }</p>
        </div>
        <div
          className={`${styles.backArrow} ${styles.pointer} mb-4`}
          onClick={(e) => this.handleClick(e, 0)}
        >
          <i className='fas fa-arrow-circle-left' /> back
        </div>
      </div>
    )
  }

  render () {
    const { hasFetched, isFetching } = this.props.peopleInSpaceData

    return (
      <div className={`card ${styles.peopleCard} m-5 mb-0`}>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal' containerStyle={{ height: '100%' }}>
            <div className='card-body' style={{ height: '100%' }}>
              <CardHeading title='Astronauts in space currently' hasFetched={hasFetched} isFetching={isFetching} />
              {this.renderFlipCardFront()}
            </div>

            {this.renderFlipCardBack()}
        </ReactCardFlip>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    peopleInSpaceData: state.peopleInSpace
  }
}

export const mapDispatchToProps = dispatch => ({
  getPeopleInSpace: () => dispatch(fetchPeopleInSpace())
})

export default connect(mapStateToProps, mapDispatchToProps)(PeopleCard)
