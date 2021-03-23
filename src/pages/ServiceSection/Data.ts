import bruxismo from '../../assets/tratamentos/bruxismo.jpeg';
import gengivectomia from '../../assets/tratamentos/gengivectomia.jpg';
import periodontia from '../../assets/tratamentos/periodontia.jpg';
import proteseRemovivel from '../../assets/tratamentos/protese-removivel.jpg';
import proteseTotal from '../../assets/tratamentos/protese-total.jpg';
import protese from '../../assets/tratamentos/protese.jpg';
import proteseFixa from '../../assets/tratamentos/proteseFixa.jpg';
import retratamento from '../../assets/tratamentos/retratamento.jpg';
import aparelhoAuto from '../../assets/tratamentos/aparelhoautoligado.jpeg';
import aparelhoConvencional from '../../assets/tratamentos/aparelhoConvencional.jpg';
import endodontia from '../../assets/tratamentos/endodontia.jpg';
import enxertoOsseo1 from '../../assets/tratamentos/enxertoOsseo.jpeg';
import extracaoSimples from '../../assets/tratamentos/extracaoSimples.jpg';
import invisalign from '../../assets/tratamentos/invisalign.jpg';
import lente from '../../assets/tratamentos/lente.jpg';
import ortodontia from '../../assets/tratamentos/ortodontia.jpg';
import preenchimento1 from '../../assets/tratamentos/preenchimento.jpg';
import raspagemDentaria from '../../assets/tratamentos/raspagem-dentaria.jpg';
import siso1 from '../../assets/tratamentos/siso1.jpg';
import toxina from '../../assets/tratamentos/toxina.jpg';
import tratamentoEndodontico from '../../assets/tratamentos/tratamentoEndodontico.jpg';
import clareamento from '../../assets/tratamentos/clareamento.jpg';
import facedireta from '../../assets/tratamentos/facedireta.jpg';
import implante1 from '../../assets/tratamentos/implante.jpg';
import restauracao from '../../assets/tratamentos/restauracao.jpg';

export const ServiceData = [
  {
    id: 1,
    title: 'Dentística Restauradora',
    services: ['Restauração Dental', 'Reconstrução Dental'],
  },
  {
    id: 2,
    title: 'Odontologia Estética',
    services: [
      'Clareamento Dental',
      'Faceta Direta em Resina Composta',
      'Lente de Contato Dental',
      'Toxina Botulínica',
    ],
  },
  {
    id: 3,
    title: 'Ortodontia',
    services: [
      'Aparelho Ortodôntico Convencional',
      'Aparelho Ortodôntico Auto-Ligado',
      'INVISALIGN (Alinhadores Invisíveis Ortodônticos)',
    ],
  },
  {
    id: 4,
    title: 'Cirurgia',
    services: ['Extração de Dente Simples', 'Extração de Sisos'],
  },
  {
    id: 5,
    title: 'Implantes',
    services: ['Implante de Protocolo Superior e Inferior', 'Enxerto Ósseo'],
  },
  {
    id: 6,
    title: 'Endodontia',
    services: [
      'Tratamento de Canal / Endodôntico',
      'Retratamento de Canal / Endodôntico',
    ],
  },
  {
    id: 7,
    title: 'Prótese Dental',
    services: [
      'Prótese Fixa',
      'Prótese Móvel / Removível',
      'Prótese Total Dentária',
    ],
  },
  {
    id: 8,
    title: 'Periodontia',
    services: ['Raspagem Dentária / Limpeza Dentária', 'Gengivectomia'],
  },
  {
    id: 9,
    title: 'Bruxismo',
  },
];

