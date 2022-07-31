import { View } from '@tarojs/components'
import { OPEN_TASK_DIALOG } from '../../store/action'
import { connect } from 'react-redux'

import './index.scss'

function AddTaskButton(props) {

  return (
    <View className='add_task_button' onClick={props.openTaskDialog}>
      添加任务
    </View>
  )
}

//触发dispath
const mapDispatchToProps = dispatch => {
  // 默认传递参数就是dispatch
  return {
    openTaskDialog: () => {
      dispatch(OPEN_TASK_DIALOG())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTaskButton)
