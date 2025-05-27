import { RoleEnum } from '@/constants/auth'
import { User as FirebaseUser } from 'firebase/auth'
import { User } from '../types'

export const parseFirebaseUser = (user: FirebaseUser): User => {
  return {
    uid: user.uid,
    name: user.displayName || '',
    displayName: user.displayName || '',
    username: user.displayName?.split(' ')[0] || '',
    firstName: user.displayName?.split(' ')[0] || '',
    lastName: user.displayName?.split(' ')[1] || '',
    email: user.email as string,
    active: true,
    role: RoleEnum.USER,
  } as User
}
