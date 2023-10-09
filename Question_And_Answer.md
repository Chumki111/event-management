
 ---------------MCQ Test------

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`
 Answer: B : `ReferenceError: greetign is not defined`    
 because greetign was never declared with let, const, or var. This means greetign is not defined in the current scope.



###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}
sum(1, "2");
```
- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

Answer: C :`"12"`  because  + operator with a string and a number, the number is coerced into a string, and concatenation occurs. In this case, 1 is added to the string "2", . Therefore, the function sum(1, "2") returns "12"




###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };
info.favoriteFood = "🍝";
console.log(food);
```
- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

Answer: A :`['🍕', '🍫', '🥑', '🍔']` because info.favoriteFood = "🍝"; updates the favoriteFood property of the info object to "🍝". However, this change does not affect the original food array. 


###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}
console.log(sayHi());
```
- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

 Answer:  B :`Hi there, undefined` because The function then returns a string that includes the value of name, which is "Hi there, undefined". The correct output is Hi there, undefined.


###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];
nums.forEach((num) => {
  if (num) count += 1;
});
console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

Answer: B: 2  because count will be incremented by 1 for each non-zero element. In this case, for nums, which contains [0, 1, 2, 3],console.log(count) prints the value of count, which is 2.


