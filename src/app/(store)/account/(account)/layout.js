import AccountNav from "@/components/AccountNav";

export default function layout({ children }) {
  return (
    <section className="relative flex min-h-[calc(100vh-73px)] w-full flex-col justify-between">
      <div className="m-auto mt-9 flex w-full max-w-[1040px] flex-col px-5">
        <header className="w-full">
          <AccountNav />
        </header>
        {children}
      </div>
      <FooterBlack />
    </section>
  );
}

const FooterBlack = () => {
  return (
    <footer className="flex w-full items-center justify-between bg-black px-7 py-2.5">
      <span className="text-[12px] text-white ">©2024, Sublimatics Inc.</span>
      <span className="text-[12px] text-white">Made by Hokrex</span>
    </footer>
  );
};
