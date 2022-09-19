type GreetProps={
    name?:string
}

export default function Great(props: GreetProps) {
    return (
        <div>Hello {props.name}</div>
    )
}
