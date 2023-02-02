import React from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

const ListItem = ({ name, image, link, description }) => (
    <li className="listItem__wrapper">
        <img src={image} alt={name} className="listItem__image" />
        <strong>
            <a href={link}>{name}</a>
        </strong>
        : {description}
    </li>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
};

ListItem.defaultProps = {
    image:
        "https://i0.wp.com/rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png?ssl=1",
    description: "Domyślny opis",
};

export default ListItem;
