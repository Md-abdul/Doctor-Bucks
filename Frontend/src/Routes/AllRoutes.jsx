import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { SignupPage } from "../pages/Signup";
import { Onboard } from "../pages/Onboard";
import { Dashboard } from "../pages/Dashboard";
import { Edit } from "../pages/Edit";
import { Home } from "../pages/Home";
import { PrivateRoute } from "../components/PrivateRoute";
import { PatientAppointment } from "../pages/PatientAppointment";
import { ViewDoctor } from "../pages/ViewDoctor";
import { PatientGetData } from "../pages/PatientGetData";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/onboard" element={<Onboard />} />
        <Route path="/patientappointment" element={<PatientAppointment />} />
        <Route path="/viewdoctor" element={<ViewDoctor />} />
        <Route path="/patientgetdata" element={<PatientGetData />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="" />
      </Routes>
    </div>
  );
};
