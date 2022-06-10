import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary? '#7d3b86' : '#f3a41f')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 3rem' : '0.75rem 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '24px' : '20px')};
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary? '#a766b0' : '#ebb65b')};
    }
`