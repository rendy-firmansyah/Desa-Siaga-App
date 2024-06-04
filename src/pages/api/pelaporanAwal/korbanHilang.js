import prisma from "../../../../lib/prisma";

export default async function korbanMeninggalHandler(req, res) {
  if (req.method === "POST") {
    const { nama, alamat, jenisKelamin, usia, lokasiHilang, pelaporan_id } =
      req.body;

    if (!nama || !alamat || !jenisKelamin || !usia || !lokasiHilang) {
      return res.status(400).json({ message: "Data tidak boleh Kosong!" });
    }

    try {
      const pelaporan = await prisma.korbanHilang.create({
        data: {
          nama,
          alamat: alamat,
          jenisKelamin: jenisKelamin,
          usia: parseInt(usia),
          lokasiHilang: lokasiHilang,
          pelaporan_id: parseInt(pelaporan_id),
        },
      });

      return res.status(200).json("Berhasil menambahkan data korban hilang");
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error!", status: "failed" });
    }
  }
  if (req.method === "GET") {
    try {
      const id = req.query.id;
      const pelaporan = await prisma.korbanHilang.findMany({where : {pelaporan_id : parseInt(id)} });
      return res.status(200).json(pelaporan);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error!", status: "failed" });
    }
  }
}
