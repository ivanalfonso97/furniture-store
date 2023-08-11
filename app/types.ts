export type Item = {
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
  quantity_ordered?: number
}