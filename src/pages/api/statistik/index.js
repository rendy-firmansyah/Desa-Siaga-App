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
        return res.status(200).json(data)
      }
      else{

      }
    } catch (error) {
      return res.status(500).json({ message: "Server error!", status: "failed" });
    }
  }
}