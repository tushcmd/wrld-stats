import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Country } from '@/types/item-types';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all', {
      cache: 'no-store',
    });
    const countries: Country[] = await response.json();

    return NextResponse.json(countries);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json([], { status: 500 });
  }
}