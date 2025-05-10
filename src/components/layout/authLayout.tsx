import { Outlet } from 'react-router-dom';

function AuthLayout() {
    
  return (
    <div className="flex min-h-screen w-full bg-[#322319] items-center justify-center">
      <Outlet />
    </div>
  );
}

export default AuthLayout;