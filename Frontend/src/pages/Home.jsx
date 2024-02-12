import React from 'react'
import { Slider } from './Slider'
import BookAppointment from './BookAppointment'
import DoctorSuggestion from './DoctorSuggestion'

export const Home = () => {
  return (
    <div>
      <Slider/>
      <BookAppointment/>
      <DoctorSuggestion/>
      
    </div>
  )
}
