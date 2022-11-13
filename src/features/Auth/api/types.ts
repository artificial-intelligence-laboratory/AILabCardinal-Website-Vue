export interface LoginDTO {
  studentNumber: string
  password: string
}

export interface UserData {
  userId: number
  studentNumber: string
  email: string
  avatar: string
  nickname: string
}

export interface LoginData {
  user: UserData
  token: string
}
