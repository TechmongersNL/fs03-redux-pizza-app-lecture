import {useSelector, useDispatch} from 'react-redux';
import {selectAllPizzas} from '../store/pizzas/selectors';
import {selectUser } from '../store/user/selectors';
import {toggleFavorites} from '../store/user/slice';
import {selectFavoritePizzaNames} from '../store/selectors';

export default function PizzaList() {
    const allPizzas = useSelector(selectAllPizzas);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    
    const getPizzaJSX = () => {
        console.log('hi were in the function')
        return allPizzas.map((pizza) => {
            return (
                <div>
                    <p>{pizza.name}</p>
                    <p>{pizza.description}</p>
                    {pizza.image ? <img src={pizza.image} alt={pizza.name} width={'300px'}/> : '' }
                    <div><button onClick={() => dispatch(toggleFavorites(pizza.id))}>{user.favorites.includes(pizza.id) ? '❤️' : '🖤'}</button></div>
                    <hr />
                </div>
            )
        })
    }

    // THIS NEEDS TO BE SELECTED FROM STATE
    const favoritePizzaList = useSelector(selectFavoritePizzaNames);

    return (
      <div>
        <h1>Pizza Explorer</h1>
        <p>
            Welcome back, <strong>{user.name}</strong>!
        </p>
        <p>Your favorite pizzas are: {favoritePizzaList.join(', ')}</p>
        <hr />
        {console.log('hi were in the component')}
        {getPizzaJSX()}
      </div>
    );
  }