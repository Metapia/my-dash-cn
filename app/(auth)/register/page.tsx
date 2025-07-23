import { Metadata } from 'next';
import RegisterForm from './register-form';

export const metadata: Metadata = {
  title: 'Register Form',
};
 
export default async function Page() {
 
  return (
    <main>
      <RegisterForm />
    </main>
  );
}