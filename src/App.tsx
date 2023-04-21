import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IRegisterData } from './screens/Register/Register.types';
import { TaskProvider } from "./context/task.context";
import Listview from "./screens/Listview";
import Register from "./screens/Register";
import { AppLayoutContainer, GlobalStyle } from "./styles";

const App = () => {
  return (
    <>
    <TaskProvider>
      <GlobalStyle />
      <AppLayoutContainer>
        <Router>
          <Routes>
            <Route path="/" element={<Register onSubmit={function handleSubmit(data: IRegisterData): void {} } />} />
            <Route path="/listview" element={<Listview />} />
          </Routes>
        </Router>
      </AppLayoutContainer>
    </TaskProvider>
    </>
  );
};

export default App;
