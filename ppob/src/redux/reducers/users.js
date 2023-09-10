import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: {},
  },
  reducers: {
    LOGIN(state, action) {
      fetch("https://take-home-test-api.nutech-integrasi.app/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(action.payload),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Something went wrong");
          return res.json();
        })
        .then((data) => {
          localStorage.access_token = data.data.token;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

export const { LOGIN } = usersSlice.actions;

export default usersSlice.reducer;
