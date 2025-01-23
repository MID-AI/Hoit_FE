import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

// NextAuth 옵션 정의
const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
        },
      },
    }),
  ],
};

export async function GET(req: Request) {
  return NextAuth(authOptions);
}

export async function POST(req: Request) {
  return NextAuth(authOptions);
}
