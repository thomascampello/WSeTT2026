
import { PricingTier, CommitteeMember, ScheduleItem } from './types';

// Explicit Pricing Values
const PRICE_NON_MEMBER = 2200.09;
const PRICE_MEMBER = 1540.09;
const PRICE_STUDENT = 770.09;

export const DISCOUNT_DEADLINE = '31 de Janeiro de 2026';
export const DISCOUNT_PERCENTAGE = 0.20;

// Helper function to calculate price with specific rounding rules
// Rule: Apply discount, then round DOWN to the nearest value ending in .09
export const calculateDiscountedPrice = (basePrice: number): number => {
  const rawDiscounted = basePrice * (1 - DISCOUNT_PERCENTAGE);
  
  // Create a candidate value that is the integer part of rawDiscounted + 0.09
  let candidate = Math.floor(rawDiscounted) + 0.09;

  // If the candidate (e.g., 100.09) is greater than the raw discounted price (e.g., 100.05),
  // we must round down to the previous integer (e.g., 99.09) to ensure the discount 
  // is at least percentage requested.
  if (candidate > rawDiscounted) {
    candidate -= 1.00;
  }

  // Fix float precision issues (e.g. 1539.090000001)
  return parseFloat(candidate.toFixed(2));
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'student',
    name: 'Estudantes',
    basePrice: PRICE_STUDENT,
    description: 'Graduação e pós-graduação (sem vínculo).',
    highlight: false,
  },
  {
    id: 'member',
    name: 'Sócios CIGRE',
    basePrice: PRICE_MEMBER,
    description: 'Membros ativos individuais ou empresas.',
    highlight: false,
  },
  {
    id: 'non-member',
    name: 'Não Sócios',
    basePrice: PRICE_NON_MEMBER,
    description: 'Profissionais e empresas não associadas.',
    highlight: false,
  },
];

export const EVENT_COMMITTEE: CommitteeMember[] = [
  {
    id: 1,
    name: 'Fulaninho da Silva',
    role: 'Organização Geral',
    image: 'https://ui-avatars.com/api/?name=Fulaninho+da+Silva&background=006633&color=fff',
    bio: 'Engenheiro Eletricista com mais de 20 anos de experiência em sistemas de potência. Atuou em grandes projetos de infraestrutura energética no Brasil e no exterior.'
  },
  {
    id: 2,
    name: 'Ciclaninho Souza',
    role: 'Logística',
    image: 'https://ui-avatars.com/api/?name=Ciclaninho+Souza&background=006633&color=fff',
    bio: 'Especialista em logística de eventos técnicos e corporativos. Responsável pela coordenação de infraestrutura e operações do workshop.'
  },
  {
    id: 3,
    name: 'Joãozinho Santos',
    role: 'Técnico',
    image: 'https://ui-avatars.com/api/?name=Joaozinho+Santos&background=006633&color=fff',
    bio: 'Pesquisador sênior em HVDC e FACTS. Autor de diversos artigos técnicos publicados em revistas internacionais e membro ativo do CIGRE.'
  },
  {
    id: 4,
    name: 'Maria Oliveira',
    role: 'Comunicação',
    image: 'https://ui-avatars.com/api/?name=Maria+Oliveira&background=006633&color=fff',
    bio: 'Jornalista especializada no setor de energia. Gerencia a comunicação institucional e assessoria de imprensa do evento.'
  },
  {
    id: 5,
    name: 'José Pereira',
    role: 'Financeiro',
    image: 'https://ui-avatars.com/api/?name=Jose+Pereira&background=006633&color=fff',
    bio: 'Economista com MBA em Gestão de Projetos. Responsável pelo planejamento financeiro e captação de recursos.'
  },
  {
    id: 6,
    name: 'Ana Costa',
    role: 'Secretaria',
    image: 'https://ui-avatars.com/api/?name=Ana+Costa&background=006633&color=fff',
    bio: 'Secretária executiva bilíngue com ampla experiência em organização de eventos internacionais.'
  },
  {
    id: 7,
    name: 'Carlos Lima',
    role: 'Apoio Técnico',
    image: 'https://ui-avatars.com/api/?name=Carlos+Lima&background=006633&color=fff',
    bio: 'Engenheiro de sistemas de transmissão. Presta suporte técnico na avaliação de trabalhos e estruturação da grade técnica.'
  },
  {
    id: 8,
    name: 'Fernanda Rocha',
    role: 'Marketing',
    image: 'https://ui-avatars.com/api/?name=Fernanda+Rocha&background=006633&color=fff',
    bio: 'Publicitária focada em marketing digital para eventos científicos. Coordena as campanhas de divulgação nas redes sociais.'
  },
  {
    id: 9,
    name: 'Paulo Martins',
    role: 'Logística Local',
    image: 'https://ui-avatars.com/api/?name=Paulo+Martins&background=006633&color=fff',
    bio: 'Gerente de operações local no Rio de Janeiro. Cuida das parcerias com hotéis, transporte e fornecedores locais.'
  },
  {
    id: 10,
    name: 'Juliana Mendes',
    role: 'Credenciamento',
    image: 'https://ui-avatars.com/api/?name=Juliana+Mendes&background=006633&color=fff',
    bio: 'Coordenadora de atendimento. Responsável pelo sistema de inscrições e recepção dos participantes no dia do evento.'
  },
];

