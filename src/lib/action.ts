
import { getSession, signIn } from 'next-auth/react';

export async function fetchSession() {
  try {
    const session = await getSession();
    return session;
  } catch (error) {
    console.error('Error during session fetch:', error);
    return null;
  }
}


export async function handleSignIn(credentials: { email: string; password: string }) {
  "use server";
  try {
    const result = await signIn('credentials', {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
    });

    if (result?.error) {
      console.error('Sign-in error:', result.error);
      return result.error;
    }

    return null;
  } catch (error) {
    console.error('Error during sign-in:', error);
    return 'An unexpected error occurred';
  }
}
