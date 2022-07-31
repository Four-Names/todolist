const defaultState = {
  createDayList: false,
  chooseIdx: -1,
  recordDay: 0,
  openDialog: false,
  dayLists: [
    {
      day: "2022/7/31",
      tasks: [
        {
          title: "任务一",
          done: false
        },
        {
          title: "任务二",
          done: true
        },
        {
          title: "任务三",
          done: true
        }
      ]
    },
    {
      day: "2022/8/3",
      tasks: [
        {
          title: "任务一",
          done: false
        }
      ]
    },
    {
      day: "2022/8/4",
      tasks: [
        {
          title: "任务一",
          done: false
        },
        {
          title: "任务二",
          done: true
        },
        {
          title: "任务三",
          done: true
        },
        {
          title: "任务四",
          done: true
        }
      ]
    },
    {
      day: "2022/8/5",
      tasks: [
        {
          title: "任务一",
          done: false
        },
        {
          title: "任务二",
          done: true
        }
      ]
    },
    {
      day: "2022/8/6",
      tasks: [
        {
          title: "任务一",
          done: false
        },
        {
          title: "任务二",
          done: true
        },
        {
          title: "任务三",
          done: true
        }
      ]
    }
  ]
};
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const { payload } = action;
  console.log("action", payload, newState, action);

  switch (action.type) {
    case "day/add": {
      newState.dayLists.push({
        day: payload.toLocaleDateString(),
        tasks: []
      });
      newState.dayLists.sort((x, y) => {
        const day1 = x.day;
        const day2 = y.day;
        if (day1 === day2) return 0;
        return Date.parse(day1) - Date.parse(day2);
      });
      newState.createDayList = false;
      return newState;
    }
    case "day/del": {
      return {
        ...newState,
        dayLists: newState.dayLists.filter(day => day !== payload)
      };
    }
    case "day/tasks/add": {
      return newState;
    }
    case "day/tasks/del": {
      return newState;
    }
    case "day/task/complete": {
      const { done, idx } = payload;
      newState.dayLists[newState.chooseIdx].tasks[idx].done = done;
      return {
        ...newState
      };
    }
    case "day/add/hide": {
      return {
        ...newState,
        createDayList: false
      };
    }
    case "day/add/show": {
      return {
        ...newState,
        createDayList: true
      };
    }
    case "day/chose": {
      return {
        ...newState,
        chooseIdx: payload
      };
    }
    case "task/open/dialog": {
      return {
        ...newState,
        openDialog: true
      };
    }
    case "task/close/dialog": {
      return {
        ...newState,
        openDialog: false
      };
    }

    default:
      return newState;
  }
};
