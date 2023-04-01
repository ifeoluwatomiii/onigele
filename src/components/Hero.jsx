import React from "react";
import make from "../assets/gee.png";

const Hero = () => {
	return (
		<div
			className="flex items-center bg-[65%] xl:bg-center bg-cover h-[50vh] xl:h-[90vh]"
			style={{ backgroundImage: `url(${make})` }}>
			<div className="text-black/500 px-[55px] mt-16 py-12 hidden xl:block">
				<h2 className="font-bold text-[60px] mb-4">Hello!</h2>
				<p className="text-xl font-semibold ">
					Here at Onigele, Our Main Goal is Making You <br /> Look Your Best At Any and
					Every Occasion. <br />
                </p>
                <p className="text-xl font-semibold mt-4">
                    You Can Book a Session with any of Our <br /> Seasoned Makeup Artists and
					Stylist of Your Choosing.
                </p>
               
				<button className="px-4 py-2 border-2 border-red-400 rounded-3xl hover:text-white mt-4 hover:bg-red-500 font-bold">
					Book Now
				</button>
			</div>
            <div className="px-2 mt-[23%] text-black xl:hidden">
                <h2 className="font-bold text-2xl mb-2">Hello!</h2>
                <p className="font-semibold">Here at Onigele, Our main <br />Goal is Making You Look <br />Best at every occasion. </p>
                <p className="font-semibold mt-4">You Can Book a Session <br />With any of our seasoned <br />makeup artists and stylists <br />of your choosing</p>
                <button className="px-4 py-2 border-2 border-red-400 rounded-3xl font-bold hover:bg-red-500 mt-4">
					Book Now
				</button>
            </div>
		</div>
	);
};

export default Hero;
