
---



````markdown
# React State: Complete Summary (Interview + Practical Reference)

## 1. What is State in React
- State is a **reactive data store** in a component.  
- It holds data that can **change over time** and triggers **UI re-render** when updated.  
- Defined using `useState` hook in functional components.

```javascript
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // count is state, setCount updates it
}
````

---

## 2. Key Concepts

### a. State vs Normal Variable

* Normal variable:

  ```javascript
  let x = 10;
  x = 20; // value changes but React does NOT re-render
  ```
* State variable:

  ```javascript
  const [count, setCount] = useState(0);
  setCount(20); // React re-renders component automatically
  ```

✅ **Rule:** Always use `setState` to update state. **Do not assign directly.**

---

### b. useState Hook

* Syntax: `const [state, setState] = useState(initialValue)`
* Returns an array:

  1. `state` → current value
  2. `setState` → function to update value
* Alternative array syntax (less common):

  ```javascript
  const arr = useState(initialValue);
  const state = arr[0];
  const setState = arr[1];
  ```

---

### c. Updating State

* Always call the setter function:

```javascript
const [data, setData] = useState(arr);

// Correct way
setData(newData);

// Wrong way
setData = newData; // ❌
```

* State updates **trigger component re-render**.

---

### d. Filtering / Mapping State

* `filter` and `map` **do not mutate original array** → they return **new arrays**.
* React does **not track normal variables**, only **state**.
* Example:

```javascript
const [data, setData] = useState(arr);

const filterData = () => {
    const filtered = data.filter(item => item.age > 15);
    setData(filtered); // triggers re-render
}

return (
    <div>
        {data.map(item => <ul key={item.id}>{item.name} -> {item.age}</ul>)}
    </div>
)
```

✅ Key point: React **re-executes JSX** with updated state → UI updates automatically.

---

### e. JSX and State

* JSX does not automatically know about normal variables; only **state** changes trigger re-render.
* `map` in JSX dynamically renders UI based on **current state**.
* `setState` only updates **data**, JSX decides **how to display it**.

---

### f. onClick and Event Handlers

* JSX attributes like `onClick` **expect a function**, not the result of function call.

```javascript
<button onClick={filterData}>Filter</button>  // ✅ correct
<button onClick={filterData()}>Filter</button> // ❌ wrong (executes immediately)
```

* For dynamic actions (e.g., show all / filter):

```javascript
const showAll = () => setData(arr);
<button onClick={showAll}>Show All</button>
```

---

### g. State Flow in React (Conceptual)

```
User action / effect
       |
   setState(newData)
       |
   React triggers re-render
       |
JSX re-executes with updated state
       |
   UI updates automatically
```

* You **never manually update the DOM** in React when using state.

---

### h. Interview Tips

* Know **difference between state and props**.
* Always emphasize: **state update triggers re-render**, normal variable change does NOT.
* Explain **immutable updates**: `filter` / `map` return new arrays → never mutate state directly.
* Understand **event handling** and why `onClick` expects a function.

---

### i. Common Pitfalls

* Trying to assign value directly to state:

```javascript
setData = filtered; // ❌
```

* Using `map` inside `onClick` attribute instead of JSX rendering → `onClick` expects function.
* Confusing `filter` return value (boolean) with JSX return.

---

### j. Summary Tips

1. Always use `useState` for dynamic data.
2. Always use the setter function (`setState`) to update state.
3. `filter` / `map` return **new arrays**, React only re-renders if **state changes**.
4. JSX rendering (`map`) decides **how to display data**.
5. `onClick` and other event handlers **must be functions**.

---

### Example Complete Component

```javascript
import React, { useState } from 'react';
import { arr } from '../utils/mockData';

export const StateExample = () => {
    const [data, setData] = useState(arr);

    const filterData = () => setData(data.filter(item => item.age > 15));
    const showAll = () => setData(arr);

    return (
        <div>
            <button onClick={filterData}>Filter Age > 15</button>
            <button onClick={showAll}>Show All</button>

            {data.map((item, index) => (
                <ul key={index}>
                    {item.name} {" -> "} {item.age}
                </ul>
            ))}
        </div>
    );
};
```

---

✅ **Conclusion:**
React state is **central to UI updates**. Always remember: **update state via setter → React re-renders → JSX generates UI dynamically**. Nothing magically appears; it's always React doing its reactive flow.

```

---

```
