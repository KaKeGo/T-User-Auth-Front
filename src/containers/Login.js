import React, {useState} from 'react'
import {Navigate, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions/auth'
import CSRFToken from '../components/CSRFToken'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const { username, password } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value })

  const onSubmit = e => {
    e.preventDefault()

    login(username, password)
  }

  if (isAuthenticated)
    return <Navigate to='/dashboard' />

  return (
    <div>
      <h1>Login</h1>
      
      <form onSubmit={e => onSubmit(e)}>
        <CSRFToken />

        <div>
          <label>Username: </label>
          <input 
            type='text'
            placeholder='Username'
            name='username'
            onChange={e => onChange(e)}
            value={username}
            required
          />
        </div>

        <div>
          <label>Password: </label>
          <input 
            type='password'
            placeholder='Password'
            name='password'
            onChange={e => onChange(e)}
            value={password}
            required
          />
        </div>

        <button type='submit'>Login</button>
      </form>
      <p>
        Don't have any account? <Link to='/register'>Sign up</Link>
      </p>
    </div>
  )
}

const mapStateProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateProps, { login })(Login)