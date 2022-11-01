import { AdminLayout } from 'chakra.ui';

const AdminDashboard = () => {
  return (
    <AdminLayout title="admin" description="no-follow">
      Admin
    </AdminLayout>
  );
};

export default AdminDashboard;
AdminDashboard.auth = true;
