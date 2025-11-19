'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LogItem } from '@/components/LogItem';
import { logsData } from '@/lib/mockData';

const LogsPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-light text-winter-900 mb-1">Execution Logs</h1>
        <p className="text-winter-600 text-sm mb-6">Real-time workflow monitoring and diagnostics</p>
      </div>

      <div className="bg-white/30 backdrop-blur-md border border-winter-200 rounded-2xl overflow-hidden">
        <div className="border-b border-winter-200 bg-white/50">
          <div className="flex items-center justify-between p-4 md:p-6">
            <h2 className="text-lg font-medium text-winter-900">Recent Activity</h2>
            <div className="flex items-center gap-2">
              <button className="text-xs px-3 py-1.5 rounded-lg bg-winter-100 text-winter-600 border border-winter-200 hover:bg-winter-200 transition-colors">
                Filter
              </button>
              <button className="text-xs px-3 py-1.5 rounded-lg bg-winter-700 text-white hover:bg-winter-800 transition-colors">
                Export
              </button>
            </div>
          </div>
        </div>
        
        <div className="divide-y divide-winter-100">
          {logsData.map((log, index) => (
            <LogItem key={log.id} {...log} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LogsPage;