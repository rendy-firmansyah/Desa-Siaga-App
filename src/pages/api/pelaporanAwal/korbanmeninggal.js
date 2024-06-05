import prisma from "../../../../lib/prisma";

export default async function korbanMeninggalHandler(req, res) {
  if (req.method === "POST") {
    const {
      nama,
      alamat,
      jenisKelamin,
      usia,
      tempatMeninggal,
      penyebab,
      pelaporan_id,
    } = req.body;

    if (
      !nama ||
      !alamat ||
      !jenisKelamin ||
      !usia ||
      !tempatMeninggal ||
      !penyebab
    ) {
      return res.status(400).json({ message: "Data tidak boleh Kosong!" });
    }

    try {
      const pelaporan = await prisma.korbanMeninggal.create({
        data: {
          nama,
          alamat: alamat,
          jenisKelamin: jenisKelamin,
          usia: parseInt(usia),
          tempatMeninggal: tempatMeninggal,
          penyebab: penyebab,
          pelaporan_id: parseInt(pelaporan_id),
        },
      });

      return res.status(200).json({message:"Berhasil menambahkan data korban meinggal", status: "success"});
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error!", status: "failed" });
    }
  }
  if (req.method === "GET") {
    try {
      const id = req.query.id;
      const pelaporan = await prisma.korbanMeninggal.findMany({
        where: { pelaporan_id: parseInt(id) },
      });
      return res.status(200).json(pelaporan);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error!", status: "failed" });
    }
  }
}
