import React, { FunctionComponent, useEffect, useState } from 'react'
import { Line } from 'react-native-svg'

const CalendarCurrent: FunctionComponent<{}> = ({}: {}) => {
  const [y, sety] = useState<number>(getCurrentYPosition())
  useEffect(() => {
    const i = setInterval(function () {
      sety(getCurrentYPosition())
    }, 5000)
    return clearInterval(i)
  })
  function getCurrentYPosition() {
    return 5 + new Date().getHours() * 30 + (30 / 60) * new Date().getMinutes()
  }
  return <Line x1="0" y1={y} x2="300" y2={y} stroke="blue" strokeWidth="2" />
}

export default CalendarCurrent
