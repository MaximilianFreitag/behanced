import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FieldNavItem from './FieldNavItem'
import FieldNavDropdown from './FieldNavDropdown/FieldNavDropdown'

export default function FieldNav (props) {
  const { selectedField, popularFields, allOtherFields, onSelect } = props

  return (
    <ul className='field-nav'>
      {popularFields.map((field) => (
        <FieldNavItem
          field={field}
          selectedField={selectedField}
          onSelect={onSelect}
        />
      ))}
      <li>
        <FieldNavDropdown
          selectedField={selectedField}
          allOtherFields={allOtherFields}
          onSelect={onSelect}
        />
      </li>
    </ul>
  )
}

FieldNav.propTypes = {
  selectedField: PropTypes.string.isRequired,
  popularFields: PropTypes.array.isRequired,
  allOtherFields: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}
