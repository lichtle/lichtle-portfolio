import efood from "../assets/efood.png";
import disney from "../assets/disney.png";
import levelUp from "../assets/level-up.png";
import amorPet from "../assets/amor-pet.png";

export type ProjectsType = {
  id: number;
  name: string;
  icon: string;
  image: string;
  description: string;
  technologies: string[];
  repository: string;
  deploy: string;
};

export const Projects: ProjectsType[] = [
  {
    id: 1,
    name: "efood - Delivery de comida",
    icon: "https://i.ibb.co/0s2gjyg/efood.png",
    image: `${efood}`,
    description:
      "Este projeto foi a tarefa final do curso Engenheiro Front-End da EBAC. Foi o mais desafiador e complexo que já fiz até então, principalmente pelo uso de bibliotecas de autenticação de formulário que eu nunca tinha tido contato prévio. Tenho muito orgulho de tê-lo concluído!",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    ],
    repository: "https://github.com/lichtle/efood",
    deploy: "http://tinyurl.com/efood-delivery",
  },
  {
    id: 2,
    name: "Clone Disney+",
    icon: "https://i.ibb.co/88pNkrc/disney-plus.png",
    image: `${disney}`,
    description:
      "Este projeto foi desenvolvido durante o curso Engenheiro Front-End da EBAC. É sempre interessante ver como é possível realizar ações mais complexas com JavaScript puro, como por exemplo o accordion da seção de perguntas. É uma boa maneira de praticar a lógica, mas sou grata pelas bibliotecas que nos ajudam a implementar esse tipo de ação de forma bastante simples, deixando o código mais enxuto e fácil de dar manutenção!",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg",
    ],
    repository: "https://github.com/lichtle/clone-disneyplus",
    deploy: "http://tinyurl.com/clone-disney-plus",
  },
  {
    id: 3,
    name: "Level Up - Loja de Games",
    icon: "https://i.ibb.co/jzSYhcT/Level-up.png",
    image: `${levelUp}`,
    description:
      "Este projeto foi desenvolvido durante o curso Engenheiro Front-End da EBAC. Foi bem divertido desenvonvê-lo, principalmente por ser relacionado a um tema que gosto: jogos!",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    ],
    repository: "https://github.com/lichtle/level-up-game-store",
    deploy: "http://tinyurl.com/game-store",
  },
  {
    id: 4,
    name: "Loja Amor Pet",
    icon: "https://i.ibb.co/TWhfLT9/amor-pet.png",
    image: `${amorPet}`,
    description:
      "Uni meu amor por animais com meu amor por criar páginas fofas e fiz a loja Amor Pet, uma loja de artigos destinados à uma variedade de animais de estimação, como cachorros, gatos e roedores. A loja tem um carrossel de imagens indicando alguns dos serviços oferecidos, uma descrição, seção de produtos e seção de contato. Foi feita utilizando HTML, CSS e Bootstrap.",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    ],
    repository: "https://github.com/lichtle/loja-amor-pet",
    deploy: "https://tinyurl.com/amor-pet",
  },
];
