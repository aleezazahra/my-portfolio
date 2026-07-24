import { useEffect, useRef } from 'react';
import FlowArt, { FlowSection } from '../src/components/Flowart';

const PALETTE = {
  flamingo: '#FFD2DD',
  lime: '#6DAA05',
  lemon: '#CBDE60',
  tangerine: '#013801',
  azure: '#EA1F79',
  ink: '#FFD2DD',
  paper: '#EA1F79',
};

const SECTIONS = [
  { id: 'hero', label: 'Hero', hex: PALETTE.flamingo },
  { id: 'about', label: 'About', hex: PALETTE.lime },
  { id: 'projects', label: 'Projects', hex: PALETTE.lemon },
  { id: 'contact', label: 'Contact', hex: PALETTE.tangerine },
  { id: 'gallery', label: 'Gallery', hex: PALETTE.azure },
];

const fontDisplay = { fontFamily: "'Fraunces', serif" };
const fontMono = { fontFamily: "'Space Mono', monospace" };

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,900;1,9..144,700&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(`[data-id="${id}"]`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={rootRef}
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <FlowArt>
        <FlowSection style={{ backgroundColor: PALETTE.flamingo }}>
          <div />
        </FlowSection>

        <FlowSection style={{ backgroundColor: PALETTE.lime }}>
          <div />
        </FlowSection>

        <FlowSection style={{ backgroundColor: PALETTE.lemon }}>
          <div />
        </FlowSection>

        <FlowSection style={{ backgroundColor: PALETTE.tangerine }}>
          <div />
        </FlowSection>

        <FlowSection style={{ backgroundColor: PALETTE.azure }}>
          <div />
        </FlowSection>
      </FlowArt>
    </div>
  );
}