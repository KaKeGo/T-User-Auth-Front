import React, { Fragment } from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../actions/auth'


const Navbar = ({ isAuthenticated, logout }) => {
  
  const authLinks = (
    <Fragment>
      <NavLink to='/dashboard'>Dashboard</NavLink>
      <NavLink onClick={logout} to='/'>Logout</NavLink>
    </Fragment>
  )
  const guestLinks = (
    <Fragment>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>
    </Fragment>
  )

  return (
    <div>
      <div>
        <Link to='/'>Home</Link>
      </div>
      
      { isAuthenticated ? authLinks : guestLinks }

    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar)