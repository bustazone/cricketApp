import React, { Component } from 'react'
import { Line } from 'react-native-svg'
import {
  CalendarCurrentLineViewProps,
  CalendarCurrentLineViewState,
} from 'pages/home/components/calendar_grid/components/calendar_current/index.types'

class CalendarCurrent extends Component<
  CalendarCurrentLineViewProps,
  CalendarCurrentLineViewState
> {
  interval: number | undefined
  constructor(props: CalendarCurrentLineViewProps) {
    super(props)
    this.state = {
      yPosition: this.getNewYPosition(),
    }
    props.scrollYPos(this.state.yPosition)
    this.updateYPosition = this.updateYPosition.bind(this)
  }

  getNewYPosition() {
    return 5 + new Date().getHours() * 30 + (30 / 60) * new Date().getMinutes()
  }

  componentDidMount() {
    // @ts-ignore
    this.interval = setInterval(this.updateYPosition, 5000)
  }

  componentWillUnmount() {
    this.interval && clearInterval(this.interval)
  }

  updateYPosition() {
    this.setState({ yPosition: this.getNewYPosition() })
  }

  render() {
    return (
      <Line
        x1="0"
        y1={this.state.yPosition}
        x2="300"
        y2={this.state.yPosition}
        stroke="blue"
        strokeWidth="2"
      />
    )
  }
}

export default CalendarCurrent
