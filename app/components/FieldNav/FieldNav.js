import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchAllFields } from '../../utils/api'

import FieldNavItem from './FieldNavItem'
import FieldNavDropdown from './FieldNavDropdown/FieldNavDropdown'

class FieldNav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      popularFields: [
        'Architecture',
        'Art Direction',
        'Branding',
        'Fashion',
        'Graphic Design',
        'Illustration',
        'Photography',
        'Web Development'
      ],
      dropdownFields: null,
      dropdownFieldIsSelected: false,
      dropdownText: 'More'
    }

    this.updateDropdownText = this.updateDropdownText.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount () {
    fetchAllFields()
      .then((allFields) => {
        const dropdownFields = allFields.filter((field) => !this.state.popularFields.includes(field.name))

        this.setState(() => ({ dropdownFields }))
      })
  }

  updateDropdownText (field) {
    const dropdownFieldNames = this.state.dropdownFields.map((dropdownField) => dropdownField.name)

    if (dropdownFieldNames.includes(field)) {
      this.setState(() => ({
        dropdownFieldIsSelected: true,
        dropdownText: field
      }))
    } else {
      this.setState(() => ({
        dropdownFieldIsSelected: false,
        dropdownText: 'More'
      }))
    }
  }

  handleSelect (field) {
    this.props.onSelect(field)
    this.updateDropdownText(field)
  }

  render () {
    const { dropdownFields, dropdownFieldIsSelected, dropdownText } = this.state
    const { selectedField, onSelect } = this.props

    return (
      <ul className='field-nav'>
        {this.state.popularFields.map((field) => (
          <FieldNavItem
            field={field}
            selectedField={selectedField}
            onSelect={this.handleSelect}
          />
        ))}
        <li>
          <FieldNavDropdown
            selectedField={selectedField}
            dropdownFields={dropdownFields}
            dropdownFieldIsSelected={dropdownFieldIsSelected}
            dropdownText={dropdownText}
            onSelect={this.handleSelect}
          />
        </li>
      </ul>
    )
  }
}

FieldNav.propTypes = {
  selectedField: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default FieldNav
