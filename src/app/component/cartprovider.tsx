"use client";

import { CartProvider } from "../contexts/cartContext";

export default function CartProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CartProvider>{children}</CartProvider>;
}
