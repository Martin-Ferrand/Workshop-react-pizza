import data from './data.json'
function Menu() {
    const listPizza = data.Pizza.map((elem) =>
            <li key={elem.name}>
                <p>{elem.name}</p>
                <p>{elem.price}</p>
                <p>{elem.ingredients}</p>
            </li>
    );
    return (
        <div>
            <p>Menu!</p>
            <ul>{listPizza}</ul>
        </div>
        );
}
export default Menu;