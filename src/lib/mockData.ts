export interface CoffeeItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const COFFEE_ITEMS: CoffeeItem[] = [
  {
    id: '1',
    name: 'Espresso',
    description: 'Rich, intense and concentrated coffee, perfect for a quick energy boost.',
    price: 3.50,
    imageUrl: 'https://images.unsplash.com/photo-1510591509090-a45d916347a6?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and foam for a creamy, balanced taste.',
    price: 4.50,
    imageUrl: 'https://images.unsplash.com/photo-1572442388796-1189d355678b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Latte',
    description: 'Smooth espresso with a generous amount of steamed milk and a light layer of foam.',
    price: 4.75,
    imageUrl: 'https://images.unsplash.com/photo-1536939456452-645666f85752?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Caramel Macchiato',
    description: 'Freshly steamed milk with vanilla-flavored syrup, topped with espresso and caramel.',
    price: 5.25,
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
  },
];
