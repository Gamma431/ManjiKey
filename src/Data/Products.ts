export interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  description: string;
}

export const products: Product[] = [
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
  {
    id: 5,
    name: "HyperX Alloy Origins",
    img: "https://images.unsplash.com/photo-1749149661545-154c0c353bd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lY2hhbmljYWwlMjBrZXlib2FyZCUyMGZyb20lMjB0b3B8ZW58MHx8MHx8fDA%3D",
    price: 109.99,
    description: "Durable aluminum mechanical keyboard with RGB."
  },
  {
    id: 6,
    name: "Corsair K70 RGB Pro",
    img: "https://images.unsplash.com/photo-1771521971801-b24e291166d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1lY2hhbmljYWwlMjBrZXlib2FyZCUyMGZyb20lMjB0b3B8ZW58MHx8MHx8fDA%3D",
    price: 149.99,
    description: "Premium mechanical keyboard with customizable lighting."
  },
  {
    id: 7,
    name: "SteelSeries Apex 7",
    img: "https://images.unsplash.com/photo-1648392368628-6e984d89e2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1lY2hhbmljYWwlMjBrZXlib2FyZCUyMGZyb20lMjB0b3B8ZW58MHx8MHx8fDA%3D",
    price: 159.99,
    description: "Mechanical keyboard with OLED smart display."
  },
  {
    id: 8,
    name: "Ducky One 2 Mini",
    img: "https://images.unsplash.com/photo-1706934696894-be1734e015b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fG1lY2hhbmljYWwlMjBrZXlib2FyZCUyMGZyb20lMjB0b3B8ZW58MHx8MHx8fDA%3D",
    price: 119.99,
    description: "Popular 60% keyboard with Cherry MX switches."
  },
  {
    id: 9,
    name: "Anne Pro 2",
    img: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG1lY2hhbmljYWwlMjBrZXlib2FyZCUyMGZyb20lMjB0b3B8ZW58MHx8MHx8fDA%3D",
    price: 99.99,
    description: "Wireless compact mechanical keyboard with RGB."
  },
  {
    id: 10,
    name: "Razer BlackWidow V3",
    img: "https://images.unsplash.com/photo-1620395450144-0a301516d5ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fG1lY2hhbmljYWwlMjBrZXlib2FyZCUyMGZyb20lMjB0b3B8ZW58MHx8MHx8fDA%3D",
    price: 139.99,
    description: "Gaming mechanical keyboard with green switches."
  },

  {
    id: 11,
    name: "Glorious GMMK 2",
    img: "https://images.unsplash.com/photo-1637243218672-d338945efdf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fG1lY2hhbmljYWwlMjBrZXlib2FyZCUyMGZyb20lMjB0b3B8ZW58MHx8MHx8fDA%3D",
    price: 119.99,
    description: "Hot-swappable modular mechanical keyboard."
  },
  {
    id: 12,
    name: "Akko 3068B Plus",
    img: "https://images.unsplash.com/photo-1632079003110-d694908500da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fG1lY2hhbmljYWwlMjBrZXlib2FyZCUyMGZyb20lMjB0b3B8ZW58MHx8MHx8fDA%3D",
    price: 79.99,
    description: "Compact mechanical keyboard with Bluetooth support."
  },
  {
    id: 13,
    name: "Epomaker TH80",
    img: "https://images.unsplash.com/photo-1653786146814-fc617f0de776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 89.99,
    description: "75% layout mechanical keyboard with RGB."
  },
  {
    id: 14,
    name: "Keychron K6",
    img: "https://images.unsplash.com/photo-1635159636873-cd7f6e33e44a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 84.99,
    description: "Wireless mechanical keyboard with hot-swappable switches."
  },
  {
    id: 15,
    name: "Royal Kludge RK84",
    img: "https://images.unsplash.com/photo-1635159636873-cd7f6e33e44a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 74.99,
    description: "Compact wireless mechanical keyboard with RGB."
  },
  {
    id: 16,
    name: "Corsair K95 RGB Platinum",
    img: "https://images.unsplash.com/photo-1680593138110-fb1ae4f9b712?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 199.99,
    description: "Flagship mechanical keyboard with macro keys."
  },
  {
    id: 17,
    name: "Logitech G915 TKL",
    img: "https://images.unsplash.com/photo-1712231943623-984d5aefee65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 229.99,
    description: "Low-profile wireless mechanical keyboard."
  },
  {
    id: 18,
    name: "Razer Huntsman Mini",
    img: "https://images.unsplash.com/photo-1690555932466-f9182b48cff3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 129.99,
    description: "Compact optical mechanical gaming keyboard."
  },
  {
    id: 19,
    name: "SteelSeries Apex Pro",
    img: "https://images.unsplash.com/photo-1712396901531-605f06a423aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 199.99,
    description: "Adjustable mechanical switches for customization."
  },
  {
    id: 20,
    name: "HyperX Alloy FPS Pro",
    img: "https://images.unsplash.com/photo-1710999699036-e61e76227f23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 79.99,
    description: "Tenkeyless mechanical keyboard for esports."
  },

  {
    id: 21,
    name: "Akko 3084B",
    img: "https://images.unsplash.com/photo-1669884210028-81aa4c7442e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM2fHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 94.99,
    description: "Compact mechanical keyboard with vibrant keycaps."
  },
  {
    id: 22,
    name: "Keychron Q1",
    img: "https://images.unsplash.com/photo-1773855127321-b0c9a493f0bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzEwfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 169.99,
    description: "Premium aluminum mechanical keyboard."
  },
  {
    id: 23,
    name: "Glorious GMMK Pro",
    img: "https://images.unsplash.com/photo-1651378855562-637b72f1c0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzg2fHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 179.99,
    description: "Customizable enthusiast mechanical keyboard."
  },
  {
    id: 24,
    name: "Epomaker GK68XS",
    img: "https://images.unsplash.com/photo-1678269986604-dcd61836ad2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDMxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 109.99,
    description: "Wireless mechanical keyboard with aluminum case."
  },
  {
    id: 25,
    name: "Royal Kludge RK68",
    img: "https://images.unsplash.com/photo-1710330625878-b703e9cf9e43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTQ2fHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 59.99,
    description: "Affordable compact mechanical keyboard."
  },
  {
    id: 26,
    name: "Corsair K60 RGB Pro",
    img: "https://images.unsplash.com/photo-1671276497874-9e1bb7aeb89e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTU3fHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 99.99,
    description: "Mechanical keyboard with durable build quality."
  },
  {
    id: 27,
    name: "Logitech G413 Carbon",
    img: "https://images.unsplash.com/photo-1671276497874-9e1bb7aeb89e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTU3fHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 89.99,
    description: "Minimalist mechanical keyboard with red backlight."
  },
  {
    id: 28,
    name: "Razer BlackWidow Lite",
    img: "https://images.unsplash.com/photo-1671276498446-04d8783d73eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzEzfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 89.99,
    description: "Quiet mechanical keyboard for office use."
  },
  {
    id: 29,
    name: "SteelSeries Apex 5",
    img: "https://images.unsplash.com/photo-1671276498446-04d8783d73eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzEzfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 99.99,
    description: "Hybrid mechanical gaming keyboard."
  },
  {
    id: 30,
    name: "HyperX Alloy Core RGB",
    img: "https://images.unsplash.com/photo-1633315754878-b5a3b0ce64f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzQwfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 69.99,
    description: "RGB mechanical-style keyboard with smooth keys."
  },

  {
    id: 31,
    name: "Akko 5075B Plus",
    img: "https://images.unsplash.com/photo-1721534732509-a6ba941c3827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzkyfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 104.99,
    description: "Compact mechanical keyboard with hot-swap support."
  },
  {
    id: 32,
    name: "Keychron K8",
    img: "https://images.unsplash.com/photo-1640268296919-d105766cb6b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODEyfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 94.99,
    description: "Wireless tenkeyless mechanical keyboard."
  },
  {
    id: 33,
    name: "Glorious GMMK Compact",
    img: "https://images.unsplash.com/photo-1640268296919-d105766cb6b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODEyfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 99.99,
    description: "Customizable compact mechanical keyboard."
  },
  {
    id: 34,
    name: "Epomaker EK68",
    img: "https://images.unsplash.com/photo-1696393701532-c486a075b80d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODQ3fHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 89.99,
    description: "RGB wireless mechanical keyboard."
  },
  {
    id: 35,
    name: "Royal Kludge RK100",
    img: "https://images.unsplash.com/photo-1706970454361-c75bfc137ce4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTg3fHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 84.99,
    description: "Full-size wireless mechanical keyboard."
  },
  {
    id: 36,
    name: "Corsair K100 RGB",
    img: "https://images.unsplash.com/photo-1714116363269-e34e62803535?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTk4fHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 249.99,
    description: "High-end gaming mechanical keyboard."
  },
  {
    id: 37,
    name: "Logitech G Pro X",
    img: "https://images.unsplash.com/photo-1714116363269-e34e62803535?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTk4fHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBmcm9tJTIwdG9wfGVufDB8fDB8fHww",
    price: 149.99,
    description: "Hot-swappable esports mechanical keyboard."
  },
  {
    id: 38,
    name: "Razer Huntsman Elite",
    img: "https://images.unsplash.com/photo-1661588027936-289a49e6844b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxNnx8bWVjaGFuaWNhbCUyMGtleWJvYXJkJTIwZnJvbSUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    price: 199.99,
    description: "Premium optical mechanical gaming keyboard."
  },
  {
    id: 39,
    name: "SteelSeries Apex 9",
    img: "https://images.unsplash.com/photo-1661588756719-8c7bd8bdc72d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0NHx8bWVjaGFuaWNhbCUyMGtleWJvYXJkJTIwZnJvbSUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    price: 139.99,
    description: "Fast-response optical mechanical keyboard."
  },
  {
    id: 40,
    name: "HyperX Alloy Elite 2",
    img: "https://images.unsplash.com/photo-1707565965973-5a4beaca7e78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1NHx8bWVjaGFuaWNhbCUyMGtleWJvYXJkJTIwZnJvbSUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    price: 129.99,
    description: "RGB mechanical keyboard with media controls."
  }
];

export default products;

export function getProducts(){
    return products
}

export function getProductsById(id){
    return products.find((p) => p.id === Number(id))
}
