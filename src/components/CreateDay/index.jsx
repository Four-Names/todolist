import { useState } from 'react'
import { View } from '@tarojs/components'
import { Calendar, Popup } from '@taroify/core'
import { connect } from 'react-redux'
import { CREATE_DAY_LIST, DAY_ADD_HIDE } from '../../store/action'

import './index.scss'
function CreateDay(props) {


  let record = 0;

  const dayFormatter = (day) => {
    if (record < props.dayChosen.length) {
      let { value } = day;
      value = value.toLocaleDateString();
      if (props.dayChosen.includes(value)) {
        record++;
        day.type = 'disabled';
      }
    }

    return day
  }

  const [day, setDay] = useState(null)

  return (
    <View className='day'>
      <Popup style={{ height: '80%' }} open={true} rounded placement='bottom' onClose={props.resolveClose}>
        <Calendar
          type='single'
          value={day}
          onChange={setDay}
          onConfirm={props.handleNewValue}
          formatter={dayFormatter}
        >
          <Calendar.Footer>
            <Calendar.Button type='confirm'>确定</Calendar.Button>
          </Calendar.Footer>
        </Calendar>
      </Popup>
    </View>
  )
}

//获取数据
const mapStateToProps = state => {
  const dayChosen = state.dayLists.filter(({ day }) => new Date(day) >= new Date().getDate()).map(({ day }) => day)
  const { createDayList } = state
  return {
    createDayList,
    dayChosen
  }
}

//触发dispath
const mapDispatchToProps = dispatch => {
  // 默认传递参数就是dispatch
  return {
    handleNewValue: payload => {
      dispatch(CREATE_DAY_LIST(payload))
    },
    resolveClose: () => {
      dispatch(DAY_ADD_HIDE())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDay)
