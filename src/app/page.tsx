import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { Check, Star } from "lucide-react";

export default function Home() {
	return (
		<div className="bg-slate-50">
			<section>
				<MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
					<div className="col-span-2 px-6 lg:px-0 lg:pt-4">
						<div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
							<div className="absolute w-28 left-0 -top-20 hidden lg:block">
								<Image
									src="/snake-1.png"
									alt="Snake Logo"
									width={100}
									height={100}
								/>
							</div>
							<h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-5xl text-gray-900 md:text-6xl lg:text-7xl">
								Your Image on a{" "}
								<span className="bg-green-600 text-white px-2">Custom</span>{" "}
								Phone Case
							</h1>
							<p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
								Capture your favorite memories with your own,{" "}
								<span className="font-semibold">one-of-one</span> phone case.
								CasePrinter allows you to protect your memories not just your
								phone case.
							</p>

							<ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
								<div className="space-y-2">
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-green-600" />
										High-quality, durable material
									</li>
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-green-600" />5 years
										print guarantee
									</li>
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-green-600" />
										Modern iPhone models supported
									</li>
								</div>
							</ul>

							<div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
								<div className="flex -space-x-4">
									<Image
										src="/users/user-1.png"
										alt="user image"
										className="inline-block rounded-full ring-2 ring-slate-100"
										width={40}
										height={40}
									/>
									<Image
										src="/users/user-2.png"
										alt="user image"
										className="inline-block rounded-full ring-2 ring-slate-100"
										width={40}
										height={40}
									/>
									<Image
										src="/users/user-3.png"
										alt="user image"
										className="inline-block rounded-full ring-2 ring-slate-100"
										width={40}
										height={40}
									/>
									<Image
										src="/users/user-4.jpg"
										alt="user image"
										className="inline-block rounded-full ring-2 ring-slate-100"
										width={40}
										height={40}
									/>
									<Image
										src="/users/user-5.jpg"
										alt="user image"
										className="inline-block rounded-full ring-2 ring-slate-100 object-cover"
										width={40}
										height={40}
									/>
								</div>

								<div className="flex flex-col justify-between items-center sm:items-start">
									<div className="flex gap-0.5">
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
									</div>

									<p>
										<span className="font-semibold">1.250</span> happy customers
									</p>
								</div>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
		</div>
	);
}
