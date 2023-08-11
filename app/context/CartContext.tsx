"use client"
import { createContext, useContext, useState, ReactNode } from "react";
import { Item } from "../types";

type Props = {
  children: ReactNode;
}

type CartContextType = {
  cartItems: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  favoriteItems: Item[];
  addToFavorites: (item: Item) => void;
  removeFromFavorites: (item: Item) => void;
}

const CartContext = createContext<any>(undefined);

export function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<Item[]>([]);

  function addToCart(item: Item, quantity: number = 1) {
    // If the item is not in the cart
    if (!cartItems.some((cartItem) => cartItem.product_id === item.product_id)) {
      setCartItems([...cartItems, { ...item, quantity_ordered: quantity }]);
    } else if (cartItems.some((cartItem) => cartItem.product_id === item.product_id && cartItem.quantity_ordered !== quantity)) {
      const filteredCart = cartItems.filter((cartItem) => cartItem.product_id !== item.product_id);
      setCartItems([...filteredCart, { ...item, quantity_ordered: quantity }]);
    }
  };

  function removeFromCart(item: Item) {
    const filteredCart = cartItems.filter((cartItem) => cartItem.product_id !== item.product_id);
    setCartItems(filteredCart);
  }
  
  function addToFavorites(item: Item) {
    if (!favoriteItems.some((favoriteItem) => favoriteItem.product_id === item.product_id)) {
      setFavoriteItems([...favoriteItems, item]);
    }
  };

  function removeFromFavorites(item: Item) {
    const filteredFavorites = favoriteItems.filter((favoriteItem) => favoriteItem.product_id !== item.product_id);
    setFavoriteItems(filteredFavorites);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      favoriteItems,
      addToFavorites,
      removeFromFavorites,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
};