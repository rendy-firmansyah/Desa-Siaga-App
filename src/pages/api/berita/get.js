import prisma from "../../../../lib/prisma";

export const config = {
    api: {
        bodyParser: false
    }
}

export default async function BeritaHandler(req, res) {
    if(req.method === 'GET'){
        const id = req.query.id;
        if (id){
            const berita = await prisma.berita.findMany({
                orderBy: {
                  created_at: 'desc',
                },
                where:{
                    desa_id: parseInt(id)
                },
                include:{
                    desa: true
                }
            })
            return res.status(200).json(berita);
        }
        try {
            const berita = await prisma.berita.findMany({
                orderBy: {
                  created_at: 'desc',
                },
                include: {
                  desa: true,
                },
              });
            return res.status(200).json(berita);
        } catch (error) {
            console.error("Error during DB operation:", error);
            return res.status(500).json({ message: "Server error!", status: 'failed' });
        }
    }
}