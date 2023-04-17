export default function GreetingCard({firstName, age}) {
    // const {firstName, age} = props
    return(
        <div className="GreetingCard">
            <h3>Hello {firstName}, {age}!</h3>
            {/* <h3>Hello {props.firstName}!</h3>  two ways of writing it */}
        </div>
    )
}