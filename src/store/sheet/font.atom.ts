import { atom } from 'recoil'

export const fontState = atom<string>({
  key: 'fontState',
  default: '',
})
