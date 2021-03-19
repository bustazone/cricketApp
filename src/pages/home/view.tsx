import React, { FunctionComponent, useMemo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CalendarGrid from './components/calendar_grid'
import { ActiveTask, DaysOfTheWeekEnum } from 'models/day_routine'
import ActionModules from './components/actions_modules'
import { HomeViewProps } from 'pages/home/view.types'
import { getTabsOrdered } from 'pages/home/utils'

const HomeView: FunctionComponent<HomeViewProps> = props => {
  const Tabs: string[] = useMemo(() => {
    return ['ALL', ...getTabsOrdered()]
  }, [])
  const [tab, setTab] = React.useState<DaysOfTheWeekEnum | undefined>(undefined)
  const activeTasks: ActiveTask[] = useMemo(() => {
    if (tab !== undefined) {
      return props.activeTasks.filter(it => {
        return (
          new Date(props.tasks.find(i => it.referenced_task === i.id)!.hourStart).getDay() ===
          tab.valueOf()
        )
      })
    } else {
      return props.activeTasks
    }
  }, [tab, props.activeTasks, props.tasks])
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {Tabs.map(it => {
          const tabLabel: DaysOfTheWeekEnum | undefined =
            it === 'ALL' ? undefined : (DaysOfTheWeekEnum as any)[it]
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
        day={tab}
        activedTasks={activeTasks}
        tasks={props.tasks}
      />
      <ActionModules />
    </View>
  )
}

export default HomeView
