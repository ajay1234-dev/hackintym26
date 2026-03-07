'use client';

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { loginAdmin } from '@/lib/firebase/auth';
import { Lock, Loader2, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await loginAdmin(email, password);

    if (result.user) {
      router.push('/admin');
    } else {
      setError('Invalid admin credentials.');
    }
    
    setLoading(false);
  };

  return (
    <Section className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md p-8 border-white/10">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-hack-neonPurple/20 flex items-center justify-center mb-4 border border-hack-neonPurple/30">
            <Lock className="w-8 h-8 text-hack-neonPurple" />
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Access</h1>
          <p className="text-gray-400 text-sm">Authorized personnel only</p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/50 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-200">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-300">Admin Email</label>
            <input 
              required 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-hack-neonPurple focus:ring-1 focus:ring-hack-neonPurple transition-all" 
              placeholder="admin@hackintym.com" 
            />
          </div>
          
          <div className="space-y-1 pb-4">
            <label className="text-sm font-medium text-gray-300">Password</label>
            <input 
              required 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-hack-neonPurple focus:ring-1 focus:ring-hack-neonPurple transition-all" 
              placeholder="••••••••" 
            />
          </div>

          <Button type="submit" variant="secondary" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Authenticate"}
          </Button>
        </form>
      </Card>
    </Section>
  );
}
