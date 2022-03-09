import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { loggerAtom } from "../../state";
import style from './skillCard.module.css';

const diceValue = (max) => {
    if (!max) {
        return 0;
    }
    const value = +max.slice(1);
    return Math.floor(Math.random() * value + 1);
}

const calculate = (expression) => {
    const split = expression.split('=>').map(i => i.trim());
    const diceValue = eval(split[0]);
    const conditions = split[1]
        .split(';')
        .map(i => i.split('=')) // [['1:5', -1],...]
        .reduce((result, item) => {
            const [left, right] = item[0].split(':');
            if (diceValue >= +left && diceValue <= +right) {
                result = item[1];
                return result;
            }
            return result;
        }, 0);

    return conditions
}


const replaceValue = (skill, mainSkills) => {
    const condition = skill.condition;
    const diceReplacedValue = condition
        .replaceAll(/d\d+/g, diceValue); // replace dice value like d20 to random number
    const replacedValue = diceReplacedValue
        .replaceAll('power', mainSkills.power)
        .replaceAll('dexterity', mainSkills.dexterity)
        .replaceAll('intelligence', mainSkills.intelligence)
        .replaceAll('charisma', mainSkills.charisma)
        .replaceAll('perception', mainSkills.perception)
        .replaceAll(/[\d+ ]+ => [\d\w:;= -]+/g, calculate); // find smart condition
    return [replacedValue, diceReplacedValue];
}

export const SkillCard = (props) => {
    const { skill, mainSkills } = props;
    const [resultCondition, setResultCondition] = useState('');
    const [logger, setLogger] = useRecoilState(loggerAtom);

    const clickCalculate = skill => () => {
        const [result, logData] = replaceValue(skill, mainSkills);
        setLogger((old) => {
            return [
                ...old,
                {
                    date: Date.now(),
                    value: `${parseResult(result)} = ${logData}`,
                    message: `Run "${skill.title}"`
                }]
        });
        setResultCondition(result);
    }

    const parseResult = (resultCondition) => {
        try {
            const result = eval(resultCondition);
            return result;
        } catch {
            return resultCondition;
        }
    }

    return (
        <div className={style.card} onClick={clickCalculate(skill)}>
            <h2 className={style.title}>{skill.title}</h2>
            <p className={style.description}>{skill.description}</p>
            {resultCondition ? <p>result = {parseResult(resultCondition)}</p> : <p>Click to card!</p>}
        </div>
    )
}