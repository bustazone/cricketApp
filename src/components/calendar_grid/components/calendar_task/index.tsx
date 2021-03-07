import React, { FunctionComponent } from 'react'
import { Text as Txt } from 'react-native'
import { G, Rect, Text, ForeignObject } from 'react-native-svg'
import { CalendarTaskPropsType } from 'components/calendar_grid/components/calendar_task/index.type'

const CalendarTask: FunctionComponent<CalendarTaskPropsType> = ({
  type,
  task,
}: CalendarTaskPropsType) => {
  if (type === 'week') {
    return (
      <G>
        <Rect
          x={24 + ((300 - 48) / 7) * task.referenced_task.hourStart.getDay()}
          y={
            5 +
            task.referenced_task.hourStart.getHours() * 30 +
            (30 / 60) * task.referenced_task.hourStart.getMinutes()
          }
          width={(300 - 48) / 7}
          height={(30 / 60) * task.referenced_task.durationMinutes}
          strokeWidth="1"
          stroke="black"
          fill="#87687590"
        />
        <ForeignObject
          x={24 + ((300 - 48) / 7) * task.referenced_task.hourStart.getDay()}
          y={
            5 +
            task.referenced_task.hourStart.getHours() * 30 +
            (30 / 60) * task.referenced_task.hourStart.getMinutes()
          }
          width={(300 - 48) / 7}
          height={(30 / 60) * task.referenced_task.durationMinutes}>
          <Txt
            style={{
              fontSize: 10,
              flexWrap: 'wrap-reverse',
              width: (300 - 48) / 7,
              height: (30 / 60) * task.referenced_task.durationMinutes,
              textAlign: 'center',
              padding: 2,
            }}>
            {task.referenced_task.name}
          </Txt>
        </ForeignObject>
      </G>
    )
  } else if (type === 'day') {
    return (
      <G>
        <Rect
          x={24}
          y={
            5 +
            task.referenced_task.hourStart.getHours() * 30 +
            (30 / 60) * task.referenced_task.hourStart.getMinutes()
          }
          width="252"
          height={(30 / 60) * task.referenced_task.durationMinutes}
          strokeWidth="1"
          stroke="black"
          fill="#87687590"
        />
        <Text
          fill="purple"
          fontSize="20"
          x="150"
          y={
            5 +
            task.referenced_task.hourStart.getHours() * 30 +
            (30 / 60) * task.referenced_task.hourStart.getMinutes() +
            (30 / 60) * (task.referenced_task.durationMinutes / 2)
          }
          textAnchor="middle"
          alignmentBaseline="central">
          {task.referenced_task.name}
        </Text>
      </G>
    )
  } else return null
}

export default CalendarTask
