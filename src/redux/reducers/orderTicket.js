import { createSlice } from "@reduxjs/toolkit";

// Ambil data dari localStorage saat aplikasi pertama kali dijalankan
const loadState = () => {
  const savedOrders = localStorage.getItem("orders");
  return savedOrders ? JSON.parse(savedOrders) : [];
};

const initialState = {
  orders: loadState(),
};

const orderTicket = createSlice({
  name: "orderTicket",
  initialState,
  reducers: {
    addSeat: (state, action) => {
      const seatId = action.payload;
      if (state.orders.includes(seatId)) {
        state.orders = state.orders.filter((seat) => seat !== seatId);
      } else {
        state.orders = [...state.orders, seatId];
      }

      // Simpan perubahan state ke localStorage
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },
});

export const { addSeat } = orderTicket.actions;
export default orderTicket.reducer;
