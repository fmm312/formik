import './App.css';
import { Formik, Field, Form } from "formik";

function App() {
  return (
    <div className="App">     
      <Formik
        initialValues={{ name: "", surname: "" }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <h1>Form</h1>
          <span className="label">Name</span>
          <Field className="Field" name="name" type="text" />
          <span className="label">Surname</span>
          <Field className="Field" name="surname" type="text" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
