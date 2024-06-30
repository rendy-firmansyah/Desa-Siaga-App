import prisma from "../../../../lib/prisma";

export default async function mitigasiHandler(req, res) {
  if (req.method === "POST") {
    const { a, b, c, d, e, f, g, h, i, j, k, pengkajian_id } = req.body;

    try {
      const checkboxTrue =
        (JSON.parse(a) ? 1 : 0) +
        (JSON.parse(b) ? 1 : 0) +
        (JSON.parse(c) ? 1 : 0) +
        (JSON.parse(d) ? 1 : 0) +
        (JSON.parse(e) ? 1 : 0) +
        (JSON.parse(f) ? 1 : 0) +
        (JSON.parse(g) ? 1 : 0) +
        (JSON.parse(h) ? 1 : 0) +
        (JSON.parse(i) ? 1 : 0) +
        (JSON.parse(j) ? 1 : 0) +
        (JSON.parse(k) ? 1 : 0);

      let nilaiPerhitungan = checkboxTrue * 2.33;

      const find = await prisma.mitigasi.findFirst({
          where: {
              pengkajian_id: parseInt(pengkajian_id),
          },
      });

      if (find) {
        const mitigasi = await prisma.mitigasi.update({
          where: {
            id: find.id,
          },
          data: {
            a : JSON.parse(a),
            b : JSON.parse(b),
            c : JSON.parse(c),
            d : JSON.parse(d),
            e : JSON.parse(e),
            f : JSON.parse(f),
            g : JSON.parse(g),
            h : JSON.parse(h),
            i : JSON.parse(i),
            j : JSON.parse(j),
            k : JSON.parse(k),
            total: nilaiPerhitungan,
          },
        })

        return res
          .status(200)
          .json({ message: "Berhasil Mengupdate data Mitigasi", status: "success" });
      }

      const mitigasi = await prisma.mitigasi.create({
        data: {
          a: JSON.parse(a),
          b: JSON.parse(b),
          c: JSON.parse(c),
          d: JSON.parse(d),
          e: JSON.parse(e),
          f: JSON.parse(f),
          g: JSON.parse(g),
          h: JSON.parse(h),
          i: JSON.parse(i),
          j: JSON.parse(j),
          k: JSON.parse(k),
          total: nilaiPerhitungan,
          pengkajian_id: parseInt(pengkajian_id),
        },
      });

      return res
        .status(200)
        .json({
          message: "Berhasil Menambahkan data Mitigasi",
          status: "success",
        });
    } catch (error) {
      return res.status(500).json({ message: "server error", status: "error" });
    }
  }
}
