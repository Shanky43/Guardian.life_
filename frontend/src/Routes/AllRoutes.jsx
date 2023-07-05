import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import OnboardingPage from '../Pages/OnboardingPage'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path="/onboarding" element={<OnboardingPage />} />
            </Routes>
        </>
    )
}

export default AllRoutes