import Header from "@/components/layout/Header";

const WALLET = () => {
  return (
    <div className=" w-full xl:w-[81%] h-full flex gap-10">
      <div className="p-2  rounded-[7px]   lg:pt-0 pl-0  flex-1 flex flex-col relative z-10 will-change-transform justify-start h-[calc(100vh-40px)]  w-full xl:w-[62%]">
        <Header />
        <h2>WALLET</h2>
      </div>
      <aside className="flex-col  rounded-[7px] justify-between right-0 left-0 top-0 overflow-hidden overflow-y-auto bg-card flex-none max-w-[280px] relative w-[19%] z-50 h-full hidden xl:flex">
        sdsds
      </aside>
    </div>
  );
};

export default WALLET;
