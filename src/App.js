import {useSelector} from 'react-redux';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';
import LoginPage from './pages/LoginPage';
import RegisterCoursePage from './pages/RegisterCoursePage';
import SearchPage from './pages/SearchPage';
import SignupPage from './pages/SignupPage';
import AdminPage from './pages/AdminPage';
import AddUser from './components/forms/addUser/AddUserForm';
import UserPage from './pages/UserPage';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/search-courses' element={<SearchPage />}></Route>
          <Route
            path='/admin'
            element={
              user?.maLoaiNguoiDung === 'GV' ? (
                <AdminPage />
              ) : (
                <Navigate to='/' replace={true} />
              )
            }
          ></Route>
          <Route path='/admin/add-user' element={<AddUser />}></Route>
          <Route path='/detail/:courseId' element={<DetailPage />}></Route>
          <Route
            path='/category/:categoryId'
            element={<CategoryPage />}
          ></Route>
          <Route
            path='/user'
            element={
              isLoggedIn ? <UserPage /> : <Navigate to='/' replace={true} />
            }
          ></Route>
          <Route
            path='/registerCourse/:courseId'
            element={
              isLoggedIn ? (
                <RegisterCoursePage />
              ) : (
                <Navigate to='/login' state={location.pathname} />
              )
            }
          ></Route>
        </Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignupPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
