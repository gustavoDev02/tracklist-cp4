
export function ExerciseList() {

    const exercicios = [
        "pulley frente - 15 repetições",
        "Panturrilha no hack - 12 repetições",
        "flexão -  20 repetições"
    ];

    return (
        <>
            <div style={{
                border: "1px solid #ccc",
                fontFamily: "helvetica",
                marginTop: "1rem"
            }}>
                <h2>Exercicios do dia </h2>
                <ul >
                    {exercicios.map((exercicio, index) => (
                        <li key={index}>{exercicio}</li>
                    ))}
                </ul>
            </div>

        </>
    )
}