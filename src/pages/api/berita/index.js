import prisma from "../../../../lib/prisma";
import ImageKit from "imagekit";
import { IncomingForm } from "formidable";
import fs from 'fs';

export const config = {
    api: {
        bodyParser: false
    }
}

export default async function BeritaHandler(req, res) {
    if (req.method === 'POST') {
        const imagekit = new ImageKit({
            publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
            privateKey: process.env.IMAGEKIT_SECRET_KEY,
            urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
        });

        const form = new IncomingForm();
        form.keepExtensions = true;

        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error("Formidable error:", err);
                return res.status(500).json({ message: "Server error!", status: 'failed' });
            }

            const { judul, deskripsi, desa_id } = fields;
            const gambar = files.gambar;

            if (!judul || !deskripsi || !desa_id || !gambar) {
                return res.status(400).json({ message: "Data tidak boleh Kosong!" });
            }

            try {
                const imagePath = gambar[0].filepath; // Access the correct file path

                // Check if the file exists
                if (!fs.existsSync(imagePath)) {
                    console.error("File does not exist:", imagePath);
                    return res.status(500).json({ message: "Server error!", status: 'failed' });
                }

                const upload = await imagekit.upload({
                    file: fs.readFileSync(imagePath), // Read file content
                    fileName: gambar[0].originalFilename // Access original filename
                });

                const berita = await prisma.berita.create({
                    data: {
                        judul: judul[0],
                        deskripsi: deskripsi[0],
                        gambar: upload.url,
                        desa_id: parseInt(desa_id[0])
                    }
                });

                return res.status(200).json(berita);
            } catch (error) {
                console.error("Error during upload or DB operation:", error);
                return res.status(500).json({ message: "Server error!", status: 'failed' });
            }
        });
    } 
    if(req.method === 'GET'){
        if (req.query.id) {
            const id = req.query.id;
            const berita = await prisma.berita.findUnique({ where: { id: Number(id) } });
            return res.status(200).json(berita);
        }
        try {
            const berita = await prisma.berita.findMany();
            return res.status(200).json(berita);
        } catch (error) {
            console.error("Error during DB operation:", error);
            return res.status(500).json({ message: "Server error!", status: 'failed' });
        }
    }
    if(req.method === 'DELETE'){
        try {
            const id = req.query.id;
            const berita = await prisma.berita.delete({ where: { id: Number(id) } });
            return res.status(200).json(berita);
        } catch (error) {
            console.error("Error during DB operation:", error);
            return res.status(500).json({ message: "Server error!", status: 'failed' });
        }
    }
    if(req.method === 'PUT'){
        try {
            const id = req.query.id;
            const { judul, deskripsi } = req.body;
            const berita = await prisma.berita.update({ where: { id: Number(id) }, data: { judul, deskripsi } });
            return res.status(200).json(berita);
        } catch (error) {
            console.error("Error during DB operation:", error);
            return res.status(500).json({ message: "Server error!", status: 'failed' });
        }
    }
}
