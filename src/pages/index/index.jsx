import { View } from '@tarojs/components'
import { Sticky } from '@taroify/core'
import { Add } from '@taroify/icons'
import CreateDay from '../../components/CreateDay'
import DayList from '../../components/DayList'
import { DAY_ADD_SHOW } from '../../store/action'
import { connect } from 'react-redux'
import './index.scss'

function Index(props) {
  return (
    <View className='index'>
      <DayList />

      <View className='btn_create'>
        <Sticky position='bottom' offsetBottom={30}>
          <Add size='50' style={{ color: '#7232dd' }} onClick={props.addDayList} />
        </Sticky>
      </View>

      {props.createDayList && <CreateDay />}
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
    addDayList: () => {
      dispatch(DAY_ADD_SHOW())
    },

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
