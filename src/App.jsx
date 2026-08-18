import React from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {
  return (
    <div className="App">
     <Card
        title="BMI Calculator"
        image="/src/assets/image.png"
        description="A simple BMI calculator made using React."
        projectUrl="https://body-mass-index-calculator-ashy.vercel.app/"
      />
      <Card
        title="Counter Application"
        image="/src/assets/Counter.png"
        description="A simple counter application made using React."
        projectUrl="https://new-game-of-react.vercel.app/"
      />
      <Card
        title="ERP Application"
        image="/src/assets/ERP.jpg"
        description="A simple ERP application made using React."
        projectUrl="https://practice-test01.vercel.app//"
      />
    </div>
  )
}

export default App


 