import React from 'react'
import PropTypes from 'prop-types'

export default function FieldNavItem ({ field, selectedField, onSelect }) {
  return (
    <li
      style={field === selectedField ? { color: '#c1ac6a' } : null}
      onClick={() => onSelect(field)}
      key={field}>
      {field}
    </li>
  )
}

FieldNavItem.propTypes = {
  field: PropTypes.string.isRequired,
  selectedField: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}
