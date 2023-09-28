"use client";

import Link from "next/link";
import Navbar from "../components/global-components/navbar";
import PageHeader from "../components/global-components/page-header";

export default function success() {
  return (
    <>
      <Navbar />
      <PageHeader>Order scceded</PageHeader>

      <section className="container max-w-lg mx-auto">
        Thank you for the order! Within 48 hours you will receive an e-mail with
        the ordered e-books.
      </section>
      <Link href="/">Back to homepage</Link>
    </>
  );
}
