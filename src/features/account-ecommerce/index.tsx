import { AuthAvatar } from '@/components/common/AuthAvatar'
import { CreditCard, Heart, LogOut, MapPin, Settings, ShoppingBag, User } from 'lucide-react'
import { useState } from 'react'

export default function Account() {
  const [activeTab, setActiveTab] = useState('profile')

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: '/api/placeholder/80/80',
    orders: [
      { id: '#123456', date: '2023-04-15', status: 'Delivered', total: '$156.00' },
      { id: '#123457', date: '2023-05-20', status: 'Processing', total: '$89.99' },
      { id: '#123458', date: '2023-06-12', status: 'Shipped', total: '$210.50' },
    ],
    wishlist: [
      { id: 1, name: 'Wireless Headphones', price: '$129.99' },
      { id: 2, name: 'Smart Watch', price: '$249.99' },
      { id: 3, name: 'Portable Speaker', price: '$79.99' },
    ],
    addresses: [
      { id: 1, type: 'Home', address: '123 Main St, Apt 4B, New York, NY 10001' },
      { id: 2, type: 'Work', address: '456 Business Ave, Suite 200, New York, NY 10018' },
    ],
    paymentMethods: [
      { id: 1, type: 'Credit Card', last4: '4242', expiry: '05/25' },
      { id: 2, type: 'PayPal', email: 'john.doe@example.com' },
    ],
  }

  // Mobile navigation tabs
  const mobileNavTabs = [
    { id: 'profile', label: 'Profile', icon: <User size={20} /> },
    { id: 'orders', label: 'Orders', icon: <ShoppingBag size={20} /> },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart size={20} /> },
    { id: 'addresses', label: 'Address', icon: <MapPin size={20} /> },
    { id: 'payment', label: 'Payment', icon: <CreditCard size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ]

  // Sidebar menu items for desktop
  const sidebarItems = [
    { id: 'profile', label: 'My Profile', icon: <User size={18} /> },
    { id: 'orders', label: 'Order History', icon: <ShoppingBag size={18} /> },
    { id: 'wishlist', label: 'My Wishlist', icon: <Heart size={18} /> },
    { id: 'addresses', label: 'My Addresses', icon: <MapPin size={18} /> },
    { id: 'payment', label: 'Payment Methods', icon: <CreditCard size={18} /> },
    { id: 'settings', label: 'Account Settings', icon: <Settings size={18} /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header for mobile view */}
      <div className="lg:hidden bg-white p-4 shadow">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">My Account</h1>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Settings size={20} />
          </button>
        </div>
        <div className="mt-4 flex items-center">
          <AuthAvatar />
          <div className="ml-4">
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Mobile navigation tabs */}
      <div className="lg:hidden overflow-x-auto bg-white shadow-sm">
        <div className="flex p-1 space-x-4 min-w-max">
          {mobileNavTabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 flex flex-col items-center text-xs rounded-lg ${
                activeTab === tab.id
                  ? 'text-blue-600 bg-blue-50 font-medium'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span className="mt-1">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-6 lg:py-10 flex flex-col lg:flex-row">
        {/* Desktop sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex flex-col items-center text-center mb-6">
              <AuthAvatar size="3xl" />
              <h2 className="font-semibold text-xl mt-4">{user.name}</h2>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>

            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}

              <button className="w-full flex items-center px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50">
                <span className="mr-3">
                  <LogOut size={18} />
                </span>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 lg:ml-8">
          <div className="bg-white rounded-lg shadow p-6">
            {/* Conditionally render different sections based on active tab */}
            {activeTab === 'profile' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">My Profile</h1>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue={user.name}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="Enter your phone number"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Birthday
                        </label>
                        <input
                          type="date"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Profile Picture</h3>
                    <div className="flex items-center">
                      <AuthAvatar size="2xl" />
                      <div className="ml-6">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                          Change Picture
                        </button>
                        <p className="text-xs text-gray-500 mt-1">JPG, GIF or PNG. Max size 2MB</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex justify-end">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Order History</h1>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 text-left">
                      <tr>
                        <th className="px-4 py-3 text-sm font-medium text-gray-500">Order ID</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-500">Date</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-500">Status</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-500">Total</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {user.orders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">
                            {order.id}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500">{order.date}</td>
                          <td className="px-4 py-4 text-sm">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                order.status === 'Delivered'
                                  ? 'bg-green-100 text-green-800'
                                  : order.status === 'Processing'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500">{order.total}</td>
                          <td className="px-4 py-4 text-sm">
                            <button className="text-blue-600 hover:text-blue-800">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
                <div className="grid md:grid-cols-2 gap-4">
                  {user.wishlist.map((item) => (
                    <div
                      key={item.id}
                      className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
                    >
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                          <ShoppingBag size={24} className="text-gray-400" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-600">{item.price}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                          <ShoppingBag size={18} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
                          <Heart size={18} fill="currentColor" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold">My Addresses</h1>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Add New Address
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {user.addresses.map((address) => (
                    <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                          {address.type}
                        </span>
                        <div className="flex space-x-2">
                          <button className="text-gray-500 hover:text-blue-600">Edit</button>
                          <button className="text-gray-500 hover:text-red-600">Delete</button>
                        </div>
                      </div>
                      <p className="text-gray-700">{address.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'payment' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold">Payment Methods</h1>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Add Payment Method
                  </button>
                </div>
                <div className="space-y-4">
                  {user.paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                          {method.type === 'Credit Card' ? (
                            <CreditCard size={24} className="text-gray-500" />
                          ) : (
                            <div className="text-blue-500 font-bold">PP</div>
                          )}
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium">{method.type}</h3>
                          {method.type === 'Credit Card' ? (
                            <p className="text-gray-600">
                              •••• •••• •••• {method.last4} | Expires {method.expiry}
                            </p>
                          ) : (
                            <p className="text-gray-600">{method.email}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button className="text-gray-500 hover:text-blue-600">Edit</button>
                        <button className="text-gray-500 hover:text-red-600">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Password</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          placeholder="Enter current password"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Change Password
                    </button>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium mb-4">Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Order Updates</h4>
                          <p className="text-sm text-gray-500">Receive updates about your orders</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Promotions</h4>
                          <p className="text-sm text-gray-500">
                            Receive emails about new promotions
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Newsletter</h4>
                          <p className="text-sm text-gray-500">Receive our weekly newsletter</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium mb-4 text-red-600">Danger Zone</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <button className="bg-white border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-50">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="flex justify-around">
          <button className="p-2 flex flex-col items-center text-xs text-gray-500">
            <User size={20} />
            <span>Account</span>
          </button>
          <button className="p-2 flex flex-col items-center text-xs text-gray-500">
            <ShoppingBag size={20} />
            <span>Orders</span>
          </button>
          <button className="p-2 flex flex-col items-center text-xs text-gray-500">
            <Heart size={20} />
            <span>Wishlist</span>
          </button>
          <button className="p-2 flex flex-col items-center text-xs text-red-500">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}
