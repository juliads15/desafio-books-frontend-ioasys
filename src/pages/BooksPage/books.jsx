import React, { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
import BookList from "../../components/book-list/book-list";
import * as C from "../../components/common/styles";
import Header from "../../components/header/header";

const Books = () => {
    // const dispatch = useDispatch();
    // const { books, isLoading } = useSelector(({ book }) => book);

    // useEffect(() => {
    //     dispatch(GET_BOOKS());
    // }, [dispatch]);

    return(
        <C.Wrapper>
            <Header />
            <C.Section>
                <BookList/>
                {/* {
                    (
                        books.map(({ items }, index) => (
                            <BookList 
                                key={index}
                                books={items}
                            />
                        ))
                    )
                } */}
            </C.Section>
        </C.Wrapper>
    );
};

export default Books;