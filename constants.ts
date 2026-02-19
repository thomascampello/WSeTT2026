
import { PricingTier, CommitteeMember, ScheduleItem } from './types';

// Explicit Pricing Values
const PRICE_NON_MEMBER = 2200.09;
const PRICE_MEMBER = 1540.09;
const PRICE_STUDENT = 770.09;
const PRICE_MEMBER_STUDENT = 538.09;

export const DISCOUNT_DEADLINE = '15 de Fevereiro de 2026';
export const DISCOUNT_PERCENTAGE = 0.20;

export const CIGRE_ADDRESS = "Praia de Botafogo, 228 - Conj. 1702 - Botafogo, Rio de Janeiro - RJ, 22250-040";
export const CIGRE_EMAIL = "eventos@cigre.org.br";
export const REGISTRATION_URL = "https://eventos.sig-cigre.org.br/evento/115/registrar";

export const CANCELLATION_POLICY = `
  ATENÇÃO: A Nota Fiscal referente à inscrição será emitida 10 dias após a confirmação do pagamento da Inscrição.

  SOBRE O CANCELAMENTO:
  Regra 1: Em caso de cancelamento de inscrição paga até 10 dias antes do evento, o prazo para devolução será de 10 dias após a confirmação da solicitação.
  Regra 2: Em caso de cancelamento de Inscrição do nono dia antes até a véspera do Evento, o valor devolvido será de 50% do valor pago e o prazo de devolução será de 10 dias após a solicitação.
  Regra 3: Não haverá devolução de inscrição para solicitações de cancelamento no dia do evento e posteriori.
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
  { id: 1, name: 'Thomas Moreira Campello', role: 'Membro', bio: 'CEFET/RJ', initials: 'TC', image: 'thomas.campello@cefet-rj.br' },
  { id: 2, name: 'Trevor M. C. Vilella do Carmo Dobbin', role: 'Membro', bio: 'Transpetro', initials: 'TD', image: 'trevor@nyquist.com.br' },
  { id: 3, name: 'Sérgio do Espírito Santo', role: 'Membro', bio: 'ESP Consultoria', initials: 'SS', image: 'sesanto@espconsult.com.br' },
  { id: 4, name: 'Antonio Ricardo de Mattos Tenório', role: 'Membro', bio: 'ONS', initials: 'AT', image: 'ricardo.tenorio@ons.org.br' },
  { id: 5, name: 'Dourival de Souza Carvalho Junior', role: 'Membro', bio: 'EPE', initials: 'DJ', image: 'dourival.carvalho@epe.gov.br' },
  { id: 6, name: 'Paulo Max Maciel Portugal', role: 'Membro', bio: 'COPPE/UFRJ', initials: 'PP', image: 'pmaxport@gmail.com' },
  { id: 7, name: 'Fernando Cattan Jusan', role: 'Membro', bio: 'ONS', initials: 'FJ', image: 'fernando.jusan@ons.org.br' },
  { id: 8, name: 'Paulo Edmundo Freire', role: 'Membro', bio: 'PAIOL Engenharia', initials: 'PF', image: 'paulofreire@paiolengenharia.com.br' },
  { id: 9, name: 'Paulo Cesar Vaz Esmeraldo', role: 'Membro', bio: 'Power Consult', initials: 'PE', image: 'paulo.esmeraldo@pcveeng.com.br' },
  { id: 10, name: 'John Graham', role: 'Membro', bio: 'Consultor', initials: 'JG', image: 'john1fg@gmail.com' },
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
    image: '/Imgs/Trevor_Dobbin.png',
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
    image: '/Imgs/Sergio_Santo.jpg',
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

export const EVENT_DATE = '24 e 25 de Março de 2026';
export const EVENT_LOCATION = 'Edifício Argentina - Rio de Janeiro, RJ';

export const MOTIVATION_TEXT = `O desenvolvimento da transmissão em HVDC (High Voltage Direct Current) no Brasil ocorre inicialmente motivado pela necessidade de escoamento de grandes blocos de energia produzida por usinas hidrelétricas distantes dos centros de carga.

Em meio a uma transformação profunda impulsionada pela necessidade de descarbonização e transição energética os sistemas HVDC e FACTS assumem um novo papel estratégico como tecnologias integradoras (enabling technologies) essenciais para viabilizar a expansão das fontes de energia renovável.

A aplicação de sistemas baseados na tecnologia VSC (Voltage Source Converter) vêm apresentando crescimento exponencial, sendo essa a escolha predominante para novos projetos de integração de renováveis por a base de cabos ao redor do mundo e linhas áreas em anos recentes.

Neste contexto, a modalidade de controle Grid Forming (GFM) é prospectada como promessa a garantir a estabilidade e provimento de inércia em sistemas com alta penetração de conversores a base de eletrônica de potência, típicos de fontes renováveis intermitentes.

Adicionalmente, a expansão das eólicas offshore promove o desenvolvimento de Grids DC e sistemas multi-terminais MTDC e hubs de energia, como observado em projetos de grande porte no Mar do Norte.

Neste cenário de evolução tecnológica acelerada, o presente Workshop e Tutorial tem como proposta central discutir as principais características dos novos sistemas HVDC e os FACTS e como estes, podem de maneira realista ofertarem soluções para a integração de geração renovável, abordando temas como:

* A transição e coexistência entre as tecnologias LCC clássicas e as novas aplicações VSC;

* O estado da arte em sistemas de controle, incluindo Grid Forming, requisitos técnicos para que esse efetivamente oferte suporte à rede;

* Desafios e soluções para a conexão de eólicas offshore e a formação de redes DC e MTDC;

* Aplicações de FACTS para otimização e flexibilidade de sistemas de transmissão existentes frente à variabilidade das renováveis e melhora do perfil dinâmico de tensão;

* Aspectos de planejamento, operação e manutenção de ativos em um sistema descarbonizado.

O evento reúne e convida a participação de diversos agentes, com diversas visões, para debater as especificações, estudos e tendências que moldarão o sistema elétrico do futuro, alinhando a experiência brasileira às inovações observadas internacionalmente, entre esses: o Operador Nacional do Sistema (ONS), a Empresa de Pesquisa Energética (EPE), Fabricantes, Transmissoras, Geradores, Academia e outros.`;

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

export const SCHEDULE_DAY_2: ScheduleItem[] = [
  { time: '09:00 - 10:30', activity: 'Elos de Transmissão HVDC VSC com linhas aéreas', speaker: 'Paulo Fischer de Toledo', type: 'session' },
  { time: '10:30 - 11:00', activity: 'Coffee-break', speaker: '-', type: 'break' },
  { time: '11:00 - 12:30', activity: 'Palestra Técnica (Tema a definir)', speaker: 'Especialista GE Vernova', type: 'session' },
  { time: '12:30 - 14:00', activity: 'Almoço', speaker: '-', type: 'lunch' },
  { time: '14:00 - 14:40', activity: 'STATCOM - Aplicações e tendências mundiais', speaker: 'Bruno Gallucci', type: 'session' },
  { time: '14:40 - 15:20', activity: 'Palestra Técnica (Tema a definir)', speaker: 'Especialista GE Vernova', type: 'session' },
  { time: '15:20 - 16:00', activity: 'Coffee-break e Encerramento', speaker: '-', type: 'break' },
];
