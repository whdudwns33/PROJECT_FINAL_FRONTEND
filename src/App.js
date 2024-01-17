import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import GlobalStyle from './utils/style/GlobalStyle';
import MainPage from './main/MainPage';
import FormPage from './form/FormPage';
import SigninPage from './sign/SigninPage';
import SignupPage from './sign/SignupPage';

function App() {
  return (
    <>
      <GlobalStyle />
       <Router>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            {/* <Route path="/findid" element={<FindIdPage />} /> */}
            {/* <Route path="/findpw" element={<FindPwPage />} /> */}
          </Routes>
       </Router>

    </>
  );
}

export default App;
