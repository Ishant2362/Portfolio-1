"use client";

import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "alt"> {
    alt: string; // Force required alt text for SEO
    containerClassName?: string;
    priority?: boolean;
}

export function OptimizedImage({
    src,
    alt,
    fill,
    width,
    height,
    priority = false,
    className,
    containerClassName,
    sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    ...props
}: OptimizedImageProps) {
    return (
        <div className={cn("relative overflow-hidden", containerClassName)}>
            <Image
                src={src}
                alt={alt}
                fill={fill}
                width={width}
                height={height}
                priority={priority}
                sizes={sizes}
                className={cn(
                    "transition-all duration-500",
                    className
                )}
                {...props}
            />
        </div>
    );
}
