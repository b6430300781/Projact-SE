import logo from './logo.svg';
import './App.css';
import ButtonUser from './components/ButtonUser';
import DateAdmin from './components/DateAdmin';
import Box from './oanchisa/box';
import NavbarAdmin from "./components/NavbarAdmin";
import HeaderAdmin from "./components/HeaderAdmin";
import NavbarEdu from "./components/NavbarEdu";
import HeaderEdu from "./components/HeaderEdu";

function App() {
  return (
    <div>
      {/* <ImportUser></ImportUser> */}
      {/* <ButtonUser></ButtonUser> */}
      <DateAdmin></DateAdmin>
      {/* <Box/> */}
      <HeaderAdmin />
      <NavbarAdmin />
      <HeaderEdu />
      <NavbarEdu />

    </div>
  );
}

export default App;
