import React, { useState, useEffect, useMemo, useRef } from 'react';

// --- ÍCONES SVG NATIVOS (100% integrados e sem dependências externas) ---
function SvgWrapper({ children, className = "w-5 h-5" }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {children}
    </svg>
  );
}

const IconFlame = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z" />
  </SvgWrapper>
);

const IconActivity = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </SvgWrapper>
);

const IconCalendar = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </SvgWrapper>
);

const IconPlus = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </SvgWrapper>
);

const IconSparkles = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </SvgWrapper>
);

const IconPlay = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </SvgWrapper>
);

const IconPause = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </SvgWrapper>
);

const IconReset = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </SvgWrapper>
);

const IconTrend = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </SvgWrapper>
);

const IconBook = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </SvgWrapper>
);

const IconCheck = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </SvgWrapper>
);

const IconAlert = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </SvgWrapper>
);

const IconHeart = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </SvgWrapper>
);

const IconTrash = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </SvgWrapper>
);

const IconArrowRight = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </SvgWrapper>
);

const IconSpinner = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={`${className} animate-spin`}>
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </SvgWrapper>
);

const IconBot = ({ className = "w-6 h-6" }) => (
  <SvgWrapper className={className}>
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8.01" y2="16" />
    <line x1="16" y1="16" x2="16.01" y2="16" />
  </SvgWrapper>
);

const IconDownload = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </SvgWrapper>
);

const IconUpload = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </SvgWrapper>
);

const IconFileCode = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m10 13-2 2 2 2" />
    <path d="m14 17 2-2-2-2" />
  </SvgWrapper>
);

const IconCopy = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </SvgWrapper>
);

const IconKey = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <path d="m21 2-2 2m-1.5 1.5L14 9l-1.5-1.5M7 13l-4 4v4h4l4-4" />
    <circle cx="16.5" cy="7.5" r="4.5" />
  </SvgWrapper>
);

const IconApple = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </SvgWrapper>
);

const IconUser = ({ className = "w-5 h-5" }) => (
  <SvgWrapper className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </SvgWrapper>
);

// --- PLANO DE TREINO PADRÃO (8 SEMANAS INICIAIS) ---
const DEFAULT_PROGRAM_WEEKS = [
  {
    week: 1,
    title: "Semana 1: Adaptação & Despertar",
    focus: "8 min de trote por treino",
    days: [
      { day: "Segunda", type: "run", title: "Treino 1", presc: "8x (1 min Trote + 2 min Caminhada)", targetRunMin: 8 },
      { day: "Terça", type: "rest", title: "Descanso Total", presc: "Recuperação para articulações e canelas." },
      { day: "Quarta", type: "rest", title: "Descanso Ativo", presc: "Alongamento suave ou caminhada ligeira." },
      { day: "Quinta", type: "run", title: "Treino 2", presc: "8x (1 min Trote + 2 min Caminhada)", targetRunMin: 8 },
      { day: "Sexta", type: "rest", title: "Descanso", presc: "Dia de regeneração muscular." },
      { day: "Sábado", type: "run", title: "Treino 3", presc: "8x (1 min Trote + 2 min Caminhada)", targetRunMin: 8 },
      { day: "Domingo", type: "optional", title: "Caminhada Regenerativa", presc: "20 a 30 min de caminhada bem ligeira (opcional)." }
    ]
  },
  {
    week: 2,
    title: "Semana 2: Consolidar o Passo",
    focus: "12 a 14 min de trote",
    days: [
      { day: "Segunda", type: "run", title: "Treino 1", presc: "6x (2 min Trote + 2 min Caminhada)", targetRunMin: 12 },
      { day: "Terça", type: "rest", title: "Descanso", presc: "Recuperação e hidratação adequada." },
      { day: "Quarta", type: "rest", title: "Descanso", presc: "Fortalecimento ligeiro de gémeos." },
      { day: "Quinta", type: "run", title: "Treino 2", presc: "6x (2 min Trote + 2 min Caminhada)", targetRunMin: 12 },
      { day: "Sexta", type: "rest", title: "Descanso", presc: "Pausa total antes do fim de semana." },
      { day: "Sábado", type: "run", title: "Treino 3", presc: "7x (2 min Trote + 2 min Caminhada)", targetRunMin: 14 },
      { day: "Domingo", type: "optional", title: "Caminhada Ligeira", presc: "Caminhada descontraída de 30 min se desejar." }
    ]
  },
  {
    week: 3,
    title: "Semana 3: Construir Resistência",
    focus: "18 a 20 min de trote",
    days: [
      { day: "Segunda", type: "run", title: "Treino 1", presc: "6x (3 min Trote + 2 min Caminhada)", targetRunMin: 18 },
      { day: "Terça", type: "rest", title: "Descanso", presc: "Descanso ou massagem suave na canela." },
      { day: "Quarta", type: "rest", title: "Descanso", presc: "Mobilidade articular de tornozelos." },
      { day: "Quinta", type: "run", title: "Treino 2", presc: "6x (3 min Trote + 2 min Caminhada)", targetRunMin: 18 },
      { day: "Sexta", type: "rest", title: "Descanso", presc: "Descanso sem impacto." },
      { day: "Sábado", type: "run", title: "Treino 3", presc: "5x (4 min Trote + 2 min Caminhada)", targetRunMin: 20 },
      { day: "Domingo", type: "optional", title: "Descanso Ativo", presc: "Caminhada regenerativa opcional." }
    ]
  },
  {
    week: 4,
    title: "Semana 4: Semana Regenerativa",
    focus: "Alívio articular e consolidação",
    days: [
      { day: "Segunda", type: "run", title: "Treino 1", presc: "5x (3 min Trote + 2 min Caminhada)", targetRunMin: 15 },
      { day: "Terça", type: "rest", title: "Descanso", presc: "Descanso regenerativo." },
      { day: "Quarta", type: "rest", title: "Descanso", presc: "Descanso total." },
      { day: "Quinta", type: "run", title: "Treino 2", presc: "5x (3 min Trote + 2 min Caminhada)", targetRunMin: 15 },
      { day: "Sexta", type: "rest", title: "Descanso", presc: "Preparar o corpo para a subida da semana 5." },
      { day: "Sábado", type: "run", title: "Treino 3", presc: "4x (5 min Trote + 2 min Caminhada)", targetRunMin: 20 },
      { day: "Domingo", type: "optional", title: "Descanso", presc: "Descanso total." }
    ]
  },
  {
    week: 5,
    title: "Semana 5: Blocos Mais Longos",
    focus: "24 min de trote contínuo fracionado",
    days: [
      { day: "Segunda", type: "run", title: "Treino 1", presc: "4x (6 min Trote + 2 min Caminhada)", targetRunMin: 24 },
      { day: "Terça", type: "rest", title: "Descanso", presc: "Gelo preventivo na canela se sentir calor local." },
      { day: "Quarta", type: "rest", title: "Descanso", presc: "Descanso." },
      { day: "Quinta", type: "run", title: "Treino 2", presc: "3x (8 min Trote + 2 min Caminhada)", targetRunMin: 24 },
      { day: "Sexta", type: "rest", title: "Descanso", presc: "Recuperação." },
      { day: "Sábado", type: "run", title: "Treino 3", presc: "3x (8 min Trote + 2 min Caminhada)", targetRunMin: 24 },
      { day: "Domingo", type: "optional", title: "Caminhada Opcional", presc: "Caminhada de 30 min muito suave." }
    ]
  },
  {
    week: 6,
    title: "Semana 6: Quebrar a Barreira dos 10 min",
    focus: "24 a 30 min de trote",
    days: [
      { day: "Segunda", type: "run", title: "Treino 1", presc: "3x (10 min Trote + 2 min Caminhada)", targetRunMin: 30 },
      { day: "Terça", type: "rest", title: "Descanso", presc: "Descanso." },
      { day: "Quarta", type: "rest", title: "Descanso", presc: "Elevações de calcanhares num degrau." },
      { day: "Quinta", type: "run", title: "Treino 2", presc: "2x (12 min Trote + 2 min Caminhada)", targetRunMin: 24 },
      { day: "Sexta", type: "rest", title: "Descanso", presc: "Descanso." },
      { day: "Sábado", type: "run", title: "Treino 3", presc: "2x (15 min Trote + 2 min Caminhada)", targetRunMin: 30 },
      { day: "Domingo", type: "optional", title: "Caminhada Ligeira", presc: "Caminhada ligeira para soltar as pernas." }
    ]
  },
  {
    week: 7,
    title: "Semana 7: Rumo ao Contínuo",
    focus: "30 a 35 min de trote",
    days: [
      { day: "Segunda", type: "run", title: "Treino 1", presc: "2x (15 min Trote + 2 min Caminhada)", targetRunMin: 30 },
      { day: "Terça", type: "rest", title: "Descanso", presc: "Descanso total." },
      { day: "Quarta", type: "rest", title: "Descanso", presc: "Descanso e hidratação redobrada." },
      { day: "Quinta", type: "run", title: "Treino 2", presc: "1x 20 min Corrida + 3 min Caminhada + 1x 10 min Corrida", targetRunMin: 30 },
      { day: "Sexta", type: "rest", title: "Descanso", presc: "Preparação para o teste dos 25 min." },
      { day: "Sábado", type: "run", title: "Treino 3", presc: "1x 25 min Corrida contínua sem parar!", targetRunMin: 25 },
      { day: "Domingo", type: "optional", title: "Descanso Ativo", presc: "Caminhada de celebração." }
    ]
  },
  {
    week: 8,
    title: "Semana 8: A Grande Conquista dos 5k",
    focus: "Meta: 5 km contínuos em ~40 minutos!",
    days: [
      { day: "Segunda", type: "run", title: "Treino 1", presc: "2x (10 min Corrida ligeira + 2 min Caminhada)", targetRunMin: 20 },
      { day: "Terça", type: "rest", title: "Descanso", presc: "Descanso e sono tranquilo." },
      { day: "Quarta", type: "rest", title: "Descanso", presc: "Alimentação equilibrada e foco mental." },
      { day: "Quinta", type: "run", title: "Treino 2", presc: "15 min Corrida muito ligeira (soltura aeróbica)", targetRunMin: 15 },
      { day: "Sexta", type: "rest", title: "Descanso", presc: "Descanso absoluto. Preparar equipamento e sapatilhas." },
      { day: "Sábado", type: "goal", title: "O Grande Dia!", presc: "DESAFIO 5 KM CONTÍNUOS (Ritmo alvo ~8:00/km para concluir em 40 min)", targetRunMin: 40 },
      { day: "Domingo", type: "celebrate", title: "Celebração!", presc: "Descanso merecido — meta de 5 km alcançada!" }
    ]
  }
];

