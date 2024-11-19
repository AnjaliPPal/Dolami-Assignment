import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("password")
  if (!cookie || cookie.value !== "fedev2024test") {
    return NextResponse.rewrite(new URL('/lock', request.url))
  }

  return NextResponse.next()
}

export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
  }