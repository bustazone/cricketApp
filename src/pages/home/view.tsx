import React, { FunctionComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CalendarGrid from './components/calendar_grid'
import { DayOfTheWeek } from 'models/day_routine'
import ActionModules from './components/actions_modules'
import { HomeViewProps } from 'pages/home/view.types'

const Color2: { [idx: string]: string } = DayOfTheWeek

const HomeView: FunctionComponent<HomeViewProps> = props => {
  const Tabs: string[] = ['ALL', ...Object.keys(Color2)]
  const [tab, setTab] = React.useState<DayOfTheWeek | undefined>(undefined)
  const [nowYPos, setNowYPos] = React.useState<number>(0)
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {Tabs.map(it => {
          const tabLabel: DayOfTheWeek | undefined =
            it === 'ALL' ? undefined : (DayOfTheWeek as any)[it]
          return (
            <TouchableOpacity
              key={it}
              style={{
                flex: 1,
                height: 30,
                borderWidth: 1,
              }}
              onPress={() => {
                setTab(tabLabel)
              }}>
              <Text
                key={it}
                style={{
                  textAlign: 'center',
                  lineHeight: 30,
                  color: '#000',
                }}>
                {it}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <CalendarGrid
        style={{ flex: 1, marginBottom: 50 }}
        type={tab ? 'day' : 'week'}
        day={tab}
        tasks={props.activeTasks}
      />
      <ActionModules />
    </View>
  )
}

export default HomeView
