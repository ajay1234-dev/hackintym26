'use client';

import React, { useEffect, useState } from 'react';
import { useAuth, logoutAdmin } from '@/lib/firebase/auth';
import { getTeams, updateTeamStatus, TeamRegistration } from '@/lib/firebase/firestore';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Check, X, LogOut, Download, Users, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [teams, setTeams] = useState<(TeamRegistration & { id: string })[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      loadTeams();
    }
  }, [user]);

  const loadTeams = async () => {
    setDataLoading(true);
    const data = await getTeams();
    setTeams(data);
    setDataLoading(false);
  };

  const handleStatusChange = async (id: string, newStatus: 'approved' | 'rejected') => {
    await updateTeamStatus(id, newStatus);
    // Optimistic update
    setTeams(teams.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const handleLogout = async () => {
    await logoutAdmin();
    router.push('/admin/login');
  };

  const exportCSV = () => {
    const headers = ['Team Name', 'College', 'Domain', 'Leader', 'Email', 'Phone', 'Members', 'Status', 'Date'];
    const csvContent = [
      headers.join(','),
      ...teams.map(t => [
        `"${t.teamName}"`,
        `"${t.collegeName}"`,
        `"${t.domain}"`,
        `"${t.leaderName}"`,
        `"${t.email}"`,
        `"${t.phone}"`,
        `"${t.members.join('; ')}"`,
        t.status,
        new Date(t.createdAt).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `hackintym-teams-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-hack-darkBg">
        <Loader2 className="w-10 h-10 text-hack-neonCyan animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hack-darkBg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Manage registrations and hackathon configurations.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={exportCSV} className="flex items-center gap-2 text-white border-white/20 hover:bg-white/10">
              <Download size={16} /> Export CSV
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-300 hover:bg-red-400/10">
              <LogOut size={16} /> Logout
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <Card className="flex items-center gap-4 p-6 border-white/5">
            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400"><Users size={24} /></div>
            <div>
              <p className="text-sm text-gray-400">Total Teams</p>
              <h3 className="text-2xl font-bold text-white">{teams.length}</h3>
            </div>
          </Card>
          <Card className="flex items-center gap-4 p-6 border-white/5">
            <div className="p-3 bg-hack-neonCyan/20 rounded-lg text-hack-neonCyan"><Check size={24} /></div>
            <div>
              <p className="text-sm text-gray-400">Approved</p>
              <h3 className="text-2xl font-bold text-white">{teams.filter(t => t.status === 'approved').length}</h3>
            </div>
          </Card>
          <Card className="flex items-center gap-4 p-6 border-white/5">
            <div className="p-3 bg-hack-neonPurple/20 rounded-lg text-hack-neonPurple"><Loader2 size={24} /></div>
            <div>
              <p className="text-sm text-gray-400">Pending Review</p>
              <h3 className="text-2xl font-bold text-white">{teams.filter(t => t.status === 'pending').length}</h3>
            </div>
          </Card>
        </div>

        {/* Teams Table */}
        <Card className="p-0 border-white/10 overflow-hidden">
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
            <h2 className="text-xl font-bold text-white">Registered Teams</h2>
            <Button size="sm" variant="ghost" onClick={loadTeams}>Refresh</Button>
          </div>
          
          <div className="overflow-x-auto">
            {dataLoading ? (
              <div className="p-12 flex justify-center"><Loader2 className="w-8 h-8 text-hack-neonCyan animate-spin" /></div>
            ) : teams.length === 0 ? (
              <div className="p-12 text-center text-gray-500">No teams registered yet.</div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-gray-300 text-sm border-b border-white/10">
                    <th className="p-4 font-medium">Team Info</th>
                    <th className="p-4 font-medium">Domain</th>
                    <th className="p-4 font-medium">Contact</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {teams.map((team, idx) => (
                    <motion.tr 
                      key={team.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="hover:bg-white/[0.02] transition-colors group"
                    >
                      <td className="p-4">
                        <div className="font-bold text-white mb-1 group-hover:text-hack-neonCyan transition-colors">{team.teamName}</div>
                        <div className="text-xs text-gray-400">{team.collegeName}</div>
                        <div className="text-xs text-gray-500 mt-1">{team.members.length} members</div>
                      </td>
                      <td className="p-4">
                        <span className="inline-flex px-2 py-1 rounded text-xs font-medium bg-hack-neonPurple/10 text-hack-neonPurple border border-hack-neonPurple/20">
                          {team.domain}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-300">{team.leaderName}</div>
                        <div className="text-xs text-gray-500 truncate max-w-[150px]">{team.email}</div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold
                          ${team.status === 'approved' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : ''}
                          ${team.status === 'pending' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : ''}
                          ${team.status === 'rejected' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : ''}
                        `}>
                          {team.status.charAt(0).toUpperCase() + team.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {team.status !== 'approved' && (
                            <button 
                              onClick={() => handleStatusChange(team.id, 'approved')}
                              className="p-1.5 rounded-md bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors"
                              title="Approve"
                            >
                              <Check size={16} />
                            </button>
                          )}
                          {team.status !== 'rejected' && (
                            <button 
                              onClick={() => handleStatusChange(team.id, 'rejected')}
                              className="p-1.5 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                              title="Reject"
                            >
                              <X size={16} />
                            </button>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </Card>

      </div>
    </div>
  );
}
