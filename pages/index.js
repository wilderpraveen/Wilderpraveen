import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footers/Footer'

import IndexNavbar from "components/Navbar/IndexNavbar.js";
import ManuNavbar from "components/Navbar/menu_navbar.js";
import Slider from "components/slidershow";


export default function Home() {
  return (
    <>
      <IndexNavbar fixed />
      <ManuNavbar tab_list />      
      <Slider slideshow />

      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Bike the Hills- one of Mountian Bike provider in Spiti Valley.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                We provide MTB's on rent and orgenize rides for sightseing around Kaza.
                service for bikes and spare parts for MTB.
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute top-auto b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-700-px"
          src="/img/img-2.jpg"
          alt="..."
        />
      </section>
      <div className="container">
      <Head>
        <title>Wilder Praveen!</title>
        <link rel="icon" href="/Brand/bth_logo.ico" />
      </Head>

    
      <Footer />
      </div>
    </>
  )
}