export const ServiceDataSubtitle = [
  {
    idSubtitle: 1,
    subtitle: 'Dentística Restauradora',
    desc1:
      'A Dentística restauradora é o ramo da Odontologia que tem base na reconstrução e correção das imperfeições dos dentes quando os mesmos perdem alguma estrutura anatômica ou nascem com ausência dessas estruturas.',
  },
  {
    idSubtitle: 2,
    subtitle: 'Odontologia Estética',
    desc1:
      'É uma classe de tratamentos que procura devolver a harmonia, função e o equilibrio entre a beleza e a saúde do sorriso.',
    desc2:
      'Ela atua de fato na restauração dental, se preocupando em preservar e devolver a integridade estrutural e funcional dos seus dentes.',
  },
  {
    idSubtitle: 3,
    subtitle: 'Ortodontia',
    desc1:
      'É a especialidade que corrige a posição dos dentes e dos ossos maxilares posicionados de forma inadequada.',
    desc2:
      'Dentes desalinhados são difíceis de serem higienizados, podendo causar problemas periodontais. Não somente isto, mas a má oclusão pode causar estresses desnecessários aos músculos faciais que podem levar a dores de cabeça e problemas nas articulações temporomandibulares (ATM).',
    desc3:
      'Os dentes mal posicionados prejudicam a sua aparência/estética e por isso o tratamento ortodôntico torna o aspecto da boca mais saudável e proporciona uma aparência mais agradável.',
    img: ortodontia,
  },
  {
    idSubtitle: 4,
    subtitle: 'Cirurgia',
    desc1:
      'É a especialidade que contempla intervenções manuais ou com auxílio de instrumentos para o tratamento de doenças ou traumatismos, dentro dos limites faciais e teciduais do paciente. ',
  },
  {
    idSubtitle: 5,
    subtitle: 'Implantes',
    desc1:
      'Os implantes dentários são pinos confeccionados em titânio que visam substituir as raízes dos dentes perdidos, possibilitando a confecção de dentes(coroas) sobre os implantes, devolvendo a mastigação e a estética perdida. Os implantes são instalados em uma cirurgia simples, rápida e indolor.',
    desc2:
      'Elas podem ser classificadas em duas fases, a fase cirúrgica, que é o primeiro momento onde instalamos o implante intra-ósseo; e a fase protética, que é posterior à fase cirúrgica onde na qual confeccionamos a coroa dentária para ser fixada sobre o implante já instalado.',
  },
  {
    idSubtitle: 6,
    subtitle: 'Endodontia',
    desc1:
      'É o ramo da Odontologia que trata das lesões e doenças da polpa (nervo) e da raiz do dente. Ele pode ser ainda indicado em casos onde ocorrem traumas dentais, dentes com infecções (mortos/necrosados) ou por necessidades restauradoras.',
    img: endodontia,
  },
  {
    idSubtitle: 7,
    subtitle: 'Prótese Dental',
    desc1:
      'A especialidade de prótese dentária é responsável por reestruturar os tecidos bucais e dentes perdidos, seja por acidentes ou doenças periodontais, por peças artificiais - fixas ou removíveis.',
    img: protese,
  },
  {
    idSubtitle: 8,
    subtitle: 'Periodontia',
    desc1:
      'A Periodontia é a especialidade odontológica responsável pela prevenção e tratamento das doenças como a PERIODONTITE, que é nada mais do que uma doença que acomete os tecidos de sustentação e proteção dos dentes (gengiva e osso).',
    img: periodontia,
  },
  {
    idSubtitle: 9,
    subtitle: 'Bruxismo',
    desc1:
      'O Bruxismo é o hábito de ranger ou apertar os dentes de forma consciente ou inconsciente durante o dia e mais comumente, durante o sono. O ranger causa um desgaste no dente, destruindo toda a anatomia da oclusão, enquanto isso, no apertamento dos dentes podem haver trincas e fraturas dos mesmos.',
    desc2:
      'Para o tratamento pode ser indicado uma placa acrílica ou a placa miorrelaxante, sendo possível complementar com uma aplicação de toxina botulínica para diminuir a força do apertamento e alivar a musculatura.',
    img: bruxismo,
  },
];

