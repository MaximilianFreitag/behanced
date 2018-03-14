var React = require('react')
var PropTypes = require('prop-types')
var FieldMenuItem = require('./FieldMenuItem')

function FieldMenu (props) {
  var fields = ['Architecture', 'Art Direction', 'Branding', 'Fashion', 'Graphic Design', 'Illustration', 'Photography', 'UI/UX', 'Web Design']

  return (
    <ul className='field-menu'>
      {fields.map(function (field) {
        return (
          <FieldMenuItem
            field={field}
            selectedField={props.selectedField}
            onSelect={props.onSelect}
          />
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
