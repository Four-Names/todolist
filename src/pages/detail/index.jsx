import { View } from '@tarojs/components'
import Item from '../../components/Item'
import AddTask from '../../components/AddTaskButton'
import { Flex } from '@taroify/core'
import { connect } from 'react-redux'
import AddTaskDialog from '../../components/AddTaskDialog'
import './index.scss'

function Detail(props) {
  return (
    <View className='detail'>
      <Flex justify='center'>
        <Flex.Item span='22'>
          {props.chooseyDayInfo.tasks.map((taskInfo, idx) => {
            return <Item idx={idx} taskInfo={taskInfo} />
          })}
        </Flex.Item>
      </Flex>

      <AddTask />
      {props.openDialog && <AddTaskDialog />}
    </View>
  )
}

//获取数据
const mapStateToProps = state => {
  const chooseyDayInfo = state.dayLists[state.chooseIdx];
  const { openDialog } = state;
  return {
    chooseyDayInfo,
    openDialog
  }
}




export default connect(
  mapStateToProps,
)(Detail)
