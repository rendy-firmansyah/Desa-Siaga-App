import prisma from "../../../../lib/prisma";

export default async function kapasitasHandler(req, res) {
  if (req.method === "POST") {
        const {a,b,c,d,e,f,g,h,pengkajian_id} = req.body

        if(!a || !b || !c || !d || !e || !f || !g || !h,pengkajian_id){
            return res.status(400).json({message:"data tidak lengkap",status:'error'})
        }

        try{
            const jumlahTrue = (a ? 1 : 0) +
            (b ? 1 : 0) +
            (c ? 1 : 0) +
            (d ? 1 : 0) +
            (e ? 1 : 0) +
            (f ? 1 : 0) +
            (g ? 1 : 0) +
            (h ? 1 : 0);

            let hasilPerhitungan = jumlahTrue * 2.33;

            const peraturan = await prisma.kapasistas.create({
                data:{
                    a,
                    b,  
                    c,  
                    d,  
                    e,  
                    f,  
                    g,  
                    h,
                    total:hasilPerhitungan,  
                    pengkajian_id:parseInt(pengkajian_id)
                }
            })

            return res
            .status(200)
            .json({message:"Berhasil Menambahkan data Penguatan Kapasitas",status:'success'})
        }
        catch(error){
            return res.status(500).json({message:"server error",status:'error'})
        }
    }
}