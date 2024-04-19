import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userBuild: (state, actions) => {
      let copied = JSON.parse(JSON.stringify(state));

      copied.value.push(actions.payload);
      // console.log(13, copied);
      // if(copied.name == actions.payload)
      return state = copied.value;
    },
    Logins: (state, actions) => {
      let copied = JSON.parse(JSON.stringify(state.value));
      copied = copied.map((data) => {
        console.log(21, data.name);
        if (
          data.name == actions.payload.name &&
          data.password == actions.payload.password &&
          data.email == actions.payload.email
        ) {
          return {login: {
            name: data.name,
            age: data.age,
            email: data.email,
          }}
        } else {
          return data;
        }
      });
      console.log(37, copied);
      return state.value = copied;
    },

    UserData: (state, actions) => {
      state.value -= actions.payload;
    },
  },
});

export const { userBuild, Logins } = userSlice.actions;
export default userSlice.reducer;
