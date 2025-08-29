import { ExerciseList } from "./components/exercise-list"
import { MotivationalMessage } from "./components/motivational-message"
import { Welcome } from "./components/welcome"

function App() {


  return (
    <>

      <Welcome
        titulo="Bom dia seja bem vindo ao CP4 "
        frase="ser ruim em alguma coisa é o primeiro passo para se tornar bom em alguma coisa"
      />
      <ExerciseList />

      <MotivationalMessage
        mensagem="Você consegue !!!"
        autor="Chico Bento"
      />

    </>

  )
}

export default App
