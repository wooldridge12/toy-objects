        // CHAPTER 1 AND 2

// const ender3 = {
//     id: 1,
//     price: 206,
//     maker: "creality",
//     weight: 30.6,
//        inStock: true,
// }
// const theRazorCrest = {
//     id: 2,
//     price: 130,
//     maker: "lego",
//     weight: 5.5,
//     inStock: true,
// }
// const xboxSeriesX = {
//     id: 3,
//     price: 500,
//     maker: "microsoft",
//     weight: 10.4,
//     inStock: false,
// }
// console.log(xboxSeriesX.price)

        // Example set
// const toy (which is your varible) = {
//     id: 1,    (this is a place holder)
//     price: 5, (this is a INTEGER price property)
//     maker: "company", (this is a STRING maker property)
//     weight: 20, (this is a FLOAT weight property)
// inStock: true, (boolean of the inStock property)
// }


            // CHAPTER 3

const toys = [
    {
        id: 1,
        name: "ender3",
        price: 206,
        maker: "creality",
        weight: 30.6,
        instock: true,
    },
    {
        id: 2,
        name: "theRazorCrest",
        price: 130,
        maker: "lego",
        weight: 5.5,
        instock: true,
    },
    {
        id: 3,
        name: "xboxSeriesX",
        price: 500,
        maker: "microsoft",
        weight: 10.4,
        instock: false,
    }
]


            // CHAPTER 4

        // will give me price

// for (const toy of toys) {
//     console.log(toy.price)
// }

        // will give me " price is $(price)"

// for (const toy of toys) {
//     console.log(`Price is $${toy.price}`)
// }

        // Will give me name of toy

// for(const toy of toys) {
//     console.log(toy.name)
// }

        // Will give me "Name of toy is (toy name)"

        // for (const toy of toys) {
//     console.log(`Name of toy is ${toy.name}`)
// }


            // CHAPTER 5 AND 6

const megaFossilDigKit = {
    id: 4,
    name:"mega fossil dig kit",
    price: 20,
    maker: "NATIONAL GEOGRAPHIC",
    weight: 10,
    instock: true,
}
toys.push(megaFossilDigKit);

// for (const toy of toys) {
//     console.log(toy.price)
// }

const rubixCube = {
    id: 5,
    name: "Rubix cube",
    price: 7,
    maker: "Rubix",
    weight: 0.5,
    instock: false,
}
toys.push(rubixCube);

const firstSlideToddler = {
    id: 6,
    name: "First Slide Toddler",
    price: 32,
    maker: "Little Tikes",
    weight: 32.6,
    instock: true,
}
toys.push(firstSlideToddler);
// for (const toy of toys) {
//     console.log(toy.name)
// }



        // CHAPTER 7
// for (const toy of toys) {
//     console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars.`)
// }


            // CHAPTER 8 

// for (const toy of toys) {
//     toy.weight = toy.weight + 0.4
//     console.log(`The ${toy.maker} ${toy.name} cost ${toy.price} dollars. It weighs ${toy.weight} grams.`)
// }
        
            // increasing prices by 5%
// for (const toy of toys) {
//     toy.price = toy.price * 1.05
//     console.log(`The ${toy.name} costs ${toy.price}`)
// }

            // CHAPTER 9
        // Finding a single item. 

// const toyToFind = 6
// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//         toy.weight = toy.weight + 0.4
//         console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars. It weighs ${toy.weight} grams.`)
//     }
// }

const legoKnight = {
    name:"Lego Knight",
    maker:"Lego",
    weight: 4,
    price: 20,
    instock:true,
}

        // Here is the function 
const addToyToInventory = (toyObject) => {
    // Index is 0, 1, 2, 3 setting equal to toys.length which is 1, 2, 3. And minusing 1.
    const lastIndex = toys.length - 1
    
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToyToInventory(legoKnight)
// for (const toy of toys) {
//     console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars. It weighs ${toy.weight} grams.`)
// }
for (const toy of toys) {
    console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars. It weighs ${toy.weight} grams.`)
}
console.log(toys)
