import { View } from '@tarojs/components'
import { Progress } from '@taroify/core'
import './index.scss'

export default function TimeZone(props) {

  const getPercent = () => {
    if (props.dayInfo.tasks.length === 0) return 0
    return parseInt(100 * (props.dayInfo.tasks.filter(item => item.done).length / props.dayInfo.tasks.length))
  }

  return (
    <View className='time_zone' onClick={props.handleClick}>
      <View className='time'>
        {props.dayInfo.day}
      </View>
      <Progress className='process_line' percent={getPercent()} />
    </View>
  )
}
