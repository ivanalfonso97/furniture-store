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
      description: "Sleek and versatile black chair with clean lines, perfect for any room. Offers comfort and style in a minimalist design.",
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
      description: "A modern black table designed for versatility and elegance. Ideal for functional spaces with a touch of sophistication.",
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
      description: "Contemporary black armchair offering both comfort and style. Its simplicity complements any décor, creating a cozy atmosphere.",
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
      description: "A timeless white bed, combining simplicity with elegance. A tranquil centerpiece for your bedroom, blending seamlessly with any theme.",
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
      description: "Classic white chair with minimalist charm. Adds a fresh touch to your space while ensuring comfort and enduring style.",
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
      description: "Timeless white table for any setting. Its simplicity and functionality make it an ideal addition to your home or office.",
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
      description: "Elegant white armchair, a fusion of comfort and sophistication. Its clean design adds an airy, inviting feel to your space.",
      rating: 3.0,
      review_count: 1,
      stock: 1,
    },
  ];
 
  return NextResponse.json(data)
}