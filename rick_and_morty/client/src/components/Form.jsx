import { useState } from "react";
import "./Form.css";
import validation from "./Validation";

const Form = ({login}) =>  {
    const [errors, setErrors] = useState([]);
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      login(userData);
    };

    return(
        <div className = "formContainer">
            <form class="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="email">
          Email:{" "}
        </label>
        <input
          onChange={handleChange}
          class="input"
          type="text"
          name="email"
          placeholder="Email..."
          value={userData.email}
        ></input>
        {errors.email && <p className="p">{errors.email}</p>}
        <label className="label2" htmlFor="password">
          Password:{" "}
        </label>
        <input
          onChange={handleChange}
          class="input"
          type="password"
          name="password"
          placeholder="Password..."
          value={userData.password}
        ></input>
        {errors.password && <p className="p">{errors.password}</p>}
        <button>Login</button>
      </form>
        </div>
    )
}

export default Form;