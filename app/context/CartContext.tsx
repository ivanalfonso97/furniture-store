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
      setCartItems((prevItems) => [...prevItems, { ...item, quantity_ordered: quantity }]);
    // If item is in the cart but has a different quantity
    } else if (cartItems.some((cartItem) => cartItem.product_id === item.product_id && cartItem.quantity_ordered !== quantity)) {
      setCartItems((prevCartItems) => [
        ...prevCartItems.filter((cartItem) => cartItem.product_id !== item.product_id),
        { ...item, quantity_ordered: quantity },
      ]);
    }
  };

  function removeFromCart(item: Item) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.product_id !== item.product_id)
    );
  }
  
  function addToFavorites(item: Item) {
    if (!favoriteItems.some((favoriteItem) => favoriteItem.product_id === item.product_id)) {
      setFavoriteItems((prevFavoriteItems) => [...prevFavoriteItems, item]);
    }
  };

  function removeFromFavorites(item: Item) {
    setFavoriteItems((prevFavoriteItems) =>
      prevFavoriteItems.filter((favoriteItem) => favoriteItem.product_id !== item.product_id)
    );
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