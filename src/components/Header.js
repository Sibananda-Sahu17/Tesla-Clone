import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';  
import CloseIcon from '@mui/icons-material/Close';    

function Header() {

    const [open, setOpen] = useState(false); 
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setOpen(true)}/>
            </RightMenu>
            <BurgerNav show={open}>
                <CloseWrapper>
                    <CustomClose onClick={() => setOpen(false)}/>
                </CloseWrapper>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-In</a></li>
                    <li><a href="#">Demo Drive</a></li>
                    <li><a href="#">Insurance</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Find Us</a></li>
            </BurgerNav>

        </Container>
  )
}

export default Header

const Container = styled.div`
    @media (max-width: 425px){
        padding: 0.4rem;
        min-height: 1rem;
        font-size: 0.7rem;
        font-weight: 200;
        a img{
            height: 1rem;
            padding-left: 0.5rem;
        }
    }
    min-height: 3.5rem;
    position: fixed;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`   
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 1rem;
        flex-wrap: nowrap;
    }
    @media (max-width:768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin: 0 1rem;
    }
    // @media (max-widht: 425px){
    //     min-height: 1rem;
    //     padding: 1rem;
    //     font-weight: 600;
    // }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 18rem;
    z-index: 16;
    list-style: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li{
        padding: 1rem 0;
        border-bottom: 1px solid rgb(0, 0, 1, .2);
        font-weight: 600;
    
    }
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`