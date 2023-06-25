import React from 'react'

const OldCode = () => {

    // This is how type assignment is carried out for a SINGLE VARIABLE
    let name: string;
    name = "OKaido"; // Changing this to a number will throw an error
    let age: number | string; //? '|' also known as union operator let's you define multiple values
    age = 5
    age = "Hello"
    let hobbies: string[]; //?array of strings
    let role: [number, string] //?ONLY ONE NUMBER AND ONE STRING
    //! Power of strict typechecking, it won't let the code compile
    // role = [5, 5] Throws Error


    // FOR OBJECT
    type Person = {
        name: string,
        age?: number, //? The question mark makes the property optional
    }
    //! When you define a type object you have to include all the values mentioned in type or typescript throws an error
    let person: Person = {
        name: "Dev"
    };
    let lotsOfPeople: Person[] // Assigned the above type to an array\


    // FOR FUNCTION
    let printName: (name: string) => void // Instead of void we can use never which tells that the function won't return anything whereas void tells that the function returns undefined
        = function (name) {
            console.log(name)
        }

    printName("Hello")


    //! There is not much of a difference between type and interface in typescript except for their semantics
    interface PersonDetails {
        name: string,
        age: number
    }

    interface PersonProfession extends PersonDetails {
        professionName: string
    }


    // The same code for type will be
    type X = {
        name: string,
        age: number
    }

    type Y = X & {
        professionName: string,
    }

    //! We can extend types in a interface and vice versa 

    return (
        <div>OldCode</div>
    )
}

export default OldCode