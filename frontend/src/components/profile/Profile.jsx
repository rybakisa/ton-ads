import React from 'react'
import ProfileInfo from './profileInfo/ProfileInfo'
import ProfileWidgets from './profileWidgets/ProfileWidgets'
import ProjectWidgets from './profileWidgets/ProjectWidgets'

const Profile = () => {
  return (
    <>
      <ProfileInfo />
      <ProfileWidgets />
      <ProjectWidgets />
      <ProjectWidgets />
    </>
  )
}

export default Profile