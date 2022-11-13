import type { FormRules } from 'element-plus'

const loginFormRules: FormRules = {
  studentNumber: [{ required: true, message: '请输入学号' }],
  password: [{ required: true, message: '请输入密码' }]
}

export default loginFormRules
