import { AdminLayout } from '@/components';
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
AdminDashboard.auth = false; // @FIXME: testing .tina admin panel routing
