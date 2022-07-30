import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Item from '../../components/Item'
import AddTask from '../../components/AddTask'
import { Flex } from '@taroify/core'
import {  DAY_TASK_COMPLETE } from '../../store/action'

import './index.scss'

function Detail(props) {
  return (
    <View className='detail'>
      <Flex justify='center'>
        <Flex.Item span='22'>
          {props.choosedDayInfo.map((v, i) => {
            return <Item hanldeClick={props.dayTaskComplte(i)} />
          })}
        </Flex.Item>
      </Flex>

      <AddTask />
    </View>
  )
}

//获取数据
const mapStateToProps = state => {
  const { choosedDayInfo } = state
  return {
    choosedDayInfo
  }
}

//触发dispath
const mapDispatchToProps = dispatch => {
  // 默认传递参数就是dispatch
  return {
    dayTaskComplte: payload => {
      dispatch(DAY_TASK_COMPLETE(payload))
    },
    adyChoose: payload => {
      dispatch(DAY_CHOOSED(payload))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
