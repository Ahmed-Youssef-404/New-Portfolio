import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface ProjectImageCarouselProps {
  images: string[]
  alt: string
  onImageClick?: () => void
  className?: string
  autoPlayDelay?: number
  showArrowsOnHoverOnly?: boolean
}

export function ProjectImageCarousel({
  images,
  alt,
  onImageClick,
  className,
  autoPlayDelay = 5000,
  showArrowsOnHoverOnly = false,
}: ProjectImageCarouselProps) {
  // useRef so the plugin instance is created once per carousel and survives re-renders,
  // instead of restarting its timer on every render.
  const plugin = React.useRef(
    Autoplay({ delay: autoPlayDelay, stopOnInteraction: true, stopOnMouseEnter: true })
  )

  const [api, setApi] = React.useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  // Track the active slide so the dot indicators stay in sync, whether the
  // slide changed via autoplay, the arrows, a dot click, or a swipe.
  React.useEffect(() => {
    if (!api) return

    setSelectedIndex(api.selectedScrollSnap())

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  const hasMultipleImages = images.length > 1

  const arrowVisibility = showArrowsOnHoverOnly
    ? "opacity-0 group-hover:opacity-100"
    : "opacity-90 hover:opacity-100"

  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className={cn("relative h-full w-full", className)}
    >
      {/* ml-0 / pl-0 remove shadcn's default multi-item gap spacing, since each slide here is full-bleed */}
      <CarouselContent className="ml-0 h-full">
        {images.map((src, index) => (
          <CarouselItem key={src} className="h-full pl-0">
            <div
              className={cn("relative h-full w-full", onImageClick && "cursor-pointer")}
              onClick={onImageClick}
            >
              <img
                src={src}
                alt={`${alt} ${index + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {hasMultipleImages && (
        <>
          {/* <CarouselPrevious
            className={cn(
              "left-2 top-1/2 z-20 h-7 w-7 -translate-y-1/2 bg-background/80 transition-opacity hover:bg-background",
              arrowVisibility
            )}
            onClick={(e) => e.stopPropagation()}
          />
          <CarouselNext
            className={cn(
              "right-2 top-1/2 z-20 h-7 w-7 -translate-y-1/2 bg-background/80 transition-opacity hover:bg-background",
              arrowVisibility
            )}
            onClick={(e) => e.stopPropagation()}
          /> */}

          {/* Dot indicators — always visible (not hover-gated) so the user knows
              there are multiple images without having to hover first. Doubles as
              click-to-jump navigation. */}
          <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  api?.scrollTo(index)
                }}
                className={cn(
                  "h-1.5 rounded-full shadow-sm transition-all",
                  index === selectedIndex
                    ? "w-4 bg-slate-700/80 ring-1 ring-white/20"
                    : "w-1.5 bg-slate-700/40 hover:bg-slate-700/70"
                )}
                aria-label={`Go to image ${index + 1} of ${images.length}`}
              />
            ))}
          </div>
        </>
      )}
    </Carousel>
  )
}