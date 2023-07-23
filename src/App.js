import React from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Installation from "./components/Get_Started/Installation"
import Label from "./components/Form_Utility/Label"
import Field from "./components/Get_Started/Field"
import Input from "./components/Form_Utility/Input"
import File from "./components/Form_Utility/File"
import Button from "./components/Form_Utility/Button"
import Select from "./components/Form_Utility/Select"
import SelectOptGroup from "./components/Form_Utility/SelectOptGroup"
import DataList from "./components/Form_Utility/DataList"
import Checkbox from "./components/Form_Utility/Checkbox"
import Radio from "./components/Form_Utility/Radio"
import Support from "./components/User_Report/Support"
import ReportBugs from "./components/User_Report/ReportBugs"
import Navbar from "./components/Navbar"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form-utility" element={ <Layout/>}>
            <Route path="installation" element={<Installation />} />
            <Route path="field" element={<Field />} />
            <Route path="label" element={<Label />} />
            <Route path="input" element={<Input/>} />
            <Route path="file" element={<File/>} />
            <Route path="button" element={<Button/>} />
            <Route path="select" element={<Select/>} />
            <Route path="select-opt-group" element={<SelectOptGroup />} />
            <Route path="data-list" element={<DataList />} />
            <Route path="checkbox" element={<Checkbox />} />
            <Route path="radio" element={<Radio />} />
            <Route path="support" element={<Support />}/>
            <Route path="report-bugs" element={<ReportBugs />}/>
        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App