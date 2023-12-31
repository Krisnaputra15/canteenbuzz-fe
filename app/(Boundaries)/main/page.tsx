"use client";
import {
  getCurrentPenjualNamaKios,
  redirectGeneration,
  redirectListPage,
  subscribePesanan,
} from "@/app/(Controls)/PenjualHandler/handler";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HalamanUtamaPenjual = () => {
  useEffect(() => {
    subscribePesanan(setPesanan);
  }, []);
  const [pesanan, setPesanan] = useState<String[]>();
  const namaKios = getCurrentPenjualNamaKios();
  const router = useRouter();
  function showGenerationPage() {
    redirectGeneration(router);
  }
  function showListPage() {
    redirectListPage(router);
  }
  return (
    <div className="h-screen w-screen ">
      <div className="h-1/4 bg-sky-800 text-white flex flex-col items-center justify-center">
        <div>{namaKios}</div>
        <div className="text-red-200 text-sm">
          Jumlah Antrian : {pesanan?.length}
        </div>
      </div>
      <div className="h-3/4  flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center justify-center ">
          <button className="w-full" onClick={() => showGenerationPage()}>
            Generate URL+QR Code
          </button>

          <button className="w-full" onClick={() => showListPage()}>
            Lihat daftar pelanggan
          </button>
        </div>
      </div>
    </div>
  );
};
export default HalamanUtamaPenjual;
