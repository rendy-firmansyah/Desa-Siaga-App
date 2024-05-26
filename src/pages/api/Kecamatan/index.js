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
                id: Number(item.id)
            }));
            return res.status(200).json(convertedKecamatan);
        } catch (error) {
            return res.status(500).json({message: "Server error!", status : 'failed'})
        }
    }
}