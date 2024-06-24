import { useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Progress } from "@/components/ui/progress"

interface Image {
    id: string;
    url: string;
}

interface GalleryProps {
    images: Image[];
}

export default function Gallery({ images }: GalleryProps) {
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {

        function handleImageLoadProgress() {
            const totalImages = images.length;
            let loadedCount = 0;

            images.forEach((image) => {
                const img = new Image();
                img.src = image.url;
                img.onload = () => {
                    loadedCount++;
                    setLoadingProgress(Math.floor((loadedCount / totalImages) * 100));
                };
            });
        }

        handleImageLoadProgress();
    }, [images]);

    useEffect(() => {
        if (loadingProgress === 100) {
            return () => { };
        }
    }, [loadingProgress]);


    return (
        <div className="p-4">
            <PhotoProvider>
                {loadingProgress < 100 ? (
                    <div className="flex items-center justify-center">
                        <div className="text-center">
                            <p className="mb-4 text-lg font-semibold text-gray-700">Loading...</p>
                            <Progress className="w-64 h-4 bg-gray-200 rounded-full overflow-hidden" value={loadingProgress} />
                            <p className="mt-4 text-sm font-medium text-gray-500">{`${loadingProgress}%`}</p>
                        </div>
                    </div>
                ) : (
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {images.map((image) => (
                            <PhotoView key={image.id} src={image.url}>
                                <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
                                    <CldImage
                                        src={image.id}
                                        width={300}
                                        height={300}
                                        alt={image.id}
                                        className="object-cover w-full h-full cursor-pointer hover:opacity-75 transition-opacity duration-200 ease-in-out"
                                    />
                                </div>
                            </PhotoView>
                        ))}
                    </div>
                )}
            </PhotoProvider>
        </div>
    );
}
