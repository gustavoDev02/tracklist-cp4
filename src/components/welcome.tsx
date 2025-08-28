interface WelcomeProps {
    titulo: string;
    frase: string;

}

export function Welcome(props: WelcomeProps) {
    return (

        <>
            <div style={{
                border: "1px solid #ccc",
                fontFamily: "helvetica"
            }}>
                <h1>{props.titulo} </h1>
                <h2>frase do dia: {props.frase} 😄</h2>
            </div>

        </>
    )
}