export const SubtitlesDescription = [
  {
    value: 1,
    name: 'Restauração Dental',
    desc1:
      'É um tratamento em que ocorre a remoção de uma porção cariada do dente, limpando a área contaminada para ser preenchida com um material restaurador (resina composta), podendo ser de maneira estética ou funcional.',
    img: restauracao,
  },
  {
    value: 1,
    name: 'Reconstrução Dental',
    desc1:
      'É a arte de reconstruir e corrigir imperfeições dos dentes quando perdem alguma estrutura anatômica, devolvendo a condição natural dos dentes. É indicada quando parte do dente é fraturado ou afetado pela cárie. Podem ser realizadas para preenchimentos de espaços e correções de forma e cor.',
    img: restauracao,
  },
  {
    value: 2,
    name: 'Clareamento Dental',
    desc1:
      'É realizado através do contato direto da estrutura dental com um gel clareador. Neste gel contém agentes clareadores que penetram a superfície dentária e atingem a parte interna do dente, causando reações clareadoras na estrutura interna, através da quebra dos pigmentos causadores do escurecimento.',
    img: clareamento,
  },
  {
    value: 2,
    name: 'Faceta Direta em Resina Composta',
    desc1:
      'É uma técnica na qual aplicam-se pequenos incrementos de resina composta sobre a superfície frontal do dente gerando mudanças na forma, tamanho e cor dos dentes, restaurando a estética da forma mais natural possível.',
    desc2:
      'O procedimento é reversível e é feito de maneira bem conservadora sem a necessidade de desgaste dos dentes.',
    img: facedireta,
  },
  {
    value: 2,
    name: 'Lente de Contato Dental',
    desc1:
      'É uma peça fina de porcelana que é colada sobre a face frontal dos dentes com finalidade de corrigir as imperfeições dos dentes manchados, o aspecto envelhecido, trincados e fraturados, preencher os espaços entre os dentes e criar uma aparência natural, sendo necessário realizar um MÍNIMO desgaste (de até 0,5mm) para encaixá-lo sobre o dente.',
    img: lente,
  },
  {
    value: 2,
    name: 'Botox',
    desc1:
      'A principal função do Botox é causar o relaxamento muscular temporariamente. A finalidade do Botox é a prevenção ao surgimento de rugas que surgem com o movimento do rosto e para amenizar as rugas que aparecem mesmo quando o rosto se mantém relaxado.',
    desc2:
      'Podem ser indicados nas regiões da testa; canto dos olhos (“pés de galinha”); contornos do rosto; para tratar Bruxismo; para sorriso gengival.',
    img: toxina,
  },
  {
    value: 2,
    name: 'Preenchimento Facial',
    desc1:
      'É um procedimento estético realizado com o Ácido Hialurônico para preencher as rugas finas e marcadas do rosto, devolvendo o volume, suavizando as rugas e realçando melhor os contornos do rosto, proporcionando uma aparência mais jovem, renovada e descansada.',
    img: preenchimento1,
  },
  {
    value: 3,
    name: 'Aparelho Ortodôntico Convencional',
    desc1:
      'Esse é o tipo mais comum de aparelho caracterizado pela presença de fios e bráquetes. Além disso, esse modelo necessita do uso das borrachas. Ele proporciona resultados bastante satisfatórios e é indicado para quase todos os tipos de desalinhamentos dentários. Podem ser apresentados com bráquetes metálicos ou estéticos (policarbonato, porcelana e safira).',
    img: aparelhoConvencional,
  },
  {
    value: 3,
    name: 'Aparelho Ortodôntico Auto-Ligado',
    desc1:
      'O modelo autoligado é um aparelho de bráquete semelhante ao convencional, porém não necessita de borrachas pois o fio ortodôntico é preso diretamente no bráquete, o que torna seu uso mais confortável e discreto. O aparelho auto-ligado costuma realizar os movimentos ortodônticos constantes, o que torna o tempo de tratamento mais rápido e a ação efetiva.',
    img: aparelhoAuto,
  },
  {
    value: 3,
    name: 'INVISALIGN (Alinhadores Invisíveis Ortodônticos)',
    desc1:
      'O Invisalign faz parte dos “alinhadores invisíveis”, sendo uma marca internacional e é um dos aparelhos mais modernos existentes atualmente pois são confeccionados com a ajuda de softwares específicos, sob medida, de acordo com a arcada dentária do paciente.',
    desc2:
      'Ele oferece praticidade por serem removíveis; estética por serem praticamente invisíveis na boca; rápidos na movimentação dos dentes pela modernidade do aparelho; e previsíveis graças a tecnologia moderna que permite que a visualização do resultado final do tratamento em uma tela digital.',
    img: invisalign,
  },
  {
    value: 4,
    name: 'Extração de Dente Simples',
    desc1:
      'É a remoção de tecidos/dentes comprometidos por alguma doença, trauma ou por indicação estética e funcional, tendo o objetivo de recuperar a saúde e bem-estar do paciente.',
    img: extracaoSimples,
  },
  {
    value: 4,
    name: 'Extração de Sisos',
    desc1:
      'Às vezes devido ao seu tamanho e ausência de espaço para a sua acomodação, elas nascem impactadas (dentro do osso) ou semi-erupcionadas (metade da coroa visível), causando grandes desconfortos aos pacientes. Sendo assim, eles devem ser extraídos o quanto antes, pois a posição e o ângulo desfavorável desta pode causar danos, até mesmo irreversíveis, aos dentes adjacentes, ao osso e aos nervos localizados próximos a ele.',
    img: siso1,
  },
  {
    value: 5,
    name: 'Implante de Protocolo Superior e Inferior',
    desc1:
      'Esse modelo de cirurgia é indicado quando grande parte dos dentes do paciente estão comprometidos e o paciente necessita extrair todos os dentes; ou se já possui ausência de todos os dentes.',
    desc2:
      'Para a cirurgia, é necessário instalar de 4 a 8 implantes que irão suportar futuramente uma prótese que é fixa sobre os implantes, ou seja, não corre o risco de soltar de lá como uma prótese total (dentadura), gerando segurança na mastigação.',
    img: implante1,
  },
  {
    value: 5,
    name: 'Enxerto Ósseo',
    desc1:
      'O procedimento de enxerto ósseo é um procedimento na qual um tecido ósseo (em pó ou bloco) é depositado no local onde não há osso suficiente para colocação dos implantes dentários, com finalidade de produzir mais osso na região e futuramente obter espaço suficiente naquela região, deixando-a mais volumosa, alta e espessa, tornando assim o local apto para colocação de implantes dentários.',
    img: enxertoOsseo1,
  },
  {
    value: 6,
    name: 'Tratamento de Canal / Endodôntico',
    desc1:
      'No tratamento endodôntico é feito a completa eliminação do tecido pulpar (nervo) que se encontra na parte interna do dente, na qual posteriormente é substituída por um outro material obturador. Dependendo de cada tipo de caso, o procedimento é feito rapidamente pois, em clínicas modernas, ela é feita de maneira automatizada',
    img: tratamentoEndodontico,
  },
  {
    value: 6,
    name: 'Retratamento de Canal / Endodôntico',
    desc1:
      ' O retratamento endodôntico compreende na execução de um novo tratamento endodôntico em um dente que já foi tratado endodonticamente. Geralmente é realizado em virtude do tratamento original parecer inadequado, ter falhado ou ter sido contaminado por exposição prolongada da cavidade pulpar ao meio bucal.',
    img: retratamento,
  },
  {
    value: 7,
    name: 'Prótese Fixa',
    desc1:
      'A prótese fixa pode ser unitária ou múltipla, podendol substituir um ou mais dentes que foram perdidos ou destruídos devido as cáries ou traumatismos. São coroas dentais “presas” como uma capa sobre dentes ou implantes, todas feitas de porcelana com finalidade de devolver a função e estética.',
    img: proteseFixa,
  },
  {
    value: 7,
    name: 'Prótese Móvel / Removível',
    desc1:
      'A indicada para pacientes que possuem poucos dentes na boca, sendo ela suportada por pequenos grampos que ficam apoiados sobre os dentes presentes, preenchendo então os espaços de dentes ausentes com dentes de porcelana.',
    img: proteseRemovivel,
  },
  {
    value: 7,
    name: 'Prótese Total Dentária',
    desc1:
      'Mais conhecida como “dentadura”, é indicada para substituir artificialmente todos os dentes das arcadas superior e/ou inferior. É uma prótese suportada somente por tecido gengival e o suporte ósseo. Em alguns casos, a prótese total também pode ser indicada de forma provisória ou imediata, como em pacientes que estão fazendo reabilitação com implantes.',
    img: proteseTotal,
  },
  {
    value: 8,
    name: 'Raspagem Dentária / Limpeza Dentária',
    desc1:
      'A Periodontite é uma doença infecciosa que acomete as estruturas ao redor do dente, chegando até a causar mobilidade (ficar mole).',
    desc2:
      'Ela costuma evoluir a partir do tártaro, que por sua vez se origina do acúmulo de placa bacteriana que não foi removido durante a higienização dos dentes.',
    desc3: 'É uma doença comum, porém grave que pode levar a perda dos dentes.',
    desc4:
      'O tratamento se faz através da raspagem dos dentes para remoção do tártaro, eliminando as toxinas que podem causar prejuízos ao periodonto.',
    img: raspagemDentaria,
  },
  {
    value: 8,
    name: 'Gengivectomia',
    desc1:
      'É uma cirurgia periodontal feita para modificar características gengivais que desagradam os pacientes.',
    desc2:
      'A cirurgia tem finalidade de diminuir o aspecto de inchaço e aumentar o tamanho dos dentes, dessa forma, a proporção entre dentes e gengiva se ajusta sendo possível obter um sorriso muito mais harmônico.',
    desc3:
      'É um procedimento muito recomendado para pessoas que têm o famoso sorriso gengival.',
    img: gengivectomia,
  },
];
