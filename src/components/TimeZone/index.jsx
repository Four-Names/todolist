import { Component } from 'react'
import { View } from '@tarojs/components'
import { Progress } from '@taroify/core'
import './index.scss'

export default class TimeZone extends Component {
  constructor(props) {
    super(props)
    this.getPercent = this.getPercent.bind(this)
  }



  getPercent() {
    if (this.props.dayInfo.tasks.length === 0) return 0
    return parseInt(100 * (this.props.dayInfo.tasks.filter(item => item.done).length / this.props.dayInfo.tasks.length))
  }

  render() {
    return (
      <View className='time_zone'>
        <View className='time'>
          {this.props.dayInfo.day}
        </View>

        {/* <Circle
          className='process'
          percent={this.getPercent()}
          color={{
            '0%': '#3fecff',
            '100%': '#6149f6'
          }}
          size={35}
        ></Circle> */}
        <Progress className='process_llne' percent={this.getPercent()} />
      </View>
    )
  }
}
