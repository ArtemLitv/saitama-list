export const data = {
    mainSkills: {
        power: 2,
        dexterity: 2,
        intelligence: 1, 
        charisma: 0,
        perception: 2
    },
    skills: [
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
            condition: 'd20 + dexterity + d20 + perception => 1:7 = -1; 8:21=0; 22:34=1; 35:100=2',
            description: 'Снижает выбранную характеристику врага (бросок д4). Одна характеристика максимум д4'
        }
    ],
    logger: []
}