export const CEB4_COORDINATION: CommitteeMember[] = [
  {
    id: 1,
    name: 'Ricardo Tenório',
    role: 'Coordenador',
    image: 'https://ui-avatars.com/api/?name=Ricardo+Tenorio&background=0099cc&color=fff',
  },
  {
    id: 2,
    name: 'Rogério Magalhães',
    role: 'Secretário',
    image: 'https://ui-avatars.com/api/?name=Rogerio+Magalhaes&background=0099cc&color=fff',
  },
  {
    id: 3,
    name: 'Dourival Carvalho',
    role: 'Membro Regular',
    image: 'https://ui-avatars.com/api/?name=Dourival+Carvalho&background=0099cc&color=fff',
  },
  {
    id: 4,
    name: 'Manfredo Correia',
    role: 'Membro Regular',
    image: 'https://ui-avatars.com/api/?name=Manfredo+Correia&background=0099cc&color=fff',
  },
  {
    id: 5,
    name: 'Sergio Espírito Santo',
    role: 'Membro Regular',
    image: 'https://ui-avatars.com/api/?name=Sergio+Espirito&background=0099cc&color=fff',
  },
];

export const EVENT_DATE = '17 e 18 de Março de 2026';
export const EVENT_LOCATION = 'Edifício Argentina - Rio de Janeiro, RJ';

export const MOTIVATION_TEXT = `
  O desenvolvimento de aplicações de transmissão de energia elétrica em HVDC em níveis de tensão a partir de ±600 kV foi realizado no Brasil com base em extensivos estudos de planejamento e de viabilidade técnica e econômica. Tais estudos foram motivados pela necessidade de utilização da energia produzida pelas grandes usinas hidrelétricas planejadas entre as décadas de 1970 e 1980.

  A tecnologia de transmissão em HVDC em ±600 kV no Brasil foi utilizada pela primeira vez no sistema desenvolvido para integração ao Sistema Elétrico Brasileiro da energia gerada pela usina hidroelétrica de Itaipu. Decorrido um intervalo de cerca de 30 anos, o Brasil voltou a utilizar a tecnologia de transmissão em HVDC em 2009, com o complexo hidroelétrico do Rio Madeira.

  O Brasil teve o seu primeiro sistema UHVDC projetado para a expansão da interligação entre as Regiões Norte/Nordeste e Sudeste/Centro-Oeste. Este sistema é composto por dois bipolos de ±800 kV, 2x4000 MW, tendo o primeiro bipolo iniciado a sua operação em dezembro de 2017 e o segundo bipolo iniciado a sua operação em agosto de 2019.

  Neste cenário, o presente Workshop e Tutorial tem como principal proposta promover a discussão de aspectos relevantes associados a sistemas de transmissão em HVDC e UHVDC, onde se destacam a experiência brasileira na implantação dos sistemas de transmissão associados às Usinas Hidroelétricas de Itaipu, Madeira e Belo Monte, a avaliação da nova regulação dos sistemas de HVDC no Brasil e de sua influência na confiabilidade e remuneração dos investimentos, a análise, escolha do solo, projeto e medições associadas aos eletrodos de aterramento de sistemas de HVDC e UHVDC no Brasil, aos desafios e perspectivas de viabilidade para a modernização de sistemas de HVDC em operação no Sistema Elétrico Brasileiro e ao desenvolvimento de novos programas computacionais para simulação dinâmica e transitória de sistemas elétricos de grande porte considerando a operação de múltiplos elos de HVDC.
`;

