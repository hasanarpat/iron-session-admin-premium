import Link from 'next/link';
import LogOutForm from './logOutForm';
import { getSession } from '@/actions';

const Navbar = async () => {
  const session = await getSession();
  console.log(session);

  return (
    <nav className='h-24 bg-slate-300 flex items-center justify-center gap-8 text-black text-lg'>
      <Link href='/'>Homepage</Link>
      <Link href='/premium'>Premium</Link>
      <Link href='/profile'>Profile</Link>
      {session.isLoggedIn === false ? (
        <Link href='/login'>Login</Link>
      ) : (
        <LogOutForm />
      )}
    </nav>
  );
};

export default Navbar;
