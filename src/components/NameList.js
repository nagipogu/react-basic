import React from 'react';
import Person from './Person'

function NameList() {
    const names = ['giri', 'mary', 'sweety', 'teena', 'swetha']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'angular'
        },
        {
            id: 2,
            name: 'Giri',
            age: 26,
            skill: 'node js'
        },
        {
            id: 3,
            name: 'Mary',
            age: 23,
            skill: 'java'
        },
        {
            id: 4,
            name: 'Sweety',
            age: 23,
            skill: 'mongodb'
        }
    ]   

const NameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)
    // const PersonList = persons.map(person => <h2>I'm {person.name}, I'm {person.age} old, i know {person.skill} </h2>)
    // const PersonList = persons.map(person => <Person key={person.id} person={ person } />)

    // return (
    //     <div>
    //         <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2>
    //         <h2>{names[3]}</h2>
    //         <h2>{names[4]}</h2>
    //     </div>
    // )

    // return (
    //     <div>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )

    return (<div> {NameList}</div>)

    // return <div> {PersonList}</div>

}

export default NameList;