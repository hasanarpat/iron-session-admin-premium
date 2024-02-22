import { changePremium, changeUsername, getSession } from '@/actions';
import { redirect } from 'next/navigation';

const Profile = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) redirect('/');

  return (
    <div className='flex min-h-screen flex-col  items-center  p-24'>
      <div className='flex flex-col items-center gap-4'>
        <h1>Profile Page</h1>
        <p>
          Welcome <b>{session.username}</b>
        </p>
        <span>
          You are a <b>{session.isPro ? 'Premium' : 'Free'}</b> user
        </span>
        <form action={changePremium}>
          <button>{session.isPro ? 'Cancel' : 'Buy'} Premium</button>
        </form>
        <form
          action={changeUsername}
          className='flex flex-col gap-2 text-black'
        >
          <input
            type='text'
            name='username'
            required
            placeholder={session.username}
          />
          <button>Update Name</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
