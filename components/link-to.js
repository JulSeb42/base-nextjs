import Link from "next/link"

export default function LinkTo(props) {
    return (
        <Link href={props.to}>
            <a>{props.text}</a>
        </Link>
    )
}