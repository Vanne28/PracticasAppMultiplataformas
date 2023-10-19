//filter(): Crea un nuevo array con todos los elementos que pasan una prueba (función proporcionada).
//Ejrcicio 1
const nums = [2,8,3,6,10,4,7]
const nums2 = nums.filter(function (number) {
    return number > 5
});
console.log(nums2);