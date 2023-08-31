import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag') as string;
  revalidateTag(tag);
  return NextResponse.json({ revalidated: true, tag, now: Date.now() });
}
