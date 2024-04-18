import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const userAdapter = createEntityAdapter({
  selectId: (users) => String(users._id),
});

export const userSelectors = userAdapter.getSelectors((state) => state.user);

export const userSlice = createSlice({
  name: "user",
  initialState: userAdapter.getInitialState(),
  reducers: {
    setUser: userAdapter.setAll,
    deleteUser: userAdapter.removeAll,
    updateUser: userAdapter.updateOne,
  },
});

export const { setUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
