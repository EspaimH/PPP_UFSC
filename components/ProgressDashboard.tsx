import React, { useMemo } from 'react';
import { Course } from '../types';
import { EmphasisKey } from '../data/courses';

interface ProgressDashboardProps {
  completedCourses: Set<string>;
  allCourses: Course[];
  completedNucleoComumCompHours: number;
  setCompletedNucleoComumCompHours: (value: number) => void;
  completedProfCompHours: number;
  setCompletedProfCompHours: (value: number) => void;
  includeLicenciatura: boolean;
  setIncludeLicenciatura: (value: boolean) => void;
  completedLicCompHours: number;
  setCompletedLicCompHours: (value: number) => void;
  emphasis1: EmphasisKey | null;
  emphasis2: EmphasisKey | null;
}

const REQUIRED_NC_COMP_HOURS = 468;
const REQUIRED_PROF_COMP_HOURS = 324;
const REQUIRED_LIC_COMP_HOURS = 270;


const ProgressBar: React.FC<{ value: number; max: number; label: string; color: string }> = ({ value, max, label, color }) => {
  const percentage = max > 0 ? Math.min(100, (value / max) * 100) : 0;
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-700">{value} / {max}h</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={`${color} h-2.5 rounded-full transition-all duration-300`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ 
  completedCourses, 
  allCourses,
  completedNucleoComumCompHours,
  setCompletedNucleoComumCompHours,
  completedProfCompHours,
  setCompletedProfCompHours,
  includeLicenciatura,
  setIncludeLicenciatura,
  completedLicCompHours,
  setCompletedLicCompHours,
  emphasis1,
  emphasis2,
 }) => {

  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      if (course.type === 'LICENCIATURA' && !includeLicenciatura) {
        return false;
      }
      if (!course.isEmphasis) return true;
      if(course.emphasisGroup === 'I') return course.emphasis === emphasis1;
      if(course.emphasisGroup === 'II') return course.emphasis === emphasis2;
      return false;
    });
  }, [allCourses, includeLicenciatura, emphasis1, emphasis2]);

  const progress = useMemo(() => {
    const commonCoreCourses = filteredCourses.filter(c => c.type === 'NUCLEO_COMUM');
    const professionalCourses = filteredCourses.filter(c => c.type === 'PROFISSIONALIZANTE_PSICOLOGO');
    const licenciaturaCourses = filteredCourses.filter(c => c.type === 'LICENCIATURA');

    const calcHours = (courses: Course[]) => {
      let required = 0;
      let completed = 0;
      let pcc = 0;
      let completedPcc = 0;
      courses.forEach(course => {
        required += course.hours;
        pcc += course.pccHours;
        if (completedCourses.has(course.id)) {
          completed += course.hours;
          completedPcc += course.pccHours;
        }
      });
      return { required, completed, pcc, completedPcc };
    };
    
    const ncProgress = calcHours(commonCoreCourses);
    const profProgress = calcHours(professionalCourses);
    const licProgress = calcHours(licenciaturaCourses);
    
    // Internship Prereq Calculation
    const completedNucleoComumCount = commonCoreCourses.filter(c => completedCourses.has(c.id)).length;
    const internshipPrereqProgress = commonCoreCourses.length > 0 ? (completedNucleoComumCount / commonCoreCourses.length) * 100 : 0;

    // Totals for Psicologo
    const nucleoComumTotalHours = ncProgress.required + REQUIRED_NC_COMP_HOURS;
    const completedNucleoComumHours = ncProgress.completed + completedNucleoComumCompHours;
    const profTotalHours = profProgress.required + REQUIRED_PROF_COMP_HOURS;
    const completedProfHours = profProgress.completed + completedProfCompHours;
    const psicologoTotalHours = nucleoComumTotalHours + profTotalHours;
    const psicologoCompletedHours = completedNucleoComumHours + completedProfHours;

    // Totals for Licenciatura (additive)
    const licTotalHours = licProgress.required + REQUIRED_LIC_COMP_HOURS;
    const licCompletedHours = licProgress.completed + completedLicCompHours;

    const totalPccHours = ncProgress.pcc + profProgress.pcc + (includeLicenciatura ? licProgress.pcc : 0);
    const completedPccHours = ncProgress.completedPcc + profProgress.completedPcc + (includeLicenciatura ? licProgress.completedPcc : 0);
    
    const totalHours = psicologoTotalHours + (includeLicenciatura ? licTotalHours : 0);
    const completedTotalHours = psicologoCompletedHours + (includeLicenciatura ? licCompletedHours : 0);
    
    const completedCount = filteredCourses.filter(c => completedCourses.has(c.id)).length;

    return {
      totalHours, completedTotalHours,
      nucleoComumTotalHours, completedNucleoComumHours,
      profTotalHours, completedProfHours,
      licTotalHours, licCompletedHours,
      totalPccHours, completedPccHours,
      completedCount,
      totalCount: filteredCourses.length,
      internshipPrereqProgress,
    };
  }, [completedCourses, filteredCourses, completedNucleoComumCompHours, completedProfCompHours, includeLicenciatura, completedLicCompHours]);

  const title = includeLicenciatura ? "Formação de Psicólogo + Licenciatura" : "Formação de Psicólogo";

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
        <div>
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-sm font-semibold text-gray-600">Total do Curso: {progress.totalHours} horas/aula</p>
        </div>
        <div className="flex items-center">
            <span className="text-sm font-medium text-gray-700 mr-3">Incluir Licenciatura</span>
            <div className="relative inline-block w-10 align-middle select-none">
                <input 
                    type="checkbox" 
                    name="lic-toggle" 
                    id="lic-toggle" 
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    checked={includeLicenciatura}
                    onChange={e => setIncludeLicenciatura(e.target.checked)}
                />
                <label htmlFor="lic-toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
        </div>
      </div>
       <p className="text-sm text-gray-500 mb-6">Alterne para incluir a habilitação em Licenciatura em seu plano de estudos e visualizar o progresso combinado.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="text-sm text-blue-600 font-semibold">Disciplinas Concluídas</div>
          <div className="text-3xl font-bold text-blue-800">{progress.completedCount} de {progress.totalCount}</div>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="text-sm text-green-600 font-semibold">Horas Totais</div>
          <div className="text-3xl font-bold text-green-800">{progress.completedTotalHours} de {progress.totalHours}h</div>
        </div>
         <div className="p-4 bg-indigo-50 rounded-lg">
          <div className="text-sm text-indigo-600 font-semibold">Horas PCC</div>
          <div className="text-3xl font-bold text-indigo-800">{progress.completedPccHours} de {progress.totalPccHours}h</div>
        </div>
         <div className="p-4 bg-yellow-50 rounded-lg">
          <div className="text-sm text-yellow-600 font-semibold">Créditos (estimado)</div>
          <div className="text-3xl font-bold text-yellow-800">{Math.floor(progress.completedTotalHours / 18)} de {Math.floor(progress.totalHours / 18)}</div>
        </div>
        <div className="p-4 bg-orange-50 rounded-lg">
          <div className="text-sm text-orange-600 font-semibold">Requisito para Estágio</div>
          <div className="text-3xl font-bold text-orange-800">{progress.internshipPrereqProgress.toFixed(0)}% de 85%</div>
           <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
            <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: `${Math.min(100, (progress.internshipPrereqProgress / 85) * 100)}%` }}></div>
          </div>
        </div>
      </div>
      <div className={`mt-6 grid gap-6 transition-all duration-300 ${includeLicenciatura ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
        <ProgressBar label={`Núcleo Comum (${progress.nucleoComumTotalHours}h)`} value={progress.completedNucleoComumHours} max={progress.nucleoComumTotalHours} color="bg-blue-600" />
        <ProgressBar label={`Profissionalizante (${progress.profTotalHours}h)`} value={progress.completedProfHours} max={progress.profTotalHours} color="bg-green-600" />
        {includeLicenciatura && <ProgressBar label={`Licenciatura (${progress.licTotalHours}h)`} value={progress.licCompletedHours} max={progress.licTotalHours} color="bg-purple-600" />}
        <ProgressBar label={`Total do Curso (${progress.totalHours}h)`} value={progress.completedTotalHours} max={progress.totalHours} color="bg-indigo-600" />
      </div>
      
      <div className="mt-8 border-t pt-6">
         <h3 className="text-lg font-semibold text-gray-800 mb-3" title="Pode ser cumprido com disciplinas ou Atividades Acadêmico-Científico-Culturais (AACC)">Horas Complementares</h3>
         <p className="text-sm text-gray-600 mb-4">Insira as horas de disciplinas complementares que você já cursou para cada área.</p>
         <div className={`grid gap-6 transition-all duration-300 ${includeLicenciatura ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            <div>
              <label htmlFor="nc-comp" className="block text-sm font-medium text-gray-700">Comum ({REQUIRED_NC_COMP_HOURS}h)</label>
              <input 
                type="number" id="nc-comp" min="0" max={REQUIRED_NC_COMP_HOURS}
                value={completedNucleoComumCompHours}
                onChange={(e) => setCompletedNucleoComumCompHours(Math.max(0, Math.min(REQUIRED_NC_COMP_HOURS, Number(e.target.value))))}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="prof-comp" className="block text-sm font-medium text-gray-700">Psicólogo ({REQUIRED_PROF_COMP_HOURS}h)</label>
              <input 
                type="number" id="prof-comp" min="0" max={REQUIRED_PROF_COMP_HOURS}
                value={completedProfCompHours}
                onChange={(e) => setCompletedProfCompHours(Math.max(0, Math.min(REQUIRED_PROF_COMP_HOURS, Number(e.target.value))))}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {includeLicenciatura && (
              <div>
                <label htmlFor="lic-comp" className="block text-sm font-medium text-gray-700">Licenciatura ({REQUIRED_LIC_COMP_HOURS}h)</label>
                <input 
                  type="number" id="lic-comp" min="0" max={REQUIRED_LIC_COMP_HOURS}
                  value={completedLicCompHours}
                  onChange={(e) => setCompletedLicCompHours(Math.max(0, Math.min(REQUIRED_LIC_COMP_HOURS, Number(e.target.value))))}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            )}
         </div>
      </div>

    </div>
  );
};