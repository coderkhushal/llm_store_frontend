import Link from "next/link";
import { Button } from "@/components/ui/button";

const routes = [
	{ name: "Home", href: "/", isActive: true },
	{ name: "Services", href: "/services", isActive: false },
	{ name: "Contact", href: "/contact", isActive: false },
	{ name: "About Us", href: "/about", isActive: false },

];


const Navbar = () => {
	return (
		<div className=" dark py-6 bg-black text-white relative">
			<nav>
				<div className="container px-4">
					<div className="flex justify-between items-center">
						<a className="font-black text-3xl" href="#!">
							{" "}
							LLM STORE{" "}
						</a>

						<ul
							className=" hidden lg:flex lg:flex-row justify-center items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent"
							id="navbar"
						>
							{routes.map((route, i) => (
								<li key={i}>
									<Link href={route.href}

										className="p-4 "


									>
										{route.name}

									</Link>
								</li>
							))}
						</ul>
						<Link href="/main">
						<Button variant={"secondary"} className="text-lg font-semibold text-zinc-700">Dashboard</Button>
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar