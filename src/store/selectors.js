// selectors for cross slice selections!!
export const selectFavoritePizzaNames = (reduxState) => {
    const userFavorites = reduxState.user.favorites;
    const listOfPizzas = reduxState.pizzas.allPizzas;
    const pizzaNames = userFavorites.map(favPizzaId => {
        const currentPizza = listOfPizzas.find(pizza => pizza.id === favPizzaId)
        return currentPizza.name
    });

    return pizzaNames;
  };