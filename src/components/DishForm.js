import React, {useState} from 'react';
import { Field, reduxForm } from 'redux-form';
import TimeInput from './TimeInput'

const DishForm = props => {
    
  const { pristine, reset, submitting } = props;
  const [data, setData] = useState("");
  const handleSubmit = (evt) => {
    
    // const formInfo = <div>
    //     <h5>Hello</h5>
    // </div>
    document.querySelector('#dataFromForm').innerHTML = this.formText;
    evt.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} ref={self => this.formText = self }>
      <div>
        <label>Name</label>
        <div>
          <Field
            name="dishName"
            component="input"
            type="text"
            placeholder="Dish Name"
          />
        </div>
      </div>
      <div>
        <label>Preparation time</label>
        <div>
          <TimeInput/>
        </div>
      </div>
      <div>
        <label>Dish type</label>
        <div>
          <Field name="type" component="select" onChange={(evt) => {setData(evt.target.value)}} value={data}>
            <option />
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
          </Field>
          {console.log("data", data)}
        </div>
        <div>
            {data==="pizza" && <div>
                <Field
                name="no_of_slices"
                component="input"
                type="number"
                placeholder="Number of slices"
                />
                <Field
                name="diameter"
                component="input"
                type="number"
                placeholder="Diameter"
                />
            </div>
            }
            {data==="soup" && <div>
                <label>Spiciness scale</label><br></br>
                <Field
                name="spiciness_scale"
                component="input"
                type="range"
                min="0"
                max="10"
                />
                </div>}
            {data==="sandwich" && <div>
                <Field
                name="slices_of_bread"
                component="input"
                type="number"
                placeholder="Slices of bread"
                />
                </div>}
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
      <div id="dataFromForm"></div>
    </form>
  );
};

export default reduxForm({
  form: 'simple',
})(DishForm);
