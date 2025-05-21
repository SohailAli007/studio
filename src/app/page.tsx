import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/login');
  return null; // redirect() throws an error, so this won't be reached
}
