import type { IconType } from "react-icons";
import { FaPython, FaNodeJs, FaDocker, FaReact, FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { FaFlutter } from "react-icons/fa6";


export interface ITool {
    name: string,
    icon: IconType,
}

export const tools: ITool[] = [
    {name: "Python", icon: FaPython},
    {name: "TypeScript", icon: SiTypescript},
    {name: "JavaScript", icon: IoLogoJavascript},
    {name: "NodeJS", icon: FaNodeJs},
    {name: "Docker", icon: FaDocker},
    {name: "React", icon: FaReact},
    {name: "React Native", icon: FaReact},
    {name: "MySQL", icon: GrMysql},
    {name: "Github / Git", icon: FaGithub},
    {name: "VS Code", icon: VscVscode},
    {name: "Flutter", icon: FaFlutter},
];