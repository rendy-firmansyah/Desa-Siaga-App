import prisma from "../../../../lib/prisma";

export default async function korbanMeninggalHandler(req, res) {
  if (req.method === "POST") {
    const {
      lokasi,
      gangguanAnak,
      gangguanDewasa,
      lakiLaki,
      perempuan,
      jumlah,
      bayi,
      balita,
      bumil,
      buteki,
      cacatLaki,
      cacatPerempuan,
      lansiaLaki,
      lansiaPerempuan,
      pelaporan_id,
    } = req.body;
    if (
      !lokasi ||
      !gangguanAnak ||
      !gangguanDewasa ||
      !lakiLaki ||
      !perempuan ||
      !jumlah ||
      !bayi ||
      !balita ||
      !bumil ||
      !buteki ||
      !cacatLaki ||
      !cacatPerempuan ||
      !lansiaLaki ||
      !lansiaPerempuan ||
      !pelaporan_id
    ) {
      return res
        .status(400)
        .json({ message: "Data tidak boleh Kosong!", status: "failed" });
    }

    try {
      const pelaporan = await prisma.korbanPengungsi.create({
        data: {
          lokasi: lokasi,
          gangguanAnak: parseInt(gangguanAnak),
          gangguanDewasa: parseInt(gangguanDewasa),
          lakiLaki: parseInt(lakiLaki),
          perempuan: parseInt(perempuan),
          jumlah: parseInt(jumlah),
          bayi: parseInt(bayi),
          balita: parseInt(balita),
          bumil: parseInt(bumil),
          buteki: parseInt(buteki),
          cacatLaki: parseInt(cacatLaki),
          cacatPerempuan: parseInt(cacatPerempuan),
          lansiaLaki: parseInt(lansiaLaki),
          lansiaPerempuan: parseInt(lansiaPerempuan),
          pelaporan_id: parseInt(pelaporan_id),
        },
      });
      return res
        .status(200)
        .json({
          message: "Berhasil menambahkan data korban pengungsi",
          status: "success",
        });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error!", status: "failed" });
    }
  }
  if (req.method === "GET") {
    // try{
    const id = req.query.id;
    const pengungsi = await prisma.korbanPengungsi.findMany({
      where: { pelaporan_id: parseInt(id) },
    });
    return res.status(200).json(pengungsi);

    // }catch(error){
    //     return res.status(500).json({ message: "Server error!", status: "failed" });
    // }
  }
}
