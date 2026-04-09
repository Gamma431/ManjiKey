export interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  description: string;
}

export const HomeFeatProducts: Product[] = [
  {
    id: 1,
    name: "RK Royal Kludge RK61",
    img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
    price: 49.99,
    description: "Compact 60% mechanical keyboard with RGB lighting."
  },
  {
    id: 2,
    name: "Keychron K2 Wireless",
    img: "https://plus.unsplash.com/premium_photo-1745408084485-b1a485ab36e3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 89.99,
    description: "Hot-swappable wireless mechanical keyboard."
  },
  {
    id: 3,
    name: "Redragon K552 Kumara",
    img: "https://images.unsplash.com/photo-1600610429853-81d08d9ae4b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVjaGFuaWNhbCUyMGtleWJvYXJkJTIwZnJvbSUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    price: 39.99,
    description: "Budget-friendly tenkeyless mechanical keyboard."
  },
  {
    id: 4,
    name: "Logitech G Pro Mechanical",
    img: "https://images.unsplash.com/photo-1716117690903-9ed5fb8a701b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVjaGFuaWNhbCUyMGtleWJvYXJkJTIwZnJvbSUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    price: 129.99,
    description: "Professional gaming keyboard with GX switches."
  },
  
];

export default HomeFeatProducts;

export function getHomeFeatProducts(){
    return HomeFeatProducts
}
