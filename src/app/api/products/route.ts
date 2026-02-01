import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  const response = await axios.get(`${process.env.DATA_API_URL}/products`);

  return NextResponse.json(response.data);
}
