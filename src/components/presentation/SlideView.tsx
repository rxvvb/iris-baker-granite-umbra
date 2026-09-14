import { ChevronRight } from "lucide-react";
import {
  ALBUMS,
  ARTISTS,
  artistById,
  albumById,
  albumsByArtist,
  type Album,
  type ArtistId,
  type Slide,
} from "@/data/deck";
import { cn } from "@/lib/utils";

type Props = {
  slide: Slide;
  slideKey: number;
  onArtist: (id: ArtistId) => void;
  onAlbum: (album: Album, el: HTMLElement) => void;
  onStart: () => void;
};

export function SlideView({ slide, slideKey, onArtist, onAlbum, onStart }: Props) {
  const k = String(slideKey);
  if (slide.type === "title") return <TitleSlide k={k} onStart={onStart} />;
  if (slide.type === "picker") return <PickerSlide k={k} onArtist={onArtist} />;
  if (slide.type === "hero" && slide.artistId)
    return <HeroSlide k={k} artistId={slide.artistId} onAlbum={onAlbum} />;
  if (slide.type === "album" && slide.albumId)
    return <AlbumSlide k={k} albumId={slide.albumId} onAlbum={onAlbum} />;
  if (slide.type === "discog" && slide.artistId)
    return <DiscogSlide k={k} artistId={slide.artistId} title={slide.title} kicker={slide.kicker} onAlbum={onAlbum} />;
  if (slide.type === "hits" && slide.artistId)
    return <HitsSlide k={k} artistId={slide.artistId} onAlbum={onAlbum} />;
  if (slide.type === "gallery") return <GallerySlide k={k} onAlbum={onAlbum} onArtist={onArtist} />;
  if (slide.type === "why") return <WhySlide k={k} onArtist={onArtist} />;
  if (slide.type === "finale") return <FinaleSlide k={k} onStart={onStart} onArtist={onArtist} />;
  return null;
}

