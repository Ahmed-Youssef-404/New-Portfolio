import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'SiReact' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'HTML5', icon: 'SiHtml5' },
      { name: 'CSS3', icon: 'SiCss3' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Bootstrap', icon: 'SiBootstrap' },
      // { name: 'Next.js', icon: 'SiNextdotjs' },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'Vite', icon: 'SiVite' },
      { name: 'npm', icon: 'SiNpm' },
      { name: 'Webpack', icon: 'SiWebpack' },
      { name: 'Figma', icon: 'SiFigma' },
      { name: 'Postman', icon: 'SiPostman' },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'Vercel', icon: 'SiVercel' },
      { name: 'Netlify', icon: 'SiNetlify' },
    ]
  },
  {
    title: 'Concepts',
    skills: [
      { name: 'State Management', icon: 'SiRedux' },
      { name: 'Component Architecture', icon: 'SiReact' },
      { name: 'Performance Optimization', icon: 'SiLighthouse' },
      { name: 'Responsive Design', icon: 'SiCss' },
      { name: 'Accessibility', icon: 'SiW3C' },
      { name: 'Testing', icon: 'SiJest' },
    ]
  }
];

export const techStack = {
  Languages: [
    // { name: 'React', icon: 'SiReact' },
    { name: 'TypeScript', icon: 'SiTypescript' },
    { name: 'JavaScript', icon: 'SiJavascript' },
    { name: 'HTML', icon: 'SiHtml5' },
    { name: 'CSS', icon: 'SiCss' },
    { name: 'java', icon: 'SiJava' },
    // { name: 'Node.js', icon: 'SiNodedotjs' },
  ],
  Frameworks: [
    { name: 'React', icon: 'SiReact' },
    // { name: 'Next.js', icon: 'SiNextdotjs' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    { name: 'Bootstrap', icon: 'SiBootstrap' },
    { name: 'Framer Motion', icon: 'SiFramer' },
    { name: 'React Query', icon: 'SiReactquery' },
    { name: 'React Router', icon: 'SiReactrouter' },
    // { name: 'Express', icon: 'SiExpress' },
  ],
  Tools: [
    { name: 'Git', icon: 'SiGit' },
    { name: 'Vite', icon: 'SiVite' },
    { name: 'Figma', icon: 'SiFigma' },
    { name: 'Postman', icon: 'SiPostman' },
    // { name: 'Vercel', icon: 'SiVercel' },
    // { name: 'Netlify', icon: 'SiNetlify' },

  ],
  'Cloud/Infra': [
    { name: 'Vercel', icon: 'SiVercel' },
    { name: 'Netlify', icon: 'SiNetlify' },
    { name: 'AWS', icon: 'SiAmazonwebservices' },
    { name: 'Docker', icon: 'SiDocker' },
    { name: 'PostgreSQL', icon: 'SiPostgresql' },
  ]
};
