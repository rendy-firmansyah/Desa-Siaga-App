import { parse } from "date-fns";
import prisma from "../../../../lib/prisma";

export default async function pengkajianHandler(req, res) {
  if (req.method === "GET") {
    const id = req.query.id

    const user = await prisma.user.findFirst({
        where:{
            id : parseInt(id)
        }
    })

    if(user.role !== 'relawan'){
        var pengkajian = await prisma.pengkajian.findMany({
            where:{
                desa_id: parseInt(user.desa_id)
            }
        })    
    }
    else{
        var pengkajian = await prisma.pengkajian.findMany({  
        })
    }
    const Data = await Promise.all(pengkajian.map(async (pengkajian) => {
        const desa = await prisma.desa.findFirst({
            where:{
                id : parseInt(pengkajian.desa_id)
            }
        });
        const kecamatan = await prisma.kecamatan.findFirst({
            where:{
                id: parseInt(desa.kecamatan_id)
            }
        });

        return {
            desa_id: pengkajian.desa_id,
            pengkajian_id: pengkajian.id,
            nama_user: user.username,
            nama_kecamatan: kecamatan.nama,
            nama_desa: desa.nama,
            tanggal_dibuat: pengkajian.created_at
        };
    }));


    return res.status(200).json(Data)
  }
}