function TitleSlide({ k, onStart }: { k: string; onStart: () => void }) {
  return (
    <div className="relative flex h-full flex-col justify-end px-5 pb-24 pt-16 sm:px-10 lg:px-16">
      <p key={k + "k"} className="enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]">
        25 слайдов · 5 вселенных
      </p>
      <h1
        key={k + "t"}
        className="enter d1 mt-4 font-display text-[12vw] leading-[0.88] font-extrabold tracking-tight sm:text-7xl lg:text-8xl"
      >
        мои
        <br />
        любимые
        <br />
        <span className="text-[var(--slide-accent)]">артисты</span>
      </h1>
      <div key={k + "p"} className="enter d2 mt-8 flex -space-x-3 sm:-space-x-8">
        {ARTISTS.map((a, i) => (
          <button
            key={a.id}
            type="button"
            onClick={() => onStart()}
            className="relative size-14 overflow-hidden rounded-full ring-2 ring-[var(--slide-bg)] transition-transform duration-150 ease-out hover:z-10 hover:scale-110 active:scale-[0.96] sm:size-24"
            style={{ zIndex: ARTISTS.length - i }}
          >
            <img src={a.portrait} alt={a.name} className="size-full object-cover" />
          </button>
        ))}
      </div>
      <p key={k + "s"} className="enter d3 mt-6 max-w-md text-sm leading-relaxed text-[var(--slide-muted)] sm:text-base">
        ADÉLA · Charli xcx · Ariana Grande · Ice Spice · Olivia Rodrigo
      </p>
      <button
        type="button"
        onClick={onStart}
        className="enter d4 mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--slide-fg)] px-6 py-3 text-sm font-semibold text-[var(--slide-bg)] transition-transform duration-150 ease-out active:scale-[0.96]"
      >
        выбрать артиста
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}

function PickerSlide({ k, onArtist }: { k: string; onArtist: (id: ArtistId) => void }) {
  return (
    <div className="flex h-full flex-col px-4 pb-24 pt-20 sm:px-8 sm:pt-24">
      <p className="enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]">с кого начнём</p>
      <h2 className="enter d1 mt-2 font-display text-3xl font-extrabold sm:text-5xl">нажми на лицо</h2>
      <div className="mt-6 grid min-h-0 flex-1 grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
        {ARTISTS.map((a, i) => (
          <button
            key={a.id}
            type="button"
            onClick={() => onArtist(a.id)}
            className={cn(
              "enter group relative overflow-hidden rounded-3xl text-left transition-transform duration-150 ease-out active:scale-[0.96]",
              `d${i + 1}`,
            )}
          >
            <img
              src={a.portrait}
              alt={a.name}
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-linear-to-t from-[var(--color-void)] via-transparent to-transparent" />
            <span className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
              <span className="block font-display text-sm font-bold tracking-tight sm:text-lg">{a.name}</span>
              <span className="mt-0.5 block text-[10px] tracking-wide text-[var(--slide-fg)]/70 uppercase">{a.tag}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function HeroSlide({
  k,
  artistId,
  onAlbum,
}: {
  k: string;
  artistId: ArtistId;
  onAlbum: (album: Album, el: HTMLElement) => void;
}) {
  const a = artistById(artistId);
  const featured = albumsByArtist(artistId).slice(0, 3);
  return (
    <div className="grid h-full min-h-0 grid-cols-1 lg:grid-cols-2">
      <div className="relative min-h-[42vh] overflow-hidden lg:min-h-0">
        <img
          key={k + "img"}
          src={a.portrait}
          alt={a.name}
          className="enter-bloom absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[var(--slide-bg)] via-transparent to-transparent lg:bg-linear-to-r" />
      </div>
      <div className="relative flex flex-col justify-end px-5 pb-24 pt-6 sm:px-10 lg:py-20">
        <p className="enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]">{a.from}</p>
        <h2 className="enter d1 mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">{a.name}</h2>
        <p className="enter d2 mt-1 text-sm text-[var(--slide-accent)]">{a.tag} · {a.era}</p>
        <p className="enter d3 mt-5 max-w-lg text-sm leading-relaxed text-[var(--slide-muted)] sm:text-base">{a.bio}</p>
        <blockquote className="enter d4 mt-5 font-display text-lg leading-snug font-semibold sm:text-2xl">
          «{a.quote}»
        </blockquote>
        <div className="enter d5 mt-6 flex gap-3 overflow-x-auto pb-2">
          {featured.map((al) => (
            <AlbumThumb key={al.id} album={al} onAlbum={onAlbum} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AlbumSlide({
  k,
  albumId,
  onAlbum,
}: {
  k: string;
  albumId: string;
  onAlbum: (album: Album, el: HTMLElement) => void;
}) {
  const al = albumById(albumId);
  const a = artistById(al.artistId);
  return (
    <div className="grid h-full min-h-0 grid-cols-1 items-center gap-6 px-5 pb-24 pt-20 sm:px-10 sm:pt-24 lg:grid-cols-2 lg:gap-12 lg:px-16">
      <button
        type="button"
        onClick={(e) => onAlbum(al, e.currentTarget)}
        className="enter-cover mx-auto w-full max-w-sm transition-transform duration-150 ease-out active:scale-[0.96] lg:max-w-md"
      >
        <img
          src={al.cover}
          alt={al.title}
          className="cover-glow aspect-square w-full rounded-2xl object-cover"
        />
        <span className="mt-3 block text-center text-xs tracking-wide text-[var(--slide-muted)] uppercase">
          нажми обложку
        </span>
      </button>
      <div>
        <p className="enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]">
          {a.name} · {al.kind}
        </p>
        <h2 className="enter d1 mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">{al.title}</h2>
        <p className="enter d2 mt-2 text-sm text-[var(--slide-accent)]">{al.year}</p>
        <p className="enter d3 mt-5 max-w-xl text-sm leading-relaxed sm:text-base">{al.blurb}</p>
        <ul className="enter d4 mt-6 flex flex-wrap gap-2">
          {al.tracks.map((t) => (
            <li
              key={t}
              className="rounded-full border border-[var(--slide-line)] bg-[var(--slide-card)] px-3 py-1.5 text-xs sm:text-sm"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DiscogSlide({
  k,
  artistId,
  title,
  kicker,
  onAlbum,
}: {
  k: string;
  artistId: ArtistId;
  title?: string;
  kicker?: string;
  onAlbum: (album: Album, el: HTMLElement) => void;
}) {
  const a = artistById(artistId);
  const list = albumsByArtist(artistId);
  return (
    <div className="flex h-full flex-col px-4 pb-24 pt-20 sm:px-10 sm:pt-24">
      <p className="enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]">
        {kicker} · {a.name}
      </p>
      <h2 className="enter d1 mt-2 font-display text-3xl font-extrabold sm:text-5xl">{title}</h2>
      <div className="mt-6 grid min-h-0 flex-1 grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-3 lg:grid-cols-4">
        {list.map((al, i) => (
          <button
            key={al.id}
            type="button"
            onClick={(e) => onAlbum(al, e.currentTarget)}
            className={cn("enter group text-left transition-transform duration-150 ease-out active:scale-[0.96]", `d${Math.min(i + 1, 6)}`)}
          >
            <img
              src={al.cover}
              alt={al.title}
              className="cover-glow aspect-square w-full rounded-xl object-cover"
            />
            <span className="mt-2 block font-display text-sm font-semibold leading-tight">{al.title}</span>
            <span className="text-[11px] text-[var(--slide-muted)]">
              {al.year} · {al.kind}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function HitsSlide({
  k,
  artistId,
  onAlbum,
}: {
  k: string;
  artistId: ArtistId;
  onAlbum: (album: Album, el: HTMLElement) => void;
}) {
  const a = artistById(artistId);
  const list = albumsByArtist(artistId);
  return (
    <div className="flex h-full flex-col px-4 pb-24 pt-20 sm:px-10 sm:pt-24">
      <p className="enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]">{a.name}</p>
      <h2 className="enter d1 mt-2 font-display text-3xl font-extrabold sm:text-5xl">хиты и обложки</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {a.hits.map((h, i) => (
          <span
            key={h.title}
            className={cn("enter rounded-full bg-[var(--slide-card)] px-3 py-2 text-xs sm:text-sm", `d${Math.min(i + 1, 6)}`)}
          >
            <span className="font-semibold">{h.title}</span>
            <span className="ml-2 text-[var(--slide-muted)]">{h.note}</span>
          </span>
        ))}
      </div>
      <div className="mt-6 grid min-h-0 flex-1 grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-4">
        {list.map((al) => (
          <AlbumThumb key={al.id} album={al} onAlbum={onAlbum} large />
        ))}
      </div>
    </div>
  );
}

function GallerySlide({
  k,
  onAlbum,
  onArtist,
}: {
  k: string;
  onAlbum: (album: Album, el: HTMLElement) => void;
  onArtist: (id: ArtistId) => void;
}) {
  return (
    <div className="flex h-full flex-col px-4 pb-24 pt-20 sm:px-8 sm:pt-24">
      <p className="enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]">оригинальные обложки</p>
      <h2 className="enter d1 mt-2 font-display text-3xl font-extrabold sm:text-5xl">зал славы</h2>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {ARTISTS.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => onArtist(a.id)}
            className="shrink-0 rounded-full border border-[var(--slide-line)] px-3 py-1.5 text-xs transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            {a.name}
          </button>
        ))}
      </div>
      <div className="mt-4 grid min-h-0 flex-1 grid-cols-3 gap-2 overflow-y-auto sm:grid-cols-5 lg:grid-cols-7">
        {ALBUMS.map((al) => (
          <button
            key={al.id}
            type="button"
            onClick={(e) => onAlbum(al, e.currentTarget)}
            className="enter-bloom group overflow-hidden rounded-lg transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            <img src={al.cover} alt={al.title} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </button>
        ))}
      </div>
    </div>
  );
}

function WhySlide({ k, onArtist }: { k: string; onArtist: (id: ArtistId) => void }) {
  return (
    <div className="flex h-full flex-col px-4 pb-24 pt-20 sm:px-10 sm:pt-24">
      <p className="enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]">почему эти пять</p>
      <h2 className="enter d1 mt-2 font-display text-3xl font-extrabold sm:text-5xl">мой плейлист</h2>
      <div className="mt-6 grid min-h-0 flex-1 gap-3 overflow-y-auto sm:grid-cols-2 lg:grid-cols-5">
        {ARTISTS.map((a, i) => (
          <button
            key={a.id}
            type="button"
            onClick={() => onArtist(a.id)}
            className={cn(
              "enter flex flex-col overflow-hidden rounded-3xl bg-[var(--slide-card)] text-left transition-transform duration-150 ease-out active:scale-[0.96]",
              `d${i + 1}`,
            )}
          >
            <img src={a.portrait} alt="" className="h-36 w-full object-cover sm:h-44" />
            <span className="flex flex-1 flex-col p-4">
              <span className="font-display text-lg font-bold">{a.name}</span>
              <span className="mt-2 text-sm leading-relaxed text-[var(--slide-muted)]">{a.why}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function FinaleSlide({
  k,
  onStart,
  onArtist,
}: {
  k: string;
  onStart: () => void;
  onArtist: (id: ArtistId) => void;
}) {
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
      <p className="enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]">конец презентации</p>
      <h2 className="enter d1 mt-4 font-display text-4xl font-extrabold sm:text-6xl">на бис</h2>
      <p className="enter d2 mt-4 max-w-md text-sm text-[var(--slide-muted)]">
        Пять артисток. Пять палитр. Можно начать сначала — или прыгнуть к кому угодно.
      </p>
      <div className="enter d3 mt-8 flex flex-wrap justify-center gap-3">
        {ARTISTS.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => onArtist(a.id)}
            className="size-16 overflow-hidden rounded-full ring-2 ring-[var(--slide-line)] transition-transform duration-150 ease-out hover:scale-110 active:scale-[0.96] sm:size-20"
          >
            <img src={a.portrait} alt={a.name} className="size-full object-cover" />
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={onStart}
        className="enter d4 mt-8 rounded-full bg-[var(--slide-fg)] px-6 py-3 text-sm font-semibold text-[var(--slide-bg)] transition-transform duration-150 ease-out active:scale-[0.96]"
      >
        сначала
      </button>
    </div>
  );
}

function AlbumThumb({
  album,
  onAlbum,
  large,
}: {
  album: Album;
  onAlbum: (album: Album, el: HTMLElement) => void;
  large?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={(e) => onAlbum(album, e.currentTarget)}
      className={cn(
        "shrink-0 text-left transition-transform duration-150 ease-out active:scale-[0.96]",
        large ? "w-full" : "w-24 sm:w-28",
      )}
    >
      <img src={album.cover} alt={album.title} className="cover-glow aspect-square w-full rounded-lg object-cover" />
      <span className="mt-1.5 block truncate text-[11px] font-medium">{album.title}</span>
    </button>
  );
}
