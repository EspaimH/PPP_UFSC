import React from 'react';

const FlowchartNode: React.FC<{ children: React.ReactNode, isLast?: boolean }> = ({ children, isLast }) => (
    <div className="flex flex-col sm:flex-row items-center">
        <div className="bg-gray-200 text-gray-800 text-xs sm:text-sm font-semibold p-2 rounded-lg shadow-sm text-center min-w-[100px]">
            {children}
        </div>
        {!isLast && (
            <>
                <svg className="w-8 h-8 text-gray-400 mx-1 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <svg className="w-8 h-8 text-gray-400 my-1 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" /></svg>
            </>
        )}
    </div>
);


export const Roadmap: React.FC = () => {
    return (
        <div className="p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🗺️ Mapa do que Fazer: Seu Guia para a Graduação</h2>
            <p className="text-gray-600 mb-6">Um resumo prático do seu percurso acadêmico, baseado no PPC/UFSC (2018).</p>
            
            <div className="space-y-8">
                {/* Formação de Psicólogo */}
                <div>
                    <h3 className="text-xl font-semibold text-indigo-700 border-b-2 border-indigo-200 pb-2 mb-4">Formação de Psicólogo (Bacharel)</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                        <li><strong>Tempo Padrão:</strong> 10 semestres (mínimo 7, máximo 14).</li>
                        <li><strong>Carga Horária Total:</strong> <strong>4.896 h/a</strong> (4.080 horas-relógio).</li>
                        <li><strong>Estrutura:</strong>
                            <ul className="list-['-_'] list-inside ml-6 mt-1 space-y-1">
                                <li><strong>Núcleo Comum (1ª a 6ª fase):</strong> Base obrigatória do curso.</li>
                                <li><strong>Núcleo Profissionalizante (7ª a 10ª fase):</strong> Foco em práticas e estágios.</li>
                            </ul>
                        </li>
                        <li><strong>Ênfases Profissionalizantes:</strong>
                            <ul className="list-['-_'] list-inside ml-6 mt-1 space-y-1">
                                <li>É obrigatório escolher e integralizar **2 das 4 ênfases** disponíveis.</li>
                                <li>A 1ª ênfase ocorre entre a 7ª e 8ª fase. A 2ª ênfase ocorre entre a 9ª e 10ª fase.</li>
                                <li>Não é permitido cursar as duas ênfases simultaneamente.</li>
                            </ul>
                        </li>
                        <li><strong>Estágios:</strong>
                             <ul className="list-['-_'] list-inside ml-6 mt-1 space-y-2">
                                <li>Para iniciar o <strong>Estágio Profissionalizante I</strong> (7ª fase), é necessário ter aprovação em no mínimo **85% das disciplinas obrigatórias do Núcleo Comum** (1ª a 6ª fase).</li>
                                 <li className="list-none mt-3">
                                    <div className="border-t-4 border-dashed border-red-400 relative pt-6 text-center">
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold shadow-sm flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                                            BARREIRA DOS 85%
                                        </div>
                                        <p className="text-red-700 font-medium text-sm">Esta é a principal "trava" para acessar o Núcleo Profissionalizante.</p>
                                    </div>
                                </li>
                                <li>Carga horária semanal mínima de 12 horas.</li>
                            </ul>
                        </li>
                         <li><strong>Horas Complementares (AACC):</strong>
                            <ul className="list-['-_'] list-inside ml-6 mt-1 space-y-1">
                                <li>**Núcleo Comum:** 468 h/a.</li>
                                <li>**Núcleo Profissionalizante:** 324 h/a.</li>
                                <li>Essas horas podem ser cumpridas com disciplinas complementares ou Atividades Acadêmico-Científico-Culturais (monitoria, pesquisa, extensão, eventos, etc.).</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Licenciatura */}
                <div>
                    <h3 className="text-xl font-semibold text-teal-700 border-b-2 border-teal-200 pb-2 mb-4">Licenciatura em Psicologia (Habilitação Adicional)</h3>
                     <ul className="list-disc list-inside space-y-3 text-gray-700">
                        <li>A Licenciatura é uma **habilitação opcional** que se soma à Formação de Psicólogo.</li>
                         <li><strong>Tempo Padrão (com Licenciatura):</strong> 12 semestres.</li>
                        <li><strong>Estrutura Adicional:</strong> Além de todas as exigências do Bacharelado, o estudante cursa o **Núcleo Profissionalizante da Licenciatura** (7ª a 10ª fase).</li>
                        <li><strong>Estágios Adicionais:</strong> Requer a conclusão do **Estágio de Docência I e II**.</li>
                        <li><strong>Horas Complementares (AACC):</strong> Requer **270 h/a** adicionais de atividades complementares específicas da Licenciatura.</li>
                    </ul>
                </div>

                {/* Passo a Passo Prático */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Passo a Passo Prático</h3>
                     <ol className="list-decimal list-inside space-y-2 text-gray-800">
                        <li>Conclua todas as disciplinas do <strong>Núcleo Comum</strong> (1ª a 6ª fase), atentando ao requisito de 85% para iniciar os estágios.</li>
                        <li>Escolha sua <strong>1ª ênfase</strong> e curse suas disciplinas de Fundamentação e Estágio na 7ª e 8ª fase.</li>
                        <li>Escolha sua <strong>2ª ênfase</strong> e curse suas disciplinas de Fundamentação e Estágio na 9ª e 10ª fase.</li>
                        <li>Cumpra as <strong>horas complementares</strong> para o Bacharelado.</li>
                        <li>**Se optar pela Licenciatura:** curse o bloco de disciplinas pedagógicas, os Estágios de Docência e as horas complementares específicas desta habilitação.</li>
                    </ol>
                </div>

                {/* Trilhas */}
                <div className="pt-4">
                    <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Principais Trilhas de Pré-requisitos</h3>
                    <p className="text-gray-600 mb-8">Certas disciplinas formam sequências que são cruciais para o avanço no curso. Planeje-se para não ficar travado(a)!</p>
                    <div className="space-y-8">
                        <div>
                            <h4 className="font-semibold text-blue-700 mb-2">Trilha de Pesquisa (Essencial):</h4>
                            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-1 sm:gap-0">
                                <FlowchartNode>PSI7103<br/>(PPO I)</FlowchartNode>
                                <FlowchartNode>PSI7203<br/>(PPO II)</FlowchartNode>
                                <FlowchartNode>PSI7303<br/>(PPO III)</FlowchartNode>
                                <FlowchartNode>PSI7403<br/>(PPO IV)</FlowchartNode>
                                <FlowchartNode>PSI7503<br/>(PPO V)</FlowchartNode>
                                <FlowchartNode isLast>PSI7603<br/>(PPO VI)</FlowchartNode>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-700 mb-2">Trilha de Desenvolvimento:</h4>
                             <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-1 sm:gap-0">
                                <FlowchartNode>PSI7201<br/>(DHA)</FlowchartNode>
                                <FlowchartNode>PSI7301<br/>(Infância)</FlowchartNode>
                                <FlowchartNode isLast>PSI7401<br/>(Adolesc.)</FlowchartNode>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-red-700 mb-2">Trilha de Saúde e Psicopatologia:</h4>
                             <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-1 sm:gap-0">
                                <FlowchartNode>PSI7204<br/>(Saúde I)</FlowchartNode>
                                <FlowchartNode>PSI7304<br/>(Saúde II)</FlowchartNode>
                                <FlowchartNode>PSI7507<br/>(Psicopato I)</FlowchartNode>
                                <FlowchartNode isLast>PSI7607<br/>(Psicopato II)</FlowchartNode>
                            </div>
                        </div>
                         <div>
                            <h4 className="font-semibold text-purple-700 mb-2">Trilha de Psicologia Social:</h4>
                             <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-1 sm:gap-0">
                                <FlowchartNode>PSI7405<br/>(Social I)</FlowchartNode>
                                <FlowchartNode>PSI7505<br/>(Social II)</FlowchartNode>
                                <FlowchartNode isLast>PSI7605<br/>(Grupos)</FlowchartNode>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};