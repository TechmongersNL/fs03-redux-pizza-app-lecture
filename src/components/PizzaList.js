import {useSelector, useDispatch} from 'react-redux';
import {selectAllPizzas, selectPizzaById} from '../store/pizzas/selectors';
import {selectUser} from '../store/user/selectors';
import {toggleFavorites} from '../store/user/slice';
import {selectFavoritePizzaNames} from '../store/selectors';
import {useState} from 'react';
 
export default function PizzaList() {
    const dispatch = useDispatch();

    const allPizzas = useSelector(selectAllPizzas);
    // Local state being used to keep track of the UI selector
    const [selectedId, setSelectedId] = useState(allPizzas[0].id);

    const user = useSelector(selectUser);
    const favoritePizzaList = useSelector(selectFavoritePizzaNames);
    const selectedPizza = useSelector(selectPizzaById(selectedId));

    const getPizzaJSX = () => {
        return allPizzas.map((pizza) => {
            return (
                <div key={pizza.id}>
                    <p>{pizza.name}</p>
                    <p>{pizza.description}</p>
                    {pizza.image ? <img src={pizza.image} alt={pizza.name} width={'300px'}/> : '' }
                    <div><button onClick={() => dispatch(toggleFavorites(pizza.id))}>{user.favorites.includes(pizza.id) ? '❤️' : '🖤'}</button></div>
                    <hr />
                </div>
            )
        })
    }

    return (
      <div>
        <h1>Pizza Explorer</h1>
        <p>
            Welcome back, <strong>{user.name}</strong>!
        </p>
        <p>Your favorite pizzas are: {favoritePizzaList.join(', ')}</p>
        <hr />
        <select value={selectedId} onChange={(event) => {setSelectedId(event.target.value)}}>
            {allPizzas.map((pizza) => {
                return (<option key={pizza.id}>
                    {pizza.id}
                </option>)
            })}
        </select>
        <div>
            The selected pizza is: {selectedPizza.name}
        </div>

        <hr />
        {getPizzaJSX()}
      </div>
    );
  }