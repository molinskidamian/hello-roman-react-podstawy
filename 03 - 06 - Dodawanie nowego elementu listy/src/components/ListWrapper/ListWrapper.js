import React from "react";
import ListItem from "./ListItem/ListItem";

const ListWrapper = ({ items }) => (
    <ul>
        {items.map((item) => (
            <ListItem
                name={item.name}
                image={item.image}
                link={item.link}
                description={item.description}
                key={item.name}
            />
        ))}
    </ul>
);

export default ListWrapper;
