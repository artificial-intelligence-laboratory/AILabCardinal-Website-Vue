import type { FormRules } from 'naive-ui'

const loginFormRules: FormRules = {
  studentNumber: [
    { required: true, message: '请输入学号', trigger: ['input', 'blur'] }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: ['input', 'blur'] }
  ]
}

export default loginFormRules
