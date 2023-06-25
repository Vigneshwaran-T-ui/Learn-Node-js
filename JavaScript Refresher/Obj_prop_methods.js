// Objects
    const Person = {
        name: 'Vigneshwaran',
        age: 23,
        role: 'Fullstacker'
    }

    console.log(Person.name); //Output: Vigneshwaran
    console.log(Person.age); //Output: 23
    console.log(Person.role); //Output: Fullstacker

// Objects with function
    const Car = {
        model: 'Sports',
        color: 'Black',
        year: 2023,
        description() {
            console.log(`Hi I want ${this.model} Car ${this.color} Color ${this.year} Model.`)
        }
    }
    
    console.log(Car.description());