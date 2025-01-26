"use client";
import useUserStore from '@/app/state/store';
import AdminDashboard from './AdminDashboard';
import ReceptionistDashboard from './ReceptionistDashboard';
import HousekeepingDashboard from './HouseKeepingDashboard';
import GuestDashboard from './GuestDashboard';

const Dashboard = () => {
  const role = useUserStore((state) => state.role);

  console.log('User Role:', role);  // Log the role to verify its value

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
      return <GuestDashboard />;
    default:
      return <div>Welcome to RoomBridge! You do not have the required permissions.</div>;
  }
};

export default Dashboard;
