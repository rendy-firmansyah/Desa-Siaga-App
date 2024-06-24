import prisma from "../../../../lib/prisma";

export default async function peringatanDIniHandler(req, res) {
  if (req.method === "POST") {
    const { a, b, pengkajian_id } = req.body;

    if (!a || !b || !pengkajian_id) {
      return res.status(400).json({ message: "data tidak lengkap", status: "error" });
    }

    try {
        const jumlahTrue = (a ? 1 : 0) +
                           (b ? 1 : 0)

        let hasilPerhitungan = jumlahTrue * 2.33;

        const peringatanDini = await prisma.peringatanDini.create({
            data: {
            a,
            b,
            total: hasilPerhitungan,
            pengkajian_id: parseInt(pengkajian_id),
            },
        });

        return res
            .status(200)
            .json({ message: "Berhasil Menambahkan data Penguatan Kapasitas", status: "success" });
    } catch (error) {
      return res.status(500).json({ message: "server error", status: "error" });
    }
  }
}