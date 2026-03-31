import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      const elements = ids.map((id) => {
        const element = document.getElementById(id);
        if (!element) return null;
        return {
          id,
          top: element.offsetTop,
          bottom: element.offsetTop + element.offsetHeight,
        };
      }).filter(Boolean) as { id: string; top: number; bottom: number }[];

      const currentActive = elements.find(
        (el) => scrollPosition >= el.top && scrollPosition < el.bottom
      );

      if (currentActive && currentActive.id !== activeId) {
        setActiveId(currentActive.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset, activeId]);

  return activeId;
}
