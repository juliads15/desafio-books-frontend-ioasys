import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { useDispatch } from "react-redux";
import Book1 from "../../../assets/images/Book1.png";

const BookItem = () => {

    return(
        <S.ProductItem>
            <S.ImageBox>
            <S.BookImage 
                    src={Book1}
                />
            </S.ImageBox>
            <S.BookInfo>
                <S.BookTitle>Crossing the Chasm</S.BookTitle>
                <S.BookAuthor>Geoffrey A. Moore</S.BookAuthor>
                <S.BookPages>150 páginas</S.BookPages>
                <S.BookPublisher>Editora Loyola</S.BookPublisher>
                <S.BookPublished>Publicado em 2020</S.BookPublished>
            </S.BookInfo>
        </S.ProductItem>
    );
};

export default BookItem;