export const COMMITTEE_TEXT = `
  O CIGRE-Brasil - Comitê Nacional Brasileiro de Produção e Transmissão de Energia Elétrica - é uma sociedade civil, sem fins lucrativos, fundada em 1971, que tem por objetivo promover o intercâmbio e desenvolvimento técnico, tecnológico, e da engenharia no Brasil, no campo da produção de energia elétrica, de sua transmissão em alta tensão e distribuição.
  
  O CE B4 é um dos seus 16 Comitês de Estudo, que como os demais conta com trabalho voluntário, e sua responsabilidade é tratar de assuntos ligados a HVDC e Eletrônica de Potência.
  
  As atividades do Comitê de Estudos B4 – Elos de Corrente Contínua e Eletrônica de Potência - tratam da transmissão em corrente contínua (CCAT) e equipamentos de eletrônica de potência aplicados em sistemas de transmissão CA (dispositivos FACTS), contemplando: especificação, aplicações, aspectos econômicos e qualidade de energia; planejamento, projeto, construção e testes; distribuição e transmissão; operação e desempenho; controle e proteção. Novas tecnologias associadas a conversores, semicondutores, configurações, controles e aplicações inovadoras, tais como as que utilizam conversores tipo fonte de tensão (VSC).
  
  Internacionalmente, o Study Committee SC B4 tem atualmente diversos Working Groups em atividade. Nesse universo, há representantes brasileiros (do CE B4) participando ativamente, garantindo a troca de experiências e a atualização tecnológica do setor elétrico nacional.
`;

export const SCHEDULE_DAY_1: ScheduleItem[] = [
  { time: '08:30', activity: 'Credenciamento e Welcome Coffee', speaker: 'Equipe de Recepção', type: 'registration' },
  { time: '09:00', activity: 'Sessão de Abertura: Visão Geral do Setor', speaker: 'Comitê Organizador', type: 'session' },
  { time: '10:30', activity: 'Coffee Break e Networking', speaker: '-', type: 'break' },
  { time: '11:00', activity: 'Painel 1: Experiência Brasileira em HVDC', speaker: 'Especialistas Convidados', type: 'session' },
  { time: '12:30', activity: 'Almoço Livre', speaker: '-', type: 'lunch' },
  { time: '14:00', activity: 'Sessão Técnica: Aplicações de FACTS', speaker: 'Autores de Trabalhos', type: 'session' },
  { time: '15:30', activity: 'Coffee Break', speaker: '-', type: 'break' },
  { time: '16:00', activity: 'Integração de Renováveis: Desafios e Soluções', speaker: 'Mesa Redonda', type: 'session' },
];

export const SCHEDULE_DAY_2: ScheduleItem[] = [
  { time: '09:00', activity: 'Tutorial: Tecnologia VSC - Fundamentos', speaker: 'Instrutor Internacional', type: 'session' },
  { time: '10:30', activity: 'Coffee Break', speaker: '-', type: 'break' },
  { time: '11:00', activity: 'Tutorial: Grid Forming Converters', speaker: 'Especialista Técnico', type: 'session' },
  { time: '12:30', activity: 'Almoço Livre', speaker: '-', type: 'lunch' },
  { time: '14:00', activity: 'Discussão Regulatória e Planejamento', speaker: 'Representantes ONS/EPE', type: 'session' },
  { time: '15:30', activity: 'Coffee Break', speaker: '-', type: 'break' },
  { time: '16:00', activity: 'Sessão de Encerramento e Perspectivas Futuras', speaker: 'Comitê B4', type: 'session' },
];
