import prisma from "../../../../lib/prisma";

export default async function pengkajianHandler(req, res) {
  if (req.method === "POST") {
    const {jenis_ancaman,riwayat,desa_id} = req.body

    if(!jenis_ancaman || !riwayat || !desa_id){
        return res.status(400).json({message:"data tidak lengkap",status:'error'})
    }
    try{
        const pengkajian = await prisma.pengkajian.create({
            data:{
                jenis_ancaman,
                riwayat,
                desa_id
            }
        })
        return res
        .status(200)
        .json({message:"Berhasil Menambahkan data Kebijakan Peraturan",status:'success',pengkajian_id:pengkajian.id})
    }
    catch(error){
        return res.status(500).json({message:"server error",status:'error'})
    }
  }
}