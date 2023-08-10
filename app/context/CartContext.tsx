"use client"
import { createContext, useContext, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
}

type Item = {
  type: string;
  name: string;
  price: number;
  main_image: string;
  product_images: string[];
  priority: number;
  product_id: string
  description: string
  rating: number
  review_count: number
  stock: number
}

type CartContextType = {
  cartItems: Item[];
  addToCart: (item: Item) => void;
  favoriteItems: Item[];
  addToFavorites: (item: Item) => void;
  deleteFromFavorites: (item: Item) => void;
}

const CartContext = createContext<any>(undefined);

export function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<Item[]>([]);

  function addToCart(item: Item) {
    if (!cartItems.some((cartItem) => cartItem.product_id === item.product_id)) {
      setCartItems([...cartItems, item]);
    }
  };
  
  function addToFavorites(item: Item) {
    if (!favoriteItems.some((favoriteItem) => favoriteItem.product_id === item.product_id)) {
      setFavoriteItems([...favoriteItems, item]);
    }
  };

  function deleteFromFavorites(item: Item) {
    const filteredFavorites = favoriteItems.filter((favoriteItem) => favoriteItem.product_id !== item.product_id);
    setFavoriteItems(filteredFavorites);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      favoriteItems,
      addToFavorites,
      deleteFromFavorites,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
};