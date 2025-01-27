"use client";
import useUserStore from '@/app/state/store';
import AdminDashboard from './AdminDashboard';
import ReceptionistDashboard from './ReceptionistDashboard';
import HousekeepingDashboard from './HouseKeepingDashboard';
import GuestDashboard from '../profile/page';

const Dashboard = () => {
  const role = useUserStore((state) => state.role);
  const email = useUserStore((state) => state.email);
  const firstname = useUserStore((state) => state.firstname);
  const lastname = useUserStore((state) => state.lastname);

  console.log('User Role: ', role);  // Log the role to verify its value
  console.log('First Name: ', firstname);
  console.log('Last Name: ', lastname);
  console.log('User Email: ', email);

  if (!role) {
    // Redirect to a login page or error page if role is not set
    return <div>Redirecting...</div>;
  }

  switch (role) {
    case 'manager':
      return <AdminDashboard />;
    case 'receptionist':
      return <ReceptionistDashboard />;
    case 'housekeeping':
      return <HousekeepingDashboard />;
    case 'guest':
      return <GuestDashboard firstname={firstname} lastname={lastname} email={email}/>;
    default:
      return <div>Welcome to RoomBridge! You do not have the required permissions.</div>;
  }
};

export default Dashboard;
