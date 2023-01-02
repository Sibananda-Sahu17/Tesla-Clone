import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import modelS from "../images/model-s.jpg"
import modelY from "../images/model-y.jpg"
import model3 from "../images/model-3.jpg"
import modelX from "../images/model-x.jpg"
import solarPanel from "../images/solar-panel.jpg"
import solarRoof from "../images/solar-roof.jpg"
import accessories from "../images/accessories.jpg"

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order online for touchless delivery"
                backgroundImg={modelS}
                leftBtnText="Custom Button "
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order online for touchless delivery"
                backgroundImg={modelY}
                leftBtnText="Custom Button "
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order online for touchless delivery"
                backgroundImg={model3}
                leftBtnText="Custom Button "
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order online for touchless delivery"
                backgroundImg={modelX}
                leftBtnText="Custom Button "
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee" 
                backgroundImg={solarPanel}
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roofs"
                backgroundImg={solarRoof}
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories" 
                description="" 
                backgroundImg={accessories}
                leftBtnText="Shop now"
            />            
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`