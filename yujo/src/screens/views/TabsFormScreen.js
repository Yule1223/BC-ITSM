import '../styles/TabsFormScreen.style.css';
import {Tab, Tabs} from "react-bootstrap";
import {useState} from "react";

function TabsFormScreen(props) {
    const [key, setKey] = useState(props.tabs[0].title);

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 w-75"
        >
            {props.tabs.map(tab => {
                return (
                    <Tab eventKey={tab.title} title={tab.title}>{tab.content}</Tab>
                );
            })}
        </Tabs>
    );
}

export default TabsFormScreen;
