// "use client";

import Link from "next/link";

import PageHeader from "../components/global-components/page-header";

export default function cancelled() {
  return (
    <>
      <PageHeader>Cancelled / Anulowano</PageHeader>

      <section className="container max-w-lg mx-auto flex flex-col  justify-center items-center">
        <h3 className="text-center my-10">
          Your oder has been cancelled / Twoje zamówienie zostało anulowane.
        </h3>
        <Link href="/">Back to homepage / wróć do strony głównej</Link>
      </section>
    </>
  );
}
