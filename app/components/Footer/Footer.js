import React from 'react'

// Logos & Icons
import LogoMini from '../../assets/logos/behanced-logo-mini.svg'
import AdobeLogo from '../../assets/logos/adobe-logo.svg'
import PoweredByBehanceLogo from '../../assets/logos/powered-by-behance.svg'
import ReactLogo from '../../assets/logos/react-logo.svg'
import BabelLogo from '../../assets/logos/babel-logo.svg'
import WebpackLogo from '../../assets/logos/webpack-logo.svg'
import SassLogo from '../../assets/logos/sass-logo.svg'
import FirebaseLogo from '../../assets/logos/firebase-logo.svg'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGitHub from '@fortawesome/fontawesome-free-brands/faGithub'

export default function Footer () {
  return (
    <footer className='footer'>
      <div className='footer__behanced-logo'>
        <a href='/'>
          <LogoMini width={50} />
        </a>
      </div>

      <div className='footer__tech-container'>
        <div className='footer__adobe-behance'>
          <div className='footer__adobe-logo'>
            <a href='https://www.adobe.com/' target='_blank'>
              <AdobeLogo width={40} />
            </a>
          </div>
          <div className='footer__adobe-behance__divider'></div>
          <div className='footer__powered-by-behance'>
            <a href='https://www.behance.net/' target='_blank'>
              <PoweredByBehanceLogo width={100} />
            </a>
          </div>
        </div>

        <div className='footer__web-tech'>
          <p>and the following web technologies:</p>
          <ul className='footer__web-tech-list'>
            <li>
              <a href='https://reactjs.org/' target='_blank'>
                <ReactLogo width={65} />
              </a>
            </li>
            <li>
              <a href='https://babeljs.io/' target='_blank'>
                <BabelLogo width={80} />
              </a>
            </li>
            <li>
              <a href='https://webpack.js.org/' target='_blank'>
                <WebpackLogo width={45} />
              </a>
            </li>
            <li>
              <a href='https://sass-lang.com/' target='_blank'>
                <SassLogo width={40} />
              </a>
            </li>
            <li>
              <a href='https://firebase.google.com/' target='_blank'>
                <FirebaseLogo width={105} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <a className='footer__github-link' href='https://github.com/samsjchi/behanced'>
        <FontAwesomeIcon icon={faGitHub} />
        View on GitHub
      </a>

      <p className='footer__attribution'>Created by <a href='https://samchi.co/'>Sam Chi</a></p>
    </footer>
  )
}
