import prisma from "../../../../lib/prisma";

export default async function kapasitasHandler(req, res) {
  if (req.method === "POST") {
        const {a,b,c,d,e,f,g,h,pengkajian_id} = req.body

        if(!a || !b || !c || !d || !e || !f || !g || !h,pengkajian_id){
            return res.status(400).json({message:"data tidak lengkap",status:'error'})
        }

        try{
            const jumlahTrue = (JSON.parse(a) ? 1 : 0) +
            (JSON.parse(b) ? 1 : 0) +
            (JSON.parse(c) ? 1 : 0) +
            (JSON.parse(d) ? 1 : 0) +
            (JSON.parse(e) ? 1 : 0) +
            (JSON.parse(f) ? 1 : 0) +
            (JSON.parse(g) ? 1 : 0) +
            (JSON.parse(h) ? 1 : 0);

            let hasilPerhitungan = jumlahTrue * 2.33;

            const find = await prisma.kapasitas.findFirst({
                where: {
                    pengkajian_id: parseInt(pengkajian_id),
                },
            });

            if (find) {
                const kapasitas = await prisma.kapasitas.update({
                    where: {
                        id: find.id,
                    },
                    data: {
                        a,
                        b,
                        c,
                        d,
                        e,
                        f,
                        g,
                        h,
                        total: hasilPerhitungan,
                    },
                });

                return res
                    .status(200)
                    .json({ message: "Berhasil Mengupdate data Penguatan Kapasitas", status: "success" });
            }
            const peraturan = await prisma.kapasitas.create({
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