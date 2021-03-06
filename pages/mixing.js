import React from "react";
import Link from "next/link";
import Hero from "../components/Hero/Hero";
import Head from "next/head";
const mixing = () => {
  return (
    <>
      <Hero>
        <Head>
          <title>Mekoyo Production</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="container">
          <div className="py-5 my-5">
            <h3>PROFESSIONAL</h3>
            <h1>Mixing & Mastering</h1>
          </div>
        </header>
      </Hero>

      <div className="container py-5 my-5">
        <h1 className=" p-2">Mixing and Mastering Services</h1>
        <hr />
        <div className="pb-5">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </div>

        <section className=" row row-cols-1 row-cols-md-3  mb-3">
          <div className="col ">
            <div className=" card bg-transparent border-primary p-3 mb-3">
              <h2 className="card-header px-0 text-lg">Instant conclusion</h2>
              <p>
                It to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <div className=" card bg-transparent border-primary p-3  mb-3">
              <h2 className="card-header px-0 text-lg">Choose your plan</h2>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <div className=" card bg-transparent border-primary p-3 mb-3 ">
              <h2 className="card-header px-0 text-lg">Create an account</h2>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially
              </p>
            </div>
          </div>{" "}
        </section>

        <section className="py-5 mt-5 pricing-section">
          <h1 className="p-2">Select your plan</h1>
          <hr />
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
              <div className="card mb-4  bg-transparent border-primary rounded-3 shadow-sm">
                <div className="card-header py-3 border-primary">
                  <h4 className="my-0 fw-normal">Mixing only</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$ 230</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Track Balancing</li>
                    <li>Vocal Tuning</li>
                    <li>EQ / Compression</li>
                    <li>Noise Gate / Desser</li>
                    <li>Reverb / Delay + More</li>
                  </ul>
                  <div className="card-footer">
                    <Link href="#">
                      <button
                        role="button"
                        className="btn btn-primary rounded-0 py-3"
                      >
                        {" "}
                        Mix my Track
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4  bg-transparent border-primary rounded-3 shadow-sm">
                <div className="card-header py-3 border-primary">
                  <h4 className="my-0 fw-normal">Mastering only</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$ 100</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>EQ / Compressor</li>
                    <li> Overall Ambience </li>
                    <li>Bass Enhacement</li>
                    <li>Stereo Widening</li>
                    <li>Noise Reduction</li>
                  </ul>
                  <p>
                    If your track has a great mix and all you want is Mastering
                  </p>
                  <div className="card-footer">
                    <Link href="#">
                      <button
                        role="button"
                        className="btn btn-primary rounded-0 py-3 "
                      >
                        {" "}
                        Mix my Track
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4  bg-transparent border-primary rounded-3 shadow-sm border-primary">
                <div className="card-header py-3  border-primary">
                  <h4 className="my-0 fw-normal">mixing & mastering</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$ 300</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Equalization/Dynamics </li>
                    <li>Peak Limiting </li>
                    <li>PEQ / Compression </li>
                    <li>Maximized Loudness </li>
                    <li>Stereo Widening</li>
                    <li>Unlimited Review </li>
                  </ul>
                  <p>If you want to fully Mix and Master your track </p>
                  <div className="card-footer">
                    <Link href="#">
                      <button
                        role="button"
                        className="btn btn-primary rounded-0 py-3"
                      >
                        {" "}
                        Mix & Matser my Track
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default mixing;
