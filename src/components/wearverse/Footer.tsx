export function Footer() {
  return (
    <footer className="bg-ink text-cream px-5 md:px-10 py-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="font-display text-5xl md:text-7xl mb-12">
          WEARV<span className="text-blood">3</span>RSE
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-xs uppercase tracking-[0.2em]">
          <div className="opacity-70">© 2026 WEARV3RSE</div>
          <div>KLEOPATRA JÄGER</div>
          <div>
            WEAR LESS · <span className="text-blood">MEAN MORE</span>
          </div>
          <div className="opacity-70">BERLIN / CODE UNIVERSITY</div>
        </div>
      </div>
    </footer>
  );
}
