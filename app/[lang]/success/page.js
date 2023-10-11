// "use client";

import Link from "next/link";
import Navbar from "../components/global-components/navbar";
import PageHeader from "../components/global-components/page-header";

export default function success() {
  return (
    <>
      <PageHeader>Thank you / Dziękujemy</PageHeader>

      <section className="container max-w-lg mx-auto flex flex-col  justify-center items-center">
        <h3 className="text-center my-10">
          Thank you for the order / Dziękujemy za złożenie zamówienia!
        </h3>
        <Link href="/">Back to homepage / wróć do strony głównej</Link>
      </section>
    </>
  );
}
