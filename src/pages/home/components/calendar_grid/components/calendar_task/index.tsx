import React, { FunctionComponent } from 'react'
import { Text } from 'react-native'
import { G, Rect, ForeignObject } from 'react-native-svg'
import { CalendarTaskPropsType } from 'pages/home/components/calendar_grid/components/calendar_task/index.type'

const CalendarTask: FunctionComponent<CalendarTaskPropsType> = ({
  task,
  totalColumsCount = 1,
  currentColumn = 0,
}: CalendarTaskPropsType) => {
  return (
    <G>
      <Rect
        x={24 + ((300 - 48) / totalColumsCount) * currentColumn}
        y={
          5 +
          new Date(task.hourStart).getHours() * 30 +
          (30 / 60) * new Date(task.hourStart).getMinutes()
        }
        width={(300 - 48) / totalColumsCount}
        height={(30 / 60) * task.durationMinutes}
        strokeWidth="1"
        stroke="black"
        fill="#87687590"
      />
      <ForeignObject
        x={24 + ((300 - 48) / totalColumsCount) * currentColumn}
        y={
          5 +
          new Date(task.hourStart).getHours() * 30 +
          (30 / 60) * new Date(task.hourStart).getMinutes()
        }
        width={(300 - 48) / totalColumsCount}
        height={(30 / 60) * task.durationMinutes}>
        <Text
          style={{
            fontSize: 10,
            flexWrap: 'wrap-reverse',
            width: (300 - 48) / totalColumsCount,
            height: (30 / 60) * task.durationMinutes,
            textAlign: 'center',
            padding: 2,
          }}>
          {task.name}
        </Text>
      </ForeignObject>
    </G>
  )
}

export default CalendarTask
