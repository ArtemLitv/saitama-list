import React from "react";
import { useRecoilValue } from "recoil";
import { mainSkillsAtom } from '../../state'

export const MainSkills = () => {
    const mainSkills = useRecoilValue(mainSkillsAtom);
    const data = Object.entries(mainSkills);
    return (
        <div>
            <h2>Main Skills</h2>
            {data.map(([key, value], index) => <p key={index}>{key}: {value}</p>)}
        </div>
    )
}