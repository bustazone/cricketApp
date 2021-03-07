import React from 'react'
import { View } from 'react-native'
import CalendarGrid from 'components/calendar_grid'
import { DayOfTheWeek } from 'models/day_routine'

const HomeView = () => {
  return (
    <View style={{ flex: 1 }}>
      <CalendarGrid
        style={{ flex: 1 }}
        type={'week'}
        day={DayOfTheWeek.X}
        tasks={[
          {
            date: new Date(),
            mute: false,
            referenced_task: {
              // hourStart: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
              hourStart: new Date(),
              durationMinutes: 120,
              name: 'josjosjso',
              message: 'lkjsldkjsdlfkjsdflk',
              notes: 'lidflksjdlfk',
            },
          },
        ]}
      />
    </View>
  )
}

export default HomeView
