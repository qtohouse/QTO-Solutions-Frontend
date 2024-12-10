import React from 'react'
import AboutTitle from '../../components/AboutTitle'
import AboutUsMain from '../../components/AboutUsMain'
import ChooseQTO from '../../components/ChooseQTO'
import Experience from '../../components/Experience'
import Reviews from '../../components/Reviews'
import Work from '../../components/Work'

function About() {
  return (
    <div>
      <AboutTitle />
      <AboutUsMain />
      <ChooseQTO />
      <Experience />
      <Reviews />
      <Work />
    </div>
  )
}

export default About