import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Shuffle,
  ShieldAlert,
  Cpu,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Sliders,
  Smartphone,
  X,
  Target,
} from 'lucide-react';
import { Inspection } from '../../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const RandomAssignmentModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { runRandomSurpriseAssignment, setRole } = useApp();
  const [schemeFilter, setSchemeFilter] = useState<string>('all');
  const [stateFilter, setStateFilter] = useState<string>('all');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [resultInspection, setResultInspection] = useState<Inspection | null>(null);

  if (!isOpen) return null;

  const steps = [
    'Generating cryptographically secure entropy seed for unannounced randomization...',
    'Scanning 1,248 registered DoSJE projects against Anomaly Risk Index...',
    'Applying Department Rule #4B (Days elapsed + Z-score anomaly weight)...',
    'Selecting target facility and matching nearest uncommitted PMU inspection team...',
    'Encrypting digital dispatch order and pushing to Inspector Mobile Companion...',
  ];

  const handleRunEngine = () => {
    setIsProcessing(true);
    setCurrentStepIndex(0);
    setResultInspection(null);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < steps.length) {
        setCurrentStepIndex(step);
      } else {
        clearInterval(interval);
        const createdInspection = runRandomSurpriseAssignment({
          scheme: schemeFilter,
          state: stateFilter,
        });
        setResultInspection(createdInspection);
        setIsProcessing(false);
      }
    }, 450);
  };

  const handleGoToInspectorApp = () => {
    onClose();
    setRole('inspector');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden flex flex-col text-slate-100">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                AI Automated Surprise Inspection Dispatcher
              </h3>
              <p className="text-xs text-slate-400">
                Randomized duty assignment engine to eliminate predictability & proxy functioning
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Configuration / Criteria */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Target Scheme:</label>
              <select
                value={schemeFilter}
                onChange={(e) => setSchemeFilter(e.target.value)}
                disabled={isProcessing}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All DoSJE Schemes</option>
                <option value="Deendayal Disabled Rehabilitation Scheme (DDRS)">DDRS (Disability Rehabilitation)</option>
                <option value="Atal Vayo Abhyuday Yojana (AVYAY)">AVYAY (Senior Citizens Care)</option>
                <option value="National Action Plan for Drug Demand Reduction (NAPDDR)">NAPDDR (Drug De-addiction)</option>
                <option value="PM-DAKSH (Pradhan Mantri Dakshta Aur Kushalta Sampann Hitgrahi)">PM-DAKSH</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">State / Zone:</label>
              <select
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                disabled={isProcessing}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">Pan-India (All States)</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
              </select>
            </div>
          </div>

          {/* Algorithmic Weighting Rules */}
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-2 text-xs text-slate-300">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-indigo-400" />
              <span>Multi-Factor Random Assignment Criteria:</span>
            </div>
            <ul className="space-y-1 list-disc list-inside text-slate-400 text-[11px]">
              <li>
                <strong className="text-slate-300">AI Anomaly Weight (45%):</strong> Projects with sudden attendance drops or CCTV outages receive priority scoring.
              </li>
              <li>
                <strong className="text-slate-300">Elapsed Cycle (25%):</strong> Facilities unvisited for &gt; 90 days.
              </li>
              <li>
                <strong className="text-slate-300">Cryptographic Entropy Seed (30%):</strong> Randomized factor preventing NGOs from predicting inspection schedules.
              </li>
            </ul>
          </div>

          {/* Process Animation */}
          {isProcessing && (
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-600/40 space-y-3">
              <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold">
                <RefreshCw className="w-4 h-4 animate-spin text-indigo-400" />
                <span>Running Algorithmic Selection...</span>
              </div>
              <p className="text-xs text-slate-200 font-mono bg-black/40 p-2.5 rounded-lg border border-indigo-500/20">
                &gt; {steps[currentStepIndex]}
              </p>
            </div>
          )}

          {/* Result Card */}
          {resultInspection && !isProcessing && (
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 space-y-3 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-sm text-white">Surprise Duty Successfully Assigned!</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {resultInspection.id}
                </span>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Facility:</span>
                  <span className="font-bold text-white text-right">{resultInspection.projectName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Assigned Team:</span>
                  <span className="font-bold text-amber-400">{resultInspection.assignedTeamId} ({resultInspection.inspectorName})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Trigger Reason:</span>
                  <span className="text-slate-300 text-right truncate max-w-[280px]">{resultInspection.triggerReason}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dispatch Order:</span>
                  <span className="text-emerald-400 font-semibold">Immediate Unannounced On-site Arrival</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-300">
                The inspection assignment is now live in the inspector's mobile app. Proceed to the companion app to complete GPS verification and evidence capture.
              </p>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-800/80 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>

          <div className="flex items-center gap-2">
            {!resultInspection ? (
              <button
                onClick={handleRunEngine}
                disabled={isProcessing}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-xs shadow-lg shadow-indigo-900/40 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Shuffle className="w-4 h-4" />
                <span>Execute Random Selection</span>
              </button>
            ) : (
              <button
                onClick={handleGoToInspectorApp}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Switch to Inspector App (View Assignment)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
