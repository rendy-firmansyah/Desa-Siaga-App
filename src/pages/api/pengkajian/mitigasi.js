import prisma from "../../../../lib/prisma";

export default async function mitigasiHandler(req, res) {
  if (req.method === "POST") {
    const { a, b, c, d, e, f, g, h, i, j, k, pengkajian_id } = req.body;

    if (!a || !b || !c || !d || !e || !f || !g || !h || !i || !j || !k || !pengkajian_id) {
      return res.status(400).json({ message: "data tidak lengkap", status: "error" });
    }

    try {
        const checkboxTrue = (a ? 1 : 0) +
                           (b ? 1 : 0) +
                           (c ? 1 : 0) +
                           (d ? 1 : 0) +
                           (e ? 1 : 0) +
                           (f ? 1 : 0) +
                           (g ? 1 : 0) +
                           (h ? 1 : 0) +
                           (i ? 1 : 0) +
                           (j ? 1 : 0) +
                           (k ? 1 : 0)

        let nilaiPerhitungan = checkboxTrue * 2.33;

        const mitigasi = await prisma.mitigasi.create({
            data: {
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            total: nilaiPerhitungan,
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