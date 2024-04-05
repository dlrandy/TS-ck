// @ts-check
let a_number = 100;
if (Math.random() < 0.5) {
    let amount;
//@ts-ignore
 a_number = "sdf";
}

/** @type {number} */
let amount;
//@ts-ignore
amount = 'ere';

/**
 * 
 * @param {number} price the price without vat
 * @param {number} vat the VAT [0-1]
 * @returns 
 */
function addVAT(price, vat = 0.2) {
    return price * (1 + vat);
    }



    /**
     * @typedef {Object} Article
     * @property {number} price
     * @property {number} vat
     * @property {boolean=} sold
     * @property {string} string
     */



    /**
     * 
     * @param {[Article]} articles 
     * @returns 
     */
function totalAmount(articles) {
    return articles.reduce((total, article)=>total + addVAT(article.price, article.vat),0);
}


/**
 * @typedef { import ("../@types/person").Person} Person
 */

/**
 * 
 * @param {Person} person 
 */

function printPersonp(person) {
    console.log('====================================')
    console.log(person.name);
    console.log('====================================')
}

// @ts-expect-error
printPersonp(123);










