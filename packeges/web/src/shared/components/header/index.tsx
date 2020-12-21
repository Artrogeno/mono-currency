import React from 'react'

import Hamburger from '../hamburger'
import Fullscreen from '../fullscreen'
import {
  Content,
  WrapLogo,
  WrapToggle,
  WrapFullscreen,
  WrapNav,
  Link,
  Logo,
} from './styles'

const Header: React.FC = () => {
  return (
    <Content>
      <WrapLogo>
        <Logo icon={['fab', 'phoenix-framework']} />
      </WrapLogo>
      <WrapToggle>
        <Hamburger />
      </WrapToggle>
      <WrapFullscreen>
        <Fullscreen />
      </WrapFullscreen>
      <WrapNav>
        <Link activeClassName="active" to="/pipelines">
          Pipelines
        </Link>
        <Link activeClassName="active" to="/codes">
          Codes
        </Link>
        <Link activeClassName="active" to="/activity">
          Activity
        </Link>
      </WrapNav>
    </Content>
  )
}

export default Header
