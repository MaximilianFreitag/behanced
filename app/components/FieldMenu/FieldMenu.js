import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FieldMenuItem from './FieldMenuItem'
import FieldMenuDropdown from './FieldMenuDropdown/FieldMenuDropdown'

export default function FieldMenu (props) {
  const { selectedField, popularFields, allOtherFields, onSelect } = props

  return (
    <ul className='field-menu'>
      {popularFields.map((field) => (
        <FieldMenuItem
          field={field}
          selectedField={selectedField}
          onSelect={onSelect}
        />
      ))}
      <li>
        <FieldMenuDropdown
          selectedField={selectedField}
          allOtherFields={allOtherFields}
          onSelect={onSelect}
        />
      </li>
    </ul>
  )
}

FieldMenu.propTypes = {
  selectedField: PropTypes.string.isRequired,
  popularFields: PropTypes.array.isRequired,
  allOtherFields: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}
