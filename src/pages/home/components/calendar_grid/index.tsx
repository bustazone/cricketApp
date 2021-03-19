import React, { FunctionComponent, useMemo, useState } from 'react'
import { ScrollView, View } from 'react-native'
import Svg, { Line, G, Text } from 'react-native-svg'
import { W, H } from 'utils/screen_dimensions'
import { CalendarGridPropsType } from './index.type'
import CalendarTask from './components/calendar_task'
import CalendarCurrent from './components/calendar_current'
import { getTabsOrdered } from 'pages/home/utils'
import { DaysOfTheWeekEnum } from 'models/day_routine'

const CalendarGrid: FunctionComponent<CalendarGridPropsType> = ({
  day,
  activedTasks,
  tasks,
  style,
}: CalendarGridPropsType) => {
  const [YPos, setYPos] = useState<number>(0)
  const tabsOrdered: string[] = useMemo(() => {
    return getTabsOrdered()
  }, [])
  function moveCursor(pos: number) {
    if (H / 2 < pos) {
      setYPos(pos)
    }
  }
  return (
    <View style={style}>
      {day === undefined ? (
        <Svg style={{ height: (W / 300) * 30, width: W }} viewBox="0 0 300 30">
          {tabsOrdered.map((it, index) => {
            return (
              <Text
                key={Math.random()}
                fill="black"
                fontSize="20"
                x={24 + (index + 0.5) * ((300 - 48) / tabsOrdered.length)}
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
            {DaysOfTheWeekEnum[day]}
          </Text>
        </Svg>
      )}
      <ScrollView style={{ flex: 1 }} bounces={false} contentOffset={{ x: 0, y: YPos }}>
        <Svg style={{ height: (W / 300) * 730, width: W }} viewBox="0 0 300 730">
          {[...Array(8).keys()].map(it => {
            if (day === undefined || it === 0 || it === 7)
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
          {activedTasks.map(task => {
            const column = tabsOrdered.indexOf(DaysOfTheWeekEnum[new Date(task.dateAlarm).getDay()])
            return (
              <CalendarTask
                key={Math.random()}
                type={day === undefined ? 'week' : 'day'}
                task={tasks.find(i => i.id === task.referenced_task)!}
                totalColumsCount={day === undefined ? 7 : 1}
                currentColumn={day === undefined ? column : 0}
              />
            )
          })}
          <CalendarCurrent scrollYPos={moveCursor} />
        </Svg>
      </ScrollView>
    </View>
  )
}

export default CalendarGrid