// Funções de data
function getTodayDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getDayNameFromDateString(dateStr) {
  if (!dateStr) return 'Segunda';
  const [y, m, d] = dateStr.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  return days[dateObj.getDay()] || 'Segunda';
}

const WEEKDAY_OPTIONS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

const META_DISTANCIA_PRESETS = ['3 km', '5 km', '10 km', '21 km'];

const PRAZO_MESES_OPTIONS = [
  { meses: 1, label: '1 mês (~4 semanas)' },
  { meses: 1.5, label: '1,5 meses (~6 semanas)' },
  { meses: 2, label: '2 meses (~8 semanas)' },
  { meses: 2.5, label: '2,5 meses (~10 semanas)' },
  { meses: 3, label: '3 meses (~12 semanas)' },
  { meses: 4, label: '4 meses (~16 semanas)' },
  { meses: 5, label: '5 meses (~20 semanas)' },
  { meses: 6, label: '6 meses (~24 semanas)' }
];

function semanasFromMeses(meses) {
  return Math.max(4, Math.round(Number(meses) * 4));
}

function parseJsonLoose(text) {
  if (!text || typeof text !== 'string') throw new Error('Resposta vazia da IA.');
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error('A IA não devolveu JSON válido.');
  }
}

const SAFETY_COACH_RULES = `
PROTOCOLO DE SEGURANÇA (PRIORIDADE MÁXIMA — NUNCA IGNORAR):
1. Lesão e overuse: canelite, joelho, tornozelo, dor > 2/5, dor que piora durante ou após o treino, inchaço, ou desconforto persistente → NÃO acelerar; reduzir volume/intensidade, reforçar descanso e técnica (passadas curtas).
2. Coração e esforço cardiovascular: NUNCA incentive forçar o coração. Ritmo deve permanecer conversacional. Sinais de alerta (falta de ar desproporcional, dor/aperto no peito, tontura, náusea, palpitações, fadiga extrema) → parar/sugerir parar o treino, NÃO acelerar o plano, e orientar procurar avaliação médica se sintomas forem graves ou recorrentes.
3. Em caso de dúvida entre evoluir mais rápido ou proteger o corpo, SEMPRE escolha proteger (manter ou suavizar o plano).
4. Acelerar o plano só é permitido se TODOS forem verdadeiros: canela tipicamente ≤ 2, respiração confortável/controlada, sem sinais cardíacos/de alerta, recuperação boa entre sessões, e progresso estável por vários treinos.
5. Nunca use linguagem do tipo "force", "aguente a dor", "ignore o cansaço" ou "vá além do limite". Prefira progressão gradual, escuta do corpo e consistência segura.
`.trim();

const SEXO_OPTIONS = ['Feminino', 'Masculino', 'Outro', 'Prefiro não informar'];

function getAthleteLabel(sexo) {
  if (sexo === 'Masculino') return { pessoa: 'aluno', artigo: 'o' };
  if (sexo === 'Feminino') return { pessoa: 'aluna', artigo: 'a' };
  return { pessoa: 'atleta', artigo: 'a/o' };
}

function formatDayLabel(day) {
  if (!day) return '';
  if (day === 'Sábado' || day === 'Domingo') return day;
  return day.endsWith('-feira') ? day : `${day}-feira`;
}

