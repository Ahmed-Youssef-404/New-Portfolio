import { create } from 'zustand';

interface UIState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMenuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
  isProjectModalOpen: boolean;
  activeProjectId: string | null;
  openProjectModal: (id: string) => void;
  closeProjectModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
  isMenuOpen: false,
  setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
  isProjectModalOpen: false,
  activeProjectId: null,
  openProjectModal: (id) => set({ isProjectModalOpen: true, activeProjectId: id }),
  closeProjectModal: () => set({ isProjectModalOpen: false, activeProjectId: null }),
}));
