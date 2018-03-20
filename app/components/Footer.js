import React from 'react'

import LogoMini from '../assets/behanced-logo-mini.svg'

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
            Adobe Logo
          </div>
          <div className='footer__powered-by-behance'>
            Powered by Behance Logo
          </div>
        </div>

        <div className='footer__web-tech'>
          <p>...and the following web technologies:</p>
          <ul className='footer__web-tech-list'>
            <li>React</li>
            <li>Babel</li>
            <li>webpack</li>
            <li>Sass</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>

      <div className='footer__github-link'>
        VIEW ON GITHUB
      </div>
    </footer>
  )
}
