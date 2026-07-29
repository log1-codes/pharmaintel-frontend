import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6 animate-in fade-in">
            <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Profile Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Full Name</span>
                <span className="text-white font-medium">Dr. Jane Smith</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Email Address</span>
                <span className="text-white font-medium">jane@organization.com</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Contact Number</span>
                <span className="text-white font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">User Type</span>
                <span className="text-white font-medium">Organization</span>
              </div>
            </div>
          </div>
        );
      case 'organization':
        return (
          <div className="space-y-6 animate-in fade-in">
            <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Organization Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Organization Name</span>
                <span className="text-white font-medium">PharmaCorp Inc.</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Organization Type</span>
                <span className="text-white font-medium">Pharma</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Department</span>
                <span className="text-white font-medium">Oncology R&D</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 md:col-span-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Address</span>
                <span className="text-white font-medium block">123 Science Park, Boston, MA, USA, 02115</span>
              </div>
            </div>
          </div>
        );
      case 'chapters':
        return (
          <div className="space-y-6 animate-in fade-in">
            <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Requested Chapters</h3>
            <div className="space-y-4">
              {[
                { id: 1, name: 'Chapter 1: Target Biology', status: 'Approved', date: '2026-05-12' },
                { id: 2, name: 'Chapter 2: Methodology', status: 'Pending', date: '2026-05-14' },
                { id: 3, name: 'Chapter 4: Patent Landscape', status: 'Approved', date: '2026-05-15' }
              ].map(chapter => (
                <div key={chapter.id} className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">{chapter.name}</h4>
                    <span className="text-xs text-slate-400">Requested on: {chapter.date}</span>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${chapter.status === 'Approved' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`}>
                    {chapter.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-6 animate-in fade-in">
            <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Analytics Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center items-center">
                <span className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>12</span>
                <span className="text-sm text-slate-400 text-center">Total Logins This Month</span>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center items-center">
                <span className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>4</span>
                <span className="text-sm text-slate-400 text-center">Chapters Unlocked</span>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center items-center">
                <span className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Tier 1</span>
                <span className="text-sm text-slate-400 text-center">Current Plan Level</span>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6 animate-in fade-in">
            <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Account Settings</h3>
            <div className="space-y-4">
              <button className="w-full text-left bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
                <div className="text-white font-medium">Change Password</div>
                <div className="text-xs text-slate-400">Update your account password.</div>
              </button>
              <button className="w-full text-left bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
                <div className="text-white font-medium">Update Billing Information</div>
                <div className="text-xs text-slate-400">Manage your payment methods and invoices.</div>
              </button>
              <button className="w-full text-left bg-red-500/10 p-4 rounded-xl border border-red-500/20 hover:bg-red-500/20 transition">
                <div className="text-red-400 font-medium">Delete Account</div>
                <div className="text-xs text-red-400/70">Permanently remove your account and data.</div>
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-slate-950/70 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-semibold tracking-tight text-xl hidden sm:block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AmethIntel</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-300 hidden sm:block">Welcome, <span className="text-white font-medium">Dr. Jane Smith</span></div>
            <button onClick={handleLogout} className="text-sm font-medium text-slate-400 hover:text-white transition px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-2">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'profile' ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            Profile Information
          </button>
          <button 
            onClick={() => setActiveTab('organization')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'organization' ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            Organization Details
          </button>
          <button 
            onClick={() => setActiveTab('chapters')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'chapters' ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            Requested Chapters
          </button>
          <button 
            onClick={() => setActiveTab('analytics')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'analytics' ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            Analytics
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'settings' ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            Account Settings
          </button>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
