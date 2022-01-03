import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import {
  Navigation,
  showcases,
} from "../../../src/common/components/Navigation/Navigation";

import { ALGORITHMS } from "../../../src/const/algorithms";
import { unsplashLoader } from "../../../src/common/utils/unsplashLoader";

const Showcases: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Adriansyah | Showcases - Algorithms</title>
        <meta
          name="description"
          content="Adriansyah learning about algorithm"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main className="bg-stone-100 flex-grow flex flex-col justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="mb-9 font-sans text-3xl text-center font-bold text-gray-800 underline underline-offset-8">
              Algorithms
            </h2>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {ALGORITHMS.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <Image
                      loader={unsplashLoader}
                      layout="fill"
                      src={callout.imageSrc}
                      alt={callout.name}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Showcases;
