import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Placeholder: a validação real será feita contra a API GraphQL quando o domínio de usuários existir.
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      authorize: async () => null,
    }),
  ],
  pages: { signIn: "/login" },
});
