import { create } from 'zustand';
import { projects } from '@/data/projects';
import { Project, Category } from '@/types';

interface ProjectsState {
  projects: Project[];
  activeCategory: Category;
  setCategory: (category: Category) => void;
  filteredProjects: Project[];
}

export const useProjectsStore = create<ProjectsState>((set) => ({
  projects: projects,
  activeCategory: 'All',
  filteredProjects: projects,
  setCategory: (category) => 
    set((state) => ({
      activeCategory: category,
      filteredProjects: category === 'All' 
        ? state.projects 
        : state.projects.filter(p => p.category === category)
    })),
}));
