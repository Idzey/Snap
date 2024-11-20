import Button from "../button/Button";

export default function MainSection() {
    return (
        <section className="w-full flex flex-col xl:flex-row mt-6 h-screen justify-between">
            <div className="relative w-full text-center xl:text-left xl:w-2/4 mt-12 flex flex-col justify-between xl:mt-28">
                <div>
                    <h1 className="text-4xl xl:text-8xl font-black xl:whitespace-pre-line mt-6">{"Make\n remote work"}</h1>
                    <p className="xl:blur-sm transition-all duration-500 ease-out xl:hover:blur-0 text-medium-gray text-lg my-12 whitespace-pre-line">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam unde sunt natus quod error ipsa temporibus quae sed a libero provident, facere eos minima, consectetur, non enim ipsum illo architecto?</p>
                    <Button isFilled={true}>Learn More</Button>
                </div>
                <div className="w-full mt-20 flex justify-around">
                    <div>
                        <img src="/company/client-audiophile.svg" alt="Nope" />
                    </div>
                    <div>
                        <img src="/company/client-databiz.svg" alt="Nope" />
                    </div>
                    <div>
                        <img src="/company/client-maker.svg" alt="Nope" />
                    </div>
                    <div>
                        <img src="/company/client-meet.svg" alt="Nope" />
                    </div>
                </div>
            </div>
            <div className="flex xl:hidden order-first mt-20">
                <div className="w-full h-full flex justify-center">
                    <img src="/image-hero-mobile.png" alt="men" />
                </div>
            </div>
            <div className="hidden xl:flex order-last w-2/4 mt-20">
                <div className="w-full h-full flex justify-center">
                    <img src="/image-hero-desktop.png" alt="men" />
                </div>
            </div>
        </section>
    )
}