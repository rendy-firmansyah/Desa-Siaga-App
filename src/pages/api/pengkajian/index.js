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
                desa_id : parseInt(desa_id)
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
  if(req.method === "GET"){
    const id = req.query.id
    const Peraturan = await prisma.peraturan.findFirst({
        where:{
            pengkajian_id : parseInt(id)
        },
        select:{
            total:true
        }
    })
    const kapasitas = await prisma.kapasitas.findFirst({
        where:{
            pengkajian_id : parseInt(id)
        },
        select:{
            total:true
        }
    })
    const peringatanDini = await prisma.peringatanDini.findFirst({
        where:{
            pengkajian_id : parseInt(id)
        },
        select:{
            total:true
        }
    })
    const mitigasi = await prisma.mitigasi.findFirst({
        where:{
            pengkajian_id : parseInt(id)
        },
        select:{
            total:true
        }
    })
    const kesiapSiagaan = await prisma.kesiapSiagaan.findFirst({
        where:{
            pengkajian_id : parseInt(id)
        },
        select:{
            total:true
        }
    })

    const persentase = ((Peraturan?.total || 0) + (kapasitas?.total || 0) + (peringatanDini?.total || 0) + (mitigasi?.total || 0) + (kesiapSiagaan?.total || 0))
    return res.status(200).json({persentase})
  }
}