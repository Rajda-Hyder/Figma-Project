"use client"
// contexts/CartContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define the product type
interface Product {
  _id:string;
  id: string;
  name: string;
  price: number;
  quantity: number;
  imagePath: string;
}

// Define the cart state and actions
interface CartState {
  cart: Product[];
}

type Action =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } };
  
// Create the CartContext
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

// Reducer function
const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productExists = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (productExists) {
        return {
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }
    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

// Define the props type for CartProvider
interface CartProviderProps {
  children: ReactNode; // Explicitly type children
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
