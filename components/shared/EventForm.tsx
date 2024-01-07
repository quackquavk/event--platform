"use client"
import { type } from 'os'
import React from 'react'

type EventFormProps= {
    userId : string,
    type : 'Create' | 'Update'
}


const EventForm = ({userId , type}:EventFormProps) => {
  return (
    <div>
      {type}
    </div>
  )
}

export default EventForm
