import React from 'react'
import ProfileInfo from './profileInfo/ProfileInfo'
import ProfileWidgets from './profileWidgets/ProfileWidgets'
import ProjectWidgets from './profileWidgets/ProjectWidgets'

const Profile = () => {
  return (
    <>
      <ProfileInfo name='Thomas Adbuyers' walletAddress='EQDIpd5DBvwhP45fLWa54-VYlIIsjXrWPHwHKqmdASId5NP2' tonAmount='14,095' tonDelta='1,735' headline='Spent This Month'/>
      <ProfileWidgets />
      <ProjectWidgets />
      <ProjectWidgets />
    </>
  )
}

export default Profile