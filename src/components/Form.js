import React from "react";

//stateless component
const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button>Get Weather</button>
    </form>
)

export default Form;




