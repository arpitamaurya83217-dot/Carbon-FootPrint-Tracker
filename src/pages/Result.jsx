import React from "react";
import { useLocation } from "react-router-dom";
import { PieChart } from "@mui/x-charts/PieChart";

function Result() {
  const location = useLocation();
  const { carbonFootprint, requiredToucanTokens, cost } =
    location.state || {
      carbonFootprint: null,
      requiredToucanTokens: null,
      cost: null,
    };

  return (
    <div>
      <main className="bg-white block">

        {/* first section */}
        <section className="bg-[url('/images/forests-main.png')] bg-center bg-no-repeat bg-cover w-full text-white mb-24">
          <div className="flex flex-col md:flex-row mx-auto px-4 md:px-0">

            {/* left */}
            <div className="px-[4%] py-[40px] text-center w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl leading-[1] uppercase mb-11 max-w-[400px] mx-auto font-bold">
                <div className="bg-[rgba(100,255,255,0.40)] max-w-[170px] h-[40px] flex justify-center items-center mx-auto mb-4">
                  Result :
                </div>
                Your carbon impact is {carbonFootprint?.toFixed(2)} kg C0<sub>2</sub>e
              </h2>

              <div className="bg-[url('/images/results-tree.78168e82.png')] bg-top bg-no-repeat bg-contain h-[182px] mx-auto mb-4 w-[291px] relative">
                <p className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[1.33] px-[22px]">
                  Deforestation contributes nearly 10% of global carbon emissions.
                </p>
              </div>

              <p className="text-s leading-6 mx-auto max-w-[90%] bg-[rgba(0,0,0,0.35)]">
                On average, a hectare of tropical forest stores carbon equating to 550 metric tons of CO
                <sub>2</sub>. With annual tropical deforestation rates averaging 0.5%, this results in 2.75 metric tons of CO<sub>2</sub> emitted per hectare each year.
              </p>
            </div>

            {/* right */}
            <div className="bg-[rgba(0,0,0,0.5)] p-[20px] px-[4%] h-auto md:h-[400px] mx-auto md:mx-20 my-10 md:my-24 w-full md:w-1/3 rounded-lg">
              <h3 className="mb-3 text-xl font-semibold">Protect + Restore Our Planet</h3>

              <p className="mb-6 leading-6">
                Nature is the most powerful technology to fight climate change. Yet we are losing vital ecosystems at alarming rates.
              </p>

              <p className="mb-6 leading-6">
                To prevent complete climate breakdown, we must halt the degradation and deforestation of habitats and restore nature. The planet is at a tipping point, and we need your help.
              </p>

              <p className="leading-6">
                When you neutralize your footprint, you will protect forests around the world — a critical step in our fight against climate change.
              </p>
            </div>
          </div>
        </section>

        {/* second section */}
        <section className="mb-24">
          <div className="text-3xl text-center text-green-700 font-bold uppercase mb-20">
            How Do You Compare ?
          </div>

          {/* responsive chart wrapper */}
          <div className="w-full overflow-x-auto flex justify-center">
            <PieChart
              className="text-center"
              colors={["lightgreen", "green"]}
              series={[
                {
                  data: [
                    { id: 0, value: carbonFootprint, label: "Your carbon footprint", color: "lightgreen" },
                    { id: 1, value: 7000, label: "Average person's carbon footprint", color: "green" },
                  ],
                  innerRadius: 100,
                  outerRadius: 130,
                  paddingAngle: 5,
                  cornerRadius: 5,
                },
              ]}
              width={350}
              height={300}
            />
          </div>
        </section>

        {/* Third section */}
        <section className="mb-24">
          <div className="text-3xl text-center text-green-700 font-bold uppercase mb-20">
            Neutralize Your Carbon Footprint
          </div>

          <div className="text-center px-4">
            <p className="text-xl">
              To offset your carbon footprint of {carbonFootprint?.toFixed(2)} kg CO<sub>2</sub>e, you would need approximately {requiredToucanTokens?.toFixed(2)} Toucan tokens.
            </p>
            <p className="text-xl">
              The estimated cost for the required Toucan tokens is ₹{cost?.toFixed(2)}.
            </p>
          </div>
        </section>

        {/* fourth section */}
        <section className="mb-24">
          <div className="mx-4">
            <h2 className="text-3xl text-center uppercase text-green-700 font-bold mb-2">
              Tips to decrease your footprint
            </h2>

            <p className="text-center mt-3 mb-16">
              Decreasing your impact on the climate could be easier than you think.
            </p>

            {/* row 1 */}
            <div className="flex flex-col sm:flex-row justify-center gap-10 mb-16">
              {/* first */}
              <div className="flex-col text-center">
                <img src="/images/cow.png" className="mx-auto h-20 w-20 mb-3" />
                <h3 className="text-lg mb-4 font-semibold">Try consuming less meat</h3>
                <p className="text-sm">For every day of the week where you eliminate red meat:</p>
                <p className="font-bold">0.4 metric tons saved annually</p>
              </div>

              {/* second */}
              <div className="flex-col text-center">
                <img src="/images/mail.png" className="mx-auto h-20 w-20 mb-3" />
                <h3 className="text-lg mb-4 font-semibold">Clean your inbox</h3>
                <p className="text-sm">Delete your archived emails and unsubscribe from junk email:</p>
                <p className="font-bold">0.07 metric tons saved annually</p>
              </div>

              {/* third */}
              <div className="flex-col text-center">
                <img src="/images/clothes.png" className="mx-auto h-20 w-20 mb-3" />
                <h3 className="text-lg mb-4 font-semibold">Purchase consignment clothing</h3>
                <p className="text-sm">For buying second-hand or consignment for every clothing purchases:</p>
                <p className="font-bold">0.5 metric tons saved annually</p>
              </div>
            </div>

            {/* row 2 */}
            <div className="flex flex-col sm:flex-row justify-center gap-10 mb-16">
              {/* fourth */}
              <div className="flex-col text-center">
                <img src="/images/tyre.png" className="mx-auto h-20 w-20 mb-3" />
                <h3 className="text-lg mb-4 font-semibold">Keep inflated</h3>
                <p className="text-sm">By keeping your car tires properly inflated:</p>
                <p className="font-bold">0.4 metric tons saved annually</p>
              </div>

              {/* fifth */}
              <div className="flex-col text-center">
                <img src="/images/thermostat.png" className="mx-auto h-20 w-20 mb-3" />
                <h3 className="text-lg mb-4 font-semibold">Change your thermostat</h3>
                <p className="text-sm">For every degree that you turn down your thermostat in the winter:</p>
                <p className="font-bold">0.06 metric tons saved annually</p>
              </div>

              {/* sixth */}
              <div className="flex-col text-center">
                <img src="/images/fuel.png" className="mx-auto h-20 w-20 mb-3" />
                <h3 className="text-lg mb-4 font-semibold">Improve your fuel economy</h3>
                <p className="text-sm">For every 5 km/L you improve the fuel economy of your car:</p>
                <p className="font-bold">0.9 metric tons saved annually</p>
              </div>
            </div>
          </div>
        </section>

        {/* fifth section */}
        <section className="mb-2">
          <h2 className="text-4xl font-bold text-center uppercase text-[#4bc36b] mb-6">
            More About this Calculator
          </h2>

          <div className="min-h-[336px] max-w-[96%] mx-auto">
            <p className="mb-6 leading-6">
              Our carbon calculator is easy to use — and it will deliver your total estimated personal carbon emissions about as accurately as many hours of data-gathering and fact-finding.
            </p>

            <p className="mb-6 leading-6">
              As with any online carbon calculator, ours includes a margin of error due to the difficulty and imprecision inherent in measuring the carbon dioxide (CO<sub>2</sub>) output of your morning commute or your dietary decisions. We combine the best available data and a range of informed assumptions to form the basis of our calculations and to provide you an emissions estimate you can rely on — and begin to neutralise.
            </p>

            <p className="mb-6 leading-6">
              Because this is a personal carbon calculator, it does not account for emissions related to commercial or industrial energy or transportation. Our focus is on those everyday variables you can influence the most — namely, your residential energy, personal travel and food-related emissions.
            </p>

            <p className="leading-6 mb-3">
              To avoid confusion, we express greenhouse gas (GHG) emissions figures in CO<sub>2</sub> equivalents (CO<sub>2</sub>e), where 1 metric ton of carbon = 3.67 metric ton of carbon dioxide.
            </p>
          </div>
        </section>

        {/* sixth section */}
        <section className="bg-white">
          <div
            className="relative w-full h-[400px] sm:h-[700px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/green-field.jpg')" }}
          >
            <div className="absolute inset-0 bg-white bg-opacity-60 flex flex-col justify-center items-center p-4 sm:p-12 text-gray-700 text-center">
              <p className="text-xl sm:text-2xl font-semibold mb-4">
                A global conservation story
              </p>
              <p className="text-sm sm:text-base leading-relaxed max-w-3xl">
                "A global conservation story" typically refers to efforts and achievements in preserving biodiversity, ecosystems, and natural resources worldwide. These narratives often highlight successful initiatives in protecting endangered species, restoring habitats, combating climate change impacts, and promoting sustainable practices. These stories underscore international cooperation, community engagement, and technological innovations that contribute to safeguarding the planet's natural heritage for future generations. They inspire hope and demonstrate the positive impact of collective action in addressing environmental challenges on a global scale.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Result;
