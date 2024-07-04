import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Konfirm from "./konfirmasi";
import bgKesiapsiagaan from "../../../../../../public/bg-2.jpg";
import Router, { useRouter } from "next/router";
import axios from "axios";
import nookies from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//islogin
export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  if (!cookies.role) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else if (cookies.role === "super admin") {
    return {
      redirect: {
        destination: "/dashboard/superAdmin",
      },
    };
  }

  return {
    props: {
      desaId: cookies.desa_id || null,
    },
  };
}

const Kesiapsiagaan = ({desaId}) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const [d, setD] = useState();
  const [e, setE] = useState();
  const [f, setF] = useState();
  const [g, setG] = useState();
  const [h, setH] = useState();
  const [i, setI] = useState();
  const [j, setJ] = useState();
  const [k, setK] = useState();
  const [l, setL] = useState();
  const [m, setM] = useState();
  const [n, setN] = useState();

  const visible = () => {
    setVisibleModal(true);
  };

  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  const handleSimpan = () => {
    visible();
  };

  const handleBack = () => {
    Router.back();
  };

  const router = useRouter();
  const { id } = router.query;

  const postData = async () => {
    const res = await axios.post("/api/pengkajian/kesiap-siagaan", {
      a: a,
      b: b,
      c: c,
      d: d,
      e: e,
      f: f,
      g: g,
      h: h,
      i: i,
      j: j,
      k: k,
      l: l,
      m: m,
      n: n,
      pengkajian_id: id,
    });
    if (res.data.status === "success") {
      toast(`✅ ${res.data.message}`, {
        position: "top-right",
        autoClose: 1,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 1,
        theme: "light",
      });
      setTimeout(() => {
        router.push(
          `/dashboard/user/kajianResiko/kesimpulan?id=${encodeURIComponent(id)}&desa_id=${encodeURIComponent(desaId)}`
        );
      }, 3000);
    } else {
      toast(`❌ ${res.data.message}`, {
        position: "top-right",
        autoClose: 0.1,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 1,
        theme: "light",
      });
    }
  };

  return (
    <section className="container-fluid h-full relative">
      <ToastContainer />
      <div className="absolute -z-10 inset-0">
        <Image src={bgKesiapsiagaan} alt="bg-image" className="h-full" />
      </div>
      <div className="flex flex-col justify-center items-center xl:mx-[151px] lg:mx-[121px] md:mx-[80px] mx-[20px]">
        <div className="text-black font-bold xl:text-[32px] lg:text-[32px] md:text-[28px] text-[24px] text-center mt-[60px]">
          Kuisioner Kajian Resiko Bencana/Krisis Kesehatan
        </div>
        <div className="w-full bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
          <div className="text-black font-semibold text-[16px]">
            Kesiapsiagaan
          </div>
          <div className="my-[20px] w-full h-[50px] rounded bg-input-default border border-primary-default" />

          {/* Pertanyaan Start */}

          <div className="grid grid-cols-12">
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:me-0 lg:me-0 md:me-[20px] me-0">
              <div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    a. Desa menyusun rencana penanggulangan bencana/krisis
                    kesehatan
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="desa_rencana"
                      onChange={(e) => setA(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Ada
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="desa_rencana"
                      onChange={(e) => setA(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Ada
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    b. Desa melakukan simulasi dari rencana penanggulangan
                    bencana/krisis kesehatan
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="desa_simulasi"
                      onChange={(e) => setB(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Melakukan
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="desa_simulasi"
                      onChange={(e) => setB(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Melakukan
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    c. SOP penanganan korban bencana dilapangan
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="sop_korban"
                      onChange={(e) => setC(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Memiliki
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="sop_korban"
                      onChange={(e) => setC(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Memiliki
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    d. SOP pengelolaan obat dan logistic Kesehatan bencana
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="sop_logistik"
                      onChange={(e) => setD(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Memiliki
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="sop_logistik"
                      onChange={(e) => setD(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Memiliki
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    e. SOP pengelolaan bantuan relawan
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="sop_relawan"
                      onChange={(e) => setE(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Memiliki
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="sop_relawan"
                      onChange={(e) => setE(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Memiliki
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    f. SOP pemantauan kejadian krisis kesehatan
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="sop_kejadian"
                      onChange={(e) => setF(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Memiliki
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="sop_kejadian"
                      onChange={(e) => setF(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Memiliki
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    g. SOP pelaporan kejadian krisis kesehatan
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="sop_pelaporan"
                      onChange={(e) => setG(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Memiliki
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="sop_pelaporan"
                      onChange={(e) => setG(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Memiliki
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
              <div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    h. SOP system rujukan saat terjadi bencana
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="sop_rujukan"
                      onChange={(e) => setH(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Memiliki
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="sop_rujukan"
                      onChange={(e) => setH(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Memiliki
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    i. SOP pelayanan kesehatan saat terjadi bencana
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="sop_pelayanan"
                      onChange={(e) => setI(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Memiliki
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="sop_pelayanan"
                      onChange={(e) => setI(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Memiliki
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    j. Desa memahami dana tak terduga dalam penanggulangan
                    bencana
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="dana_terduga"
                      onChange={(e) => setJ(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Ya
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="dana_terduga"
                      onChange={(e) => setJ(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    k. Sarana prasarana penanggulangan krisis kesehatan
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="sarana_prasarana"
                      onChange={(e) => setK(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Memiliki
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="sarana_prasarana"
                      onChange={(e) => setK(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Memiliki
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    l. Penyediaan sarana prasarana telah menyesuaikan dengan
                    ancaman bencana di desa
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="penyedia_sarana"
                      onChange={(e) => setL(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Ya
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="penyedia_sarana"
                      onChange={(e) => setL(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    m. Sarana prasarana telah mencukupi
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="sarana_cukup"
                      onChange={(e) => setM(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Ya
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="sarana_cukup"
                      onChange={(e) => setM(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    n. Desa memiliki pos pelayanan kebencanaan terpadu
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="pos_pelayanan"
                      onChange={(e) => setN(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Ya
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="pos_pelayanan"
                      onChange={(e) => setN(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pertanyaan End */}
        </div>

        <div className="my-5 w-full">
          <div className="grid grid-cols-12">
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:me-[14px] lg:me-[14px] md:me-[14px] me-0">
              <button
                type=""
                className="bg-secondary-default w-full py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                onClick={handleBack}
              >
                Kembali
              </button>
            </div>
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:ms-[14px] lg:ms-[14px] md:ms-[14px] ms-0 xl:mt-0 lg:mt-0 md:mt-0 mt-4">
              <button
                type=""
                onClick={handleSimpan}
                className="bg-secondary-default w-full py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>

      {visibleModal && (
        <Konfirm onClose={handleCloseModal} save={() => postData()} />
      )}
    </section>
  );
};

export default Kesiapsiagaan;
