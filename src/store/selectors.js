// selectors for cross slice selections!!
export const selectFavoritePizzaNames = (reduxState) => {
    // I want to access the user information: favorites
    // I want to access the pizza information: list of pizzas (names)
    // I want to end up with some array of names of pizzas ['pizzaName1', 'pizzaName2']
    const userFavorites = reduxState.user.favorites;
    const listOfPizzas = reduxState.pizzas.allPizzas;

    const pizzaNames = userFavorites.map(favPizzaId => {
        const currentPizza = listOfPizzas.find(pizza => pizza.id === favPizzaId)
        return currentPizza.name
    });

    return pizzaNames;
  };