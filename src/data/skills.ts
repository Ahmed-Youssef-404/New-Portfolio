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
      { name: 'Next.js', icon: 'SiNextdotjs' },
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
    ]
  },
  {
    title: 'Concepts',
    skills: [
      { name: 'State Management', icon: 'SiRedux' },
      { name: 'Component Architecture', icon: 'SiReact' },
      { name: 'Performance Optimization', icon: 'SiLighthouse' },
      { name: 'Responsive Design', icon: 'SiCss3' },
      { name: 'Accessibility', icon: 'SiW3C' },
      { name: 'Testing', icon: 'SiJest' },
    ]
  }
];

export const techStack = {
  Languages: [
    { name: 'TypeScript', icon: 'SiTypescript' },
    { name: 'JavaScript', icon: 'SiJavascript' },
    { name: 'HTML', icon: 'SiHtml5' },
    { name: 'CSS', icon: 'SiCss3' },
    { name: 'Node.js', icon: 'SiNodedotjs' },
  ],
  Frameworks: [
    { name: 'React', icon: 'SiReact' },
    { name: 'Next.js', icon: 'SiNextdotjs' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    { name: 'Framer Motion', icon: 'SiFramer' },
    { name: 'Express', icon: 'SiExpress' },
  ],
  Tools: [
    { name: 'Git', icon: 'SiGit' },
    { name: 'Vite', icon: 'SiVite' },
    { name: 'Figma', icon: 'SiFigma' },
    { name: 'Postman', icon: 'SiPostman' },
    { name: 'Jest', icon: 'SiJest' },
  ],
  'Cloud/Infra': [
    { name: 'Vercel', icon: 'SiVercel' },
    { name: 'Netlify', icon: 'SiNetlify' },
    { name: 'AWS', icon: 'SiAmazonwebservices' },
    { name: 'Docker', icon: 'SiDocker' },
    { name: 'PostgreSQL', icon: 'SiPostgresql' },
  ]
};
