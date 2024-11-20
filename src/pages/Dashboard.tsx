import React from 'react';
import { useGetStoresQuery } from '../store/services/storeService';
import { LayoutGrid, TrendingUp, Package, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, value, icon: Icon, link, color }: any) => (
  <Link to={link} className="block">
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  </Link>
);

const Dashboard = () => {
  const { data: stores } = useGetStoresQuery();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Stores"
          value={stores?.length || 0}
          icon={LayoutGrid}
          link="/stores"
          color="bg-blue-500"
        />
        <DashboardCard
          title="Today's Sales"
          value="$0.00"
          icon={TrendingUp}
          link="/sales"
          color="bg-green-500"
        />
        <DashboardCard
          title="Total Products"
          value="0"
          icon={Package}
          link="/products"
          color="bg-purple-500"
        />
        <DashboardCard
          title="Recent Orders"
          value="0"
          icon={Receipt}
          link="/sales"
          color="bg-yellow-500"
        />
      </div>
    </div>
  );
};

export default Dashboard;