import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IRegisterData } from './screens/Register/Register.types';
import { TaskProvider } from "./context/task.context";
import { AppLayoutContainer, GlobalStyle } from "./styles";

const LazyRegister = lazy(() => import('./screens/Register'));
const LazyListview = lazy(() => import('./screens/Listview'));

const App = () => {
  return (
    <>
    <TaskProvider>
      <GlobalStyle />
      <AppLayoutContainer>
        <Suspense fallback={<div>Carregando...</div>}>
          <Router>
            <Routes>
                <Route path="/adatech-aula-deploy/build/" element={<LazyRegister onSubmit={function handleSubmit(data: IRegisterData): void {} } />} />
                <Route path="/adatech-aula-deploy/build/listview" element={<LazyListview />} />
            </Routes>
          </Router>
        </Suspense>
      </AppLayoutContainer>
    </TaskProvider>
    </>
  );
};

export default App;