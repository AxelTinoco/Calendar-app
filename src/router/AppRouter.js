import React from 'react'
import { Routes, Route } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PageNotFound } from '../components/ui/PageNotFound';
export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<CalendarScreen />} />
            <Route path="login" element={<LoginScreen />} />
            <Route path="*" element={<PageNotFound/> } />
        </Routes>
    </div>

  )
}
