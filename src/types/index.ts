export type Category = 'All' | 'React' | 'Fullstack' | 'Tools' | 'Experiments';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: Category;
  githubUrl?: string;
  liveUrl?: string;
  image: string[]; // now an array of image URLs
  featured: boolean;
  private?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  year: string;
  title: string;
  description: string;
}
