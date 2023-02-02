import React from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import "./index.css";
import Form from "./components/Form/Form";

const initialStateItems = [
    {
        image:
            "https://i0.wp.com/rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png?ssl=1",
        name: "Dan Abramov",
        link: "https://twitter.com/dan_abramov",
    },
];

class App extends React.Component {
    state = {
        items: [...initialStateItems],
    };

    addItem = (e) => {
        e.preventDefault();

        const newItem = {
            name: e.target[0].value,
            image: e.target[1].value,
            link: e.target[2].value,
            description: e.target[3].value,
        };

        this.setState((prevState) => ({
            items: [...prevState.items, newItem],
        }));

        e.target.reset();
    };

    render() {
        return (
            <div>
                <Form submitFn={this.addItem} />
                <ListWrapper items={this.state.items} />
            </div>
        );
    }
}

export default App;
