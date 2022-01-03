import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Navigation } from "../src/common/components/Navigation/Navigation";
import { Socials } from "../src/common/components/Socials/Socials";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Adriansyah</title>
        <meta
          name="description"
          content="Adriansyah personal website. Personal profile and blogs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main className="bg-stone-100 flex-grow flex flex-col justify-center items-center">
        <h2 className="font-sans font-bold text-5xl mb-7">Adriansyah</h2>
        <Socials />
        <p className="font-sans text-lg tracking-wide text-gray-500">
          Getting to know me better and what I do.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link href="/showcases">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-600 hover:bg-dark-700 md:py-4 md:text-lg md:px-10">
                Showcases
              </a>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="/profile"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-700 bg-zinc-200 hover:bg-zinc-300 md:py-4 md:text-lg md:px-10"
            >
              Profile
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
