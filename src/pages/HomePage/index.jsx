import React from 'react'
import HomeTitle from '../../components/HomeTitle'
import Stats from '../../components/Stats'
import Services from '../../components/Services'
import CoreValue from '../../components/CoreValue'
import Vision from '../../components/VisionMission'
import VisionMission from '../../components/VisionMission'
import Work from '../../components/Work'

function HomePage() {
  return (
    <div>
        <HomeTitle />
        <Stats />
        <Services />
        <CoreValue />
        <VisionMission />
        <Work />
    </div>
  )
}

export default HomePage