import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { connectToDatabase } from "@/lib/mongodb"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/signup", // optional: reuse your signup page
  },
  callbacks: {
    // Save user to DB if not exists
    async signIn({ user, account, profile }) {
      try {
        const { db } = await connectToDatabase()

        const existingUser = await db.collection("users").findOne({ email: user.email })

        if (!existingUser) {
          await db.collection("users").insertOne({
            email: user.email,
            password:"",
            createdAt: new Date(),
            name: user.name || "",
            nickname: "",
            // provider: account.provider,
            // image: user.image || "",
          })
        }

        return true
      } catch (err) {
        console.error("Google login error:", err)
        return false
      }
    },

    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      if (account) token.accessToken = account.access_token;
      return token;
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
