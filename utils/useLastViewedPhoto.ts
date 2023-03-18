import { createGlobalState } from 'react-hooks-global-state'

const initialState = { photoToScrollTo: null }
const { useGlobalState } = createGlobalState(initialState)

export const useLastViewedPhoto: any | null = () => {
  return useGlobalState('photoToScrollTo')
}
