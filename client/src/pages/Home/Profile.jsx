import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Profile = () => {
    return (
        <div>
            {/* https://gist.github.com/goodreds/5b8a4a2bf11ff67557d38c5e727ea86c */}
            <div className="max-w-2xl mx-4 sm:max-w-lg md:max-w-lg lg:max-w-lg xl:max-w-lg sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-slate-950 shadow-xl rounded-lg text-gray-900">
                <div className="rounded-t-lg h-32 overflow-hidden">
                    <img
                        className="object-cover object-top w-full"
                        src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                        alt="Mountain"
                    />
                </div>
                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img
                        className="object-cover object-center"
                        src="https://i.ibb.co/TKCDdCw/IMG-20230830-WA0009-2.jpg"
                        alt="iamtanim0195"
                    />
                </div>
                <div className="text-center mt-2 p-5">
                    <h2 className="font-semibold text-white">Md.Sahadat Hossen Tanim</h2>
                    <p className="text-gray-500">MERN stack developer</p>
                </div>

                <div className="flex w-sm p-4 text-white border-stone-700 border-t-[1px] mx-8 mt-2">
                    <div className="flex-1 border-stone-700 border-r-[1px] flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/iamtanim0195" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <a href="https://github.com/iamtanim0195 " target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile