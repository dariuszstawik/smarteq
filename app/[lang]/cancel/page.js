"use client";

import Link from "next/link";
import Navbar from "../components/global-components/navbar";
import PageHeader from "../components/global-components/page-header";

export default function success() {
  return (
    <>
      <Navbar />
      <PageHeader>Cancelled</PageHeader>

      <section className="container max-w-lg mx-auto">
        Your oder has been cancelled.
      </section>
      <Link href="/">Back to homepage</Link>
    </>
  );
}
