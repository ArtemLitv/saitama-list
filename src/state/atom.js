import { atom } from "recoil";

export const mainSkillsAtom = atom({
    key: "mainSkills",
    default: {
        power: 2,
        dexterity: 2,
        intelligence: 1,
        charisma: 1,
        perception: 2
    }
});

export const skillsAtom = atom({
    key: 'skills',
    default: [
        {
            title: 'Один удар',
            condition: 
            '(d20 + power        => 1:5 = -1; 5:9 = 0; 9:15 = 1; 15:100 = 2) + ' + 
            '(d20 + dexterity    => 1:5 = -1; 5:9 = 0; 9:15 = 1; 15:100 = 2) +' +
            '(d20 + intelligence => 1:5 = -1; 5:9 = 0; 9:15 = 1; 15:100 = 2) + ' + 
            '(d20 + charisma     => 1:5 = -1; 5:9 = 0; 9:15 = 1; 15:100 = 2) + ' +
            '(d20 + perception   => 1:5 = -1; 5:9 = 0; 9:15 = 1; 15:100 = 2)',
            description: 'Следующий удар сильнее с пройденой проверкой'
        },
        {
            title: 'Калечащий удар (ближний бой)',
            condition: 'd20 + dexterity + d20 + perception => 1:7 = total fail; 8:21=fail; 22:34=success; 35:100=total success',
            description: 'Снижает выбранную характеристику врага (бросок д4). Одна характеристика максимум д4'
        },
        {
            title: 'Силовой бросок. Дальность 7',
            condition: 'd20 + power => 1:4 = total fail; 5:11 = fail; 12:17= success; 18:100=total success',
            description: 'Бросает в цель оружие или любой другой объект, который сможет поднять.'
        },
        {
            title: 'Огненный шар',
            condition: 'd20 + intelligence => 0:3 = total fail; 4:10 = fail; 11:17 = success; 18:100 = total success',
            description: 'Создает огненный шар с уроном по области. Урон 10+d20'
        }
    ]
});

export const loggerAtom = atom({
    key: 'logger',
    default: []
});