import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'


import { update_profile } from '../actions/profile'
import { delete_account } from '../actions/auth'


const Dashboard = ({
  delete_account,
  update_profile,
  first_name_global,
  last_name_global,
  phone_global,
  city_global
}) => {
  // const [profileUpdated, setProfileUpdated] = useState(false)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    city: ''
  })

  const { first_name, last_name, phone, city } = formData

  useEffect(() => {
    setFormData({
      first_name: first_name_global,
      last_name: last_name_global,
      phone: phone_global,
      city: city_global
    })
  }, [first_name_global])

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })

  const onSubmit = e => {
    e.preventDefault()

    update_profile(first_name, last_name, phone, city)

    // const updateProfile = async () => {
    //   await update_profile(first_name, last_name, phone, city)
    //   setProfileUpdated(!profileUpdated)
    // }
    // updateProfile()
  }

  return (
    <div>
      <h2>Welcome to your user Dashboard</h2>
      <p>Update your user profile below:</p>
      <form onSubmit={e => onSubmit(e)}>
        <div>
          <label htmlFor='first_name'>First name</label>
          <input 
            type='text'
            name='first_name'
            placeholder={`${first_name_global}`}
            onChange={e => onChange(e)}
            value={first_name}
          />
        </div>

        <div>
          <label htmlFor='last_name'>Last name</label>
          <input 
            type='text'
            name='last_name'
            placeholder={`${last_name_global}`}
            onChange={e => onChange(e)}
            value={last_name}
          />
        </div>

        <div>
          <label htmlFor='phone'>Phone</label>
          <input 
            type='text'
            name='phone'
            placeholder={`${phone_global}`}
            onChange={e => onChange(e)}
            value={phone}
          />
        </div>

        <div>
          <label htmlFor='city'>City</label>
          <input 
            type='text'
            name='city'
            placeholder={`${city_global}`}
            onChange={e => onChange(e)}
            value={`${city}`}
          />
        </div>
        <button type='submit'>Update Profile</button>
      </form>
      <p>
        Click the button below to delete your user account
      </p>
      <a
        href='/'
        onClick={delete_account}
      >
        Delete Account
      </a>
    </div>
  )
}

const mapStateToProps = state => ({
  first_name_global: state.profile.first_name,
  last_name_global: state.profile.last_name,
  phone_global: state.profile.phone,
  city_global: state.profile.city,
})

export default connect(mapStateToProps, { 
  delete_account,
  update_profile 
})(Dashboard)