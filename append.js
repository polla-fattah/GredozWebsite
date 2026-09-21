const fs = require('fs');
const path = 'd:/Remote/garedoz/src/components/ui/background-patterns.tsx';
let content = fs.readFileSync(path, 'utf8');

const gridLines = `
/**
 * Elegant architectural grid lines that act like borders, fading out at the edges.
 * Adds a highly premium feel to section backgrounds.
 */
export function GridLines({
  className,
}: {
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 pointer-events-none select-none overflow-hidden",
        "mask-radial-faded",
        className
      )}
    >
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-[1200px] h-full flex justify-between">
          {/* Vertical Lines */}
          <div className="w-px h-full bg-border/40" />
          <div className="w-px h-full bg-border/40 hidden md:block" />
          <div className="w-px h-full bg-border/40 hidden lg:block" />
          <div className="w-px h-full bg-border/40" />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center">
        {/* Horizontal Lines */}
        <div className="w-full h-px bg-border/40 absolute top-1/4" />
        <div className="w-full h-px bg-border/40 absolute top-2/4" />
        <div className="w-full h-px bg-border/40 absolute top-3/4" />
      </div>
    </div>
  )
}
`

fs.writeFileSync(path, content + '\n' + gridLines, 'utf8');
