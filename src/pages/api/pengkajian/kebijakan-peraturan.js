import prisma from "../../../../lib/prisma";

export default async function peraturanHandler(req, res) {
  if (req.method === "POST") {
    const { a, b, c, d, e, f, g, h, pengkajian_id } = req.body;

    if (!a || !b || !c || !d || !e || !f || !g || !h) {
      return res
        .status(400)
        .json({ message: "data tidak lengkap", status: "error" });
    }

    try{
    // Menghitung jumlah true
    const jumlahTrue =
      (JSON.parse(a) ? 1 : 0) + 
      (JSON.parse(b) ? 1 : 0) +
      (JSON.parse(c) ? 1 : 0) +
      (JSON.parse(d) ? 1 : 0) +
      (JSON.parse(e) ? 1 : 0) +
      (JSON.parse(f) ? 1 : 0) +
      (JSON.parse(g) ? 1 : 0) +
      (JSON.parse(h) ? 1 : 0);

    // Mengkalikan jumlah true dengan 2.33 jika semua true
    let hasilPerhitungan = jumlahTrue * 2.33;

    const find = await prisma.peraturan.findFirst({
      where: {
        pengkajian_id: parseInt(pengkajian_id),
      },
    });

    if (find) {
      const peraturan = await prisma.peraturan.update({
        where: {
          id: find.id,
        },
        data: {
          a: JSON.parse(a),
          b: JSON.parse(b),
          c: JSON.parse(c),
          d: JSON.parse(d),
          e: JSON.parse(e),
          f: JSON.parse(f),
          g: JSON.parse(g),
          h: JSON.parse(h),
          total: hasilPerhitungan,
        },
      })
      return res.status(200).json({
        message: "Berhasil Menambahkan data Kebijakan Peraturan",
        status: "success",
      });   
    }

    const peraturan = await prisma.peraturan.create({
      data: {
        a: JSON.parse(a),
        b: JSON.parse(b),
        c: JSON.parse(c),
        d: JSON.parse(d),
        e: JSON.parse(e),
        f: JSON.parse(f),
        g: JSON.parse(g),
        h: JSON.parse(h),
        total: hasilPerhitungan,
        pengkajian_id: parseInt(pengkajian_id),
      },
    });

    return res.status(200).json({
      message: "Berhasil Menambahkan data Kebijakan Peraturan",
      status: "success",
    });
    }
    catch(error){
        return res.status(500).json({message:"server error",status:'error'})
    }
  }
}
