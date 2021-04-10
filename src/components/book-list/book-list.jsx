import React from "react";
import * as S from "./styled";
import BookItem from "./book-item/book-item";

const BookList = ({ books }) => {
    return(
        <S.BookList>
            <S.Wrapper>
                <BookItem />
                {/* {books?.map(({ id, title, imageUrl, authors, pageCount, publisher, published }) => (
                    <BookItem
                        key={id}
                        id={id}
                        title={displayName}
                        imageUrl={images[0]}
                        authors={authors}
                        pageCount={pageCount}
                        publisher={publisher}
                        published={published}
                    />
                ))} */}
            </S.Wrapper>
        </S.BookList>
    );
};

export default BookList;