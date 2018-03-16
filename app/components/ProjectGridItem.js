var React = require('react')
var PropTypes = require('prop-types')
var api = require('../utils/api')

// Font Awesome icons
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp'
import faEye from '@fortawesome/fontawesome-free-solid/faEye'
import faComment from '@fortawesome/fontawesome-free-solid/faComment'

function ProjectGridItem ({ project, allFields }) {
  var projectFields = project.fields
  var timestamp = project.published_on

  // Grab ID to create individual URL for each field tag
  var projectFieldsWithIds = projectFields.map(function (projectField) {
    var fieldObj = {}
    allFields.forEach(function (field) {
      if (projectField === field.name) {
        fieldObj['id'] = field.id
        fieldObj['name'] = projectField
      }
    })
    return fieldObj
  })

  // Published date
  var pubDate = new Date(timestamp * 1000)
  var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
  var formattedPubDate = months[pubDate.getMonth()] + ' '
  + pubDate.getDate() + ', ' + pubDate.getFullYear()

  return (
    <li className='project-card' key={project.id}>
      <div className='project-card__visual'>
        <a className='project-card__image-link' href={project.url}>
          <img
            className='project-card__image'
            src={project.covers['230']}
            alt={'Project cover for ' + project.name} />
          <div className='project-card__image-overlay'></div>
        </a>

        {projectFieldsWithIds.map(function (field, index) {
          return (
            <a className={'project-card__field' + (index + 1) + ' project-card__field'} href={'https://www.behance.net/search?field=' + field.id}>{field.name}</a>
          )
        })}
      </div>

      <div className='project-card__details'>
        <h3 className='project-card__title'><a href={project.url}>{project.name}</a></h3>

        <div className='project-card__owner'>
          <img
            className='project-card__owner-avatar'
            src={project.owners[0].images['50']}
            alt={'Avatar for ' + project.name} />
          <a href={project.owners[0].url}>{project.owners[0].display_name}</a>
        </div>
      </div>

      <div className='project-card__stats'>
        <div className='project-card__stats-item'>
          <FontAwesomeIcon icon={faThumbsUp} />
          {project.stats.appreciations}
        </div>
        <div className='project-card__stats-item'>
          <FontAwesomeIcon icon={faEye} />
          {project.stats.views}
        </div>
        <div className='project-card__stats-item'>
          <FontAwesomeIcon icon={faComment} />
          {project.stats.comments}
        </div>
      </div>

      <div className='project-card__published-date'>
        <p>Published: {formattedPubDate}</p>
      </div>

      <div className='project-card__highlight'></div>
    </li>
  )
}

ProjectGridItem.propTypes = {
  project: PropTypes.object.isRequired
}

module.exports = ProjectGridItem
