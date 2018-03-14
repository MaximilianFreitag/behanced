var React = require('react')

class Main extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedField: 'All'
    }

    this.updateField = this.updateField.bind(this)
  }

  updateField (field) {
    this.setState(function () {
      return {
        selectedField: field
      }
    })
  }

  render () {
    var fields = ['All', 'Architecture', 'Art Direction', 'Graphic Design', 'Illlustration', 'Photography', 'UI/UX', 'Web Design']

    return (
      <ul className='fields'>
        {fields.map(function (field) {
          return (
            <li
              style={field === this.state.selectedField ? { color: '#ff3530' } : null}
              onClick={this.updateField.bind(null, field)}
              key={field}>
              {field}
            </li>
          )
        }, this)}
      </ul>
    )
  }
}

module.exports = Main
