const Services = () => {
  return (
    <section className="mt-8">
         <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
    <h3 class="mb-6 text-3xl font-bold text-slate-900">Our Services</h3>
    <p class="mb-6 pb-2 md:mb-12 md:pb-0 text-slate-700">
    We offer high quality cosmetic products services based on close vision into the industry and beauty world
    </p>
  </div>
        <div className="container px-24 py-8 mx-auto grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
       
            <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg">
                <img className="object-cover object-center w-full h-56" src="https://d2pi0n2fm836iz.cloudfront.net/323767/021220221221266207a646ea3bb.jpg" alt="avatar" />
                <div className="flex items-center px-6 py-3 bg-primary_dark">
                    <h1 className="mx-3 text-lg font-semibold text-white">Eyelashes</h1>
                </div>
                <div className="px-6 py-4">
                    <p className="py-2 text-left font-medium">
                        Our two type of lashes comes in Real Mink form from the Serbian mink tail and Faux mink lashes Vegan choice, where you will get a light, fluffy soft natural look,to give your eyes the best shape without the need to curl or add a touch of mascara on. With the ability to reuse them up to 15 times.
                    </p>
                </div>
            </div>

            <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg">
                <img className="object-cover object-center w-full h-56" src="https://d2pi0n2fm836iz.cloudfront.net/323767/021220221227286207a7b0c5064.jpg" alt="avatar" />
                <div className="flex items-center px-6 py-3 bg-primary_dark">
                    <h1 className="mx-3 text-lg font-semibold text-white">Makeup</h1>
                </div>
                <div className="px-6 py-4">
                    <p className="py-2 text-gray-700 text-left">
                    Unleash your Glamours by the touch of our natural Matte lipstick and lipliner to give the right volume and look for your lips.
                    </p>
                </div>
            </div>

            <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg">
                <img className="object-cover object-center w-full h-56" src="https://d2pi0n2fm836iz.cloudfront.net/323767/021220221234296207a955ab802.jpg" alt="avatar" />
                <div className="flex items-center px-6 py-3 bg-primary_dark">
                    <h1 className="mx-3 text-lg font-semibold text-white">Lenses</h1>
                </div>
                <div className="px-6 py-4">
                    <p className="py-2 text-gray-700 text-left">
                    Give your eyes the right natural looking color to suit your daily wearing and night outing with our Korean lenses and let people question if this is your real eye color.
                    </p>
                </div>
            </div>
        </div>    
    </section>
  );
};

export default Services;
