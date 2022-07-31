const defaultState = {
  createDayList: false,
  choosedDayInfo: {},
  dayLists: [
    {
      day: '2020-7-2',
      tasks: [
        {
          titile: '任务一',
          done: false
        },
        {
          titile: '任务二',
          done: true
        },
        {
          titile: '任务三',
          done: true
        }
      ]
    },
    {
      day: '2020-7-3',
      tasks: [
        {
          titile: '任务一',
          done: false
        }
      ]
    },
    {
      day: '2020-7-4',
      tasks: [
        {
          titile: '任务一',
          done: false
        },
        {
          titile: '任务二',
          done: true
        },
        {
          titile: '任务三',
          done: true
        },
        {
          titile: '任务四',
          done: true
        }
      ]
    },
    {
      day: '2020-7-5',
      tasks: [
        {
          titile: '任务一',
          done: false
        },
        {
          titile: '任务二',
          done: true
        }
      ]
    },
    {
      day: '2020-7-6',
      tasks: [
        {
          titile: '任务一',
          done: false
        },
        {
          titile: '任务二',
          done: true
        },
        {
          titile: '任务三',
          done: true
        }
      ]
    }
  ],
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  const { payload } = action
  console.log('action', payload, newState, action)

  switch (action.type) {
    case 'day/add': {
      newState.dayLists.push({
        day: payload.toLocaleDateString().replaceAll('/', '-'),
        tasks: []
      })
      newState.createDayList = false
      return newState
    }
    case 'day/del': {
      return {
        ...newState,
        dayLists: newState.dayLists.filter(day => day !== payload)
      }
    }
    case 'day/tasks/add': {
      return newState
    }
    case 'day/tasks/del': {
      return newState
    }
    case 'day/task/complete':{
      return newState
    }
    case 'day/add/hide': {
      return {
        ...newState,
        createDayList: false
      }
    }
    case 'day/add/show': {
      return {
        ...newState,
        createDayList: true
      }
    }
    case 'day/choosed': {
      return {
        ...newState,
        choosedDayInfo: JSON.parse(JSON.stringify(newState.dayLists[payload]))
      }
    }

    default:
      return newState
  }
}
