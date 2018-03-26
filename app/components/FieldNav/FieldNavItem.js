import React from 'react'
import PropTypes from 'prop-types'

export default function FieldNavItem ({ field, selectedField, onSelect }) {
  return (
    <li
      className='field-nav-item'
      style={field === selectedField ? { color: '#2b2b2b' } : null}
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
