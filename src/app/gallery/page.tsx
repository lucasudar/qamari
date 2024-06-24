"use client"

import Gallery from "@/components/views/gallery/page";
import { useEffect, useState } from "react";

interface Image {
  id: string;
  url: string;
}

export default function Page() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/gallery');
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="antialiased font-sans text-center font-medium text-3xl text-foreground leading-8 mb-2">Our projects</h1>
      <Gallery images={images} />
    </div>
  );
};