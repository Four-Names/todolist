import { Component } from 'react'
import { View } from '@tarojs/components'
import { DAY_ADD_TASK } from '../../store/action'
import { connect } from 'react-redux'
import { Button } from '@taroify/core'

import './index.scss'

class AddTask extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View className='add_task' onClick={this.props.addDayTask}>
        添加任务
      </View>
    )
  }
}

//触发dispath
const mapDispatchToProps = dispatch => {
  // 默认传递参数就是dispatch
  return {
    addDayTask: () => {
      dispatch(DAY_ADD_TASK())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTask)
