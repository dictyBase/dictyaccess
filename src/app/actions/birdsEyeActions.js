import { types } from "common/constants/Types"

const { CHANGE_BIRDS_EYE_TAB } = types

export const changeBirdsEyeTab = (tab: string) => ({
  type: CHANGE_BIRDS_EYE_TAB,
  payload: {
    tab,
  },
})
