import React, { useState } from 'react'
import './App.css'
import FeaturedVideo from './components/FeaturedVideo/FeaturedVideo'
import Header from './components/Header/Header'
import { Analytics } from '@vercel/analytics/react';

function App() {
  
  return (
    <>
    <Header />
    <FeaturedVideo />
    <Analytics />
    </>
  )
}

export default App
