import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dropdown, { DropdownTrigger, DropdownContent } from './Dropdown/Dropdown'

class FieldMenuDropdown extends Component {
  constructor (props) {
    super(props)

    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  handleLinkClick () {
    this.refs.dropdown.hide()
  }

  render () {
    const { selectedField, allOtherFields, onSelect } = this.props
    console.log('allOtherFields in FieldMenuDropdown:', allOtherFields)

    return (
      <Dropdown ref='dropdown'>
        <DropdownTrigger>
          <span>More</span>
          <svg class='more-arrow' height='10' width='10' viewBox='0 0 24 24'><path d='M12.00,19.50 L0.66,8.29 C-0.22,7.43 -0.22,6.02 0.66,5.15 C1.54,4.28 2.96,4.28 3.84,5.15 L12.00,13.21 L20.16,5.15 C21.04,4.28 22.46,4.28 23.34,5.15 C24.22,6.02 24.22,7.43 23.34,8.29 L12.00,19.50 Z'></path></svg>
        </DropdownTrigger>
        <DropdownContent>
          <ul className='field-menu-dropdown'>
            <li className='field-menu-dropdown__link'>
              <a className='field-menu-dropdown__link__anchor' href='#' onClick={this.handleLinkClick}>
                Field 1
              </a>
            </li>
            <li className='field-menu-dropdown__link'>
              <a className='field-menu-dropdown__link__anchor' href='#' onClick={this.handleLinkClick}>
                Field 2
              </a>
            </li>
            <li className='field-menu-dropdown__link'>
              <a className='field-menu-dropdown__link__anchor' href='#' onClick={this.handleLinkClick}>
                Field 3
              </a>
            </li>
            <li className='field-menu-dropdown__link'>
              <a className='field-menu-dropdown__link__anchor' href='#' onClick={this.handleLinkClick}>
                Field 4
              </a>
            </li>
            <li className='field-menu-dropdown__link'>
              <a className='field-menu-dropdown__link__anchor' href='#' onClick={this.handleLinkClick}>
                Field 5
              </a>
            </li>
          </ul>

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
