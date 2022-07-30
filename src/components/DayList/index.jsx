import { View, Text } from '@tarojs/components'
import { Flex } from '@taroify/core'
import { connect } from 'react-redux'
import TimeZone from '../TimeZone'
import { Component } from 'react'
import { DAY_CHOOSED } from '../../store/action'

import './index.scss'

class DayList extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(dayInfo) {
    console.log(dayInfo,'DAYiNFO');
    this.props.adyChoose(dayInfo)
    Taro.navigateTo({
      url: '/pages/detail/index'
    })
  }

  render() {
    return (
      <View className='day_list'>
        <Flex justify='center'>
          <Flex.Item span='22'>
            {this.props.dayLists.map(dayInfo => (
              <TimeZone dayInfo={dayInfo} onClick={() => this.handleClick(dayInfo)} />
            ))}
          </Flex.Item>
        </Flex>
      </View>
    )
  }
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
    adyChoose: payload => {
      dispatch(DAY_CHOOSED(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayList)
