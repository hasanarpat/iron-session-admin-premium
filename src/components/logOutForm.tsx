import { logout } from '@/actions';

const LogOutForm = () => {
  return (
    <form action={logout}>
      <button>Logout</button>
    </form>
  );
};

export default LogOutForm;
