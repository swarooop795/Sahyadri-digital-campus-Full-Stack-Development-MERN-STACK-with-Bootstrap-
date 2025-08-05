export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface Order {
  id: number;
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'completed';
  orderDate: string;
  studentName: string;
}

export interface Feedback {
  id: number;
  rating: number;
  comment: string;
  date: string;
  studentName: string;
}