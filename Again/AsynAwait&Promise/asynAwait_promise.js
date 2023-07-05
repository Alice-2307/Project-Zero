
/////////////   Use of Promise   ///////////////

console.log('Person1: Shows Ticket');
console.log('Person2: Shows Ticket');

const wifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
})

const getFood = wifeBringingTicket.then((msg) => {
    console.log('wife: i have the ticket');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) => {
        resolve(`I have a ${msg} , popcorn`);
    })
})

const needButter = getFood.then((msg) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: no i need butter on my popcorn');
    return new Promise((resolve, reject) => {
        resolve(`${msg}, butter on popcorn`);
    })
})

const getColdDrinks = needButter.then((msg) => {
    console.log('husband: i got butter on popcorn')
    console.log('husband: anything else')
    console.log('wife: i need cold drinks')
    return new Promise((resolve, reject) => {
        resolve(`${msg} and cold drinks`)
    })
})

getColdDrinks.then((msg) => {
    console.log(msg);
    console.log('husband: now we should go in');
    console.log('wife: yes');
})


console.log('person4: shows ticket');
console.log('person5: shows ticket');

////////////   Use of Sync Await   ///////////////
////////// I use SetTimeOut Because output is mixing, beacuse of SetTimeout now output shows different    ///////////
setTimeout(() => {

console.log('Person1: Shows Ticket');
console.log('Person2: Shows Ticket');

const watchMovie = async() => {

    const wifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    })
    const getFoods = new Promise((resolve, reject) => {
            resolve('popcorn');
        })

    const getButter = new Promise((resolve, reject) => {
            resolve('butter');
        })

    const getCold_Drinks = new Promise((resolve, reject) => {
            resolve('cold drinks')
        })


    const ticket = await wifeBringingTickets;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    const food = await getFoods;

    console.log(`husband: i got some ${food}`);
    console.log('husband: we should go in');
    console.log('wife: no i need butter on my popcorn');

    const butter = await getButter;

    console.log(`husband: i got ${butter} on popcorn`)
    console.log('husband: anything else')
    console.log('wife: i need cold drinks')

    const colddrinks = await getCold_Drinks;

    console.log(`husband: i got ${colddrinks}`);
    console.log('husband: now we should go in');
    console.log('wife: yes');

    return ticket;
}

watchMovie().then((msg) => {
    console.log(`persone3: Shows ${msg}`);
})


console.log('person4: Shows ticket');
console.log('person5: Shows ticket');

},3000);