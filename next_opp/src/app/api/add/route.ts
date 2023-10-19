import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
export async function GET(request :Request) {
  return new Response( 'next-intro')
}

export async function POST(req: Request) {

  const body = await req.json();
  const text = body.text; 
  console.log(text);

  return new Response('OK')
}