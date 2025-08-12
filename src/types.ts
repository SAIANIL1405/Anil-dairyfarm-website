export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface User {
  email: string;
  password: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  name: string;
  mobile: string;
  address: string;
  items: CartItem[];
  total: number;
}