import React, { useState } from 'react';
import styled from "styled-components";
import { TiHome } from "react-icons/ti"
import { RiMessengerLine } from "react-icons/ri"
import { FaRegCompass, FaUserCircle } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"


const Header = () => {
    const [value, setValue] = useState("Search")
    return (
        <HeaderWrapper>
            <HeaderInnerWrapper>
                <div className="app_headerImg">
                    <img src="https://lahomeconstruction.com/wp-content/uploads/2020/12/insta.jpg" alt="instagtam" />
                </div>
                <div className="input__field">
                    <input style={value !== "" ? { textAlign: "center" } : { textAlign: "left" }} type="text" placeholder="Search" onClick={() => setValue("")} />
                </div>
                <div className="icons">
                    <div className="icon-1">
                        <TiHome />
                    </div>
                    <div className="icon-2">
                        <RiMessengerLine />
                    </div>
                    <div className="icon-3">
                        <FaRegCompass />
                    </div>
                    <div className="icon-4">
                        <AiOutlineHeart />
                    </div>
                    <div className="icon-5">
                        <FaUserCircle />
                    </div>

                </div>
            </HeaderInnerWrapper>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.div`
    background-color: #faf8f4;
    background: #faf8f4;
    border-bottom: 1px solid #dbd9d5;
    width: 100%;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    
    .app_headerImg{
        padding: 0;
        object-fit: contain;
        text-align: left;
        margin: 0;
    }

    .input__field{
        margin: 0;
        padding: 20px 10px;
        text-align: center;
        justify-self: center;
    }

    input{
        outline: none;
        padding: 0;
        margin: 0;
        width: 12rem;
        height: 1.5rem;
        border: 0.5 solid rgba(197, 195, 191, 0.493);
        cursor: pointer;
        opacity: 0.5;
    }
    
    img{
        padding: 0 1rem;
        height: 4rem;
        background-color:  #faf8f4;
        cursor: pointer;
    }
`
const HeaderInnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 400px !important;

    .icons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 2rem;
        opacity: 0.76;
        font-weight: 500;

        & > div{
            padding: 12px 10px;
            cursor: pointer;
        }
    }

    .icon-5{
        opacity: 0.2;
    }
`