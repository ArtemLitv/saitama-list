import React from "react";
import {data} from "../../data/data";
import {SkillCard} from './skillCard.component'



export const Skills = () => {
    const skills = data.skills;

    return(
        <div>
            {skills.map(s => <SkillCard skill={s} data={data}/>)}
        </div>
    )
}