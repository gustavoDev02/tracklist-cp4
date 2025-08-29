interface MotivationalMessageProps {
    mensagem: string;
    autor: string;

}

export function MotivationalMessage(props: MotivationalMessageProps) {
    return (

        <>
            <div style={{
                
                border: "1px solid #ccc",
                fontFamily: "helvetica",
                  marginTop: "1rem"
            }}>
                <h2>Mensagem motivational: {props.mensagem}</h2>
                <h3 style={{
                display: "flex",
                alignItems: "center",
            }}> - {props.autor} </h3>
            </div >


        </>
    )
}