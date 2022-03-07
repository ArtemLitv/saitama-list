import React, { useState } from "react";
import {data} from "../../data/data";

const diceValue = (max) => {
    if(!max) {
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
            if(diceValue >= +left && diceValue < +right) {
                result = item[1];
                return result;
            } 
            return result;
        }, 0);

    return conditions
}

const logger = (message) => (item) => {
    data.logger.push({
        date: Date.now(),
        value: item,
        message: message
    });
    return item;
}

const replaceValue = (skill, data) => {
    const condition = skill.condition;
    const replacedValue = condition
        .replaceAll(/d\d+/g, diceValue)
        .replace(/[\w\W]+/, logger(`Run "${skill.title}"`))
        .replaceAll('power', data.mainSkills.power)
        .replaceAll('dexterity', data.mainSkills.dexterity)
        .replaceAll('intelligence', data.mainSkills.intelligence)
        .replaceAll('charisma', data.mainSkills.charisma)
        .replaceAll('perception', data.mainSkills.perception)
        .replaceAll(/[\d+ ]+ => [\d:;= -]+/g, calculate);
    return replacedValue
}

export const SkillCard = (props) => {
    const {skill, data} = props;
    const [resultCondition, setResultCondition] = useState('');

    const clickCalculate = skill => () => {
        const r = replaceValue(skill, data);
        setResultCondition(r);
    }
    return <div>
        <h2>{skill.title}</h2>
        <p>{skill.description}</p>
        <button onClick={clickCalculate(skill)}>Calculate</button>
        <p>result = {eval(resultCondition)}</p>
    </div>
}