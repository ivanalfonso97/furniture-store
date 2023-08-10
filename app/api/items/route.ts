import { NextResponse } from 'next/server'
 
export async function GET() {
  const data = [
    {
      type: "chair",
      name: "Black Simple Chair",
      price: 12.0,
      main_image: "https://www.ikea.com/ph/en/images/products/lisabo-chair-black__0786548_pe763014_s5.jpg?f=xl",
      product_images: [
        "https://www.ikea.com/ph/en/images/products/lisabo-chair-black__1104636_pe867796_s5.jpg?f=xl", 
        "https://www.ikea.com/ph/en/images/products/lisabo-chair-black__0936084_ph172127_s5.jpg?f=xl",
        "https://www.ikea.com/ph/en/images/products/lisabo-chair-black__1053149_pe846742_s5.jpg?f=xl",
      ],
      priority: 1,
      product_id: "00000001",
      description: "Add modern elegance to your space with our Black Simple Chair. Its sleek design and comfortable cushioning make it the perfect addition to any room. Crafted with a minimalist aesthetic in mind, this chair effortlessly complements various decor styles. The matte black finish adds a touch of sophistication, making it a versatile choice for both contemporary and classic settings.",
      rating: 4.75,
      review_count: 50,
      stock: 5,
    },
    {
      type: "table",
      name: "Black Simple Table",
      price: 12.61,
      main_image: "https://www.ikea.com/ph/en/images/products/sandsberg-table-black__1074348_pe856162_s5.jpg?f=xl",
      product_images: [
        "https://www.ikea.com/ph/en/images/products/sandsberg-table-black__1016429_pe830390_s5.jpg?f=xl",
        "https://www.ikea.com/ph/en/images/products/sandsberg-table-black__1056656_pe848458_s5.jpg?f=xl",
        "https://www.ikea.com/ph/en/images/products/sandsberg-table-black__1056657_pe848457_s5.jpg?f=xl",
      ],
      priority: 1,
      product_id: "00000002",
      description: "Introducing the Black Simple Table, a minimalist centerpiece that combines form and function. Its sleek black finish adds a touch of modern sophistication to any room. This table is designed to complement your decor while offering a versatile surface for various uses. Whether placed in your living room, office, or dining area, it serves as a stylish platform for your essentials.",
      rating: 4.1,
      review_count: 10,
      stock: 50,
    },
    {
      type: "armchair",
      name: "Black Simple Armchair",
      price: 1.61,
      main_image: "https://www.ikea.com/ph/en/images/products/poaeng-armchair-black-brown-knisa-black__0571510_pe666941_s5.jpg?f=xl",
      product_images: [
        "https://www.ikea.com/ph/en/images/products/poaeng-armchair-black-brown-knisa-black__0837335_pe666944_s5.jpg?f=xl", 
        "https://www.ikea.com/ph/en/images/products/poaeng-armchair-black-brown-knisa-black__0837333_pe666943_s5.jpg?f=xl", 
        "https://www.ikea.com/ph/en/images/products/poaeng-armchair-black-brown-knisa-black__0837331_pe666942_s5.jpg?f=xl",
      ],
      priority: 0,
      product_id: "00000003",
      description: "Elevate your comfort and style with our Black Simple Armchair. Its sleek design, combined with the rich black finish, makes it a bold statement piece that demands attention. The armchair's modern silhouette and ergonomic design offer optimal support, whether you're reading, relaxing, or enjoying a conversation. This chair embodies both comfort and aesthetics, making it an ideal addition to your living space.",
      rating: 1.1,
      review_count: 100,
      stock: 0,
    },
    {
      type: "bed",
      name: "White Simple Bed",
      price: 2.61,
      main_image: "https://www.ikea.com/ph/en/images/products/malm-bed-frame-high-white__0948885_pe799350_s5.jpg?f=xl",
      product_images: [
        "https://www.ikea.com/ph/en/images/products/malm-bed-frame-high-white__1101530_pe866709_s5.jpg?f=xl", 
        "https://www.ikea.com/ph/en/images/products/malm-bed-frame-high-white__1101600_pe866771_s5.jpg?f=xl", 
        "https://www.ikea.com/ph/en/images/products/malm-bed-frame-high-white__1101601_pe866772_s5.jpg?f=xl"
      ],
      priority: 10,
      product_id: "00000004",
      description: "Transform your bedroom into a serene retreat with our White Simple Bed. The clean lines and minimalist design create a calming atmosphere, making it the perfect centerpiece for modern or Scandinavian-inspired spaces. The white finish exudes a sense of purity and tranquility, inviting you to relax and recharge in style.",
      rating: 0,
      review_count: 0,
      stock: 2,
    },
    {
      type: "chair",
      name: "White Simple Chair",
      price: 99.0,
      main_image: "https://www.ikea.com/ph/en/images/products/fejan-chair-outdoor-foldable-white__0728344_pe736190_s5.jpg?f=xl",
      product_images: [
        "https://www.ikea.com/ph/en/images/products/fejan-chair-outdoor-foldable-white__0907695_pe616824_s5.jpg?f=xl", 
        "https://www.ikea.com/ph/en/images/products/fejan-chair-outdoor-foldable-white__0907708_pe618461_s5.jpg?f=xl", 
        "https://www.ikea.com/ph/en/images/products/fejan-chair-outdoor-foldable-white__0907704_pe617109_s5.jpg?f=xl"
      ],
      priority: 12,
      product_id: "00000005",
      description: "Elevate your interior with our White Simple Chair. Its clean lines and timeless design make it a versatile piece that complements any ambiance. The pristine white finish adds a sense of purity and freshness to your space. Whether used as an accent chair or as part of a dining set, this chair effortlessly enhances the overall aesthetic while providing comfortable seating.",
      rating: 0,
      review_count: 0,
      stock: 0,
    },
    {
      type: "table",
      name: "White Simple Table",
      price: 80.0,
      main_image: "https://www.ikea.com/ph/en/images/products/melltorp-table-white__0737266_pe740964_s5.jpg?f=xl",
      product_images: [
        "https://www.ikea.com/ph/en/images/products/melltorp-table-white__1081100_ph169888_s5.jpg?f=xl", 
        "https://www.ikea.com/ph/en/images/products/melltorp-table-white__1081099_ph173814_s5.jpg?f=xl", 
        "https://www.ikea.com/ph/en/images/products/melltorp-table-white__1028690_pe835489_s5.jpg?f=xl"
      ],
      priority: 0,
      product_id: "00000006",
      description: "Discover the elegance of simplicity with our White Simple Table. Its timeless design and versatile white finish make it a seamless addition to your space. Crafted for practicality, this table serves as a functional surface that effortlessly fits into any room. Whether used as a coffee table, side table, or workspace, its clean look adds a sense of airy simplicity.",
      rating: 5.0,
      review_count: 1000,
      stock: 2,
    },
    {
      type: "armchair",
      name: "White Simple Armchair",
      price: 1000000.5,
      main_image: "https://www.ikea.com/ph/en/images/products/hoegsten-armchair-outdoor-white__0134124_pe290006_s5.jpg?f=xl",
      product_images: [
        "https://www.ikea.com/ph/en/images/products/hoegsten-armchair-outdoor-white__0905297_pe616822_s5.jpg?f=xl", 
        "https://www.ikea.com/ph/en/images/products/hoegsten-armchair-outdoor-white__0907660_pe617066_s5.jpg?f=xl", 
        "https://www.ikea.com/ph/en/images/products/hoegsten-armchair-outdoor-white__0941232_pe795388_s5.jpg?f=xl"
      ],
      priority: 0,
      product_id: "00000007",
      description: "Unwind in our White Simple Armchair, designed to seamlessly integrate with your decor. Its versatile white finish adds a touch of sophistication, while the clean lines and comfortable seat provide an inviting retreat. Whether placed in a reading nook or as part of your living room ensemble, this armchair brings both comfort and elegance to your space.",
      rating: 3.0,
      review_count: 1,
      stock: 1,
    },
  ];
 
  return NextResponse.json(data)
}