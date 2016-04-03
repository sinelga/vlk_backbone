import React from 'react'
import { Link } from 'react-router'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  padding: '10px 20px',
  overflow: 'hidden',
 /* background: dark,*/
  color: light
}

styles.link = {
  padding: 11,
  color: light,
  fontWeight: 600,
  fontSize: '180%'
  
  
  
}

styles.activeLink = {
  
  background: light,
  color: dark
}

class GlobalNav extends React.Component {

  constructor(props, context) {
    super(props, context)
//    this.logOut = this.logOut.bind(this)
  }

//  logOut() {
//    alert('log out')
//  }

  render() {
    const { user } = this.props

    return (
      <div style={styles.wrapper}>
        <div style={{ float: 'left' }}>
          <Link to="/" style={styles.link}>Главная</Link>{' '}
          <Link to="/2" style={styles.link} activeStyle={styles.activeLink}>Контакт</Link>{' '}
          <Link to="/blog" style={styles.link} activeStyle={styles.activeLink}>Блог</Link>{' '}

         
        </div>

      </div>
    )
  }
}

//GlobalNav.defaultProps = {
//  user: {
//    id: 1,
//    name: 'Ryan Florence'
//  }
//}

export default GlobalNav
