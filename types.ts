export interface Course {
  id: string;
  name: string;
  semester: number;
  hours: number;
  pccHours: number;
  prerequisites: string[];
  type: 'NUCLEO_COMUM' | 'PROFISSIONALIZANTE_PSICOLOGO' | 'LICENCIATURA';
  isEmphasis?: boolean;
  emphasisGroup?: 'I' | 'II';
  emphasis?: 'A' | 'B' | 'C' | 'D';
}

export type CourseStatus = 'completed' | 'available' | 'locked';