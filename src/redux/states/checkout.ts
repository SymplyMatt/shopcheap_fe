import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CheckoutState {
  deliveryInformation: DeliveryInformation;
}
interface DeliveryInformation {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  state: string;
  address: string;
}
const initialState: CheckoutState = {
  deliveryInformation: { email: "", state: "", firstname: "", lastname: "", phone: "", address: "" }
};

const checkout = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setDeliveryInformation: (state, action: PayloadAction<DeliveryInformation>) => {
      state.deliveryInformation = action.payload;
    },
  },
});

export const { setDeliveryInformation } = checkout.actions;
export default checkout.reducer;
