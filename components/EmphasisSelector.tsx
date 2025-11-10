
import React from 'react';
import { EMPHASES, EmphasisKey } from '../data/courses';

interface EmphasisSelectorProps {
    label: string;
    selectedEmphasis: EmphasisKey | null;
    onSelect: (key: EmphasisKey | null) => void;
    disabledEmphasis: EmphasisKey | null;
}

export const EmphasisSelector: React.FC<EmphasisSelectorProps> = ({ label, selectedEmphasis, onSelect, disabledEmphasis }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <select
                value={selectedEmphasis || ''}
                onChange={(e) => onSelect(e.target.value as EmphasisKey || null)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                <option value="">-- Nenhuma --</option>
                {Object.entries(EMPHASES).map(([key, value]) => (
                    <option 
                        key={key} 
                        value={key} 
                        disabled={key === disabledEmphasis}
                        className={key === disabledEmphasis ? 'text-gray-400' : ''}
                    >
                       Ênfase {key}: {value}
                    </option>
                ))}
            </select>
        </div>
    );
};
