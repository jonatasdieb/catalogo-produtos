import React, { ReactNode, createContext, useContext, useState } from "react";

interface ICartContext {
  cartItems: number;
  setCartItems: React.Dispatch<React.SetStateAction<number>>;
}

interface CartContextProps {
  children: ReactNode;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export function CartProvider({ children }: CartContextProps) {
  const [cartItems, setCartItems] = useState<number>(0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  
  return context;
}
