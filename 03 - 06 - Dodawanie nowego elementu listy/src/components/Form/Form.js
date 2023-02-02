import React from "react";

const Form = ({ submitFn }) => (
    <form onSubmit={submitFn}>
        <input placeholder="name" name="name" />
        <input placeholder="image" name="image" />
        <input placeholder="link" name="link" />
        <textarea placeholder="description" name="description"></textarea>
        <input type="submit" value="add new item" />
    </form>
);

export default Form;
