import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ tag: Tag, name, maxLength, label }) => (
    <div className={styles.formItem}>
        <Tag
            className={Tag === "textarea" ? styles.textarea : styles.input}
            type="text"
            name={name}
            id={name}
            placeholder=" "
            maxLength={maxLength}
        />
        <label className={styles.label} htmlFor={name}>
            {label}
        </label>
        <div className={styles.formItemBar} />
    </div>
);

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    label: PropTypes.string.isRequired,
};

Input.defaultProps = {
    tag: "input",
    maxLength: 200,
};

export default Input;
