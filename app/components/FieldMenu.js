import React from 'react'
import PropTypes from 'prop-types'

import FieldMenuItem from './FieldMenuItem'

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
    </ul>
  )
}

FieldMenu.propTypes = {
  selectedField: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}
