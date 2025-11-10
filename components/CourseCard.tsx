import React, { useMemo } from 'react';
import { Course, CourseStatus } from '../types';

interface CourseCardProps {
  course: Course;
  completedCourses: Set<string>;
  onToggle: (courseId: string) => void;
  onClick: (course: Course) => void;
  onHover: (courseId: string | null) => void;
  hoveredCourseId: string | null;
  dependentsMap: Map<string, string[]>;
}

const statusStyles: { [key in CourseStatus]: string } = {
  completed: 'bg-green-100 border-green-400 text-green-800',
  available: 'bg-white border-gray-300 hover:border-blue-500 hover:shadow-lg',
  locked: 'bg-gray-200 border-gray-300 text-gray-500 cursor-not-allowed',
};

const hoverHighlightStyles = {
  prerequisite: 'ring-4 ring-offset-2 ring-red-400',
  dependent: 'ring-4 ring-offset-2 ring-blue-400',
  self: 'ring-4 ring-offset-2 ring-yellow-400',
};

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  completedCourses,
  onToggle,
  onClick,
  onHover,
  hoveredCourseId,
  dependentsMap
}) => {
  const isCompleted = completedCourses.has(course.id);
  const prerequisitesMet = useMemo(() => 
    course.prerequisites.every(prereqId => completedCourses.has(prereqId)),
    [course.prerequisites, completedCourses]
  );

  const status: CourseStatus = isCompleted ? 'completed' : prerequisitesMet ? 'available' : 'locked';

  const hoverHighlight = useMemo(() => {
    if (!hoveredCourseId) return '';
    if (hoveredCourseId === course.id) return hoverHighlightStyles.self;
    
    const hoveredCourse = COURSES.find(c => c.id === hoveredCourseId);
    if (!hoveredCourse) return '';

    if (hoveredCourse.prerequisites.includes(course.id)) return hoverHighlightStyles.prerequisite;
    
    const dependents = dependentsMap.get(course.id) || [];
    if(dependents.includes(hoveredCourseId)) return hoverHighlightStyles.dependent;
    
    const hoveredDependents = dependentsMap.get(hoveredCourseId) || [];
    if(hoveredDependents.includes(course.id)) return hoverHighlightStyles.dependent;

    return '';
  }, [hoveredCourseId, course.id, dependentsMap]);

  return (
    <div
      className={`p-3 rounded-lg border-2 transition-all duration-200 ease-in-out transform hover:-translate-y-1 ${statusStyles[status]} ${hoverHighlight}`}
      onMouseEnter={() => onHover(course.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          checked={isCompleted}
          disabled={status === 'locked' && !isCompleted}
          onChange={(e) => {
            e.stopPropagation();
            onToggle(course.id);
          }}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:opacity-50"
        />
        <div className="flex-1 cursor-pointer" onClick={() => onClick(course)}>
          <p className="font-bold text-sm leading-tight">{course.name}</p>
          <p className="text-xs text-gray-500 mt-1">{course.id}</p>
          <p className="text-xs text-gray-600 mt-1">{course.hours}h {course.pccHours > 0 ? `(+${course.pccHours}h PCC)` : ''}</p>
        </div>
      </div>
    </div>
  );
};

// Need to define COURSES here to avoid circular dependency if it were in another file importing this
import { COURSES } from '../data/courses';