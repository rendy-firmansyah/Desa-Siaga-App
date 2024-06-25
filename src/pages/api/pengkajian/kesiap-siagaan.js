import prisma from "../../../../lib/prisma";

export default async function kesiapSiagaanHandler(req, res) {
  if (req.method === "POST") {
    const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, pengkajian_id } =
      req.body;

    if (
      !a ||
      !b ||
      !c ||
      !d ||
      !e ||
      !f ||
      !g ||
      !h ||
      !i ||
      !j ||
      !k ||
      !l ||
      !m ||
      !n ||
      !pengkajian_id
    ) {
      return res
        .status(400)
        .json({ message: "data tidak lengkap", status: "error" });
    }

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
        (JSON.parse(k) ? 1 : 0) +
        (JSON.parse(l) ? 1 : 0) +
        (JSON.parse(m) ? 1 : 0);
      const checkboxTrue2 = JSON.parse(n) ? 1 : 0;

      let nilaiPerhitungan = checkboxTrue * 2.33 + checkboxTrue2 * 2.14;

      // const find = await prisma.kesiapSiagaan.findFirst({
      //     where: {
      //         pengkajian_id: parseInt(pengkajian_id),
      //     },
      // })

      // if (find) {
      //     const kesiapSiagaan = await prisma.kesiapSiagaan.update({
      //         where: {
      //             id: find.id,
      //         },
      //         data: {
      //             a,
      //             b,
      //             c,
      //             d,
      //             e,
      //             f,
      //             g,
      //             h,
      //             i,
      //             j,
      //             k,
      //             l,
      //             m,
      //             n,
      //             total: nilaiPerhitungan,
      //         },
      //     })

      //     return res
      //         .status(200)
      //         .json({ message: "Berhasil Mengupdate data Penguatan Kapasitas", status: "success" });
      // }

      const kesiapSiagaan = await prisma.kesiapSiagaan.create({
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
          l: JSON.parse(l),
          m: JSON.parse(m),
          n: JSON.parse(n),
          total: nilaiPerhitungan,
          pengkajian_id: parseInt(pengkajian_id),
        },
      });

      return res
        .status(200)
        .json({
          message: "Berhasil Menambahkan data Penguatan Kapasitas",
          status: "success",
        });
    } catch (error) {
      return res.status(500).json({ message: "server error", status: "error" });
    }
  }
}
