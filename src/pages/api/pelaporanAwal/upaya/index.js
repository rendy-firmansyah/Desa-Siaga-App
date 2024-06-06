import prisma from "../../../../lib/prisma";

export default async function pelaporanHandler(req, res) {
  if (req.method === "POST") {
      const {
        pelayananKesehatan,
        pelayananKesehatanReproduksi,
        pengendalianPenyakit,
        DVI,
        pelayananGizi,
        logisticKesehatan,
        pelayananJiwa,
        HambatanPelayananKesehatan,
        bantuanUntukKelompokRentan,
        rencanaTindakLanjut,
        statusDesa,
        pelaporan_id,
      } = req.body;
      if(
        !pelayananKesehatan ||
        !pelayananKesehatanReproduksi ||
        !pengendalianPenyakit ||
        !DVI ||
        !pelayananGizi ||
        !logisticKesehatan ||
        !pelayananJiwa ||
        !HambatanPelayananKesehatan ||
        !bantuanUntukKelompokRentan ||
        !rencanaTindakLanjut ||
        !statusDesa ||
        !pelaporan_id
      ) {
        return res.status(400).json({ message: "Data tidak boleh Kosong!" });
      }

      try {
        const pelaporan = await prisma.upaya.create({
          data: {
            pelayananKesehatan,
            pelayananKesehatanReproduksi,
            pengendalianPenyakit,
            DVI,
            pelayananGizi,
            logisticKesehatan,
            pelayananJiwa,
            HambatanPelayananKesehatan,
            bantuanUntukKelompokRentan,
            rencanaTindakLanjut,
            statusDesa,
            pelaporan_id: parseInt(pelaporan_id),
          },
        });
        return res
          .status(200)
          .json({ message: "Berhasil menambahkan data upaya", status: "success" });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Server error!", status: "failed" });
      }
  }
}