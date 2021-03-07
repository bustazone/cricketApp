import React, { FunctionComponent } from 'react'
import { ScrollView, View } from 'react-native'
import Svg, { Line, G, Text } from 'react-native-svg'
import { W } from 'utils/screen_dimensions'
import { CalendarGridPropsType } from 'components/calendar_grid/index.type'
import { DayOfTheWeek } from 'models/day_routine'
import CalendarTask from 'components/calendar_grid/components/calendar_task'
import CalendarCurrent from 'components/calendar_grid/components/calendar_current'

const CalendarGrid: FunctionComponent<CalendarGridPropsType> = ({
  type,
  day,
  tasks,
  style,
}: CalendarGridPropsType) => {
  const daysOfWeek = Object.values(DayOfTheWeek).reduce<string[]>((arr, key) => {
    if (typeof key === 'string') {
      arr.push(key)
    }
    return arr
  }, [])
  return (
    <View style={style}>
      {type === 'week' ? (
        <Svg style={{ height: (W / 300) * 30, width: W }} viewBox="0 0 300 30">
          {daysOfWeek.map((it, index) => {
            return (
              <Text
                key={Math.random()}
                fill="black"
                fontSize="20"
                x={24 + (index + 0.5) * ((300 - 48) / daysOfWeek.length)}
                y={15}
                textAnchor="middle"
                alignmentBaseline="central">
                {it}
              </Text>
            )
          })}
        </Svg>
      ) : (
        <Svg style={{ height: (W / 300) * 30, width: W }} viewBox="0 0 300 30">
          <Text
            fill="black"
            fontSize="20"
            x={150}
            y={15}
            textAnchor="middle"
            alignmentBaseline="central">
            {day}
          </Text>
        </Svg>
      )}
      <ScrollView style={{ flex: 1 }} bounces={false}>
        <Svg style={{ height: (W / 300) * 730, width: W }} viewBox="0 0 300 730">
          {[...Array(8).keys()].map(it => {
            if (type === 'week' || it === 0 || it === 7)
              return (
                <Line
                  key={Math.random()}
                  x1={24 + it * ((300 - 48) / 7)}
                  y1={5}
                  x2={24 + it * ((300 - 48) / 7)}
                  y2={725}
                  stroke="black"
                  strokeWidth="1"
                  // strokeDasharray={4}
                  opacity={0.5}
                />
              )
          })}

          {[...Array(25).keys()].map(it => {
            return (
              <G key={Math.random()}>
                <Text
                  fill="black"
                  fontSize="10"
                  x="8"
                  y={5 + it * 30}
                  textAnchor="middle"
                  alignmentBaseline="central">
                  {`${it}`}
                </Text>
                <Line
                  x1="16"
                  y1={5 + it * 30}
                  x2="284"
                  y2={5 + it * 30}
                  stroke="black"
                  strokeWidth="1"
                  // strokeDasharray={4}
                  opacity={0.5}
                />
                <Text
                  fill="black"
                  fontSize="10"
                  x="292"
                  y={5 + it * 30}
                  textAnchor="middle"
                  alignmentBaseline="central">
                  {`${it}`}
                </Text>
              </G>
            )
          })}
          {tasks.map(task => {
            return <CalendarTask key={Math.random()} type={type} task={task} />
          })}
          <CalendarCurrent />
        </Svg>
      </ScrollView>
    </View>
  )
}

export default CalendarGrid
