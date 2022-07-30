import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Calendar, Popup } from '@taroify/core'
import { connect } from 'react-redux'
import { CREATE_DAY_LIST, DAY_ADD_HIDE } from '../../store/action'

import './index.scss'
function CreateDay(props) {
  const [day, setDay] = useState(new Date())
  return (
    <View className='day'>
      <Popup style={{ height: '80%' }} open={true} rounded placement='bottom' onClose={props.resolveClose}>
        <Calendar
          type='single'
          value={day}
          onChange={setDay}
          onConfirm={props.handleNewValue}
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
  const { createDayList } = state
  return {
    createDayList
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
