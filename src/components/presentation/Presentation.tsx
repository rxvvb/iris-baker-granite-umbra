import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  ARTISTS,
  ARTIST_START,
  SLIDES,
  artistById,
  type Album,
  type ArtistId,
} from "@/data/deck";
import { SlideView } from "./SlideView";
import { cn } from "@/lib/utils";

export function Presentation() {
  const [index, setIndex] = useState(0);
  const [album, setAlbum] = useState<Album | null>(null);
  const [tick, setTick] = useState(0);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const slide = SLIDES[index];
  const total = SLIDES.length;

  const go = useCallback((next: number) => {
    setAlbum(null);
    setIndex(((next % total) + total) % total);
    setTick((t) => t + 1);
  }, [total]);

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  const jumpArtist = useCallback(
    (id: ArtistId) => go(ARTIST_START[id]),
    [go],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setAlbum(null);
        return;
      }
      if (album) return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      }
      if (e.key === "Home") go(0);
      if (e.key === "End") go(total - 1);
      const n = Number(e.key);
      if (n >= 1 && n <= 5) jumpArtist(ARTISTS[n - 1].id);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [album, go, jumpArtist, next, prev, total]);

  function onPointerDown(e: React.PointerEvent) {
    if ((e.target as HTMLElement).closest("button, a")) return;
    touch.current = { x: e.clientX, y: e.clientY };
  }
  function onPointerUp(e: React.PointerEvent) {
    if (!touch.current) return;
    const dx = e.clientX - touch.current.x;
    const dy = e.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  }

  const theme = slide.theme;
  const progress = (index + 1) / total;

  return (
    <div
      className={cn("deck relative h-dvh overflow-hidden", `theme-${theme}`)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <div className="grain" aria-hidden />

      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-3 p-3 sm:p-4">
        <div className="pointer-events-auto flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
          {ARTISTS.map((a) => {
            const active = slide.artistId === a.id;
            return (
              <button
                key={a.id}
                type="button"
                onClick={() => jumpArtist(a.id)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full py-1 pr-3 pl-1 text-[11px] font-semibold tracking-wide uppercase transition-transform duration-150 ease-out active:scale-[0.96]",
                  active
                    ? "bg-[var(--slide-fg)] text-[var(--slide-bg)]"
                    : "bg-[var(--slide-card)] text-[var(--slide-fg)]",
                )}
              >
                <img src={a.portrait} alt="" className="size-7 rounded-full object-cover" />
                <span className="hidden sm:inline">{a.name}</span>
              </button>
            );
          })}
        </div>
        <div className="pointer-events-none font-display text-[11px] tracking-[0.2em] text-[var(--slide-muted)] tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </header>

      <div className="absolute inset-x-0 top-0 z-30 h-0.5 bg-[var(--slide-line)]">
        <div
          className="progress h-full bg-[var(--slide-accent)]"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <main className="relative h-full">
        <SlideView
          key={slide.id}
          slide={slide}
          slideKey={tick}
          onArtist={jumpArtist}
          onAlbum={(al) => setAlbum(al)}
          onStart={() => go(1)}
        />
      </main>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-between p-3 sm:p-4">
        <button
          type="button"
          onClick={prev}
          className="pointer-events-auto flex size-11 items-center justify-center rounded-full bg-[var(--slide-card)] transition-transform duration-150 ease-out active:scale-[0.96]"
          aria-label="Предыдущий слайд"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="pointer-events-auto hidden max-w-[60%] items-center gap-1 overflow-x-auto sm:flex">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(i)}
              className={cn(
                "nav-dot h-1.5 rounded-full",
                i === index ? "w-6 bg-[var(--slide-accent)]" : "w-1.5 bg-[var(--slide-muted)] opacity-50",
              )}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="pointer-events-auto flex size-11 items-center justify-center rounded-full bg-[var(--slide-fg)] text-[var(--slide-bg)] transition-transform duration-150 ease-out active:scale-[0.96]"
          aria-label="Следующий слайд"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {album ? <AlbumLightbox album={album} onClose={() => setAlbum(null)} /> : null}
    </div>
  );
}

function AlbumLightbox({ album, onClose }: { album: Album; onClose: () => void }) {
  const artist = artistById(album.artistId);
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[var(--color-void)]/70 p-4 backdrop-blur-md sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={album.title}
    >
      <div
        className="lightbox-in relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-[var(--slide-bg)] text-[var(--slide-fg)] shadow-2xl sm:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={album.cover} alt={album.title} className="aspect-square w-full object-cover" />
        <div className="flex flex-col p-5 sm:p-7">
          <p className="font-display text-[11px] tracking-[0.24em] uppercase text-[var(--slide-muted)]">
            {artist.name} · {album.year}
          </p>
          <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">{album.title}</h3>
          <p className="mt-1 text-xs text-[var(--slide-accent)]">{album.kind}</p>
          <p className="mt-4 text-sm leading-relaxed">{album.blurb}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {album.tracks.map((t) => (
              <li key={t} className="rounded-full border border-[var(--slide-line)] px-3 py-1 text-xs">
                {t}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onClose}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--slide-fg)] px-4 py-2 text-sm font-semibold text-[var(--slide-bg)] transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            <X className="size-4" />
            закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
