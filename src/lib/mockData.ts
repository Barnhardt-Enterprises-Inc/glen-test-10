export type Coffee = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export const mockCoffees: Coffee[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    description: 'Floral and citrusy notes with a light body and tea-like finish.',
    price: 18.0,
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a9fa16745?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Colombian Supremo',
    description: 'Balanced and nutty with a rich caramel sweetness and medium body.',
    price: 16.0,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a0979254aeb8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Sumatra Mandheling',
    description: 'Earthy and bold with low acidity and a heavy, syrupy body.',
    price: 17.0,
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcaced4d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Guatemala Antigua',
    description: 'Spicy and chocolatey with a bright acidity and smooth finish.',
    price: 19.0,
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
  },
];
