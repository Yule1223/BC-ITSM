import '../styles/FormScreen.style.css';
import Header from "../../components/views/Header";
import TabsFormScreen from "./TabsFormScreen";
import {Button} from "react-bootstrap";

function FormScreen() {
  return (
    <div className="App">
      <Header />
        <section>
            <TabsFormScreen tabs={[
                {
                    title: "A",
                    content: <Button variant="danger">Prueba contenido A</Button>,
                },
                {
                    title: "B",
                    content: <Button variant="warning">Prueba contenido B</Button>,
                },
                {
                    title: "C",
                    content: <Button variant="success">Prueba contenido C</Button>,
                },
            ]} />
        </section>
    </div>
  );
}

export default FormScreen;
