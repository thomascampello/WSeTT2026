
import { PricingTier, CommitteeMember, ScheduleItem } from './types';

// Explicit Pricing Values
const PRICE_NON_MEMBER = 2200.09;
const PRICE_MEMBER = 1540.09;
const PRICE_STUDENT = 770.09;
const PRICE_MEMBER_STUDENT = 538.09;

export const DISCOUNT_DEADLINE = '31 de Janeiro de 2026';
export const DISCOUNT_PERCENTAGE = 0.20;

export const CIGRE_ADDRESS = "Praia de Botafogo, 228 - Conj. 1702 - Botafogo, Rio de Janeiro - RJ, 22250-040";
export const CIGRE_EMAIL = "eventos@cigre.org.br";

export const CANCELLATION_POLICY = `
  Cancelamentos devem ser solicitados por escrito para o e-mail oficial do evento.
  - Até 30 dias antes do evento: Reembolso de 80% do valor pago.
  - De 29 a 15 dias antes do evento: Reembolso de 50% do valor pago.
  - Menos de 15 dias antes do evento: Não haverá reembolso, apenas substituição de participante permitida até 48h antes do início.
`;

// Helper function to calculate price with specific rounding rules
export const calculateDiscountedPrice = (basePrice: number): number => {
  const rawDiscounted = basePrice * (1 - DISCOUNT_PERCENTAGE);
  let candidate = Math.floor(rawDiscounted) + 0.09;
  if (candidate > rawDiscounted) {
    candidate -= 1.00;
  }
  return parseFloat(candidate.toFixed(2));
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'member-student',
    name: 'Sócio Estudante',
    basePrice: PRICE_MEMBER_STUDENT,
    description: 'Estudantes de graduação ou pós-graduação, sem vínculo empregatício, e membros do CIGRE.',
    highlight: true,
  },
  {
    id: 'student',
    name: 'Estudante',
    basePrice: PRICE_STUDENT,
    description: 'Estudantes de graduação ou pós-graduação, sem vínculo empregatício.',
    highlight: false,
  },
  {
    id: 'member',
    name: 'Sócio CIGRE',
    basePrice: PRICE_MEMBER,
    description: 'Profissionais sócios ativos individuais ou coletivo.',
    highlight: false,
  },
  {
    id: 'non-member',
    name: 'Profissional',
    basePrice: PRICE_NON_MEMBER,
    description: 'Profissionais e empresas não associadas ao CIGRE.',
    highlight: false,
  },
];

export const SPONSORSHIP_DATA = {
  columns: ['Item', 'Ouro', 'Prata', 'Bronze'],
  rows: [
    { label: 'Número de Inscrições Incluídas', gold: '5', silver: '2', bronze: '1' },
    { label: 'Direito a Palestra', gold: 'Duas palestras no 2º dia (1h-1h30 e 30-40min)', silver: 'Uma palestra de 30min (sujeito a disp.)', bronze: 'Sem direito a palestra' },
    { label: 'Marketing', gold: 'Totem (60x190), material, brindes, logo site/evento', silver: 'Totem (60x190), material, brindes, logo site/evento', bronze: 'Material, brindes, logo site/evento' },
    { label: 'Investimento', gold: 'R$ 28.567,09', silver: 'R$ 14.734,09', bronze: 'R$ 7.759,09' }
  ]
};

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
    name: 'Thomas M. Campello',
    role: 'Coordenador',
    image: '/Imgs/Thomas_Campello.jpg',
    initials: 'TC',
    bio: 'CEFET/RJ'
  },
  {
    id: 2,
    name: 'Trevor M. C. Vilella do Carmo Dobbin',
    role: 'Secretário',
    image: '/Imgs/Trevor_Dobbin.jpg',
    initials: 'TD',
    bio: ''
  },
  {
    id: 3,
    name: 'Edson Hirokazu Watanabe',
    role: 'Assessor Científico',
    image: '/Imgs/Edson_Watanabe.jpg',
    initials: 'EW',
    bio: 'COPPE/UFRJ'
  },
  {
    id: 4,
    name: 'Sérgio do Espírito Santo',
    role: 'Especialista',
    image: '/Imgs/Sergio_Espirito_Santo.jpg',
    initials: 'SS',
    bio: 'Consultor Independente'
  },
  {
    id: 5,
    name: 'Camila Maciel',
    role: 'Representante WIE',
    image: '/Imgs/Camila_Maciel.jpg',
    initials: 'CM',
    bio: 'State Grid'
  },
];

export const EVENT_DATE = '17 e 18 de Março de 2026';
export const EVENT_LOCATION = 'Edifício Argentina - Rio de Janeiro, RJ';

