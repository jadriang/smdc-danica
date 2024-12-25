'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface LazyImageProps extends Omit<ImageProps, 'src'> {
    src: string
}

export default function LazyImage({ src, alt, width, height, className, ...props }: LazyImageProps) {
    const [isLoading, setLoading] = useState(true)

    return (
        <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
                onLoadingComplete={() => setLoading(false)}
                {...props}
            />
        </div>
    )
}

