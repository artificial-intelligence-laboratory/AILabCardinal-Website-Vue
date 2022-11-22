export interface Member {
  classNumber: number
  developmentDirection: string
  grade: string
  realName: string
  userInfoId: number
}

export interface MembersData {
  currentStudent: Member[]
  previousStudents: Member[]
}
