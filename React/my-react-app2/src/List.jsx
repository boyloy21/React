import PropTypes from 'prop-types'

function List(props){
    // const fruits = [{id:1, name:"apple", calories: 95},
    //     {id: 2, name: "orange", calories: 45}, 
    //     {id: 3, name: "banana", calories: 105}, 
    //     {id: 4, name: "coconut", calories: 159}, 
    //     {id: 5, name: "pineapple", calories: 37}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a, b) => a.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    const category = props.category;
    const itemLists = props.items;
    const listItems = itemLists.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    // return(<ol>{listItems}</ol>);
    return(<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>);

}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number
    })),
}
List.defaultProps = {
    category: "Category",
    items: [],
}
export default List;