import { useState, useEffect } from 'react';
import { getCustomers } from '../services/api';

interface Customer {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  country: string;
}

function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await getCustomers();
        setCustomers(response.data as Customer[]);
      } catch (err) {
        setError('Failed to fetch customers');
      } finally {
        setLoading(false);
      }
    }
    fetchCustomers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Country</th>
            <th className="border p-2">Coordinates</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="border p-2">{customer.name}</td>
              <td className="border p-2">{customer.address}</td>
              <td className="border p-2">{customer.country}</td>
              <td className="border p-2">{`${customer.latitude}, ${customer.longitude}`}</td>
              <td className="border p-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;