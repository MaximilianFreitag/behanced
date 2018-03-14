var React = require('react')
var PropTypes = require('prop-types')

function FieldMenu (props) {
  var fields = ['Architecture', 'Art Direction', 'Branding', 'Fashion', 'Graphic Design', 'Illustration', 'Photography', 'UI/UX', 'Web Design']

  return (
    <ul className='field-menu'>
      {fields.map(function (field) {
        return (
          <li
            style={field === props.selectedField ? { color: '#ff3530' } : null}
            onClick={props.onSelect.bind(null, field)}
            key={field}>
            {field}
          </li>
        )
      })}
    </ul>
  )
}

FieldMenu.propTypes = {
  selectedField: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

module.exports = FieldMenu
