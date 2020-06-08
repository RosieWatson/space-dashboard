import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReactCardFlip from 'react-card-flip'

import { fetchPeopleInSpace } from '../redux/actions/peopleInSpace'

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
    const { error, isFetching, number, people } = this.props.peopleInSpaceData

    if (isFetching) return <div className='mt-4'><div className='loading-spinner m-auto'></div></div>

    if (error) return <>
      <p>This request is only available when run locally due to lack of HTTPS.</p>
      <p>We are currently not able to get data on the amount of people in space, try again in a bit!</p>
    </>

    if (number < 1) return <div>There is currently no one in space! What is happening!?</div>

    return (<>
      <p>Click for more information on each Astronaut</p>
        <div className='d-flex flex-wrap justify-content-around'>
          {people && people.map((person, index) => {
            return <i key={person.name} className='fas fa-user-astronaut fa-4x pointer m-2' onClick={(e) => this.handleClick(e, index)} />
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
          className='back-arrow pointer mb-4'
          onClick={(e) => this.handleClick(e, 0)}
        >
          <i className='fas fa-arrow-circle-left' /> back
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className='people-card card m-5'>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal' containerStyle={{ height: '100%' }}>
            <div className='card-body' style={{ height: '100%' }}>
              <h5 className='card-title'>
                Astronauts in space currently
              </h5>
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
