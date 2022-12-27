//meal maker is a restuant website that makes meal and price each morning today's special.
const menu = {
_meal : '',
_price: 0,

set meal (mealToCheck) {
  if (typeof mealToCheck === "string") {
    return this._meal = mealToCheck;
  }
},

set price (priceToCheck) {
  if (typeof priceToCheck === 'number') {
    return this._meal = priceToCheck;
  }
},

   get todaysSpecial () {
     if( this._meal && this._price){
       return `today's meal is ${this._meal} for ${this._price}!.`
     }else{
       return 'Meal or price was not set correctly!.'
     }
}
};

menu._meal = 'geel';
menu._price = '$5' ;
console.log(menu.todaysSpecial);


