import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import { DAY_TASK_COMPLETED } from '../../store/action'

import './index.scss'

function Item(props) {

  const [state, setState] = useState(props.taskInfo.done);

  const handleState = () => {
    setState(!state);
    props.dayTaskCompleted({ done: !state, idx: props.idx });
  }

  return (
    <View className='item' onClick={() => handleState()}>
      {state ?
        <Text className='checked'>{props.taskInfo.title}</Text>
        : <Text>{props.taskInfo.title}</Text>
      }
    </View>
  )
}

//触发dispath
const mapDispatchToProps = dispatch => {
  // 默认传递参数就是dispatch
  return {
    dayTaskCompleted: payload => {
      dispatch(DAY_TASK_COMPLETED(payload))
    },
  }
}


export default connect(null, mapDispatchToProps)(Item)
