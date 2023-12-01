export const selectNumberOfPizzas = (reduxState) => {
    return reduxState.pizzas.allPizzas.length;
};
  
export const selectMostBoughtPizza = (reduxState) => {
    if (reduxState.pizzas.allPizzas.length === 0) {
        return null;
    }

    return reduxState.pizzas.allPizzas.reduce((mostBought, nextPizza) => {
        return mostBought.bought >= nextPizza.bought ? mostBought : nextPizza;
    });
};

// Use with useSelector hook:
// useSelector(selectAllPizzas)
export const selectAllPizzas = (reduxState) => {
    return reduxState.pizzas.allPizzas;
}

// Parameterized selector
// Has an extra piece of code in it: 
// (selectedId) => 
// compared to other selectors we've used before
// Use with useSelector hook:
// useSelector(selectPizzaById(123))
export const selectPizzaById = (selectedId) => (reduxState) => {
    const selectedIdNum = parseInt(selectedId);
    
    const foundPizza = reduxState.pizzas.allPizzas.find((pizza) => {
        return pizza.id === selectedIdNum;
    })
    
    return foundPizza;
}