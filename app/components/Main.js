var React = require('react')

class Main extends React.Component {
  render () {
    var fields = ['All', 'Architecture', 'Art Direction', 'Graphic Design', 'Illlustration', 'Photography', 'UI/UX', 'Web Design'];

    return (
      <ul className='fields'>
        {fields.map(function (field) {
          return (
            <li key={field}>{field}</li>
          )
        })}
      </ul>
    )
  }
}

module.exports = Main
