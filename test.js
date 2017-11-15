const money = '$ 456,0000.3744'

const res = parseFloat(money.split(' ')[1].split(',').join(''))

res

const persons = [
    {value: 0, name: 'Oliver Hansen'},
    {value: 1, name: 'Van Henry'},
    {value: 2, name: 'April Tucker'},
    {value: 3, name: 'Ralph Hubbard'},
    {value: 4, name: 'Omar Alexander'},
    {value: 5, name: 'Carlos Abbott'},
    {value: 6, name: 'Miriam Wagner'},
    {value: 7, name: 'Bradley Wilkerson'},
    {value: 8, name: 'Virginia Andrews'},
    {value: 9, name: 'Kelly Snyder'},
]


const t = persons.find(person => person.value === 33)

t

if (t) {
    console.log('hey')
} else {
    console.log('ho')
}

persons