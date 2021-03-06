import React, { useState } from "react";
import { FaRProject } from "react-icons/fa";
import styled from "styled-components"
import Text from "../../Components/Text";
import Footer from "../Footer";
import { Users } from "./data";
import Font from "react-font"

const Content = () => {

    return (
        <ContentWrapper>
            <Text></Text>
            <TableWrapper>
                <table>
                    {Users.map(item => {
                        return (<tr>
                            <th className="first-col"><img src={item.icon} /></th>
                            <th><p><strong>{item.label}</strong> <br /> {item.subLabel} <br />{item.info}</p></th>
                            <th><h4></h4></th>
                            <th className="last-col"><button >{item.followed ? "following" : "follow"}</button></th>
                        </tr>
                        )
                    }
                    )}
                </table>
            </TableWrapper>
            <Footer></Footer>
        </ContentWrapper>
    )
}
export default Content;

const ContentWrapper = styled.div`
    width: 650px;
    margin: 0 auto;
    height: 100%;
`

const TableWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid rgb(248, 213, 213);;

    border-radius: 5px;
    background: white;

    @media(max-width: 725px) {
        padding: 0 30px;
        width: 100%;
    }

    table{
        width: 100%; 
    }
    p{
        color: black;
    }
    img{
        padding: 1rem 1rem; 
        height: 2.5rem;
        border-radius: 3rem;
        opacity: 1 !important;
    }
    th{
        font-size: 0.9rem;
        text-align: left;
        font-weight: 300;
        
    }
    .first-col{
        width: 3rem;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        
    }
    .last-col{
        text-align: right;
        align-self: right;
        padding-right: 1rem;
        margin-right: 1rem;
    }
    .get-started{
        width: 100%;
        padding: 1rem 1rem;
        text-align: center;
    }
    button{
        padding: 0.5rem;
        width: 6rem;
        background-color: rgb(89, 89, 212);
        color: white;
        border: none;
        border-radius: 5px;
    }
`