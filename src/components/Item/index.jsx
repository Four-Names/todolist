import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'

import './index.scss'

class Item extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View className='item'>
        {this.props.done ? <Text className='checked'>The Force Awakens</Text> : <Text>The Force Awakens</Text>}
      </View>
    )
  }
}




export default connect()(Item)
