import React from 'react';
import { Button } from "@/components/ui/button"
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import ProtectedRoute from './components/custom/protected-route/ProtectedRoute';
import Dashboard from './components/custom/dashboard/Dashboard';
import AddBook from './components/custom/add-book/AddBook';
import StudentList from './components/custom/student-list/StudentList';
import AddStudent from './components/custom/add-student/AddStudent';
import IssueBook from './components/custom/issue-book/IssueBook';
import ReturnBook from './components/custom/return-book/ReturnBook';
import Analytics from './components/custom/analytics/Analytics';
import Chart from './components/custom/chart/Chart';
import Header from './components/custom/header/Header';


const App = () => {
  return (
   <BrowserRouter>
   <Header/>
     <Routes>
      <Route path="/" element={<Navigate to="/dashboard"/>}/>
      <Route element={<ProtectedRoute/>}>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/addbook' element={<AddBook/>}/>
       <Route path='/studentlist' element={<StudentList/>}/>
       <Route path='/addstudent' element={<AddStudent/>}/>
       <Route path='/issuebook' element={<IssueBook/>}/>
       <Route path='/returnbook' element={<ReturnBook/>}/>
       <Route path='/analytics' element={<Analytics/>}/>
       <Route path='/bookchart' element={<Chart/>}/>
       <Route path="*" element={<Navigate to="/dashboard"/>}/>
      </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App;