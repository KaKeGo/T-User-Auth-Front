import React, {useEffect, Fragment} from 'react'
import { connect } from 'react-redux'
import { load_user } from '../actions/profile'

import Navbar from '../components/Navbar'

import { checkAuthenticated } from '../actions/auth'

const Layout = ({ children, checkAuthenticated, load_user }) => {
  useEffect(() => {
    checkAuthenticated()
    load_user()
  })

  return (
    <Fragment>
      <Navbar />
      { children }
    </Fragment>
  )
}

export default connect(null, { checkAuthenticated, load_user })(Layout)