import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    firstname: null,
    secondname: null,
    bio: null,
    intro: null,
  },
  reducers: {
    updateBasics: (state, { payload: { firstName, secondName }}) => {
      state.firstname = firstName
      state.secondname = secondName
    },
    updateDescriptions: (state, { payload: { bio, intro }}) => {
      state.bio = bio;
      state.intro = intro
    }
  }
})

export const { updateBasics, updateDescriptions } = profileSlice.actions

const getRoot = state => state.profile
export const selectFirstname = state => getRoot(state).firstname
export const selectSecondname = state => getRoot(state).secondname
export const selectBio = state => getRoot(state).bio
export const selectIntro = state => getRoot(state).intro

export default profileSlice.reducer