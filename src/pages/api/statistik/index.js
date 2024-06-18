import prisma from "../../../../lib/prisma";
import { format } from "date-fns";

export default async function pelaporanHandler(req, res) {
  if (req.method === "GET") {
    try {
      const id = req.query.id
      if(!id){
        const data = await prisma.kecamatan.findMany({
          select: {
            id: true,
            nama: true,
            desa: {
              select: {
                id: true,
                nama: true,
                pelaporanAwal: {
                  select: {
                    upaya: {
                      select: {
                        id: true,
                        statusDesa: true,
                      },
                      orderBy: {
                        id: 'desc',
                      },
                      take: 1,
                    },
                  },
                  orderBy: {
                    id: 'desc',
                  },
                  take: 1,
                },
              },
            },
          },
          });

          function formatData(data) {
            let formattedData = [];
        
            data.forEach(kecamatan => {
        
                let formattedKecamatan = {
                    id: kecamatan.id,
                    nama: kecamatan.nama,
                    desa: []
                };
        
                kecamatan.desa.forEach(desa => {
                    
                  let formattedDesa = {
                        id: desa.id,
                        nama: desa.nama,
                        status_desa: (desa.pelaporanAwal.length > 0) ? desa.pelaporanAwal[0].upaya[0].statusDesa : "" // Mengambil status desa, jika ada
                    };
                    
                    formattedKecamatan.desa.push(formattedDesa);
                });
        
                formattedData.push(formattedKecamatan);
            });
        
            return formattedData;
        }

        const formattedData = formatData(data) 

        return res.status(200).json(formattedData)
      }
      else{
          const data = await prisma.desa.findFirst({
            where: {
              id: Number(id),
            },
            include: {
              pelaporanAwal: {
                orderBy: {
                  id: 'desc',
                },
                take: 1,
                select: {
                  jenisBencana: true,
                  _count: {
                    select: {
                      korbanMeninggal: true,
                      korbanHilang: true,
                      korbanLuka: true,
                      korbanPengungsi: true,
                    },
                  },
                  aksesDanKeadaan:{
                    select:{
                      bangunanSekolah:true,
                      bangunanBalai : true,
                      bangunanPustu : true,
                      fasilitasIbadah :true,
                      fasilitasUmum :true,
                    }
                  },
                  upaya:{
                    select: {
                      upayaPenanggulangan : true,
                      bantuanYangDiperlukanSegera :true,
                      kelompokRentan: true,
                    }
                  },
                },
              },
            },
          });
          return res.status(200).json([data])
      }
    } catch (error) {
      return res.status(500).json({ message: "Server error!", status: "failed" });
    }
  }
}