import prisma from "../../../../lib/prisma";

export default async function UserHandler(req,res){

    if(req.method === 'POST'){
        const {nama,alamat} = req.body;
        
        if(!nama || !alamat){
            return res.status(400).json({message: "Data tidak boleh Kosong!"})
        }
        const findNama = await prisma.kecamatan.findFirst({where : {nama:nama}})
        if(findNama){
            return res.status(200).json({message : "Kecamatan Sudah Terdaftar",status : 'failed'})
        }
        try {
            const name = nama.toLowerCase()
            const kecamatan = await prisma.kecamatan.create({
                data:{
                    nama : name,
                    alamat
                }
            })
            return res.status(200).json({message : "Registrasi Kecamatan Berhasil",status : 'success'})
        } catch (error) {
            return res.status(500).json({message: "Server error!", status : 'failed'})
        }
    }
    if (req.method === 'GET') {
        try {
            const kecamatan = await prisma.kecamatan.findMany();
            const convertedKecamatan = kecamatan.map(item => ({
                ...item,
                id: item.id.toString(),
            }));
            return res.status(200).json(convertedKecamatan);
        } catch (error) {
            return res.status(500).json({message: "Server error!", status : 'failed'})
        }
    }
    if (req.method === 'PUT') {
        const {id,nama,alamat} = req.body;
        try {
            const kecamatan = await prisma.kecamatan.update({
                where : {id: Number(id)},
                data : {
                    nama : nama.toLowerCase(),
                    alamat
                }
            })
            return res.status(200).json({message : "Update Kecamatan Berhasil",status : 'success'})
        } catch (error) {
            return res.status(500).json({message: "Server error!", status : 'failed'})
        }
    }
    if (req.method === 'DELETE') {
        const {id} = req.body;
        try {
            const kecamatan = await prisma.kecamatan.delete({
                where : {id: Number(id)}
            })
            return res.status(200).json({message : "Delete Kecamatan Berhasil",status : 'success'})
        } catch (error) {
            return res.status(500).json({message: "Server error!", status : 'failed'})
        }
    }
}