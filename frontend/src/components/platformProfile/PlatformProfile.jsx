import React from 'react'
import './platformProfile.css'
import ProfileInfo from '../profile/profileInfo/ProfileInfo'
import ProfileWidgets from '../profile/profileWidgets/ProfileWidgets'
import ProjectWidgets from '../profile/profileWidgets/ProjectWidgets'

const PlatformProfile = () => {
    return (
        <>
            <ProfileInfo name='New York Times Ads' walletAddress='ggj589GH(ghe59heg589ht9hi;' tonAmount='438,504' tonDelta='32,524' headline='Earned This Month'/>
            <ProfileWidgets />
            <ProjectWidgets />
            <ProjectWidgets />
        </>
    )
}

export default PlatformProfile