export const MOTIVATION_TEXT = `O desenvolvimento de aplicações de transmissão de energia elétrica em HVDC no Brasil consolidou-se historicamente através de extensivos estudos de planejamento e viabilidade, motivados pela necessidade de escoamento de grandes blocos de energia de usinas hidrelétricas distantes dos centros de carga. A tecnologia em ±600 kV foi pioneira com o sistema de Itaipu na década de 1980 e, após um hiato de 30 anos, foi retomada e expandida com o complexo do Rio Madeira e, posteriormente, com a introdução da tecnologia UHVDC em ±800 kV no sistema de Belo Monte.

No entanto, o cenário energético global e nacional atravessa uma transformação profunda impulsionada pela necessidade de descarbonização e pela transição energética. Se antes o foco era predominantemente o transporte de grandes blocos de geração hidrelétrica, hoje, os sistemas HVDC e FACTS assumem um novo papel estratégico como tecnologias integradoras (enabling technologies) essenciais para viabilizar a expansão das fontes de energia renovável.

A tecnologia de conversores VSC (Voltage Source Converter) tem apresentado um crescimento exponencial, tornando-se a escolha predominante para novos projetos de integração de renováveis ao redor do mundo. Neste contexto, destaca-se a emergência dos conversores Grid Forming (GFM), uma tecnologia fundamental para garantir a estabilidade e a inércia em sistemas dominados por eletrônica de potência, permitindo a operação segura de redes com alta penetração de fontes intermitentes. Adicionalmente, a expansão das eólicas offshore impulsiona o desenvolvimento de sistemas MTDC (Multi-Terminal DC) e hubs de energia, como observado em projetos de grande porte no Mar do Norte.

Neste cenário de evolução tecnológica acelerada, o presente Workshop e Tutorial tem como proposta central discutir como o HVDC e os FACTS atuam como vetores dessa integração renovável. Serão abordados temas de fronteira, incluindo:
• A transição e coexistência entre as tecnologias LCC clássicas e as novas aplicações VSC;

• O estado da arte em controle Grid Forming e seus requisitos técnicos para suporte à rede;

• Desafios e soluções para a conexão de eólicas offshore e a formação de redes MTDC;

• Aplicações de FACTS para otimização e flexibilidade de sistemas de transmissão existentes frente à variabilidade das renováveis;

• Aspectos de planejamento, operação e manutenção de ativos em um sistema descarbonizado.

O evento reunirá a visão de diversos agentes — incluindo operadores de sistema, fabricantes, empresas de transmissão, consultorias e a Academia — para debater as especificações, estudos de simulação e as tendências que moldarão o sistema elétrico do futuro, alinhando a experiência brasileira às inovações observadas internacionalmente.`;

export const COMMITTEE_TEXT = `
  O CIGRE-Brasil - Comitê Nacional Brasileiro de Produção e Transmissão de Energia Elétrica - é uma sociedade civil, sem fins lucrativos, fundada em 1971, que tem por objetivo promover o intercâmbio e desenvolvimento técnico, tecnológico, e da engenharia no Brasil, no campo da produção de energia elétrica, de sua transmissão em alta tensão e distribuição.
  
  O CE B4 é um dos seus 16 Comitês de Estudo, que como os demais conta com trabalho voluntário, e sua responsabilidade é tratar de assuntos ligados a HVDC e Eletrônica de Potência.
  
  As atividades do Comitê de Estudos B4 – Elos de Corrente Contínua e Eletrônica de Potência - tratam da transmissão em corrente contínua (CCAT) e equipamentos de eletrônica de potência aplicados em sistemas de transmissão CA (dispositivos FACTS), contemplando: especificação, aplicações, aspectos econômicos e qualidade de energia; planejamento, projeto, construção e testes; distribuição e transmissão; operação e desempenho; controle e proteção. Novas tecnologias associadas a conversores, semicondutores, configurações, controles e aplicações inovadoras, tais como as que utilizam conversores tipo fonte de tensão (VSC).
  
  Internacionalmente, o Study Committee SC B4 tem atualmente diversos Working Groups em atividade. Nesse universo, há representantes brasileiros (do CE B4) participando ativamente, garantindo a troca de experiências e a atualização tecnológica do setor elétrico nacional.
`;

export const SCHEDULE_DAY_1: ScheduleItem[] = [
  { time: '08:30 - 09:00', activity: 'Credenciamento', speaker: '-', type: 'registration' },
  { time: '09:00 - 09:10', activity: 'Abertura e Panorama atual do Grupo de Estudo CE-B4 (Brasil)', speaker: 'Thomas Moreira Campello (CEFET)', type: 'session' },
  { time: '09:10 - 10:10', activity: 'Conceitos Básicos e Aplicações de Sistemas HVDC VSC', speaker: 'Antonio Ricardo de Mattos Tenório (ONS)', type: 'session' },
  { time: '10:10 - 10:40', activity: 'Coffe-break', speaker: '-', type: 'break' },
  { time: '10:40 - 11:20', activity: 'Sistemas VSC-MMC e características operativas', speaker: 'Paulo Max Maciel Portugal (COPPE)', type: 'session' },
  { time: '11:20 - 12:00', activity: 'Desafios para Expansão da Transmissão HVDC no País', speaker: 'Dourival de Souza Carvalho Junior (EPE)', type: 'session' },
  { time: '12:00 - 13:30', activity: 'Almoço', speaker: '-', type: 'lunch' },
  { time: '13:30 - 14:30', activity: 'Utilização de STATCOMs no Brasil e no mundo: uma tecnologia para propiciar a transição energética', speaker: 'Antonio Ricardo de Mattos Tenório (ONS)', type: 'session' },
  { time: '14:30 - 15:30', activity: 'Aplicação de Eletrônica de Potência para a interface de fontes renováveis com o SIN (Wind Onshore, Offshore/PV)', speaker: 'Robson Dias (COPPE)', type: 'session' },
  { time: '15:30 - 16:00', activity: 'Coffe-Break', speaker: '-', type: 'break' },
  { time: '16:00 - 17:00', activity: 'Desafios considerando a integração de fontes renováveis (Wind Power Onshore / PV) no SIN', speaker: 'Paulo Eduardo Martins Quintão (ONS)', type: 'session' },
  { time: '17:00 - 18:00', activity: 'Mesa redonda: Tópicos Relevantes sobre VSC e IBR', speaker: 'Todos palestrantes do 1º dia', type: 'session' },
  { time: '19:00', activity: 'Jantar de Confraternização (Local a confirmar)', speaker: '-', type: 'lunch' },
];

export const SCHEDULE_DAY_2: ScheduleItem[] = [];
