import PerguntasQuiz from "../../componentes/perguntasQuiz/PerguntasQuiz";

function QuizBetta() {
  return (
    <div>
      <PerguntasQuiz
        imageUrl="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY_DO6ngRD3UYfyeWMoULKlnjLcApR74HgXLNcgIUiaIZjb1XwYWS1UKYU9P61DYtFWmRkTu6Wva5W4yXttnBhCsH0EeZzD5gE=w1920-h868"
        text1="QUIZBETTA: SERÁ QUE ENTENDO DE PEIXE BETTA?"
        text2="Betta"
        questions={[
          {
            questionText: "Q1 - Qual é o nome científico do peixe Betta?",
            name: "q1",
            options: [
              { value: "Betta splendens", label: "Betta splendens" },
              { value: "Betta magnificus", label: "Betta magnificus" },
              { value: "Betta fantastico", label: "Betta fantastico" },
              { value: "Betta extraordinarius", label: "Betta extraordinarius" },
            ],
          },

          {
            questionText: "Q2 - Por que os Bettas são frequentemente mantidos em aquários individuais?",
            name: "q2",
            options: [
              { value: "Eles são peixes muito solitários", label: "Eles são peixes muito solitários" },
              { value: "Eles podem ser agressivos com outros peixes", label: "Eles podem ser agressivos com outros peixes" },
              { value: "Eles têm medo de águas profundas", label: "Betta Eles têm medo de águas profundas" },
              { value: "Eles gostam de privacidade para ler livros", label: "Eles gostam de privacidade para ler livros" },
            ],
          },

          {
            questionText: "Q3 - Qual é a temperatura ideal da água para um aquário de Betta?",
            name: "q3",
            options: [
              { value: "20-22°C", label: "20-22°C" },
              { value: "25-27°C", label: "25-27°C" },
              { value: "30-32°C", label: "30-32°C" },
              { value: "10-15°C", label: "10-15°C" },
            ],
          },

          {
            questionText: "Q4 - Qual é a cor selvagem original do Betta na natureza?",
            name: "q4",
            options: [
              { value: "Vermelho", label: "Vermelho" },
              { value: "Azul-marinho", label: "Azul-marinho" },
              { value: "Amarelo", label: "Amarelo" },
              { value: "Verde-oliva", label: "Verde-oliva" },
            ],
          },

          {
            questionText: "Q5 - Por que os Bettas são conhecidos por suas longas barbatanas?",
            name: "q5",
            options: [
              { value: "Para se protegerem de predadores", label: "Para se protegerem de predadores" },
              { value: "Para impressionar outros peixes", label: "Para impressionar outros peixes" },
              { value: "Para voarem como pássaros", label: "Para voarem como pássaros" },
              { value: "Para navegar melhor em águas profundas", label: "Para navegar melhor em águas profundas" },
            ],
          },

          {
            questionText: "Q6 - Qual país um psiculturista representou ao alterar a génetica de uma Betta? ",
            name: "q6",
            options: [
              { value: "EUA", label: "EUA" },
              { value: "BRASIL", label: "BRASIL" },
              { value: "CANADÁ", label: "CANADÁ" },
              { value: "UK", label: "UK" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default QuizBetta;