function formatDateDisplayBR(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

export default function App() {
  const [activeTab, setActiveTab] = useState('schedule');
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [toastMessage, setToastMessage] = useState(null);

  // Chave de API
  const [userApiKey, setUserApiKey] = useState('');
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [tempApiKey, setTempApiKey] = useState('');

  const fileInputRef = useRef(null);

  // Perfil físico e metas da pessoa
  const [userProfile, setUserProfile] = useState({
    sexo: 'Feminino',
    idade: '28',
    pesoKg: '64',
    alturaCm: '165',
    nivelAtual: 'Caminho e dou trotes leves',
    metaDistancia: '5 km',
    metaTempo: '40 minutos',
    metaObjetivo: 'Correr 5 km contínuos com conforto, sem dor na canela',
    prazoMeses: 2,
    semanasPlano: 8,
    diasPorSemana: 3,
    diasLivres: ['Segunda', 'Quinta', 'Sábado'],
    historicoDores: 'Dor na canela (canelite) quando troto muito tempo seguido e fico sem fôlego rápido'
  });

  // Plano atual (gerado por IA ou predefinido)
  const [programWeeks, setProgramWeeks] = useState(DEFAULT_PROGRAM_WEEKS);

  // Dicas personalizadas de nutrição e aquecimento geradas pela IA
  const [nutritionAndWarmup, setNutritionAndWarmup] = useState({
    antes: "Refeição leve 60 a 90 min antes: banana com aveia ou uma fatia de pão com mel/geleia. Fornece energia estável sem pesar no estômago.",
    durante: "Para treinos até 45 min, apenas água em pequenos goles se sentir a boca seca.",
    depois: "Até 40 min após o treino: hidratação com água ou água de coco + proteína para recuperação muscular (iogurte, ovo ou batido proteico) com fruta.",
    aquecimentoEspecifico: "Aquecimento dinâmico obrigatório de 5 minutos: elevações de calcanhar (panturrilha), rotações de tornozelo e pêndulos de perna para ativar a musculatura que protege a tíbia.",
    dicaEspecial: "Mantenha passadas curtas (o pé deve aterrissar logo abaixo do quadril) para aliviar 50% do impacto sobre a canela."
  });

  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
  const [isAdjustingPlan, setIsAdjustingPlan] = useState(false);

  // Mês exibido no mini-calendário visual
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  // Lista de treinos ativos
  const [completedLogs, setCompletedLogs] = useState(() => [
    {
      id: 'treino-inicial-exemplo',
      week: 1,
      day: 'Segunda',
      date: getTodayDateString(),
      distanceKm: 2.8,
      timeMin: 28,
      pace: '10:00 min/km',
      shinPain: 2,
      breathingEffort: 'Confortável',
      notes: 'Comecei devagar, a canela chiou um pouco no 5º bloco mas passou na caminhada.',
      aiFeedback: 'Excelente início! O desconforto na canela no 5º bloco indica fadiga dos músculos estabilizadores. No próximo treino, aterre com os pés debaixo da anca e mantenha passos curtos.'
    }
  ]);

  const [logForm, setLogForm] = useState({
    date: getTodayDateString(),
    week: 1,
    day: getDayNameFromDateString(getTodayDateString()),
    distanceKm: '',
    timeMin: '',
    shinPain: 1,
    breathingEffort: 'Confortável',
    notes: ''
  });

  const [generatingFeedbackId, setGeneratingFeedbackId] = useState(null);
  const [coachQuestion, setCoachQuestion] = useState('');
  const [coachChat, setCoachChat] = useState([
    { 
      role: 'assistant', 
      text: 'Olá! Sou a sua Treinadora de Corrida IA. Analiso o seu perfil físico, controlo o fôlego e protejo articulações e coração para alcançar a sua meta com segurança. Qual é a sua dúvida para o treino de hoje?' 
    }
  ]);
  const [isAskingCoach, setIsAskingCoach] = useState(false);
  const [coachError, setCoachError] = useState(null);

  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [currentIntervalType, setCurrentIntervalType] = useState('Aquecimento');

  // Cronómetro
  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(sec => sec + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTimer = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Cálculo automático do Ritmo (Pace)
  const calculatedPace = useMemo(() => {
    const dist = parseFloat(logForm.distanceKm);
    const time = parseFloat(logForm.timeMin);
    if (!dist || !time || dist <= 0 || time <= 0) return null;
    const paceDecimal = time / dist;
    const paceMin = Math.floor(paceDecimal);
    const paceSec = Math.round((paceDecimal - paceMin) * 60);
    return `${paceMin}:${paceSec < 10 ? '0' : ''}${paceSec} min/km`;
  }, [logForm.distanceKm, logForm.timeMin]);

  // Estatísticas
  const stats = useMemo(() => {
    const totalRuns = completedLogs.length;
    const totalKm = completedLogs.reduce((acc, curr) => acc + (parseFloat(curr.distanceKm) || 0), 0);
    const avgShinPain = totalRuns > 0 
      ? (completedLogs.reduce((acc, curr) => acc + (curr.shinPain || 0), 0) / totalRuns).toFixed(1)
      : 0;
    return { totalRuns, totalKm: totalKm.toFixed(1), avgShinPain };
  }, [completedLogs]);

  // Atualizar data no formulário
  const handleDateChange = (newDateStr) => {
    const dayName = getDayNameFromDateString(newDateStr);
    setLogForm(prev => ({
      ...prev,
      date: newDateStr,
      day: dayName
    }));
  };

  // Mapeamento para o calendário visual
  const workoutsByDate = useMemo(() => {
    const map = {};
    completedLogs.forEach(l => {
      if (l.date) {
        if (!map[l.date]) map[l.date] = [];
        map[l.date].push(l);
      }
    });
    return map;
  }, [completedLogs]);

  const calendarDays = useMemo(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray = [];
    for (let i = 0; i < firstDayIndex; i++) {
      daysArray.push(null);
    }
    for (let day = 1; day <= totalDaysInMonth; day++) {
      const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      daysArray.push({
        dayNumber: day,
        dateStr: dayStr,
        hasWorkout: Boolean(workoutsByDate[dayStr]),
        workoutCount: workoutsByDate[dayStr]?.length || 0
      });
    }
    return daysArray;
  }, [calendarMonth, workoutsByDate]);

  // Representação textual do JSON completo para download/cópia
  const currentJsonString = useMemo(() => {
    const exportData = {
      aplicativo: "Minha Corrida",
      versao: "2.0",
      dataUltimaAtualizacao: new Date().toISOString(),
      perfil: userProfile,
      planoPersonalizado: programWeeks,
      nutricaoEAquecimento: nutritionAndWarmup,
      totalTreinosCadastrados: completedLogs.length,
      treinos: completedLogs
    };
    return JSON.stringify(exportData, null, 2);
  }, [userProfile, programWeeks, nutritionAndWarmup, completedLogs]);

  // Download do arquivo JSON
  const triggerDownloadJSON = (dataList = completedLogs, customPlan = programWeeks, customProfile = userProfile, customNutri = nutritionAndWarmup) => {
    const exportData = {
      aplicativo: "Minha Corrida",
      versao: "2.0",
      dataUltimaAtualizacao: new Date().toISOString(),
      perfil: customProfile,
      planoPersonalizado: customPlan,
      nutricaoEAquecimento: customNutri,
      totalTreinosCadastrados: dataList.length,
      treinos: dataList
    };

    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(exportData, null, 2)
    )}`;
    
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `meus_treinos_corrida_${getTodayDateString()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Importar arquivo JSON existente
  const handleUploadJSON = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result;
        if (typeof content !== 'string') throw new Error("Conteúdo inválido");
        const parsed = JSON.parse(content);

        let importedList = [];
        if (Array.isArray(parsed)) {
          importedList = parsed;
        } else if (parsed && Array.isArray(parsed.treinos)) {
          importedList = parsed.treinos;
        } else if (parsed && Array.isArray(parsed.workouts)) {
          importedList = parsed.workouts;
        }

        // Se houver perfil guardado no JSON, restaura
        if (parsed.perfil) {
          const perfil = { ...parsed.perfil };
          if (perfil.prazoMeses == null && perfil.semanasPlano) {
            perfil.prazoMeses = Math.round((Number(perfil.semanasPlano) / 4) * 2) / 2;
          }
          if (perfil.semanasPlano == null && perfil.prazoMeses != null) {
            perfil.semanasPlano = semanasFromMeses(perfil.prazoMeses);
          }
          if (!perfil.metaObjetivo) {
            perfil.metaObjetivo = `Alcançar ${perfil.metaDistancia || 'a meta'} em ${perfil.metaTempo || 'um tempo confortável'}`;
          }
          if (!perfil.sexo) {
            perfil.sexo = 'Prefiro não informar';
          }
          setUserProfile(prev => ({ ...prev, ...perfil }));
        }

        // Se houver plano personalizado guardado no JSON, restaura
        if (parsed.planoPersonalizado && Array.isArray(parsed.planoPersonalizado)) {
          setProgramWeeks(parsed.planoPersonalizado);
        }

        // Se houver dicas de nutrição guardadas no JSON, restaura
        if (parsed.nutricaoEAquecimento) {
          setNutritionAndWarmup(parsed.nutricaoEAquecimento);
        }

        if (importedList.length > 0) {
          const validList = importedList.filter(item => item && (item.distanceKm || item.timeMin || item.date));
          validList.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
          setCompletedLogs(validList);
        }

        setToastMessage({ 
          type: 'success', 
          text: `Sucesso! Dados restaurados do arquivo JSON (Perfil, Plano e ${importedList.length} treinos).` 
        });
      } catch (err) {
        setToastMessage({ type: 'error', text: `Falha ao importar: ${err.message}` });
      } finally {
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    };
    reader.readAsText(file);
  };

  const handleCopyJSON = () => {
    const textArea = document.createElement("textarea");
    textArea.value = currentJsonString;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setToastMessage({ type: 'success', text: 'Código JSON copiado para a área de transferência!' });
    } catch (err) {
      setToastMessage({ type: 'error', text: 'Não foi possível copiar automaticamente.' });
    }
    document.body.removeChild(textArea);
  };

  const handleSaveApiKey = () => {
    setUserApiKey(tempApiKey.trim());
    setShowKeyModal(false);
    setToastMessage({ 
      type: 'success', 
      text: tempApiKey.trim() ? 'Chave da API Gemini salva com sucesso!' : 'Chave limpa. Usando chave padrão do ambiente.' 
    });
  };

  // Chamada à API Gemini com Exponential Backoff
  const callGemini = async (prompt, systemInstruction, asJson = false) => {
    const effectiveKey = userApiKey.trim();
    if (!effectiveKey) {
      throw new Error("Chave da API Gemini vazia. Abra 'Chave API', cole sua chave do Google AI Studio e salve.");
    }

    // gemini-3.6-flash: modelo flash atual recomendado pela API (substitui o 2.0)
    const model = 'gemini-3.6-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(effectiveKey)}`;

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: { parts: [{ text: systemInstruction }] }
    };

    if (asJson) {
      payload.generationConfig = {
        responseMimeType: "application/json"
      };
    }

    const delays = [1000, 2000, 4000, 8000, 16000];
    let lastErrorMessage = null;

    for (let attempt = 0; attempt <= delays.length; attempt++) {
      let response;
      try {
        response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (networkErr) {
        lastErrorMessage = networkErr?.message || 'Falha de rede';
        if (attempt === delays.length) {
          throw new Error(`Não foi possível contactar o serviço de IA: ${lastErrorMessage}`);
        }
        await new Promise(res => setTimeout(res, delays[attempt]));
        continue;
      }

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const apiMessage = data?.error?.message || `Erro HTTP ${response.status}`;
        // 4xx (chave, modelo, cota, pedido inválido): não repetir
        if (response.status >= 400 && response.status < 500) {
          throw new Error(apiMessage);
        }
        lastErrorMessage = apiMessage;
        if (attempt === delays.length) {
          throw new Error(apiMessage);
        }
        await new Promise(res => setTimeout(res, delays[attempt]));
        continue;
      }

      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) return text;

      const blockReason = data?.promptFeedback?.blockReason || data?.candidates?.[0]?.finishReason;
      throw new Error(
        blockReason
          ? `A IA não devolveu texto (motivo: ${blockReason}).`
          : 'A IA devolveu uma resposta vazia.'
      );
    }

    throw new Error(lastErrorMessage || 'Falha na comunicação com o servidor de IA.');
  };

  const toggleDiaLivre = (day) => {
    const selected = userProfile.diasLivres || [];
    if (selected.includes(day)) {
      setUserProfile({ ...userProfile, diasLivres: selected.filter(d => d !== day) });
      return;
    }
    if (selected.length >= userProfile.diasPorSemana) {
      setToastMessage({
        type: 'error',
        text: `Já marcou ${userProfile.diasPorSemana} dias. Desmarque um para escolher outro.`
      });
      return;
    }
    setUserProfile({ ...userProfile, diasLivres: [...selected, day] });
  };

  // =========================================================================
  // GERAR PLANO E NUTRIÇÃO PERSONALIZADOS COM A IA GEMINI
  // =========================================================================
  const handleGenerateCustomPlanWithAI = async () => {
    const diasLivres = userProfile.diasLivres || [];
    if (diasLivres.length !== userProfile.diasPorSemana) {
      setToastMessage({
        type: 'error',
        text: `Marque exatamente ${userProfile.diasPorSemana} dias livres para os treinos (selecionou ${diasLivres.length}).`
      });
      return;
    }

    setIsGeneratingPlan(true);
    try {
      const { pessoa } = getAthleteLabel(userProfile.sexo);
      const systemInstruction = `Você é um treinador de corrida de elite e fisiologista do exercício especializado em atletas iniciantes, prevenção de lesões, proteção cardiovascular e nutrição desportiva.
Gere uma prescrição de treino progressiva, ultra personalizada e SEGURA, respondendo OBRIGATORIAMENTE em formato JSON válido compatível com o esquema solicitado.
Trate a pessoa como ${pessoa} (sexo informado: ${userProfile.sexo || 'não informado'}).
Respeite o objetivo e o prazo em meses definidos, mas NUNCA comprometa a segurança para cumprir o prazo — alongue a progressão se necessário.

${SAFETY_COACH_RULES}`;

      const prompt = `Crie um plano completo e personalizado com base nos seguintes dados físicos e metas d${pessoa === 'aluno' ? 'o' : 'a'} ${pessoa}:
- Sexo: ${userProfile.sexo || 'não informado'}
- Idade: ${userProfile.idade} anos
- Peso: ${userProfile.pesoKg} kg
- Altura: ${userProfile.alturaCm} cm
- Nível Atual: ${userProfile.nivelAtual}
- Histórico de dores / lesões: ${userProfile.historicoDores}
- Meta de distância: ${userProfile.metaDistancia}
- Meta de tempo: ${userProfile.metaTempo}
- Objetivo descrito: ${userProfile.metaObjetivo || 'Não especificado'}
- Prazo desejado: ${userProfile.prazoMeses} mês(es) (~${userProfile.semanasPlano} semanas)
- Duração do plano: exatamente ${userProfile.semanasPlano} semanas
- Frequência de treino: ${userProfile.diasPorSemana} treinos de corrida por semana
- Dias livres para treinar (OBRIGATÓRIO): ${diasLivres.join(', ')}

REGRAS DE AGENDAMENTO (CRÍTICAS):
1. Em CADA semana, coloque treinos de corrida (type "run" ou, na última semana, "goal") APENAS nos dias: ${diasLivres.join(', ')}.
2. NÃO coloque type "run" nem "goal" em nenhum outro dia.
3. Nos restantes dias use type "rest" (ou no máximo um "optional" de caminhada leve, se fizer sentido).
4. Deve haver exatamente ${userProfile.diasPorSemana} sessões de corrida por semana, uma em cada dia livre indicado.
5. A progressão deve preparar ${pessoa === 'aluno' ? 'o aluno' : pessoa === 'aluna' ? 'a aluna' : 'a pessoa'} para ${userProfile.metaDistancia} em ${userProfile.metaTempo} dentro de ${userProfile.prazoMeses} mês(es), com aumento GRADUAL de volume (sem saltos agressivos), ritmo conversacional e recuperação suficiente entre sessões.
6. Inclua nas "presc" lembretes de segurança quando fizer sentido (parar se dor no peito/tontura; não forçar se canela > 2).

Gere a resposta no seguinte formato JSON estrito:
{
  "weeks": [
    {
      "week": 1,
      "title": "Semana 1: Título da Semana",
      "focus": "Foco da semana em min de trote",
      "days": [
        { "day": "Segunda", "type": "run", "title": "Treino 1", "presc": "Ex: 8x (1 min Trote + 2 min Caminhada)", "targetRunMin": 8 },
        { "day": "Terça", "type": "rest", "title": "Descanso", "presc": "Recuperação ativa ou total", "targetRunMin": 0 },
        { "day": "Quarta", "type": "rest", "title": "Descanso", "presc": "Fortalecimento leve", "targetRunMin": 0 },
        { "day": "Quinta", "type": "run", "title": "Treino 2", "presc": "Ex: 8x (1 min Trote + 2 min Caminhada)", "targetRunMin": 8 },
        { "day": "Sexta", "type": "rest", "title": "Descanso", "presc": "Recuperação", "targetRunMin": 0 },
        { "day": "Sábado", "type": "run", "title": "Treino 3", "presc": "Ex: 8x (1 min Trote + 2 min Caminhada)", "targetRunMin": 8 },
        { "day": "Domingo", "type": "rest", "title": "Descanso", "presc": "Recuperação total", "targetRunMin": 0 }
      ]
    }
  ],
  "nutrition": {
    "antes": "O que comer antes do treino especificamente para o peso e perfil da pessoa, incluindo horários e hidratação.",
    "durante": "Estratégia de hidratação ou eletrólitos durante a corrida.",
    "depois": "O que comer logo após o treino para recuperar músculos e proteger os ossos contra impacto.",
    "aquecimentoEspecifico": "Exercícios dinâmicos recomendados para antes de correr, focados na prevenção de canelite e ativação.",
    "dicaEspecial": "Dica de ouro de postura e mecânica dos pés personalizada para o perfil físico."
  }
}
Garanta que haja exatamente ${userProfile.semanasPlano} semanas dentro do array "weeks", e 7 dias em cada semana (Segunda a Domingo). Na última semana, marque o treino final (no último dia livre) com "type": "goal" alinhado à meta ${userProfile.metaDistancia}.`;

      const responseText = await callGemini(prompt, systemInstruction, true);
      const parsed = parseJsonLoose(responseText);

      if (parsed && Array.isArray(parsed.weeks) && parsed.weeks.length > 0) {
        setProgramWeeks(parsed.weeks);
        setSelectedWeek(1);
      }

      if (parsed && parsed.nutrition) {
        setNutritionAndWarmup(parsed.nutrition);
      }

      setToastMessage({
        type: 'success',
        text: `Plano de ${userProfile.semanasPlano} semanas (~${userProfile.prazoMeses} mês/meses) e guia de nutrição gerados com sucesso pela IA!`
      });
      setActiveTab('schedule');
    } catch (err) {
      console.error(err);
      setToastMessage({
        type: 'error',
        text: `Erro ao gerar plano com IA: ${err.message}`
      });
    } finally {
      setIsGeneratingPlan(false);
    }
  };

  const buildProgressionContext = (anchorLog = null) => {
    const sortedByDate = [...completedLogs].sort(
      (a, b) => new Date(a.date || 0) - new Date(b.date || 0)
    );

    let lastFive = sortedByDate.slice(-5);
    if (anchorLog) {
      const currentIndex = sortedByDate.findIndex(item => item.id === anchorLog.id);
      const endIndex = currentIndex >= 0 ? currentIndex + 1 : sortedByDate.length;
      lastFive = sortedByDate.slice(Math.max(0, endIndex - 5), endIndex);
    }

    const progressionText = lastFive.length > 0
      ? lastFive.map((item, i) =>
          `${i + 1}. ${item.date} (${item.day}) — Semana ${item.week}: ${item.distanceKm} km em ${item.timeMin} min (pace ${item.pace}); canela ${item.shinPain}/5; respiração: ${item.breathingEffort}; notas: "${item.notes || 'Nenhuma'}"`
        ).join('\n')
      : 'Sem histórico suficiente.';

    const planSummary = programWeeks
      .map(w => `Semana ${w.week}: ${w.title} — ${w.focus}`)
      .join('\n');

    return { lastFive, progressionText, planSummary };
  };

  const applyPlanAdjustmentIfNeeded = (parsed) => {
    if (!parsed?.shouldAdjustPlan || !Array.isArray(parsed.weeks) || parsed.weeks.length === 0) {
      return false;
    }

    setProgramWeeks(parsed.weeks);
    setSelectedWeek(1);
    setUserProfile(prev => ({
      ...prev,
      semanasPlano: parsed.weeks.length,
      prazoMeses: parsed.prazoMeses != null
        ? Number(parsed.prazoMeses)
        : Math.round((parsed.weeks.length / 4) * 2) / 2
    }));
    return true;
  };

  const handleGenerateAiFeedback = async (log) => {
    setGeneratingFeedbackId(log.id);
    try {
      const { lastFive, progressionText, planSummary } = buildProgressionContext(log);
      const diasLivres = userProfile.diasLivres || [];
      const { pessoa } = getAthleteLabel(userProfile.sexo);

      const systemInstruction = `É uma treinadora de corrida experiente, cautelosa e atenta ao perfil físico d${pessoa === 'aluno' ? 'o' : 'a'} ${pessoa}.
Perfil: sexo ${userProfile.sexo || 'não informado'}, ${userProfile.idade} anos, ${userProfile.pesoKg}kg, ${userProfile.alturaCm}cm. Nível: ${userProfile.nivelAtual}. Histórico: ${userProfile.historicoDores}.
Meta: ${userProfile.metaDistancia} em ${userProfile.metaTempo}. Objetivo: ${userProfile.metaObjetivo || 'não especificado'}. Prazo: ${userProfile.prazoMeses} mês(es).
Trate a pessoa de forma adequada ao sexo informado (${userProfile.sexo || 'não informado'}).
Prioridade absoluta: prevenir lesões e evitar sobrecarga cardíaca. Só considere acelerar o plano se a evolução for clara E segura.
Responda OBRIGATORIAMENTE em JSON válido.

${SAFETY_COACH_RULES}`;

      const prompt = `Analise este treino:
- Data: ${log.date} (${log.day})
- Semana do plano: ${log.week}
- Distância: ${log.distanceKm} km em ${log.timeMin} min (Pace: ${log.pace})
- Dor na canela (0-5): ${log.shinPain}
- Respiração: ${log.breathingEffort}
- Notas: "${log.notes || 'Nenhuma'}"

Progressão dos últimos ${lastFive.length} treinos:
${progressionText}

Plano atual (resumo):
${planSummary}

Dias livres obrigatórios para treinos: ${diasLivres.join(', ') || 'não definidos'}

Devolva JSON neste formato:
{
  "feedback": "parecer em português (4 a 6 frases), motivador mas SEGURO, citando progressão e alertas se houver",
  "shouldAdjustPlan": false,
  "adjustmentNote": "explique se ajustou ou por que NÃO ajustou (segurança primeiro)",
  "prazoMeses": ${userProfile.prazoMeses},
  "weeks": null
}

Regra: shouldAdjustPlan=true SÓ se evolução rápida E sem sinais de lesão/sobrecarga cardíaca. Na dúvida, false e weeks=null.
Se shouldAdjustPlan=true, "weeks" deve ser o plano COMPLETO atualizado (array de semanas com 7 dias cada), com progressão ainda cautelosa, treinos só nos dias livres (${diasLivres.join(', ')}), e a última semana com type "goal" alinhado a ${userProfile.metaDistancia}.`;

      const responseText = await callGemini(prompt, systemInstruction, true);
      const parsed = parseJsonLoose(responseText);
      const feedbackText = parsed.feedback || 'Análise concluída.';

      setCompletedLogs(prev => prev.map(item => {
        if (item.id === log.id) {
          return { ...item, aiFeedback: feedbackText };
        }
        return item;
      }));

      const adjusted = applyPlanAdjustmentIfNeeded(parsed);
      setToastMessage({
        type: 'success',
        text: adjusted
          ? `Feedback guardado e plano ajustado pela IA: ${parsed.adjustmentNote || 'aceleração segura da progressão.'}`
          : 'Análise da IA guardada neste treino (com base na progressão recente).'
      });
    } catch (err) {
      setToastMessage({ type: 'error', text: err.message });
    } finally {
      setGeneratingFeedbackId(null);
    }
  };

  const handleAdjustPlanFromProgress = async () => {
    if (completedLogs.length === 0) {
      setToastMessage({ type: 'error', text: 'Cadastre treinos antes de pedir ajuste do plano.' });
      return;
    }

    const diasLivres = userProfile.diasLivres || [];
    if (diasLivres.length !== userProfile.diasPorSemana) {
      setToastMessage({
        type: 'error',
        text: `Marque exatamente ${userProfile.diasPorSemana} dias livres no perfil antes de ajustar o plano.`
      });
      return;
    }

    setIsAdjustingPlan(true);
    try {
      const { lastFive, progressionText, planSummary } = buildProgressionContext();
      const { pessoa } = getAthleteLabel(userProfile.sexo);

      const systemInstruction = `Você é a treinadora de corrida d${pessoa === 'aluno' ? 'o' : 'a'} ${pessoa}, com cuidado REDOBRADO contra lesões e sobrecarga do coração.
Trate a pessoa de forma adequada ao sexo informado (${userProfile.sexo || 'não informado'}).
Avalie a evolução recente. Só ajuste/acelere o plano se estiver claramente seguro; na dúvida, mantenha ou suavize.
Responda OBRIGATORIAMENTE em JSON válido.

${SAFETY_COACH_RULES}`;

      const prompt = `Sexo: ${userProfile.sexo || 'não informado'}.
Meta: ${userProfile.metaDistancia} em ${userProfile.metaTempo}.
Objetivo: ${userProfile.metaObjetivo || 'não especificado'}.
Prazo atual: ${userProfile.prazoMeses} mês(es) / ${userProfile.semanasPlano} semanas.
Dias livres: ${diasLivres.join(', ')}.
Nível: ${userProfile.nivelAtual}. Histórico: ${userProfile.historicoDores}.

Progressão dos últimos ${lastFive.length} treinos:
${progressionText}

Plano atual:
${planSummary}

Regras de decisão:
- Acelerar SÓ com evolução rápida E segura (pouca dor, respiração confortável, sem sinais cardíacos/de alerta).
- Qualquer indício de lesão, forçar demais, falta de ar excessiva ou recuperação ruim → shouldAdjustPlan=false, weeks=null, e oriente descanso/redução.
- Treinos de corrida só nos dias: ${diasLivres.join(', ')}.

JSON:
{
  "feedback": "explicação curta em português do que foi decidido, com ênfase em segurança",
  "shouldAdjustPlan": false,
  "adjustmentNote": "resumo da decisão",
  "prazoMeses": ${userProfile.prazoMeses},
  "weeks": null
}`;

      const responseText = await callGemini(prompt, systemInstruction, true);
      const parsed = parseJsonLoose(responseText);
      const adjusted = applyPlanAdjustmentIfNeeded(parsed);

      setCoachChat(prev => [
        ...prev,
        {
          role: 'assistant',
          text: adjusted
            ? `${parsed.feedback || 'Plano ajustado.'}\n\nAjuste: ${parsed.adjustmentNote || 'Progressão acelerada com segurança.'}`
            : (parsed.feedback || parsed.adjustmentNote || 'Mantive o plano atual por segurança.')
        }
      ]);

      setToastMessage({
        type: 'success',
        text: adjusted
          ? `Plano ajustado pela treinadora IA (${parsed.weeks.length} semanas).`
          : (parsed.adjustmentNote || 'A IA manteve o plano atual.')
      });
      if (adjusted) setActiveTab('schedule');
    } catch (err) {
      setToastMessage({ type: 'error', text: err.message });
    } finally {
      setIsAdjustingPlan(false);
    }
  };

  // CADASTRAR TREINO NO APP
  const handleSaveLog = (e) => {
    e.preventDefault();
    if (!logForm.distanceKm || !logForm.timeMin) return;

    const dist = parseFloat(logForm.distanceKm);
    const time = parseFloat(logForm.timeMin);
    const paceVal = (dist > 0 && time > 0) ? calculatedPace : '--:--';

    const newLog = {
      id: `treino-${Date.now()}`,
      week: Number(logForm.week),
      day: logForm.day,
      date: logForm.date || getTodayDateString(),
      distanceKm: dist,
      timeMin: time,
      pace: paceVal,
      shinPain: Number(logForm.shinPain),
      breathingEffort: logForm.breathingEffort,
      notes: logForm.notes,
      aiFeedback: null
    };

    const updatedList = [newLog, ...completedLogs].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    setCompletedLogs(updatedList);

    setLogForm(prev => ({
      ...prev,
      distanceKm: '',
      timeMin: '',
      notes: '',
      shinPain: 1
    }));

    setActiveTab('log');
    setToastMessage({
      type: 'success',
      text: `Treino do dia ${formatDateDisplayBR(newLog.date)} (${formatDayLabel(newLog.day)}) registado!`
    });
  };

  const handleDeleteLog = (id) => {
    setCompletedLogs(prev => prev.filter(l => l.id !== id));
    setToastMessage({ type: 'success', text: 'Treino removido da base do JSON.' });
  };

  const handleAskCoach = async (e) => {
    e.preventDefault();
    if (!coachQuestion.trim() || isAskingCoach) return;

    const userText = coachQuestion.trim();
    setCoachQuestion('');
    setCoachError(null);

    const updatedChat = [...coachChat, { role: 'user', text: userText }];
    setCoachChat(updatedChat);
    setIsAskingCoach(true);

    try {
      const systemInstruction = `É a Treinadora de Corrida Virtual da pessoa atleta.
Perfil: sexo ${userProfile.sexo || 'não informado'}, ${userProfile.idade} anos, ${userProfile.pesoKg}kg, ${userProfile.alturaCm}cm. Nível: ${userProfile.nivelAtual}.
Histórico: ${userProfile.historicoDores}.
Meta: ${userProfile.metaDistancia} em ${userProfile.metaTempo}. Objetivo: ${userProfile.metaObjetivo || 'não especificado'}. Prazo: ${userProfile.prazoMeses} mês(es).
Trate a pessoa de forma adequada ao sexo informado (${userProfile.sexo || 'não informado'}) — não assuma que é mulher.
Diretrizes: Seja empática, didática e clara. Foco em passadas curtas, nutrição adequada, ritmo conversacional e proteção do corpo.
Nunca incentive forçar o coração, ignorar dor ou "empurrar além do limite". Se houver sinais de alerta (peito, tontura, falta de ar grave, dor articular), oriente parar e, se necessário, procurar ajuda médica.
Se a pessoa estiver evoluindo bem, pode sugerir progresso gradual e lembrar o botão "Ajustar plano pela evolução", sempre com cautela.
Respostas em 2 a 3 parágrafos concisos. Responda em português.

${SAFETY_COACH_RULES}`;

      const chatContext = updatedChat
        .slice(-5)
        .map(m => `${m.role === 'user' ? 'Atleta' : 'Treinadora'}: ${m.text}`)
        .join('\n');

      const prompt = `${chatContext}\nAtleta: ${userText}\nTreinadora:`;
      const reply = await callGemini(prompt, systemInstruction);

      setCoachChat(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch (err) {
      setCoachError(err.message || 'Ocorreu uma falha ao consultar a treinadora.');
    } finally {
      setIsAskingCoach(false);
    }
  };

  const currentWeekData = programWeeks.find(w => w.week === selectedWeek) || programWeeks[0] || DEFAULT_PROGRAM_WEEKS[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col antialiased">
      {/* NOTIFICAÇÃO FLUTUANTE */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 max-w-sm w-full shadow-2xl animate-fade-in">
          <div className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
            toastMessage.type === 'error' 
              ? 'bg-rose-50 border-rose-200 text-rose-900' 
              : 'bg-emerald-50 border-emerald-200 text-emerald-900'
          }`}>
            <div className="flex items-center gap-2 text-xs font-semibold">
              {toastMessage.type === 'error' ? <IconAlert className="w-4 h-4 text-rose-600 shrink-0" /> : <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />}
              <span>{toastMessage.text}</span>
            </div>
            <button 
              onClick={() => setToastMessage(null)}
              className="text-xs font-bold px-2 py-1 rounded bg-black/5 hover:bg-black/10 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* MODAL DE CHAVE DA API */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-amber-50 text-amber-700 rounded-xl">
                  <IconKey className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base">Chave da API Gemini</h3>
                  <p className="text-xs text-slate-500">Para rodar a IA no seu computador</p>
                </div>
              </div>
              <button 
                onClick={() => setShowKeyModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg p-1"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-slate-600 leading-relaxed space-y-2">
              <p>
                Se você está rodando o app no seu computador (Vite / VS Code), insira abaixo sua chave pessoal do <strong>Google AI Studio</strong> para gerar seu plano e ativar a análise com IA.
              </p>
              <p className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-[11px] text-slate-500">
                🔒 A chave fica salva apenas na memória do seu navegador neste computador.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">Chave da API (API Key)</label>
              <input
                type="password"
                value={tempApiKey}
                onChange={(e) => setTempApiKey(e.target.value)}
                placeholder="Cole sua chave aqui (ex: AIzaSy...)"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-mono focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              {userApiKey && (
                <button
                  type="button"
                  onClick={() => {
                    setUserApiKey('');
                    setTempApiKey('');
                    setShowKeyModal(false);
                    setToastMessage({ type: 'success', text: 'Chave removida. Usando padrão do ambiente.' });
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition"
                >
                  Remover Chave
                </button>
              )}
              <button
                type="button"
                onClick={() => setShowKeyModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveApiKey}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-500 text-white shadow-md transition"
              >
                Salvar Chave
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CABEÇALHO */}
      <header className="bg-gradient-to-r from-slate-900 via-sky-900 to-teal-800 text-white shadow-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-teal-400/20 p-2 rounded-xl text-teal-300 ring-1 ring-teal-400/40">
              <IconFlame className="w-6 h-6 text-amber-300 animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-black tracking-tight flex items-center gap-2">
                Minha Corrida
                <span className="text-xs bg-teal-500/30 text-teal-200 px-2 py-0.5 rounded-full border border-teal-400/30 font-medium">
                  {programWeeks.length} Semanas
                </span>
              </h1>
              <p className="text-xs text-slate-300 flex items-center gap-1.5">
                Meta {userProfile.metaDistancia} • {userProfile.prazoMeses} mês/meses • JSON sob demanda
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleUploadJSON} 
              accept=".json" 
              className="hidden" 
            />
            
            <button
              onClick={() => {
                setTempApiKey(userApiKey);
                setShowKeyModal(true);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                userApiKey 
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50 hover:bg-emerald-900/80' 
                  : 'bg-slate-800/90 text-amber-300 border-amber-500/40 hover:bg-slate-700'
              }`}
              title="Configurar Chave da API Gemini"
            >
              <IconKey className="w-3.5 h-3.5" />
              {userApiKey ? "Chave API Ativa ✅" : "Chave API"}
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition"
              title="Carregar ficheiro JSON com perfil, plano e treinos anteriores"
            >
              <IconUpload className="w-3.5 h-3.5 text-sky-400" />
              Carregar JSON
            </button>

            <button
              onClick={() => triggerDownloadJSON()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md transition"
              title="Descarregar JSON completo com perfil, plano gerado e treinos"
            >
              <IconDownload className="w-3.5 h-3.5" />
              Baixar JSON ({completedLogs.length})
            </button>
          </div>
        </div>

        {/* NAVEGAÇÃO ENTRE ABAS */}
        <div className="max-w-6xl mx-auto px-4 flex gap-2 border-t border-slate-700/60 overflow-x-auto text-sm pt-2 pb-1">
          <button 
            onClick={() => setActiveTab('schedule')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === 'schedule' ? 'bg-teal-500 text-slate-950 font-bold shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <IconCalendar className="w-4 h-4" /> Plano de Treinos
          </button>

          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === 'profile' ? 'bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-extrabold shadow-sm' : 'text-emerald-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <IconUser className="w-4 h-4 text-emerald-950" /> Perfil & Plano IA ✨
          </button>

          <button 
            onClick={() => setActiveTab('nutrition')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === 'nutrition' ? 'bg-teal-500 text-slate-950 font-bold shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <IconApple className="w-4 h-4" /> Nutrição & Aquecimento
          </button>

          <button 
            onClick={() => setActiveTab('add')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === 'add' ? 'bg-teal-500 text-slate-950 font-bold shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <IconPlus className="w-4 h-4" /> Registar Treino
          </button>

          <button 
            onClick={() => setActiveTab('coach')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === 'coach' ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 font-extrabold shadow-sm' : 'text-amber-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <IconSparkles className="w-4 h-4 text-amber-950" /> Treinadora IA
          </button>

          <button 
            onClick={() => setActiveTab('timer')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === 'timer' ? 'bg-teal-500 text-slate-950 font-bold shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <IconPlay className="w-4 h-4" /> Cronómetro
          </button>

          <button 
            onClick={() => setActiveTab('log')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === 'log' ? 'bg-teal-500 text-slate-950 font-bold shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <IconTrend className="w-4 h-4" /> Meus Treinos ({completedLogs.length})
          </button>

          <button 
            onClick={() => setActiveTab('json')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition whitespace-nowrap ${
              activeTab === 'json' ? 'bg-teal-500 text-slate-950 font-bold shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <IconFileCode className="w-4 h-4" /> Arquivo JSON
          </button>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 py-6 w-full flex-1">
        
        {/* ABA: PERFIL FÍSICO & PERSONALIZAÇÃO DE PLANO COM IA */}
        {activeTab === 'profile' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-800">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                <IconSparkles className="w-4 h-4" /> Personalização Avançada com IA
              </span>
              <h2 className="text-2xl font-black mt-1">Crie o seu Plano e Guia Sob Medida</h2>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Defina a sua meta (ex.: 3 km, 5 km, 10 km), o prazo em meses e os dias livres. A IA monta o plano sob medida, com cuidado redobrado contra lesões e esforço excessivo no coração. Evolução rápida só entra se estiver realmente segura.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <IconUser className="w-5 h-5 text-teal-600" />
                Os Seus Dados Físicos & Condição
              </h3>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Sexo</label>
                <select
                  value={userProfile.sexo || 'Prefiro não informar'}
                  onChange={e => setUserProfile({ ...userProfile, sexo: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none font-medium"
                >
                  {SEXO_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Idade (anos)</label>
                  <input
                    type="number"
                    value={userProfile.idade}
                    onChange={e => setUserProfile({ ...userProfile, idade: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    placeholder="Ex: 28"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Peso Corporal (kg)</label>
                  <input
                    type="number"
                    value={userProfile.pesoKg}
                    onChange={e => setUserProfile({ ...userProfile, pesoKg: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    placeholder="Ex: 64"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Altura (cm)</label>
                  <input
                    type="number"
                    value={userProfile.alturaCm}
                    onChange={e => setUserProfile({ ...userProfile, alturaCm: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    placeholder="Ex: 165"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Nível Atual de Corrida</label>
                  <select
                    value={userProfile.nivelAtual}
                    onChange={e => setUserProfile({ ...userProfile, nivelAtual: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none font-medium"
                  >
                    <option value="Apenas caminhada">Apenas caminhada (Zero corrida)</option>
                    <option value="Caminho e dou trotes leves">Caminho e já dou trotes leves</option>
                    <option value="Consigo correr 10 a 15 min com paradas">Consigo correr 10-15 min mas perco o fôlego</option>
                    <option value="Corredor(a) que está a voltar após paragem">Retorno aos treinos após paragem prolongada</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Disponibilidade Semanal</label>
                  <select
                    value={userProfile.diasPorSemana}
                    onChange={e => {
                      const next = Number(e.target.value);
                      setUserProfile(prev => ({
                        ...prev,
                        diasPorSemana: next,
                        diasLivres: (prev.diasLivres || []).slice(0, next)
                      }));
                    }}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none font-medium"
                  >
                    <option value={3}>3 dias por semana (Recomendado p/ iniciantes)</option>
                    <option value={4}>4 dias por semana</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                  <label className="block text-xs font-bold text-slate-700">
                    Dias livres para treinar
                  </label>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    (userProfile.diasLivres || []).length === userProfile.diasPorSemana
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}>
                    {(userProfile.diasLivres || []).length}/{userProfile.diasPorSemana} selecionados
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mb-2.5 leading-relaxed">
                  Marque exatamente os {userProfile.diasPorSemana} dias da semana em que consegue treinar. A IA vai colocar os treinos só nesses dias.
                </p>
                <div className="flex flex-wrap gap-2">
                  {WEEKDAY_OPTIONS.map((day) => {
                    const selected = (userProfile.diasLivres || []).includes(day);
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleDiaLivre(day)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold border transition ${
                          selected
                            ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                            : 'bg-slate-50 text-slate-600 border-slate-300 hover:border-teal-400 hover:text-teal-700'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Histórico de Dores ou Dificuldades (Fundamental para a IA proteger seu corpo):
                </label>
                <textarea
                  rows="2"
                  value={userProfile.historicoDores}
                  onChange={e => setUserProfile({ ...userProfile, historicoDores: e.target.value })}
                  placeholder="Ex: Dor na canela ao correr mais de 3 minutos, joelhos estalam, fôlego acaba rápido..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3 pt-2">
                <IconFlame className="w-5 h-5 text-amber-500" />
                A Sua Meta (personalizável)
              </h3>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Distância alvo</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {META_DISTANCIA_PRESETS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setUserProfile({
                        ...userProfile,
                        metaDistancia: preset,
                        metaObjetivo: userProfile.metaObjetivo?.includes(userProfile.metaDistancia)
                          ? userProfile.metaObjetivo.replace(userProfile.metaDistancia, preset)
                          : `Correr ${preset} contínuos com conforto`
                      })}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                        userProfile.metaDistancia === preset
                          ? 'bg-amber-500 text-white border-amber-500'
                          : 'bg-slate-50 text-slate-600 border-slate-300 hover:border-amber-400'
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={userProfile.metaDistancia}
                  onChange={e => setUserProfile({ ...userProfile, metaDistancia: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  placeholder="Ou escreva outra, ex: 8 km"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Tempo alvo</label>
                  <input
                    type="text"
                    value={userProfile.metaTempo}
                    onChange={e => setUserProfile({ ...userProfile, metaTempo: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    placeholder="Ex: 40 minutos / sem tempo limite"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Prazo para o objetivo</label>
                  <select
                    value={userProfile.prazoMeses}
                    onChange={e => {
                      const meses = Number(e.target.value);
                      setUserProfile({
                        ...userProfile,
                        prazoMeses: meses,
                        semanasPlano: semanasFromMeses(meses)
                      });
                    }}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none font-medium"
                  >
                    {PRAZO_MESES_OPTIONS.map(opt => (
                      <option key={opt.meses} value={opt.meses}>{opt.label}</option>
                    ))}
                  </select>
                  <p className="text-[11px] text-slate-500 mt-1.5">
                    Plano gerado com <strong>{userProfile.semanasPlano} semanas</strong> (~{userProfile.prazoMeses} mês/meses).
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Descreva o seu objetivo do seu jeito
                </label>
                <textarea
                  rows="2"
                  value={userProfile.metaObjetivo || ''}
                  onChange={e => setUserProfile({ ...userProfile, metaObjetivo: e.target.value })}
                  placeholder="Ex: Quero correr 5 km em 2 meses sem dor na canela, no meu ritmo..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleGenerateCustomPlanWithAI}
                  disabled={isGeneratingPlan || (userProfile.diasLivres || []).length !== userProfile.diasPorSemana}
                  className="w-full bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-500 hover:to-emerald-600 disabled:opacity-50 text-white font-extrabold py-4 rounded-2xl shadow-xl shadow-teal-600/30 transition text-sm flex items-center justify-center gap-2.5"
                >
                  {isGeneratingPlan ? (
                    <>
                      <IconSpinner className="w-5 h-5" />
                      A Treinadora IA está a estruturar as suas {userProfile.semanasPlano} semanas (~{userProfile.prazoMeses} mês/meses) e o guia nutricional...
                    </>
                  ) : (
                    <>
                      <IconSparkles className="w-5 h-5" />
                      Gerar Plano Personalizado & Guia com IA ✨
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  O plano gerado substitui o cronograma e fica automaticamente salvo no seu JSON local.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ABA: NUTRIÇÃO & AQUECIMENTO PERSONALIZADO */}
        {activeTab === 'nutrition' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-sm border border-emerald-900/50">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <IconApple className="w-4 h-4" /> Nutrição & Fisiologia do Exercício
              </span>
              <h2 className="text-2xl font-black mt-1">Guia Alimentar & Preparação do Corpo</h2>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed max-w-2xl">
                Ajustado para o seu peso ({userProfile.pesoKg} kg) e foco na proteção articular e fornecimento contínuo de oxigénio para evitar a perda precoce de fôlego.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* ANTES */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2.5 text-amber-600 font-bold text-sm">
                  <div className="p-2 bg-amber-50 rounded-xl">
                    <IconFlame className="w-4 h-4" />
                  </div>
                  <span>Antes do Treino</span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">Energia & Digestão</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {nutritionAndWarmup.antes}
                </p>
                <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-100">
                  ⏱️ Consumir 45 a 60 minutos antes da corrida.
                </div>
              </div>

              {/* DURANTE */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-sm">
                  <div className="p-2 bg-sky-50 rounded-xl">
                    <IconActivity className="w-4 h-4" />
                  </div>
                  <span>Durante o Treino</span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">Hidratação & Equilíbrio</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {nutritionAndWarmup.durante}
                </p>
                <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-100">
                  💧 Beba em pequenos goles apenas se houver sede.
                </div>
              </div>

              {/* DEPOIS */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2.5 text-emerald-600 font-bold text-sm">
                  <div className="p-2 bg-emerald-50 rounded-xl">
                    <IconHeart className="w-4 h-4" />
                  </div>
                  <span>Após o Treino</span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">Recuperação e Ossos</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {nutritionAndWarmup.depois}
                </p>
                <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-100">
                  🥗 Janela anabólica: consumir até 45 min após o fim.
                </div>
              </div>
            </div>

            {/* AQUECIMENTO ESPECÍFICO E PREVENÇÃO */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
                <div className="p-2 bg-teal-50 rounded-xl">
                  <IconSparkles className="w-4 h-4" />
                </div>
                <span>Rotina de Aquecimento e Cuidados Recomendados pela IA</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <strong className="text-slate-900 block font-bold">Aquecimento Dinâmico Obrigatório:</strong>
                  <p className="text-slate-600 leading-relaxed">
                    {nutritionAndWarmup.aquecimentoEspecifico}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs space-y-2">
                  <strong className="text-teal-950 block font-bold">Dica Técnica de Postura / Passada:</strong>
                  <p className="text-teal-900 leading-relaxed">
                    {nutritionAndWarmup.dicaEspecial}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABA 1: PLANO SEMANAL */}
        {activeTab === 'schedule' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider flex items-center justify-center md:justify-start gap-1">
                  <IconSparkles className="w-3.5 h-3.5" /> Plano Ativo ({programWeeks.length} Semanas)
                </span>
                <h2 className="text-xl font-black text-slate-900">{currentWeekData.title}</h2>
                <p className="text-xs text-slate-500">{currentWeekData.focus}</p>
              </div>

              {/* Seletor de Semanas Dinâmico */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1">
                {programWeeks.map((w) => (
                  <button
                    key={w.week}
                    onClick={() => setSelectedWeek(w.week)}
                    className={`w-9 h-9 rounded-xl font-semibold text-xs flex items-center justify-center transition-all ${
                      selectedWeek === w.week 
                        ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30 scale-105' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    S{w.week}
                  </button>
                ))}
              </div>
            </div>

            {/* Grelha dos dias */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentWeekData.days.map((item, index) => {
                const isRunDay = item.type === 'run' || item.type === 'goal';
                const isLogged = completedLogs.some(l => l.week === selectedWeek && l.day === item.day);

                return (
                  <div 
                    key={index}
                    className={`rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                      item.type === 'goal'
                        ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300 shadow-md ring-1 ring-amber-400/40'
                        : isRunDay 
                          ? 'bg-white border-slate-200 shadow-sm hover:border-teal-400 hover:shadow-md' 
                          : 'bg-slate-50/70 border-slate-200/60 opacity-90'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          isRunDay 
                            ? item.type === 'goal' ? 'bg-amber-100 text-amber-800' : 'bg-teal-50 text-teal-700 border border-teal-200' 
                            : 'bg-slate-200 text-slate-600'
                        }`}>
                          {item.day}
                        </span>

                        {isLogged ? (
                          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            <IconCheck className="w-3.5 h-3.5" /> Registado no JSON
                          </span>
                        ) : isRunDay ? (
                          <span className="text-xs text-slate-400 font-medium">Por realizar</span>
                        ) : null}
                      </div>

                      <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-1.5">
                        {item.title}
                        {item.type === 'goal' && <IconSparkles className="w-4 h-4 text-amber-500" />}
                      </h3>

                      <p className={`text-sm mb-4 ${isRunDay ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>
                        {item.presc}
                      </p>
                    </div>

                    {isRunDay && (
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <div className="text-xs text-slate-500">
                          {item.targetRunMin && item.targetRunMin > 0 ? (
                            <span className="inline-block bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-medium">
                              {item.targetRunMin} min de trote
                            </span>
                          ) : null}
                        </div>
                        <button
                          onClick={() => {
                            setLogForm(prev => ({ 
                              ...prev, 
                              week: selectedWeek, 
                              day: item.day,
                              date: getTodayDateString() 
                            }));
                            setActiveTab('add');
                          }}
                          className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 hover:underline"
                        >
                          Cadastrar Treino <IconArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ABA 2: CADASTRAR TREINO NO APP E ATUALIZAR O JSON */}
        {activeTab === 'add' && (
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* MINI-CALENDÁRIO VISUAL INTERATIVO */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-teal-50 text-teal-700 rounded-xl">
                    <IconCalendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">Calendário de Treinos</h3>
                    <p className="text-xs text-slate-500">Clique num dia para selecioná-lo no formulário</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    type="button"
                    onClick={() => setCalendarMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
                    className="text-xs font-bold p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100"
                  >
                    &larr;
                  </button>
                  <span className="text-xs font-bold capitalize text-slate-700">
                    {calendarMonth.toLocaleDateString('pt-PT', { month: 'long', year: 'numeric' })}
                  </span>
                  <button 
                    type="button"
                    onClick={() => setCalendarMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
                    className="text-xs font-bold p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100"
                  >
                    &rarr;
                  </button>
                </div>
              </div>

              {/* Cabeçalho dos dias da semana */}
              <div className="grid grid-cols-7 text-center text-[11px] font-bold text-slate-400 mb-2">
                <span>DOM</span>
                <span>SEG</span>
                <span>TER</span>
                <span>QUA</span>
                <span>QUI</span>
                <span>SEX</span>
                <span>SÁB</span>
              </div>

              {/* Grid dos dias do mês */}
              <div className="grid grid-cols-7 gap-1.5 text-center">
                {calendarDays.map((cd, index) => {
                  if (!cd) return <div key={`empty-${index}`} className="h-10 rounded-xl" />;
                  
                  const isSelected = logForm.date === cd.dateStr;
                  const isToday = cd.dateStr === getTodayDateString();

                  return (
                    <button
                      key={cd.dateStr}
                      type="button"
                      onClick={() => handleDateChange(cd.dateStr)}
                      className={`h-11 rounded-xl text-xs flex flex-col items-center justify-center relative transition-all ${
                        isSelected 
                          ? 'bg-teal-600 text-white font-black shadow-md scale-105' 
                          : cd.hasWorkout 
                            ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-300' 
                            : 'hover:bg-slate-100 text-slate-700'
                      } ${isToday && !isSelected ? 'ring-2 ring-teal-400 font-bold' : ''}`}
                    >
                      <span>{cd.dayNumber}</span>
                      {cd.hasWorkout && (
                        <span className={`text-[9px] flex items-center gap-0.5 ${isSelected ? 'text-teal-100' : 'text-emerald-600'}`}>
                          🏃 {cd.workoutCount > 1 ? `x${cd.workoutCount}` : ''}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FORMULÁRIO DE REGISTO */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <div className="border-b border-slate-100 pb-4 mb-6 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                    <IconPlus className="w-6 h-6 text-teal-600" />
                    Cadastrar Treino no App
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    O treino fica na sua base no app. Baixe o JSON só quando quiser, pelo botão Baixar JSON.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-teal-800 bg-teal-50 px-2.5 py-1.5 rounded-xl border border-teal-200 font-bold">
                  <IconFileCode className="w-4 h-4 text-teal-600" />
                  Base JSON: {completedLogs.length} treinos
                </div>
              </div>

              <form onSubmit={handleSaveLog} className="space-y-5">
                {/* LINHA 1: DATA NO CALENDÁRIO COM ATALHOS */}
                <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <label className="block text-xs font-bold text-slate-800">
                      Dia em que correu (Selecionar no calendário):
                    </label>
                    
                    <div className="flex items-center gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => handleDateChange(getTodayDateString())}
                        className={`px-2.5 py-1 rounded-lg font-bold border transition ${
                          logForm.date === getTodayDateString() 
                            ? 'bg-teal-600 text-white border-teal-600' 
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        Hoje
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const d = new Date();
                          d.setDate(d.getDate() - 1);
                          const y = d.getFullYear();
                          const m = String(d.getMonth() + 1).padStart(2, '0');
                          const day = String(d.getDate()).padStart(2, '0');
                          handleDateChange(`${y}-${m}-${day}`);
                        }}
                        className="px-2.5 py-1 rounded-lg font-medium border bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                      >
                        Ontem
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input 
                        type="date"
                        value={logForm.date}
                        onChange={e => handleDateChange(e.target.value)}
                        required
                        className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex items-center px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-700">
                      <span>Dia da semana: <strong className="text-teal-700 font-bold ml-1">{formatDayLabel(logForm.day)}</strong></span>
                    </div>
                  </div>
                </div>

                {/* LINHA 2: SEMANA E DIA DA PLANILHA */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Semana do Plano</label>
                    <select 
                      value={logForm.week}
                      onChange={e => setLogForm({ ...logForm, week: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    >
                      {programWeeks.map(w => (
                        <option key={w.week} value={w.week}>Semana {w.week}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Sessão / Dia</label>
                    <select 
                      value={logForm.day}
                      onChange={e => setLogForm({ ...logForm, day: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    >
                      <option value="Segunda">Segunda-feira</option>
                      <option value="Quinta">Quinta-feira</option>
                      <option value="Sábado">Sábado</option>
                      <option value="Terça">Terça-feira (Extra)</option>
                      <option value="Quarta">Quarta-feira (Extra)</option>
                      <option value="Sexta">Sexta-feira (Extra)</option>
                      <option value="Domingo">Domingo (Caminhada)</option>
                    </select>
                  </div>
                </div>

                {/* LINHA 3: DISTÂNCIA E TEMPO */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Distância Percorrida (km)</label>
                    <input 
                      type="number"
                      step="0.01"
                      placeholder="Ex: 3.2"
                      value={logForm.distanceKm}
                      onChange={e => setLogForm({ ...logForm, distanceKm: e.target.value })}
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Tempo Total (minutos)</label>
                    <input 
                      type="number"
                      step="1"
                      placeholder="Ex: 28"
                      value={logForm.timeMin}
                      onChange={e => setLogForm({ ...logForm, timeMin: e.target.value })}
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none font-medium"
                    />
                  </div>
                </div>

                {/* PACE CALCULADO AUTOMATICAMENTE */}
                {calculatedPace && (
                  <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 flex items-center justify-between text-teal-900">
                    <span className="text-xs font-medium">Ritmo Médio Calculado:</span>
                    <span className="text-sm font-black bg-teal-200/60 px-2 py-0.5 rounded text-teal-950">{calculatedPace}</span>
                  </div>
                )}

                {/* ESCALA DE DOR NA CANELA */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center justify-between">
                    <span>Sensação na Canela durante/após:</span>
                    <span className={`text-xs font-extrabold px-2 py-0.5 rounded ${
                      logForm.shinPain <= 1 ? 'bg-emerald-100 text-emerald-800' :
                      logForm.shinPain <= 3 ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {logForm.shinPain === 0 ? "Sem desconforto" :
                       logForm.shinPain === 1 ? "Aviso ligeiro" :
                       logForm.shinPain <= 3 ? "Incómodo moderado" : "Dor forte (Atenção)"}
                    </span>
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">0</span>
                    <input 
                      type="range" 
                      min="0" 
                      max="5" 
                      step="1"
                      value={logForm.shinPain}
                      onChange={e => setLogForm({ ...logForm, shinPain: e.target.value })}
                      className="w-full accent-teal-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                    />
                    <span className="text-xs text-slate-400">5</span>
                  </div>
                </div>

                {/* FÔLEGO / RESPIRAÇÃO */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Esforço Respiratório / Fôlego</label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {['Confortável', 'Ofegante mas ok', 'Sem fôlego'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setLogForm({ ...logForm, breathingEffort: opt })}
                        className={`p-2.5 rounded-xl border font-medium text-center transition-all ${
                          logForm.breathingEffort === opt
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* NOTAS PESSOAIS */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Notas do Treino</label>
                  <textarea 
                    rows="3"
                    placeholder="Ex: Treino no parque. Senti a respiração bem controlada e a canela sem dor após o gelo."
                    value={logForm.notes}
                    onChange={e => setLogForm({ ...logForm, notes: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  ></textarea>
                </div>

                {/* SALVAR */}
                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl shadow-md transition text-sm flex items-center justify-center gap-2"
                  >
                    <IconCheck className="w-4 h-4 text-emerald-400" /> Cadastrar Treino no App
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ABA 3: TREINADORA IA */}
        {activeTab === 'coach' && (
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-gradient-to-r from-slate-900 to-teal-950 text-white rounded-3xl p-6 shadow-md border border-slate-800">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-400/20 text-amber-300 rounded-2xl ring-1 ring-amber-400/40">
                    <IconBot className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black flex items-center gap-2">
                      Treinadora Virtual de Corrida
                    </h2>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Meta: {userProfile.metaDistancia} em {userProfile.metaTempo} • prazo ~{userProfile.prazoMeses} mês/meses
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setTempApiKey(userApiKey);
                    setShowKeyModal(true);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800/80 hover:bg-slate-700 text-amber-300 border border-amber-400/40 transition"
                >
                  <IconKey className="w-3.5 h-3.5" />
                  {userApiKey ? "Chave API Ativa" : "Configurar Chave"}
                </button>
              </div>

              <div className="mt-3">
                <button
                  type="button"
                  onClick={handleAdjustPlanFromProgress}
                  disabled={isAdjustingPlan || completedLogs.length === 0}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-500 disabled:opacity-50 text-white shadow-md transition flex items-center justify-center gap-2"
                >
                  {isAdjustingPlan ? (
                    <>
                      <IconSpinner className="w-4 h-4" />
                      A avaliar evolução e ajustar o plano...
                    </>
                  ) : (
                    <>
                      <IconSparkles className="w-4 h-4" />
                      Ajustar plano pela evolução recente
                    </>
                  )}
                </button>
                <p className="text-[11px] text-slate-400 mt-1.5">
                  Segurança em 1º lugar: a IA só acelera se a evolução estiver boa e sem sinais de lesão ou sobrecarga cardíaca. Na dúvida, mantém ou suaviza o plano.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs">
                <span className="text-slate-400 self-center">Sugestões de perguntas:</span>
                {[
                  "Como evitar a canelite no treino de hoje?",
                  "O que comer 30 min antes de correr?",
                  "Como respirar sem perder o fôlego no trote?",
                  "Sinto a panturrilha pesada, o que fazer?"
                ].map((sug, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCoachQuestion(sug)}
                    className="bg-slate-800/90 hover:bg-slate-700 text-teal-300 px-3 py-1.5 rounded-xl transition border border-slate-700"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-slate-200 flex flex-col h-[500px]">
              <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                {coachChat.map((msg, i) => (
                  <div 
                    key={i} 
                    className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-sm">
                        IA
                      </div>
                    )}
                    <div 
                      className={`rounded-2xl px-4 py-3 max-w-[85%] text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-teal-600 text-white rounded-tr-none' 
                          : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200/70 whitespace-pre-line'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isAskingCoach && (
                  <div className="flex items-center gap-3 text-slate-400 text-xs py-2">
                    <IconSpinner className="w-4 h-4 text-teal-600" />
                    <span>A Treinadora está a analisar a sua questão com base no seu perfil físico...</span>
                  </div>
                )}

                {coachError && (
                  <div className="p-3 bg-rose-50 text-rose-700 rounded-xl text-xs border border-rose-200">
                    {coachError}
                  </div>
                )}
              </div>

              <form onSubmit={handleAskCoach} className="mt-4 pt-3 border-t border-slate-100 flex gap-2">
                <input
                  type="text"
                  value={coachQuestion}
                  onChange={e => setCoachQuestion(e.target.value)}
                  placeholder="Escreva a sua dúvida de treino, nutrição ou dores..."
                  disabled={isAskingCoach}
                  className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isAskingCoach || !coachQuestion.trim()}
                  className="bg-teal-600 hover:bg-teal-700 disabled:opacity-40 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 shadow-sm"
                >
                  {isAskingCoach ? <IconSpinner className="w-4 h-4" /> : "Perguntar"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ABA 4: CRONÓMETRO */}
        {activeTab === 'timer' && (
          <div className="max-w-md mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 text-center space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Assistente de Treino
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">Cronómetro</h2>
              <p className="text-xs text-slate-500">Utilize durante a corrida para controlar os blocos de tempo</p>
            </div>

            <div className="py-8 bg-slate-950 text-white rounded-3xl shadow-inner relative overflow-hidden border border-slate-800">
              <div className="text-5xl md:text-6xl font-black font-mono tracking-tight text-teal-400">
                {formatTimer(timerSeconds)}
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                Fase Atual: {currentIntervalType}
              </div>
            </div>

            <div className="flex justify-center gap-2">
              {['Aquecimento', 'Trote', 'Caminhada'].map((type) => (
                <button
                  key={type}
                  onClick={() => setCurrentIntervalType(type)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition ${
                    currentIntervalType === type
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => setTimerRunning(!timerRunning)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform active:scale-95 ${
                  timerRunning ? 'bg-amber-500 hover:bg-amber-600' : 'bg-teal-600 hover:bg-teal-700'
                }`}
              >
                {timerRunning ? <IconPause className="w-6 h-6" /> : <IconPlay className="w-6 h-6 ml-0.5" />}
              </button>

              <button 
                onClick={() => {
                  setTimerRunning(false);
                  setTimerSeconds(0);
                }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
              >
                <IconReset className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 text-left border border-slate-200">
              <strong>Regra de ouro:</strong> Mantenha a boca entreaberta e respire naturalmente. O ritmo nos primeiros meses deve permitir falar sem perder o ar.
            </div>
          </div>
        )}

        {/* ABA 5: HISTÓRICO DE TREINOS COM BOTÃO DE DOWNLOAD DIRETO */}
        {activeTab === 'log' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                  <IconActivity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">{stats.totalRuns}</div>
                  <div className="text-xs text-slate-500 font-medium">Treinos Registados no JSON</div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl">
                  <IconTrend className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">{stats.totalKm} km</div>
                  <div className="text-xs text-slate-500 font-medium">Distância Total</div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                  <IconHeart className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">{stats.avgShinPain} / 5</div>
                  <div className="text-xs text-slate-500 font-medium">Média Desconforto Canela</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 flex-wrap gap-2">
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Histórico de Sessões</h3>
                  <p className="text-xs text-slate-500">Cadastros ficam no app; use Baixar JSON quando quiser guardar o ficheiro</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setActiveTab('add')}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                  >
                    + Cadastrar Mais
                  </button>

                  <button 
                    onClick={() => triggerDownloadJSON()}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-500 text-white shadow-sm flex items-center gap-1.5 transition"
                  >
                    <IconDownload className="w-3.5 h-3.5" />
                    Baixar JSON Atualizado
                  </button>
                </div>
              </div>

              {completedLogs.length === 0 ? (
                <div className="py-12 text-center text-slate-400">
                  <IconCalendar className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Nenhum treino na lista.</p>
                  <div className="flex justify-center gap-3 mt-3">
                    <button 
                      onClick={() => setActiveTab('add')} 
                      className="text-xs font-bold text-teal-600 hover:underline"
                    >
                      Cadastrar primeiro treino
                    </button>
                    <span className="text-xs text-slate-300">•</span>
                    <button 
                      onClick={() => fileInputRef.current?.click()} 
                      className="text-xs font-bold text-sky-600 hover:underline"
                    >
                      Carregar arquivo JSON
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {completedLogs.map((log) => (
                    <div 
                      key={log.id} 
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition space-y-3"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-black bg-teal-700 text-white px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                              <IconCalendar className="w-3 h-3" />
                              {formatDateDisplayBR(log.date)}
                            </span>
                            <span className="text-xs font-black bg-slate-900 text-white px-2 py-0.5 rounded">
                              Semana {log.week}
                            </span>
                            <span className="text-xs font-semibold text-slate-600">
                              {formatDayLabel(log.day)}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              log.shinPain <= 1 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                            }`}>
                              Canela: {log.shinPain}/5
                            </span>
                            <span className="text-[10px] font-medium bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">
                              Fôlego: {log.breathingEffort}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 italic">"{log.notes || 'Sem observações adicionais'}"</p>
                        </div>

                        <div className="flex items-center justify-between md:justify-end gap-5 border-t md:border-t-0 pt-2 md:pt-0 border-slate-200">
                          <div className="text-left md:text-right">
                            <div className="text-sm font-black text-slate-900">{log.distanceKm} km em {log.timeMin} min</div>
                            <div className="text-xs text-teal-700 font-semibold">Ritmo: {log.pace}</div>
                          </div>

                          <button 
                            onClick={() => handleDeleteLog(log.id)}
                            className="text-slate-400 hover:text-rose-600 transition p-1.5 rounded-lg hover:bg-rose-50"
                            title="Apagar registo"
                          >
                            <IconTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200/80">
                        {log.aiFeedback ? (
                          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-xl p-3 text-xs text-teal-950 flex items-start gap-2.5">
                            <IconSparkles className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="font-bold text-teal-900 block mb-0.5">Parecer da Treinadora IA:</strong>
                              <p className="leading-relaxed">{log.aiFeedback}</p>
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleGenerateAiFeedback(log)}
                            disabled={generatingFeedbackId === log.id}
                            className="text-xs font-bold text-teal-700 hover:text-teal-900 bg-teal-100/60 hover:bg-teal-100 px-3 py-1.5 rounded-lg transition flex items-center gap-1.5"
                          >
                            {generatingFeedbackId === log.id ? (
                              <>
                                <IconSpinner className="w-3.5 h-3.5" />
                                A analisar sessão com IA...
                              </>
                            ) : (
                              <>
                                <IconSparkles className="w-3.5 h-3.5 text-teal-600" />
                                Analisar este treino com IA
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ABA 6: ARQUIVO JSON COMPLETO */}
        {activeTab === 'json' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                    <IconFileCode className="w-6 h-6 text-teal-600" />
                    Arquivo JSON Soberano Completo
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Contém o seu perfil físico, plano de semanas gerado pela IA, guia nutricional e histórico de treinos.
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={handleCopyJSON}
                    className="px-3.5 py-2 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition"
                  >
                    <IconCopy className="w-4 h-4" /> Copiar Código JSON
                  </button>
                  <button
                    onClick={() => triggerDownloadJSON()}
                    className="px-4 py-2 rounded-xl font-bold text-xs bg-teal-600 hover:bg-teal-500 text-white shadow-md flex items-center gap-1.5 transition"
                  >
                    <IconDownload className="w-4 h-4" /> Baixar meus_treinos.json
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 leading-relaxed">
                  <strong className="font-bold block mb-1">Como restaurar tudo amanhã:</strong>
                  Ao reabrir a aplicação, basta carregar em <strong>"Carregar JSON"</strong> e selecionar este arquivo. O seu perfil, as semanas prescritas pela IA e todos os treinos voltam imediatamente.
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 leading-relaxed">
                  <strong className="font-bold block mb-1">Conteúdo do Arquivo:</strong>
                  • Perfil: <strong>{userProfile.sexo || '—'}, {userProfile.idade} anos, {userProfile.pesoKg}kg</strong><br/>
                  • Plano ativo: <strong>{programWeeks.length} semanas estruturadas</strong><br/>
                  • Histórico: <strong>{completedLogs.length} treinos registados</strong>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 block">Pré-visualização do arquivo em tempo real:</label>
                <div className="relative">
                  <pre className="bg-slate-950 text-emerald-400 p-4 rounded-2xl text-xs font-mono overflow-x-auto max-h-96 border border-slate-800 leading-relaxed">
                    {currentJsonString}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* RODAPÉ */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-400">
        Minha Corrida • Plano inteligente e dados soberanos
      </footer>
    </div>
  );
}