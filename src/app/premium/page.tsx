import { getSession } from '@/actions';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Premium = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    return redirect('/');
  }

  if (!session.isPro) {
    return (
      <div>
        <h1>Only Premium Users are allowed to this page!</h1>
        <Link href='/profile'>Go to profile paeg to upgrade to premium</Link>
      </div>
    );
  }
  return (
    <div className='flex min-h-screen flex-col  items-center  p-24'>
      Premium Page
    </div>
  );
};

export default Premium;
