import prisma from "../../../../../lib/prisma";

export default async function korbanMeninggalHandler(req, res) {
  if (req.method === "POST") {
    const {
        mudahDiakses,
        sukar,
        Narahubung,
        alamat,
        jalurKomuikasi,
        keadaanListrik,
        bangunanSekolah,
        bangunanBalai,
        sumberAir,
        fasilitasUmum,
        bangunanPustu,
        fasilitasIbadah,
        pelaporan_id
    } = req.body;
    if (
        !mudahDiakses ||
        !sukar ||
        !Narahubung ||
        !alamat ||
        !jalurKomuikasi ||
        !keadaanListrik ||
        !bangunanSekolah ||
        !bangunanBalai ||
        !sumberAir ||
        !fasilitasUmum ||
        !bangunanPustu ||
        !fasilitasIbadah||
        !pelaporan_id
    ) {
        return res.status(400).json({ message: "Data tidak boleh Kosong!", status: "failed" });
    }
    try {
        const pelaporan = await prisma.aksesDanKeadaan.create({
            data: {
                mudahDiakses,
                sukar,
                Narahubung,
                alamat,
                jalurKomuikasi,
                keadaanListrik,
                bangunanSekolah,
                bangunanBalai,
                sumberAir,
                fasilitasUmum,
                bangunanPustu,
                fasilitasIbadah,
                pelaporan_id : parseInt(pelaporan_id)
            }
        });
        return res.status(200).json({message:"Berhasil menambahkan data akses dan keadaan", status : "success"});
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Server error!", status: "failed" });
    }
  }
}