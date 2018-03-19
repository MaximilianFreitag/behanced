var React = require('react')
var PropTypes = require('prop-types')

function FieldMenuItem (props) {
  return (
    <li
      style={props.field === props.selectedField ? { color: '#c1ac6a' } : null}
      onClick={props.onSelect.bind(null, props.field)}
      key={props.field}>
      {props.field}
    </li>
  )
}

FieldMenuItem.propTypes = {
  field: PropTypes.string.isRequired,
  selectedField: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

module.exports = FieldMenuItem
