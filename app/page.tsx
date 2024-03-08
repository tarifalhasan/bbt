import Header from "@/components/layout/Header";
import RightSidebar from "@/components/layout/RightSidebar";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <main className="  container  h-screen relative overflow-hidden">
      <div className="flex absolute top-1/2  -translate-y-1/2  w-full overflow-hidden p-0  h-[calc(100vh-40px)] items-start gap-10">
        <Sidebar />
        <div className="p-2  rounded-[7px] pt-[80px]  lg:pt-0 pl-0  flex-1 flex flex-col   relative  z-10 will-change-transform justify-start h-[calc(100vh-40px)] w-[1px]">
          <Header />
        </div>
        <RightSidebar />
      </div>
    </main>
  );
}
