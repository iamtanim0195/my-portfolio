
const Works = () => {
    return (
        <div id="works" className="bg-slate-950 mt-3 rounded-lg">
            <div className="p-5">
                <h1 className="pb-3 font-bold border-stone-700 border-b-[1px]"><span className="text-pink-600">W</span>ORKS</h1>
            </div>
            <div className="p-5 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* item1 */}
                <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                    <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                        <div>
                            <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                                <div className="font-bold">University hostel management</div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt=""
                        className="object-fill w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                        src="https://i.ibb.co/Lz7M1g0/image.png"
                    />
                </div>
                {/* item2 */}
                <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                    <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                        <div>
                            <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                                <div className="font-bold">job finding</div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt=""
                        className="object-fill w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                        src="https://i.ibb.co/rsP92BF/image.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default Works;