# Alternate to if

### Ternary Operator

```
condn ? True_Value : False_Value
```

### Guard Operator
considers `defaultValue` if `value` is a falsy value

**Example**
```JavaScript
let age = 0;
let finalValue = age || 18;
console.log(finalValue);
```
> finalValue = 18, since 0 is falsy value


### Default Operator
considers `defaultValue` if `value` is a null or undefined

**Example**
```JavaScript
let age;
let finalValue = age || 18;
console.log(finalValue);
```
> finalValue = 18, since age is `undefined`
