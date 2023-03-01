import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { connect } from 'react-redux'


const PrivateRoutes = ({ isAuthenticated }) => {
    return (
        isAuthenticated ? <Outlet /> : <Navigate to='/login' />
    )
}
const mapStateProps = state => ({
isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateProps, {})(PrivateRoutes)