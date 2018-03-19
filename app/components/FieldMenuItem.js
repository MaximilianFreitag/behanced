var React = require('react')
var PropTypes = require('prop-types')

function FieldMenuItem ({ field, selectedField, onSelect }) {
  return (
    <li
      style={field === selectedField ? { color: '#c1ac6a' } : null}
      onClick={() => onSelect(field)}
      key={field}>
      {field}
    </li>
  )
}

FieldMenuItem.propTypes = {
  field: PropTypes.string.isRequired,
  selectedField: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

module.exports = FieldMenuItem
