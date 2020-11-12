var person = {
    name: "jit",
    age: 35,
    technologies: ['php','c#','node','js','kubernetes','aws'],
    marks:[{mark:80,sub:'maths'},{mark:90,sub:'physics'},{mark:70,sub:'eng'},{mark:90,sub:'computer'}],

    printDetails: function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old!`);
        this.printTechnologies(this.formatTechnology(this.technologies));
        this.printAverage ( console.log(`My Average Score ${this.printAverage()}`))
        console.log(this.find('maths'));
        this.filter(95);
    },
    // Anonymous function
    printTechnologies: (technologies) => {
        for(i=0;i<technologies.length;++i)
        {
            //ES6 Back Literals
            console.log(` ${i+1} -> I know ${technologies[i]} `);
        }
    },
    printAverage: function() {
        //reduce method (aggregate val, current val)
        let avg = this.marks.map((val)=>val.mark).reduce((sum,val) => {return sum + val;} )
        return avg / this.marks.length;
    },
    //map function does a 
    formatTechnology: (technologies) => {
        //map function
       return technologies.map( (val) => {return val + ' technology';});
    },
    // find a single element in array
    find: function find(sub){
        return this.marks.find((mark) => mark.sub == sub);
    },
    // filter find all records which match a condition
    filter:function (min)
    {
        this.marks.filter( (el) => { return el.mark >= min; }).forEach( (el) => console.log (` ${el.sub} -> ${el.mark}`));
    }
}

person.printDetails();