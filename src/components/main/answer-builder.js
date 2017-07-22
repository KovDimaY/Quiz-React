// Node modules import
import React, { Component } from 'react';

// This component will show data about user activity
export default class AnswerBuilder extends Component {
  moveCharacter(char) {
    this.props.relocateToBoard(char);
  }

  showCharacters(array) {
    return (
      array.map(item =>
        <li className={`${item.value === ' ' && 'space-as-character'} inline-block character noselect`}
            key={item.id}
            onClick={e => this.moveCharacter(item)}>
          {item.value}
        </li>
      )
    )
  }

  render() {
    return (
      <div className='answer-builder'>
        <div className='answer-container'>
          <div className='characters-place'>
            <ul className='inline-list'>
              {this.showCharacters(this.props.characters)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
