
import React, { useState, useEffect } from 'react';
import { HOURS } from '../constants';

const BusinessStatus: React.FC = () => {
  const [status, setStatus] = useState<{ isOpen: boolean; message: string }>({
    isOpen: false,
    message: "..."
  });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
      const dayHours = HOURS.find(h => h.day === dayName);

      if (!dayHours) {
        setStatus({ isOpen: false, message: "Closed today" });
        return;
      }

      const [openTime, openPeriod] = dayHours.open.split(' ');
      const [closeTime, closePeriod] = dayHours.close.split(' ');
      const [openH, openM] = openTime.split(':').map(Number);
      const [closeH, closeM] = closeTime.split(':').map(Number);

      const open24 = (openPeriod === 'PM' && openH !== 12 ? openH + 12 : (openPeriod === 'AM' && openH === 12 ? 0 : openH));
      const close24 = (closePeriod === 'PM' && closeH !== 12 ? closeH + 12 : (closePeriod === 'AM' && closeH === 12 ? 0 : closeH));

      const currentTime = now.getHours() * 60 + now.getMinutes();
      const openTimeMins = open24 * 60 + openM;
      const closeTimeMins = close24 * 60 + closeM;

      if (currentTime >= openTimeMins && currentTime < closeTimeMins) {
        setStatus({ isOpen: true, message: `Market Open • Closes ${dayHours.close}` });
      } else {
        setStatus({ isOpen: false, message: `Market Closed • Opens ${dayHours.open}` });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border transition-all duration-500 ${
      status.isOpen 
        ? 'border-emerald-200 bg-emerald-50/50 text-emerald-800' 
        : 'border-stone-200 bg-stone-50 text-stone-500'
    }`}>
      <span className={`relative flex h-2 w-2`}>
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.isOpen ? 'bg-emerald-400' : 'bg-stone-300'}`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${status.isOpen ? 'bg-emerald-500' : 'bg-stone-400'}`}></span>
      </span>
      <span className="text-[11px] font-bold uppercase tracking-[0.1em]">{status.message}</span>
    </div>
  );
};

export default BusinessStatus;
