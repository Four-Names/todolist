import { Component, Fragment } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Sticky } from '@taroify/core'
import { Add } from '@taroify/icons'
import CreateDay from '../../components/CreateDay'
import DayList from '../../components/DayList'
import { DAY_ADD_SHOW } from '../../store/action'
import { connect } from 'react-redux'
import './index.scss'

class Index extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    console.log(this.props, 'props')
  }

  handleClick() {
    Taro.navigateTo({
      url: '/pages/detail/index'
    })
  }

  render() {
    return (
      <View className='index'>
        <DayList />

        <View className='btn_create'>
          <Sticky position='bottom' offsetBottom={30}>
            <Add size='50' style={{ color: '#7232dd' }} onClick={this.props.addDayList} />
          </Sticky>
        </View>

        {this.props.createDayList && <CreateDay />}
      </View>
    )
  }
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
