import prisma from "../../../../lib/prisma";

export default async function UserHandler(req,res){

    if(req.method === 'POST'){
        const{id,nama,alamat,telepon,website,email,luas,letak_dan_batas,banyak_dusun,jumlah_penduduk,akses_komunikasi,akses_transportasi,nama_responden,nip_responden,jabatan_responden,nomor_hp_responden} = req.body;
        if (!nama||!alamat||!telepon||!website||!email||!luas||!letak_dan_batas||!banyak_dusun||!jumlah_penduduk||!akses_komunikasi||!akses_transportasi||!nama_responden||!nip_responden||!jabatan_responden||!nomor_hp_responden){
            return res.status(400).json({message: "Data tidak boleh Kosong!"})
        }
        const name = nama.toLowerCase();
        const checkAutentic = await prisma.desa.findFirst({where : {nama:name}})
        if(checkAutentic){
            return res.status(200).json({message : "Desa Sudah Terdaftar",status : 'failed'})
        }
        try {
            const desa = await prisma.desa.create({
                data:{
                    nama : name,
                    alamat,
                    telepon,
                    website,
                    email,
                    luas: parseFloat(luas),
                    letak_dan_batas,
                    banyak_dusun:parseInt(banyak_dusun),
                    jumlah_penduduk:parseInt(jumlah_penduduk),
                    akses_komunikasi,
                    akses_transportasi,
                    nama_responden,
                    nip_responden,
                    jabatan_responden,
                    nomor_hp_responden,
                    kecamatan_id: Number(id)
                }
            })
            return res.status(200).json({message : "Registrasi Desa Berhasil",status : 'success'})
        } catch (error) {
            return res.status(500).json({message: "Server error!", status : 'error'})
        }
    }

    if(req.method === 'GET'){
        const {id} = req.query
        try {
            const desa = await prisma.desa.findMany({where : {kecamatan_id : Number(id)}});
            const convertedDesa = desa.map(item => ({
                ...item,
                id: item.id.toString(),
                kecamatan_id : item.kecamatan_id.toString()
            }));
            return res.status(200).json(convertedDesa);
        } catch (error) {
            return res.status(500).json({message: "Server error!", status : 'failed'})
        }
    }
    if(req.method === 'PUT'){
        const{id,nama,alamat,telepon,website,email,luas,letak_dan_batas,banyak_dusun,jumlah_penduduk,akses_komunikasi,akses_transportasi,nama_responden,nip_responden,jabatan_responden,nomor_hp_responden} = req.body;

        try {
            const desa = await prisma.desa.update({
                where : {id: Number(id)},
                data : {
                    nama : nama.toLowerCase(),
                    alamat,
                    telepon,
                    website,
                    email,
                    luas,
                    letak_dan_batas,
                    banyak_dusun,
                    jumlah_dusun,
                    jumlah_penduduk,
                    akses_komunikasi,
                    akses_transportasi,
                    nama_responden,
                    nip_responden,
                    jabatan_responden,
                    nomor_hp_responden
                }
            })
            return res.status(200).json({message : "Update Desa Berhasil",status : 'success'})
        } catch (error) {
            return res.status(500).json({message: "Server error!", status : 'failed'})
        }

    }
    if (req.method === 'DELETE') {
        const {id} = req.query
        try {
            const desa = await prisma.desa.delete({
                where : {id: Number(id)}
            })
            return res.status(200).json({message : "Delete Desa Berhasil",status : 'success'})
        } catch (error) {
            return res.status(500).json({message: "Server error!", status : 'failed'})
        }
    }
}