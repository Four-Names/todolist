import { View } from '@tarojs/components'
import { Flex } from '@taroify/core'
import { connect } from 'react-redux'
import TimeZone from '../TimeZone'
import { DAY_CHOSE } from '../../store/action'
import Taro from '@tarojs/taro'

import './index.scss'

function DayList(props) {

  const handleClick = (idx) => {
    props.dayChoose(idx);
    Taro.navigateTo({
      url: '/pages/detail/index'
    })
  }

  return (
    <View className='day_list'>
      <Flex justify='center'>
        <Flex.Item span='22'>
          {props.dayLists.map((dayInfo, idx) => (
            <TimeZone dayInfo={dayInfo} handleClick={() => handleClick(idx)} />
          ))}
        </Flex.Item>
      </Flex>
    </View>
  )
}

//获取数据
const mapStateToProps = state => {
  const { dayLists } = state
  return {
    dayLists
  }
}

//触发dispath
const mapDispatchToProps = dispatch => {
  // 默认传递参数就是dispatch
  return {
    dayChoose: payload => {
      dispatch(DAY_CHOSE(payload))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayList)
