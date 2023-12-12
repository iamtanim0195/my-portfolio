import { FaReact, FaNode,FaGitAlt  } from "react-icons/fa";
import { SiTailwindcss,SiExpress,SiMongodb,SiFirebase  } from "react-icons/si";

const About = () => {
    return (
        <div className="bg-slate-950 mt-3 rounded-lg">
            <div className="p-5">
                <h1 className="pb-3 font-bold border-stone-700 border-b-[1px]"><span className="text-pink-600">A</span>BOUT ME</h1>
            </div>
            <div className="p-5">
                <p><h1>Hello World</h1>
                    I&#39;m Md. Sahadat Hossen Tanim
                    MERN Stack Enthusiast | Aspiring Front-End Specialist | 1st-year CSE student. Committed to crafting seamless user experiences through innovation and collaboration. Eager to learn and contribute to the evolving landscape of web development. Let&#39;s embark on this journey to shape the future of the web together!
                </p>
                <div>
                    <h1 className="pb-3 pt-5 font-bold border-stone-700 border-b-[1px]"><span className="text-pink-600">M</span>y Tech Stack</h1>
                    <div className="text-3xl flex flex-wrap justify-center pt-2 gap-2 ">
                        <SiTailwindcss />
                        <FaReact />
                        <SiExpress />
                        <FaNode />
                        <SiMongodb />
                        <FaGitAlt />
                        <SiFirebase />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;