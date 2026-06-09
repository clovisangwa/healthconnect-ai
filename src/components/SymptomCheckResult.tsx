'use client';

import { motion } from 'framer-motion';

interface SymptomCheckResultProps {
  severity: 'green' | 'yellow' | 'orange' | 'red';
  recommendations: string[];
  conditions: string[];
  shouldSeeDoctor: boolean;
}

const SymptomCheckResult = ({
  severity,
  recommendations,
  conditions,
  shouldSeeDoctor,
}: SymptomCheckResultProps) => {
  const severityConfig = {
    green: { bg: 'bg-green-100 dark:bg-green-900', text: 'text-green-800 dark:text-green-100', label: 'Low Risk' },
    yellow: { bg: 'bg-yellow-100 dark:bg-yellow-900', text: 'text-yellow-800 dark:text-yellow-100', label: 'Monitor' },
    orange: { bg: 'bg-orange-100 dark:bg-orange-900', text: 'text-orange-800 dark:text-orange-100', label: 'Consult Soon' },
    red: { bg: 'bg-red-100 dark:bg-red-900', text: 'text-red-800 dark:text-red-100', label: 'Urgent' },
  };

  const config = severityConfig[severity];

  return (
    <motion.div
      className={`${config.bg} ${config.text} p-6 rounded-2xl`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="mb-4">
        <span className={`inline-block px-4 py-2 rounded-full font-bold ${config.bg}`}>
          {config.label}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-4">Possible Conditions:</h3>
      <ul className="space-y-2 mb-6">
        {conditions.map((condition, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-lg">•</span>
            {condition}
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold mb-4">Recommendations:</h3>
      <ul className="space-y-2 mb-6">
        {recommendations.map((rec, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-lg">✓</span>
            {rec}
          </li>
        ))}
      </ul>

      {shouldSeeDoctor && (
        <motion.div
          className="bg-white/20 p-4 rounded-lg border-l-4 border-current"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <p className="font-bold">💡 We recommend consulting with a doctor for professional advice.</p>
        </motion.div>
      )}

      <p className="text-xs mt-4 opacity-75">
        ⚠️ This is for educational purposes only and not a medical diagnosis.
      </p>
    </motion.div>
  );
};

export default SymptomCheckResult;
