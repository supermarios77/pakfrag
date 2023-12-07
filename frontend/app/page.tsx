import Cards from "@/components/Cards";
import React from "react";

export default function Home() {
	return (
		<section className="flex justify-center flex-col gap-10 align-middle content-center items-center">
			<div className="bg-green-950 hero">
				<div className="bg-gradient-to-b from-green-800/[.15] via-transparent">
					<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
						<div className="max-w-3xl text-center mx-auto">
							<h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
								Pakistan Fragnance Community
							</h1>
						</div>

						<div className="max-w-3xl text-center mx-auto">
							<p className="text-lg text-gray-400"></p>
						</div>

						<div className="text-center">
							<a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl light:from-emerald-700 light:to-emerald-600 from-emerald-800 to-emerald-900 shadow-lg shadow-transparent hover:shadow-green-900/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2 focus:ring-offset-white py-3 px-6" href="#">
								View Products
								<svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" ><path d="m9 18 6-6-6-6" /></svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			<Cards />
		</section>
	);
}
