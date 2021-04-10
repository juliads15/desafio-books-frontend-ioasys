import styled from "styled-components";

export const ProductItem = styled.div`
    border-radius: 4px;
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    position: relative;
    top: 40px;
    width: 272px;
    height: 160px;
    background-color: #fff;
`;

export const ImageBox = styled.div`
    border-radius: 4px;
    width: 115px;
    height: 160px;
`

export const BookImage = styled.img`
    display: block;
    width: 80px;
    height: 122px;
    height: auto;
    padding: 16px;
`;

export const BookInfo = styled.div`
    flex: 1;
    display: block;
    flex-flow: column wrap;
`;

export const BookTitle = styled.h2`
    color: #333333;
    font-size: 14px;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    flex-grow: 1;
`;

export const BookAuthor = styled.h3`
    color: #AB2680;
    font-size: 12px;
    font-weight: medium;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    flex-grow: 1;
`;

export const BookPages = styled.p`
    padding-top: 0px;
    color: #999999;
    font-size: 12px;
    font-weight: normal;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    flex-grow: 1;
`;

export const BookPublisher = styled.p`
    padding-top: 0px;
    color: #999999;
    font-size: 12px;
    font-weight: normal;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    flex-grow: 1;
`;

export const BookPublished = styled.p`
    padding-top: 0px;
    color: #999999;
    font-size: 12px;
    font-weight: normal;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    flex-grow: 1;
`;