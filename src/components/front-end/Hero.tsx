import Image from "next/image";
const Hero = () => {
    return (
        <div className="bg-[#ffde59] mt-4">
            <div className="container grid md:grid-cols-2 py-8">
                <div className="flex items-center">
                    <div className="max-w-[450px] space-y-4">
                        <p className="text-topHeadingSecondary">
                            Starting at <span className="font-bold">Rp. 11.000</span>
                        </p>

                        <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
                            Lapar? tapi bingung harus ke mana??
                        </h1>

                        <h3 className="text-2xl font-['Oregano',cursive]">
                            Cobain Mie Ayam Izzan
                        </h3>

                        <a className="inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white" href="#"
                        >
                            Belanja Sekarang !
                        </a>
                    </div>
                </div>
                <div>
                    <Image className="ml-auto" src="/Mie1.png" alt="hero" width={400} height={400} />
                </div>
            </div>
        </div>
    );
};

export default Hero;