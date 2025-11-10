import React, { useState, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { ProgressDashboard } from './components/ProgressDashboard';
import { CurriculumGrid } from './components/CurriculumGrid';
import { CourseDetailModal } from './components/CourseDetailModal';
import { EmphasisSelector } from './components/EmphasisSelector';
import { Roadmap } from './components/Roadmap';
import { COURSES, EMPHASES, EmphasisKey } from './data/courses';
import { Course } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';

const App: React.FC = () => {
  const [completedCourses, setCompletedCourses] = useLocalStorage<Set<string>>('completedCourses', new Set());
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [hoveredCourseId, setHoveredCourseId] = useState<string | null>(null);

  const [emphasis1, setEmphasis1] = useLocalStorage<EmphasisKey | null>('emphasis1', null);
  const [emphasis2, setEmphasis2] = useLocalStorage<EmphasisKey | null>('emphasis2', null);
  
  const [completedNucleoComumCompHours, setCompletedNucleoComumCompHours] = useLocalStorage<number>('completedNcCompHours', 0);
  const [completedProfCompHours, setCompletedProfCompHours] = useLocalStorage<number>('completedProfCompHours', 0);
  const [includeLicenciatura, setIncludeLicenciatura] = useLocalStorage<boolean>('includeLicenciatura', false);
  const [completedLicCompHours, setCompletedLicCompHours] = useLocalStorage<number>('completedLicCompHours', 0);


  const handleCourseToggle = useCallback((courseId: string) => {
    setCompletedCourses(prev => {
      const newSet = new Set(prev);
      if (newSet.has(courseId)) {
        newSet.delete(courseId);
      } else {
        newSet.add(courseId);
      }
      return newSet;
    });
  }, [setCompletedCourses]);

  const handleCourseClick = useCallback((course: Course) => {
    setSelectedCourse(course);
  }, []);

  const handleEmphasis1Change = (key: EmphasisKey | null) => {
    if (key === emphasis2) setEmphasis2(null);
    setEmphasis1(key);
  };
  
  const handleEmphasis2Change = (key: EmphasisKey | null) => {
    if (key === emphasis1) setEmphasis1(null);
    setEmphasis2(key);
  };

  const dependentsMap = useMemo(() => {
    const map = new Map<string, string[]>();
    COURSES.forEach(course => {
      course.prerequisites.forEach(prereqId => {
        if (!map.has(prereqId)) {
          map.set(prereqId, []);
        }
        map.get(prereqId)!.push(course.id);
      });
    });
    return map;
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <Roadmap />
        
        <div className="mt-8">
          <ProgressDashboard 
            completedCourses={completedCourses} 
            allCourses={COURSES}
            completedNucleoComumCompHours={completedNucleoComumCompHours}
            setCompletedNucleoComumCompHours={setCompletedNucleoComumCompHours}
            completedProfCompHours={completedProfCompHours}
            setCompletedProfCompHours={setCompletedProfCompHours}
            includeLicenciatura={includeLicenciatura}
            setIncludeLicenciatura={setIncludeLicenciatura}
            completedLicCompHours={completedLicCompHours}
            setCompletedLicCompHours={setCompletedLicCompHours}
            emphasis1={emphasis1}
            emphasis2={emphasis2}
          />
        </div>

        <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Seleção de Ênfases</h2>
            <p className="text-gray-600 mb-6">Selecione as duas ênfases que você irá cursar para visualizar as disciplinas profissionalizantes correspondentes.</p>
            <div className="grid md:grid-cols-2 gap-8">
                <EmphasisSelector 
                    label="Primeira Ênfase (7º e 8º semestre)"
                    selectedEmphasis={emphasis1}
                    onSelect={handleEmphasis1Change}
                    disabledEmphasis={emphasis2}
                />
                <EmphasisSelector 
                    label="Segunda Ênfase (9º e 10º semestre)"
                    selectedEmphasis={emphasis2}
                    onSelect={handleEmphasis2Change}
                    disabledEmphasis={emphasis1}
                />
            </div>
        </div>

        <CurriculumGrid
          completedCourses={completedCourses}
          onCourseToggle={handleCourseToggle}
          onCourseClick={handleCourseClick}
          onCourseHover={setHoveredCourseId}
          hoveredCourseId={hoveredCourseId}
          dependentsMap={dependentsMap}
          emphasis1={emphasis1}
          emphasis2={emphasis2}
          includeLicenciatura={includeLicenciatura}
        />
      </main>
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          dependents={dependentsMap.get(selectedCourse.id) || []}
          completedCourses={completedCourses}
        />
      )}
    </div>
  );
};

export default App;