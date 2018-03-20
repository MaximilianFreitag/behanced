import React from 'react'
import PropTypes from 'prop-types'

import FieldMenuItem from './FieldMenuItem'

function FieldMenuMore () {
  return (
    <li>
      More
      <svg class="more-arrow" height="10" width="10" viewBox="0 0 24 24"><title>More Fields</title><path d="M12.00,19.50 L0.66,8.29 C-0.22,7.43 -0.22,6.02 0.66,5.15 C1.54,4.28 2.96,4.28 3.84,5.15 L12.00,13.21 L20.16,5.15 C21.04,4.28 22.46,4.28 23.34,5.15 C24.22,6.02 24.22,7.43 23.34,8.29 L12.00,19.50 Z"></path></svg>
    </li>
  )
}

export default function FieldMenu ({ selectedField, onSelect }) {
  const fields = [
    'Architecture',
    'Art Direction',
    'Branding',
    'Fashion',
    'Graphic Design',
    'Illustration',
    'Photography',
    'UI/UX',
    'Web Design'
  ]

  return (
    <ul className='field-menu'>
      {fields.map((field) => (
        <FieldMenuItem
          field={field}
          selectedField={selectedField}
          onSelect={onSelect}
        />
      ))}
      <FieldMenuMore />
    </ul>
  )
}

FieldMenu.propTypes = {
  selectedField: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}
