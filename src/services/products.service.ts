import { arepas } from "@/api/arepas"
import { drinks } from "@/api/drinks"


class FoodService {
  products: Product[];

  constructor(){
    this.products = [
      ...arepas,
      ...drinks,
    ]
  }

  getAllProducts = () => {
    return this.products;
  }

  getFilterProducs = (category: string) => {

  }
}