import type { CreateProducts, Faker } from "./types"


const fakeTitles: string[] = [
  "BMW",
  " Energy Drink",
  "Nokia",
  
]


const fakePrices: number[] = [333, 222, 111]


const fakeCategories: string[] = ["Art", "Phone", "Car"]


const getRandomItem = <T>(items: T[]) => {

  const randomIndex = Math.floor(Math.random() * items.length)


  return items[randomIndex]
}


const getRandomId = () => {

  return Math.random().toString(36).slice(2)
}


export const faker: Faker = {

  id: () => getRandomId(),


  title: () => getRandomItem(fakeTitles),

  category: () => getRandomItem(fakeCategories),
 
  price: () => getRandomItem(fakePrices),


  
}


const CreateProducts: CreateProducts = ({
  existingProducts,
  count,
  faker,
}) => {

  const products = new Map(existingProducts)


  if (products.size === 0 && count === 0) {

    throw new Error("No product added")
  }


  for (let i = 0; i < count; i++) {

    const product = {
      id: faker.id(),
      title: faker.title(), 
      category: faker.category(), 
      price: faker.price(), 
    }


    products.set(`product-${i}`, product)
  }

  return products
}


export { CreateProducts, getRandomId }