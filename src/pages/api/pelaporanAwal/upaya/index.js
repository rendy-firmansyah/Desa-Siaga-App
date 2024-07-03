import prisma from "../../../../../lib/prisma";

export default async function upayaHandler(req, res) {
  if (req.method === "POST") {
    const {
      upayaPenanggulangan,
      pelayananKesehatan,
      pelayananKesehatanReproduksi,
      pengendalianPenyakit,
      DVI,
      pelayananGizi,
      logisticKesehatan,
      pelayananJiwa,
      HambatanPelayananKesehatan,
      bantuanYangDiperlukanSegera,
      rencanaTindakLanjut,
      statusDesa,
      pelaporan_id,
      bayi,
      bumil,
      balita,
      cacat,
      buteki,
      lansia,
    } = req.body;

    if (
      !upayaPenanggulangan ||
      !pelayananKesehatan ||
      !pelayananKesehatanReproduksi ||
      !pengendalianPenyakit ||
      !DVI ||
      !pelayananGizi ||
      !logisticKesehatan ||
      !pelayananJiwa ||
      !HambatanPelayananKesehatan ||
      !bantuanYangDiperlukanSegera ||
      !rencanaTindakLanjut ||
      !statusDesa ||
      !pelaporan_id ||
      !bayi ||
      !bumil ||
      !balita ||
      !cacat ||
      !buteki ||
      !lansia
    ) {
      return res.status(400).json({ message: "Data tidak boleh Kosong!" });
    }

    try {
      const find = await prisma.upaya.findFirst({
        where: {
          pelaporan_id: parseInt(pelaporan_id),
        },
        include: {
          kelompokRentan: true, // Include kelompokRentan to update it later
        },
      });

      if (find) {
        const update = await prisma.upaya.update({
          where: {
            id: find.id,
          },
          data: {
            upayaPenanggulangan,
            pelayananKesehatan,
            pelayananKesehatanReproduksi,
            pengendalianPenyakit,
            DVI,
            pelayananGizi,
            logisticKesehatan,
            pelayananJiwa,
            HambatanPelayananKesehatan,
            bantuanYangDiperlukanSegera,
            rencanaTindakLanjut,
            statusDesa,
          },
        });
        const updateKelompok = await prisma.kelompokRentan.update({
          where: {
            id: find.kelompokRentan[0].id,
          },
          data: {
            bayi: parseInt(bayi),
            bumil: parseInt(bumil),
            balita: parseInt(balita),
            cacat: parseInt(cacat),
            buteki: parseInt(buteki),
            lansia: parseInt(lansia),
          },
        });

        return res.status(200).json({
          message: "Berhasil menambahkan data upaya",
          status: "success",
        });
      } else {
        const pelaporan = await prisma.upaya.create({
          data: {
            upayaPenanggulangan,
            pelayananKesehatan,
            pelayananKesehatanReproduksi,
            pengendalianPenyakit,
            DVI,
            pelayananGizi,
            logisticKesehatan,
            pelayananJiwa,
            HambatanPelayananKesehatan,
            bantuanYangDiperlukanSegera,
            rencanaTindakLanjut,
            statusDesa,
            pelaporan_id: parseInt(pelaporan_id),
            kelompokRentan: {
              create: {
                bayi: parseInt(bayi),
                bumil: parseInt(bumil),
                balita: parseInt(balita),
                cacat: parseInt(cacat),
                buteki: parseInt(buteki),
                lansia: parseInt(lansia),
              },
            },
          },
        });

        return res.status(200).json({
          message: "Berhasil menambahkan data upaya",
          status: "success",
        });
      }
    } catch (error) {
      return res.status(500).json({ message: "Server error!", status: "failed" });
    }
  }
}
