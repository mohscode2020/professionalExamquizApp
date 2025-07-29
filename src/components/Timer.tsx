import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  initialTime: number;
  onTimeUp: () => void;
  isActive: boolean;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeUp, isActive }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            onTimeUp();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, onTimeUp]);

  const percentage = (timeLeft / initialTime) * 100;
  const isWarning = percentage <= 25;
  const isDanger = percentage <= 10;

  return (
    <div className="flex items-center space-x-3">
      <Clock className={`h-5 w-5 ${isDanger ? 'text-red-500' : isWarning ? 'text-yellow-500' : 'text-blue-500'}`} />
      <div className="flex-1">
        <div className="flex items-center justify-between text-sm mb-1">
          <span className={`font-medium ${isDanger ? 'text-red-600' : isWarning ? 'text-yellow-600' : 'text-gray-600'}`}>
            Time: {timeLeft}s
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              isDanger ? 'bg-red-500' : isWarning ? 'bg-yellow-500' : 'bg-blue-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Timer;