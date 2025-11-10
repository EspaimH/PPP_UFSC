import React from 'react';
import { Course } from '../types';
import { COURSES } from '../data/courses';

interface CourseDetailModalProps {
  course: Course;
  onClose: () => void;
  dependents: string[];
  completedCourses: Set<string>;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose, dependents, completedCourses }) => {
  const prerequisites = course.prerequisites.map(id => COURSES.find(c => c.id === id));
  const dependentCourses = dependents.map(id => COURSES.find(c => c.id === id));

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
        onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b sticky top-0 bg-white">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{course.name}</h2>
              <p className="text-sm font-medium text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full inline-block mt-2">{course.id}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-gray-100 rounded-lg">
                <div className="text-sm text-gray-500">Fase</div>
                <div className="text-lg font-bold">{course.semester}ª</div>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg">
                <div className="text-sm text-gray-500">Horas/Aula</div>
                <div className="text-lg font-bold">{course.hours}h</div>
            </div>
             <div className="p-3 bg-gray-100 rounded-lg">
                <div className="text-sm text-gray-500">Horas PCC</div>
                <div className="text-lg font-bold">{course.pccHours}h</div>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg">
                <div className="text-sm text-gray-500">Créditos (est.)</div>
                <div className="text-lg font-bold">{Math.floor(course.hours/18)}</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Pré-requisitos</h3>
            {prerequisites.length > 0 ? (
              <ul className="space-y-2">
                {prerequisites.map(prereq => prereq && (
                  <li key={prereq.id} className={`p-3 rounded-md flex items-center ${completedCourses.has(prereq.id) ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {completedCourses.has(prereq.id) ? '✅' : '❌'}
                    <span className="ml-3 font-medium">{prereq.name} ({prereq.id})</span>
                  </li>
                ))}
              </ul>
            ) : <p className="text-gray-500">Nenhum pré-requisito.</p>}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Libera as seguintes disciplinas</h3>
            {dependentCourses.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {dependentCourses.map(dep => dep && (
                  <span key={dep.id} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {dep.name} ({dep.id})
                  </span>
                ))}
              </div>
            ) : <p className="text-gray-500">Não libera nenhuma disciplina diretamente.</p>}
          </div>

        </div>
      </div>
    </div>
  );
};