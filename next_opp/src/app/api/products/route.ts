


import { NextResponse } from "next/server"


import { CreateProducts, faker } from '../../future/CreateProduct';


export async function GET() {
  
  const product = CreateProducts({ faker, count: 3})
  
  return NextResponse.json(
    { data: Array.from(product.values()) }, 
    { status: 200 }, 
  )
}