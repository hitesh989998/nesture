/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiEdit, FiTrash } from 'react-icons/fi';

const AdminAddUser = () => {
  const [addUserData, setAddUserData] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
  });

  const [updateUserData, setUpdateUserData] = useState({
    id: '',
    name: '',
    email: '',
    role: '',
    password: '',
  });

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_WEB_URL}/api/allusers`
      );
      setUsers(response.data);
    } catch (error) {
      toast.error('Failed to fetch users');
      throw error;
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUserHandler = (e) => {
    const { name, value } = e.target;
    setAddUserData((prev) => ({ ...prev, [name]: value }));
  };

  const addUserSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_WEB_URL}/api/users`,
        addUserData
      );
      toast.success('User added successfully');
      setAddUserData({
        name: '',
        email: '',
        role: '',
        password: '',
      });
      fetchUsers();
    } catch (error) {
      toast.error('Failed to add user');
      throw error;
    }
  };

  const updateUserHandler = (e) => {
    const { name, value } = e.target;
    setUpdateUserData((prev) => ({ ...prev, [name]: value }));
  };

  const updateUserSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_WEB_URL}/api/users/${updateUserData.id}`,
        updateUserData
      );
      toast.success('User updated successfully');
      setUpdateUserData({
        id: '',
        name: '',
        email: '',
        role: '',
        password: '',
      });
      fetchUsers();
    } catch (error) {
      toast.error('Failed to update user');
      throw error;
    }
  };

  const handleEdit = (user) => {
    setUpdateUserData(user);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      toast.success('User deleted successfully');
      fetchUsers();
    } catch (error) {
      toast.error('Failed to delete user');
      throw error;
    }
  };

  return (
    <div className="relative bg-white min-h-screen flex flex-col items-center gap-12 px-6 py-8">
      <h1 className="text-4xl font-bold text-[#009b7e]">Manage Users</h1>

      <section className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Add User
          </h2>
          <form onSubmit={addUserSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="User Name"
              value={addUserData.name}
              onChange={addUserHandler}
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={addUserData.email}
              onChange={addUserHandler}
              className="w-full border rounded-lg px-4 py-3"
            />
            <select
              name="role"
              value={addUserData.role}
              onChange={addUserHandler}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={addUserData.password}
              onChange={addUserHandler}
              className="w-full border rounded-lg px-4 py-3"
            />
            <button
              type="submit"
              className="bg-[#009b7e] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#007b63]"
            >
              Add User
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Update User
          </h2>
          <form onSubmit={updateUserSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="User Name"
              value={updateUserData.name}
              onChange={updateUserHandler}
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={updateUserData.email}
              onChange={updateUserHandler}
              className="w-full border rounded-lg px-4 py-3"
            />
            <select
              name="role"
              value={updateUserData.role}
              onChange={updateUserHandler}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={updateUserData.password}
              onChange={updateUserHandler}
              className="w-full border rounded-lg px-4 py-3"
            />
            <button
              type="submit"
              className="bg-[#009b7e] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#007b63]"
            >
              Update User
            </button>
          </form>
        </div>
      </section>

      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          All Users
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="relative flex flex-col bg-white shadow-md rounded-lg p-4"
            >
              <div className="flex flex-col items-start">
                <h3 className="font-bold text-lg mb-2">{user.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{user.email}</p>
                <p className="text-[#009b7e] font-semibold mb-2">{user.role}</p>
              </div>

              <div className="absolute bottom-4 right-4 flex flex-row gap-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-[#009b7e] text-white w-9 h-9 rounded-full flex items-center justify-center shadow-lg hover:bg-[#007b63]"
                >
                  <FiEdit className="text-lg" />
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700"
                >
                  <FiTrash className="text-lg" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminAddUser;
