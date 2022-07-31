import { useState } from 'react'
import { connect } from 'react-redux'
import { Dialog, Progress } from "@taroify/core"
import { Button } from "@taroify/core"
import { DAY_ADD_TASK } from '../../store/action'
import './index.scss'

function AddTaskDialog() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Progress percent={50} />
      <Dialog open={open} onClose={setOpen}>
        <Dialog.Header>标题</Dialog.Header>
        <Dialog.Content>代码是写出来给人看的，附带能在机器上运行</Dialog.Content>
        <Dialog.Actions variant="rounded">
          <Button onClick={() => setOpen(false)}>取消</Button>
          <Button onClick={() => setOpen(false)}>确认</Button>
        </Dialog.Actions>
      </Dialog>
    </>

  )
}


//触发dispath
const mapDispatchToProps = dispatch => {
  // 默认传递参数就是dispatch
  return {
    addDayTask: () => {
      dispatch(DAY_ADD_TASK())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTaskDialog)
