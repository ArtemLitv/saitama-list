import React from "react";
import { useRecoilValue } from "recoil";
import { mainSkillsAtom, skillsAtom } from "../../state";
import { SkillCard } from "../skillsCard/skillCard.component";
import style from './skills.module.css';



export const Skills = () => {
    const skills = useRecoilValue(skillsAtom);
    const mainSkills = useRecoilValue(mainSkillsAtom);

    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>Skills</h2>
            {skills.map((skill, i) => <SkillCard key={i} skill={skill} mainSkills={mainSkills} />)}
        </div>
    )
}