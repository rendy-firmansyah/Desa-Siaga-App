import prisma from "../../../../lib/prisma";

export default async function korbanMeninggalHandler(req,res){
    if(req.method === 'POST'){ 
        const {namaFaskes,jenisRawat,lakiLaki,wanita,jumlah,pelaporan_id} = req.body;

        if(!namaFaskes || !jenisRawat || !lakiLaki || !wanita || !jumlah || !pelaporan_id){
            return res.status(400).json({message: "Data tidak boleh Kosong!"})
        }

        try {
            const pelaporan = await prisma.pelaporanAwal.create({
                data:{
                    namaFaskes,
                    jenisRawat,
                    lakiLaki : parseInt(lakiLaki),
                    wanita : parseInt(wanita),
                    jumlah : parseInt(jumlah),
                    pelaporan_id : parseInt(pelaporan_id)
                }
            })
            return res.statu(200).json({message : "Berhasil Menambahkan data Korban Luka - Luka"})
        }
        catch (error) {   
            return res.status(500).json({message: "Server error!", status : 'failed'})
        }
    }
}