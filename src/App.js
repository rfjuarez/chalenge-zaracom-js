import {Provider} from "react-redux";
import {storeInstance} from "./store/config";
import {Route, Routes} from 'react-router-dom'
import {routes} from "./ui/routes/routes";

function App() {
    return (
        <Provider store={storeInstance}>
            <Routes>
                {
                    routes.map(route => (<Route key={route.path} {...route}/>))
                }
            </Routes>
        </Provider>
    );
}

export default App;
