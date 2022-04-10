import { useRouter } from "next/router";

function BannerComponent() {
  const router = useRouter();
  return (
    <div className="w-full h-auto p-4 flex flex-col md:flex-row-reverse">
      <div className="w-full md:w-1/2 flex items-center">
        <img
          className="xs:h-auto xs:w-3/4 md:h-auto md:w-full rounded-md "
          src="/pregnant_2.jpg"
          alt="Dj"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center my-4 md:my-0">
        <div className="">
          <div className="text-7xl bg-clip-text text-white mb-10">
            You Matter
          </div>
          <button
            className="rounded-md h-14 bg-blue-500 flex justify-center items-center w-full"
            onClick={() => router.push("/donate")}
          >
            <div className="flex justify-center text-xl text-white">Donate</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
