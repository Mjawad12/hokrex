import AccountNav from "@/components/AccountNav";

export default function layout({ children }) {
  return (
    <section className="w-full">
      <div className="m-auto mt-9 flex w-full max-w-[1040px] flex-col px-5">
        <header className="w-full">
          <AccountNav />
        </header>
        {children}
      </div>
    </section>
  );
}
