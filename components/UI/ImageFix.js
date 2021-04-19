//Packages
import styled from "styled-components";
import Image from "next/image";

//Styles
const Container = styled.div`
    width: 100%;

    > div {
        position: unset !important;
    }

    .img {
        object-fit: contain;
        width: 100% !important;
        position: relative !important;
        height: unset !important;
    }
`;

export default function ImageFix(props) {
    return (
        <Container>
            <Image
                src={props.src}
                layout="fill"
                className="img"
                alt={props.alt}
                sizes="100%"
            />
        </Container>
    );
}
