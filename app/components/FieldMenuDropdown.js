import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dropdown, { DropdownTrigger, DropdownContent } from './Dropdown/Dropdown'

function FieldMenuDropdownListItem ({ field, selectedField, handleClick }) {
  return (
    <li
      style={field === selectedField ? { color: '#c1ac6a' } : null}
      onClick={() => handleClick(field)}
      key={field.id}>
      {field}
    </li>
  )
}

function FieldMenuDropdownList ({ selectedField, allOtherFields, handleClick }) {
  return (
    <ul className='field-menu-dropdown'>
      {allOtherFields.map((field) => (
        <FieldMenuDropdownListItem
          field={field.name}
          selectedField={selectedField}
          handleClick={handleClick}
        />
      ))}
    </ul>
  )
}

class FieldMenuDropdown extends Component {
  constructor (props) {
    super(props)

    this.state = {
      allOtherFields: null
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.allOtherFields !== this.props.allOtherFields) {
      this.setState(() => ({
        allOtherFields: nextProps.allOtherFields
      }))
    }
  }

  handleClick (field) {
    this.props.onSelect(field)
    this.refs.dropdown.hide()
  }

  render () {
    const { selectedField, allOtherFields, onSelect } = this.props

    return (
      <Dropdown ref='dropdown'>
        <DropdownTrigger>
          <span>More</span>
          <svg class='more-arrow' height='10' width='10' viewBox='0 0 24 24'><path d='M12.00,19.50 L0.66,8.29 C-0.22,7.43 -0.22,6.02 0.66,5.15 C1.54,4.28 2.96,4.28 3.84,5.15 L12.00,13.21 L20.16,5.15 C21.04,4.28 22.46,4.28 23.34,5.15 C24.22,6.02 24.22,7.43 23.34,8.29 L12.00,19.50 Z'></path></svg>
        </DropdownTrigger>
        <DropdownContent>
          {
            !this.state.allOtherFields
            ? <li>Loading...</li>
            : <FieldMenuDropdownList
                selectedField={selectedField}
                allOtherFields={this.state.allOtherFields}
                handleClick={this.handleClick}
              />
          }
          <div className='dropdown__triangle'>
            <svg width='24' height='24'><path d='M0 0 L12 12 L0 24'></path></svg>
          </div>
        </DropdownContent>
      </Dropdown>
    )
  }
}

FieldMenuDropdown.propTypes = {
  selectedField: PropTypes.string.isRequired,
  allOtherFields: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default FieldMenuDropdown
