import cloudinary from '@/lib/cloudinary';

export async function GET(req: Request) {
    const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER;
    try {
        const { resources } = await cloudinary.v2.search
            .expression(folder)
            .sort_by('public_id', 'desc')
            .max_results(50)
            .execute();

        const images = resources.map((resource: any) => ({
            id: resource.public_id,
            url: resource.secure_url,
        }));

        return new Response(JSON.stringify(images), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({error }), { status: 500 });
    }
}
