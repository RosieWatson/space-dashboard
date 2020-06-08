import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReactCardFlip from 'react-card-flip'

import { fetchPeopleInSpace } from '../redux/actions/peopleInSpace'

// Think about loading
// Think about there being no people
// Thing about dealing with the message
class PeopleCard extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isFlipped: false,
      personInd: 0
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
        personInd: index
      }
    })
  }

  render () {
    const { people, personInd } = this.props.peopleInSpaceData
    const person = people && people[personInd]
    return (
      <div className='card m-5'>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal'>
            <div className='card-body'>
              <h5 className='card-title pb-3'>
                Astronauts in space currently
              </h5>
              <div className='d-flex flex-wrap justify-content-around'>
                {people && people.map((person, index) => {
                  return <i key={person.name} className='fas fa-user-astronaut fa-4x' onClick={(e) => this.handleClick(e, index)} />
                })}
              </div>
            </div>

            <div className='card-body'>
              <h5 className='card-title pb-3'>{ person && person.name }</h5>
              <div className='card-text'>
                <p><b>Craft:</b> { person && person.craft }</p>
                <div onClick={(e) => this.handleClick(e, 0)}><i className='fas fa-arrow-circle-left' /> back</div>
              </div>
            </div>
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
