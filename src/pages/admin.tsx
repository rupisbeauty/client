import { type NextPageWithAuth } from '@/types';
import { AdminLayout } from 'chakra.ui';

// @TODO: build out admin dashboard

const AdminDashboard: NextPageWithAuth & { auth: boolean } = () => {
  return (
    <AdminLayout title="admin" description="no-follow">
      Admin
    </AdminLayout>
  );
};

export default AdminDashboard;
AdminDashboard.auth = true;
