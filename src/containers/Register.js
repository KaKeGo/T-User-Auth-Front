import React, {useState} from 'react'
import {Navigate, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../actions/auth'
import CSRFToken from '../components/CSRFToken'


const Register = ({register, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    re_password: '',
  })

  const [accountCreated, setAccountCreated] = useState(false)

  const {username, password, re_password} = formData

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    
    if (password === re_password) {
      register(username, password, re_password)
      setAccountCreated(true)
    }
  }

  if (isAuthenticated)
    return <Navigate to='/dashboard' />
  else if (accountCreated)
    return <Navigate to='/login' />

  return (
    <div>
      <h1>Register</h1>
      <p>Create an account with our session auth application</p>
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
            minLength='1'
            maxLength='16'
            required
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input 
            type='password'
            placeholder='Comfirm Password'
            name='re_password'
            onChange={e => onChange(e)}
            value={re_password}
            minLength='1'
            maxLength='16'
            required
          />
        </div>

        <button type='submit'>Register</button>
        <p>
          Already have an Account? <Link to='/login'>Sign in</Link>
        </p>

      </form>
    </div>
  )
}

const mapStateProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateProps, {register}) (Register)