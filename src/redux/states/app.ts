import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import utils, { ArrivalsAndCategory, CartItem, Category, Product, SavedCartItem } from "../../utils/utils";
interface User {
  name: string;
  email: string;
  displayName: string;
  token: string;
}

interface AppState {
  theme: "light" | "dark";
  language: string;
  searchMode: string | null;
  showAccount: boolean;
  hasLoadedCart: boolean;
  showLogout: boolean;
  loggedInUser: User | null;
  cart: CartItem[];
  savedcart: SavedCartItem[];
  wishlist: Product[];
  products: Product[];
  sales: Product[];
  totalProducts: number;
  totalPages: number;
  currentPage: number;
  categories: Category[];
  newArrivals: ArrivalsAndCategory[];
  userAddress: any
}

const initialState: AppState = {
  theme: "light",
  searchMode: null,
  showAccount: false,
  hasLoadedCart: false,
  showLogout: false,
  language: import.meta.env.VITE_LANGUAGE || "us",
  loggedInUser: null,
  cart: [],
  savedcart: [],
  wishlist: [],
  products: [],
  sales: [],
  categories: [],
  newArrivals: [],
  totalProducts: 0,
  totalPages: 0,
  currentPage: 1,
  userAddress: null
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      if (Array.isArray(action.payload)) state.products = action.payload;
    },
    setSales: (state, action: PayloadAction<Product[]>) => {
      if (Array.isArray(action.payload)) state.sales = action.payload;
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      if (Array.isArray(action.payload)) state.categories = action.payload;
    },
    setNewArrivals: (state, action: PayloadAction<ArrivalsAndCategory[]>) => {
      if (Array.isArray(action.payload)) state.newArrivals = action.payload;
    },
    setSearchMode: (state, action: PayloadAction<string | null>) => {
      state.searchMode = action.payload;
    },
    setHasLoadedCart: (state, action: PayloadAction<boolean>) => {
      state.hasLoadedCart = action.payload;
    },
    setShowLogout: (state, action: PayloadAction<boolean>) => {
      state.showLogout = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalProducts: (state, action: PayloadAction<number>) => {
      state.totalProducts = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setShowAccount: (state, action: PayloadAction<boolean>) => {
      state.showAccount = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setUserAddress: (state, action: PayloadAction<any>) => {
      state.userAddress = action.payload;
    },
    setLoggedInUser: (state, action: PayloadAction<User | null>) => {
      state.loggedInUser = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cart = [...state.cart, action.payload];
      utils.createSuccessNotification(`Added ${action.payload.product.name} to cart`, 3000);
    },
    updateCart: (state, action: PayloadAction<CartItem[]>) => {
      state.cart = action.payload;
      utils.createSuccessNotification(`Cart updated`, 3000);
    },
    updateSavedCart: (state, action: PayloadAction<SavedCartItem[]>) => {
      state.savedcart = action.payload;
    },
    addToWishlist: (state, action: PayloadAction<Product>) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item:CartItem) => item.product.id !== action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.wishlist = state.wishlist.filter((item:Product) => item.id !== action.payload);
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setTheme, setLanguage, setLoggedInUser, setSearchMode, emptyCart, setShowAccount, setProducts, setSales, setCategories, setNewArrivals, addToCart, addToWishlist, removeFromCart, removeFromWishlist, setTotalProducts, setTotalPages, setCurrentPage, updateSavedCart, updateCart, setHasLoadedCart, setShowLogout, setUserAddress } = app.actions;
export default app.reducer;
