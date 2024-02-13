import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  // https://reffect.co.jp/react/next-auth
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('サインイン');

      // 戻り値をfalseにすることでカスタムのログイン制御が可能
      return true;
    },
    async session({ session, user, token }) {
      // sessionに必要な情報を設定する
      session.user.id = 1;
      console.log( { session } );
      
      // sessionを返す必要がある
      return session;
    },
    // JWTのトークン確認も可能
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(`account:${JSON.stringify(account)}`);
      return token;
    },
  }
})
