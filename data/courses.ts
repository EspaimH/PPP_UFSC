import { Course } from '../types';

export type EmphasisKey = 'A' | 'B' | 'C' | 'D';

export const EMPHASES: Record<EmphasisKey, string> = {
  A: 'Saúde e Processos Clínicos',
  B: 'Trabalho, Organizações e Gestão',
  C: 'Psicologia Escolar/Educacional',
  D: 'Processos Comunitários e Ações Coletivas'
};

export const COURSES: Course[] = [
  // 1ª Fase
  { id: 'FIL5791', name: 'Epistemologia das Ciências Humanas', semester: 1, hours: 72, pccHours: 18, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7101', name: 'Psicologia: Ciência e Profissão', semester: 1, hours: 54, pccHours: 18, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7102', name: 'História da Psicologia', semester: 1, hours: 72, pccHours: 18, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'MOR7104', name: 'Processos Biopsicológicos I: neuroanatomia e sistemas orgânicos', semester: 1, hours: 72, pccHours: 0, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7202', name: 'Processos Psicológicos Básicos', semester: 1, hours: 54, pccHours: 0, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'ANT7101', name: 'Introdução à Antropologia', semester: 1, hours: 108, pccHours: 36, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7103', name: 'Prática e Pesquisa Orientada I', semester: 1, hours: 72, pccHours: 10, prerequisites: [], type: 'NUCLEO_COMUM' },

  // 2ª Fase
  { id: 'PSI7201', name: 'Desenvolvimento Humano e Aprendizagem', semester: 2, hours: 72, pccHours: 18, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7204', name: 'Psicologia e Atenção à Saúde I', semester: 2, hours: 36, pccHours: 0, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7305', name: 'Psicologia Comportamental', semester: 2, hours: 72, pccHours: 0, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'CFS7106', name: 'Processos Biopsicológicos II: fisiologia humana', semester: 2, hours: 72, pccHours: 0, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'SPO5129', name: 'Sociologia Geral', semester: 2, hours: 72, pccHours: 0, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7205', name: 'Neuropsicologia', semester: 2, hours: 54, pccHours: 0, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7203', name: 'Prática e Pesquisa Orientada II', semester: 2, hours: 72, pccHours: 10, prerequisites: ['PSI7103'], type: 'NUCLEO_COMUM' },

  // 3ª Fase
  { id: 'PSI7301', name: 'Processos Psicológicos na Infância', semester: 3, hours: 54, pccHours: 18, prerequisites: ['PSI7201'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7304', name: 'Psicologia e Atenção à Saúde II', semester: 3, hours: 36, pccHours: 0, prerequisites: ['PSI7204'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7302', name: 'Psicanálise', semester: 3, hours: 72, pccHours: 0, prerequisites: ['PSI7102'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7706', name: 'Ética e Legislação Profissional em Psicologia', semester: 3, hours: 54, pccHours: 0, prerequisites: ['PSI7102'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7306', name: 'Políticas Públicas, Direitos Humanos e Práticas Psicossociais', semester: 3, hours: 72, pccHours: 0, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7606', name: 'Psicologia e Pessoas com Deficiência', semester: 3, hours: 72, pccHours: 18, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7303', name: 'Prática e Pesquisa Orientada III', semester: 3, hours: 72, pccHours: 10, prerequisites: ['PSI7203'], type: 'NUCLEO_COMUM' },
  { id: 'BEG7105', name: 'Processos Biopsicológicos III: genética Humana', semester: 3, hours: 36, pccHours: 0, prerequisites: [], type: 'NUCLEO_COMUM' },

  // 4ª Fase
  { id: 'PSI7401', name: 'Processos Psicológicos na Adolescência e Juventude', semester: 4, hours: 54, pccHours: 18, prerequisites: ['PSI7301'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7404', name: 'Psicologia de base Fenomenológica', semester: 4, hours: 72, pccHours: 0, prerequisites: ['PSI7102'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7406', name: 'Psicologia Histórico-Cultural', semester: 4, hours: 72, pccHours: 18, prerequisites: ['PSI7102', 'FIL5791'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7405', name: 'Psicologia Social I', semester: 4, hours: 72, pccHours: 12, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7402', name: 'Psicometria', semester: 4, hours: 72, pccHours: 0, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7403', name: 'Prática e Pesquisa Orientada IV', semester: 4, hours: 72, pccHours: 10, prerequisites: ['PSI7303'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7407', name: 'Estatística Aplicada a Psicologia', semester: 4, hours: 36, pccHours: 0, prerequisites: [], type: 'NUCLEO_COMUM' },

  // 5ª Fase
  { id: 'PSI7507', name: 'Psicopatologia I', semester: 5, hours: 72, pccHours: 0, prerequisites: ['PSI7304'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7506', name: 'Psicologia e Pensamento Sistêmico', semester: 5, hours: 72, pccHours: 0, prerequisites: ['PSI7102'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7504', name: 'Psicologia do Trabalho', semester: 5, hours: 72, pccHours: 18, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7505', name: 'Psicologia Social II', semester: 5, hours: 72, pccHours: 18, prerequisites: ['PSI7405'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7502', name: 'Avaliação Psicológica', semester: 5, hours: 72, pccHours: 0, prerequisites: ['PSI7402'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7503', name: 'Prática e Pesquisa Orientada V', semester: 5, hours: 72, pccHours: 10, prerequisites: ['PSI7403'], type: 'NUCLEO_COMUM' },

  // 6ª Fase
  { id: 'PSI7601', name: 'Psicologia e Processos Educacionais', semester: 6, hours: 72, pccHours: 36, prerequisites: ['PSI7401'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7607', name: 'Psicopatologia II', semester: 6, hours: 54, pccHours: 0, prerequisites: ['PSI7507'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7602', name: 'Método Clínico', semester: 6, hours: 54, pccHours: 0, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7604', name: 'Psicologia das Organizações', semester: 6, hours: 72, pccHours: 0, prerequisites: ['PSI7504'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7605', name: 'Teoria e Técnica dos Processos Grupais', semester: 6, hours: 54, pccHours: 18, prerequisites: ['PSI7505'], type: 'NUCLEO_COMUM' },
  { id: 'PSI7610', name: 'Psicologia e Relações Étnico-raciais', semester: 6, hours: 72, pccHours: 0, prerequisites: [], type: 'NUCLEO_COMUM' },
  { id: 'PSI7603', name: 'Prática e Pesquisa Orientada VI', semester: 6, hours: 72, pccHours: 10, prerequisites: ['PSI7503'], type: 'NUCLEO_COMUM' },

  // Núcleo Profissionalizante - 7ª Fase
  { id: 'PSI7710', name: 'Psicologia Institucional', semester: 7, hours: 36, pccHours: 0, prerequisites: [], type: 'PROFISSIONALIZANTE_PSICOLOGO' },
  { id: 'PSI7709', name: 'Intervenções em Urgências Psicológicas', semester: 7, hours: 36, pccHours: 0, prerequisites: [], type: 'PROFISSIONALIZANTE_PSICOLOGO' },
  
  // Ênfase I - Fundamentação
  { id: 'PSI7701', name: 'Fundamentação da Ênfase I A', semester: 7, hours: 72, pccHours: 0, prerequisites: ['PSI7602', 'PSI7603', 'PSI7605'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'A' },
  { id: 'PSI7702', name: 'Fundamentação da Ênfase I B', semester: 7, hours: 72, pccHours: 0, prerequisites: ['PSI7405', 'PSI7502', 'PSI7504', 'PSI7604', 'PSI7605'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'B' },
  { id: 'PSI7703', name: 'Fundamentação da Ênfase I C', semester: 7, hours: 72, pccHours: 0, prerequisites: ['PSI7201', 'PSI7401', 'PSI7406', 'PSI7601', 'PSI7605'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'C' },
  { id: 'PSI7704', name: 'Fundamentação da Ênfase I D', semester: 7, hours: 72, pccHours: 0, prerequisites: ['PSI7505', 'PSI7605', 'PSI7306'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'D' },
  // Ênfase I - Estágio
  { id: 'PSI7013', name: 'Estágio Profissionalizante I A', semester: 7, hours: 216, pccHours: 0, prerequisites: ['PSI7601'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'A' },
  { id: 'PSI7014', name: 'Estágio Profissionalizante I B', semester: 7, hours: 216, pccHours: 0, prerequisites: ['PSI7601'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'B' },
  { id: 'PSI7015', name: 'Estágio Profissionalizante I C', semester: 7, hours: 216, pccHours: 0, prerequisites: ['PSI7601'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'C' },
  { id: 'PSI7016', name: 'Estágio Profissionalizante I D', semester: 7, hours: 216, pccHours: 0, prerequisites: ['PSI7601'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'D' },

  // Núcleo Profissionalizante - 8ª Fase
  { id: 'PSI7808', name: 'Seminários Integrados I', semester: 8, hours: 36, pccHours: 0, prerequisites: ['PSI7201', 'PSI7401', 'PSI7601', 'PSI7605', 'PSI7504', 'PSI7405', 'PSI7502'], type: 'PROFISSIONALIZANTE_PSICOLOGO' },
  // Ênfase II - Fundamentação
  { id: 'PSI7801', name: 'Fundamentação da Ênfase II A', semester: 8, hours: 72, pccHours: 0, prerequisites: ['PSI7701'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'A' },
  { id: 'PSI7802', name: 'Fundamentação da Ênfase II B', semester: 8, hours: 72, pccHours: 0, prerequisites: ['PSI7702'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'B' },
  { id: 'PSI7803', name: 'Fundamentação da Ênfase II C', semester: 8, hours: 72, pccHours: 0, prerequisites: ['PSI7703'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'C' },
  { id: 'PSI7804', name: 'Fundamentação da Ênfase II D', semester: 8, hours: 72, pccHours: 0, prerequisites: ['PSI7704'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'D' },
  // Ênfase II - Estágio
  { id: 'PSI7023', name: 'Estágio Profissionalizante II A', semester: 8, hours: 216, pccHours: 0, prerequisites: ['PSI7013'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'A' },
  { id: 'PSI7024', name: 'Estágio Profissionalizante II B', semester: 8, hours: 216, pccHours: 0, prerequisites: ['PSI7014'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'B' },
  { id: 'PSI7025', name: 'Estágio Profissionalizante II C', semester: 8, hours: 216, pccHours: 0, prerequisites: ['PSI7015'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'C' },
  { id: 'PSI7026', name: 'Estágio Profissionalizante II D', semester: 8, hours: 216, pccHours: 0, prerequisites: ['PSI7016'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'I', emphasis: 'D' },

  // Núcleo Profissionalizante - 9ª Fase
  { id: 'PSI7910', name: 'Gênero, corpos e sexualidade', semester: 9, hours: 54, pccHours: 0, prerequisites: [], type: 'PROFISSIONALIZANTE_PSICOLOGO' },
  // Ênfase I (2) - Fundamentação
  { id: 'PSI7901', name: 'Fundamentação da Ênfase I A', semester: 9, hours: 72, pccHours: 0, prerequisites: ['PSI7602', 'PSI7603', 'PSI7605'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'A' },
  { id: 'PSI7902', name: 'Fundamentação da Ênfase I B', semester: 9, hours: 72, pccHours: 0, prerequisites: ['PSI7405', 'PSI7502', 'PSI7504', 'PSI7604', 'PSI7605'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'B' },
  { id: 'PSI7903', name: 'Fundamentação da Ênfase I C', semester: 9, hours: 72, pccHours: 0, prerequisites: ['PSI7201', 'PSI7401', 'PSI7406', 'PSI7601', 'PSI7605'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'C' },
  { id: 'PSI7904', name: 'Fundamentação da Ênfase I D', semester: 9, hours: 72, pccHours: 0, prerequisites: ['PSI7505', 'PSI7605', 'PSI7306'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'D' },
  // Ênfase I (2) - Estágio
  { id: 'PSI7033', name: 'Estágio Profissionalizante I A', semester: 9, hours: 216, pccHours: 0, prerequisites: ['PSI7601'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'A' },
  { id: 'PSI7034', name: 'Estágio Profissionalizante I B', semester: 9, hours: 216, pccHours: 0, prerequisites: ['PSI7601'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'B' },
  { id: 'PSI7035', name: 'Estágio Profissionalizante I C', semester: 9, hours: 216, pccHours: 0, prerequisites: ['PSI7601'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'C' },
  { id: 'PSI7036', name: 'Estágio Profissionalizante I D', semester: 9, hours: 216, pccHours: 0, prerequisites: ['PSI7601'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'D' },

  // Núcleo Profissionalizante - 10ª Fase
  { id: 'PSI7018', name: 'Seminários de Integração II', semester: 10, hours: 36, pccHours: 0, prerequisites: ['PSI7808'], type: 'PROFISSIONALIZANTE_PSICOLOGO' }, 
  // Ênfase II (2) - Fundamentação
  { id: 'PSI7001', name: 'Fundamentação da Ênfase II A', semester: 10, hours: 72, pccHours: 0, prerequisites: ['PSI7901'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'A' },
  { id: 'PSI7002', name: 'Fundamentação da Ênfase II B', semester: 10, hours: 72, pccHours: 0, prerequisites: ['PSI7902'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'B' },
  { id: 'PSI7003', name: 'Fundamentação da Ênfase II C', semester: 10, hours: 72, pccHours: 0, prerequisites: ['PSI7903'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'C' },
  { id: 'PSI7004', name: 'Fundamentação da Ênfase II D', semester: 10, hours: 72, pccHours: 0, prerequisites: ['PSI7904'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'D' },
  // Ênfase II (2) - Estágio
  { id: 'PSI7043', name: 'Estágio Profissionalizante II A', semester: 10, hours: 216, pccHours: 0, prerequisites: ['PSI7033'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'A' },
  { id: 'PSI7044', name: 'Estágio Profissionalizante II B', semester: 10, hours: 216, pccHours: 0, prerequisites: ['PSI7034'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'B' },
  { id: 'PSI7045', name: 'Estágio Profissionalizante II C', semester: 10, hours: 216, pccHours: 0, prerequisites: ['PSI7035'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'C' },
  { id: 'PSI7046', name: 'Estágio Profissionalizante II D', semester: 10, hours: 216, pccHours: 0, prerequisites: ['PSI7036'], type: 'PROFISSIONALIZANTE_PSICOLOGO', isEmphasis: true, emphasisGroup: 'II', emphasis: 'D' },

  // Habilitação Licenciatura - a partir da 7a fase
  { id: 'EED5187', name: 'Organização Escolar', semester: 7, hours: 72, pccHours: 18, prerequisites: [], type: 'LICENCIATURA' },
  { id: 'ANT7003', name: 'Relações Inter-étnicas', semester: 7, hours: 72, pccHours: 0, prerequisites: [], type: 'LICENCIATURA' },
  { id: 'PSI7508', name: 'Processos de ensinar e aprender', semester: 7, hours: 72, pccHours: 0, prerequisites: [], type: 'LICENCIATURA' },

  { id: 'EED5331', name: 'Teorias da Educação', semester: 8, hours: 72, pccHours: 0, prerequisites: [], type: 'LICENCIATURA' },
  { id: 'MEN5602', name: 'Didática B', semester: 8, hours: 72, pccHours: 12, prerequisites: [], type: 'LICENCIATURA' },
  { id: 'PSI7609', name: 'Educação, Sociedade e Processsos de Escolarização', semester: 8, hours: 72, pccHours: 0, prerequisites: [], type: 'LICENCIATURA' },

  { id: 'LSB7904', name: 'Libras', semester: 9, hours: 72, pccHours: 18, prerequisites: [], type: 'LICENCIATURA' },
  { id: 'MEN5421', name: 'Estágio de Docência em Psicologia I', semester: 9, hours: 216, pccHours: 0, prerequisites: ['MEN5602'], type: 'LICENCIATURA' },

  { id: 'MEN5422', name: 'Estágio de Docência em Psicologia II', semester: 10, hours: 216, pccHours: 0, prerequisites: ['MEN5421'], type: 'LICENCIATURA' },
];