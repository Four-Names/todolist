const CREATE_DAY_LIST = payload => ({ type: "day/add", payload }); //添加日期
const DELETE_DAY_LIST = payload => ({ type: "day/del", payload }); //删除日期
const ADD_DAY_TASK = payload => ({ type: "day/task/add", payload }); //添加日期任务
const DELETE_DAY_TASK = payload => ({ type: "day/task/del", payload }); //删除日期任务
const DAY_ADD_HIDE = payload => ({ type: "day/add/hide", payload }); //弹出添加日期弹窗
const DAY_ADD_SHOW = payload => ({ type: "day/add/show", payload }); //关闭添加日期弹窗
const DAY_ADD_TASK = payload => ({ type: "day/add/task", payload }); //关闭添加日期弹窗
const DAY_TASK_COMPLETED = payload => ({ type: "day/task/complete", payload }); //设置任务是否完成
const DAY_CHOSE = payload => ({ type: "day/chose", payload }); //当前选中日期
const OPEN_TASK_DIALOG = payload => ({ type: "task/open/dialog", payload }); //弹出添加任务弹窗
const CLOSE_TASK_DIALOG = payload => ({ type: "task/close/dialog", payload }); //关闭添加任务弹窗

export {
  CREATE_DAY_LIST,
  DELETE_DAY_LIST,
  ADD_DAY_TASK,
  DELETE_DAY_TASK,
  DAY_ADD_SHOW,
  DAY_ADD_HIDE,
  DAY_ADD_TASK,
  DAY_TASK_COMPLETED,
  DAY_CHOSE,
  OPEN_TASK_DIALOG,
  CLOSE_TASK_DIALOG
};
