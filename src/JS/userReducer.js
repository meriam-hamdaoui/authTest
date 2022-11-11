import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    admin: true,
    pic: "/images/user.png",
    username: "ali_ali",
    email: "ali_ali@gmail.com",
    password: "Something987",
  },
  {
    id: uuidv4(),
    admin: false,
    pic: "/images/user.png",
    username: "salah_salah",
    email: "salah_salah@gmail.com",
    password: "Something123",
  },
  {
    id: uuidv4(),
    admin: false,
    pic: "/images/user.png",
    username: "khadija_khadija",
    email: "khadija_khadija@gmail.com",
    password: "Something123",
  },
  {
    id: uuidv4(),
    admin: false,
    pic: "/images/user.png",
    username: "dhekra_dhekra",
    email: "dhekra_dhekra@gmail.com",
    password: "Something123",
  },
  {
    id: uuidv4(),
    admin: false,
    pic: "/images/user.png",
    username: "rami_rami",
    email: "rami_rami@gmail.com",
    password: "Something123",
  },
  {
    id: uuidv4(),
    admin: false,
    pic: "/images/user.png",
    username: "rayen_rayen",
    email: "rayen_rayen@gmail.com",
    password: "Something123",
  },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signin: (state, action) => action.payload,
    signup: (state, action) => {
      const newUser = {
        id: uuidv4(),
        ...action.payload,
      };
      return [...state, newUser];
    },
    logout: (state, action) => {
      return action.payload;
    },
    deleteUser: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { signin, signup, logout, deleteUser } = userSlice.actions;
export default userSlice.reducer;
