import { AdminLayout } from '@/components/v1';
import { type NextPageWithAuth } from '@/types';

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
