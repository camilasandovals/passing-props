import GreetingCard from "./GreetingCard"
export default function GreetingList() {
    return(
        <section className="GreetingList">
            <h2>Greeting</h2>
             <GreetingCard firstName = "David" age={21}/>
             <GreetingCard firstName = "Jonathan"/>
             <GreetingCard firstName = "Jasmin"/>
        </section>
    )
}