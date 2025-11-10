import React, { useMemo } from 'react';
import { CourseCard } from './CourseCard';
import { Course } from '../types';
import { COURSES, EmphasisKey } from '../data/courses';

interface CurriculumGridProps {
  completedCourses: Set<string>;
  onCourseToggle: (courseId: string) => void;
  onCourseClick: (course: Course) => void;
  onCourseHover: (courseId: string | null) => void;
  hoveredCourseId: string | null;
  dependentsMap: Map<string, string[]>;
  emphasis1: EmphasisKey | null;
  emphasis2: EmphasisKey | null;
  includeLicenciatura: boolean;
}

const SEMESTERS = Array.from({ length: 10 }, (_, i) => i + 1);

export const CurriculumGrid: React.FC<CurriculumGridProps> = ({ 
  completedCourses, 
  onCourseToggle, 
  onCourseClick, 
  onCourseHover, 
  hoveredCourseId,
  dependentsMap,
  emphasis1,
  emphasis2,
  includeLicenciatura
}) => {

  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => {
      if (course.type === 'LICENCIATURA' && !includeLicenciatura) {
        return false;
      }

      if (!course.isEmphasis) return true;

      if(course.emphasisGroup === 'I') {
        return course.emphasis === emphasis1;
      }
      if(course.emphasisGroup === 'II') {
        return course.emphasis === emphasis2;
      }
      return false;
    });
  }, [emphasis1, emphasis2, includeLicenciatura]);

  return (
    <div className="mt-8">
       <h2 className="text-xl font-bold text-gray-800 mb-4 p-6 bg-white rounded-t-xl shadow-md">Grade Curricular</h2>
      <div className="overflow-x-auto bg-white p-6 rounded-b-xl shadow-md">
        <div className="grid grid-flow-col auto-cols-max gap-4 min-w-max pb-4">
          {SEMESTERS.map(semester => (
            <div key={semester} className="w-64">
              <h3 className="text-lg font-semibold text-center text-gray-700 bg-gray-200 p-2 rounded-t-lg sticky top-0">
                {semester}ª Fase
              </h3>
              <div className="p-2 space-y-3 bg-gray-50 rounded-b-lg border-x-2 border-b-2 border-gray-200 min-h-[500px]">
                {filteredCourses
                  .filter(course => course.semester === semester)
                  .map(course => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      completedCourses={completedCourses}
                      onToggle={onCourseToggle}
                      onClick={onCourseClick}
                      onHover={onCourseHover}
                      hoveredCourseId={hoveredCourseId}
                      dependentsMap={dependentsMap}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};