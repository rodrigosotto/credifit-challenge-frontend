import { useState } from "react";
import { LoanForm } from "../components/LoanForm";
import { LoanOptions } from "../components/LoanOptions"; // novo componente
import { LoanConfirmation } from "../components/LoanConfirmation";
import { LoanSummary } from "../components/LoanSummary";
import { LoanStatus } from "../components/LoanStatus";

export default function Home() {
  const [valor, setValor] = useState(10000);
  const [parcelasSelecionadas, setParcelasSelecionadas] = useState<
    number | null
  >(null);
  const [etapa, setEtapa] = useState<
    "form" | "parcelas" | "resumo" | "confirmacao" | "status"
  >("form");

  return (
    <>
      {etapa === "form" && (
        <LoanForm
          valor={valor}
          onChangeValor={setValor}
          onSimular={() => setEtapa("parcelas")}
        />
      )}

      {etapa === "parcelas" && (
        <LoanOptions
          valor={valor}
          onVoltar={() => setEtapa("form")}
          onSelecionarParcela={(parcelas) => {
            setParcelasSelecionadas(parcelas);
            setEtapa("resumo");
            console.log("Parcelas selecionadas:", parcelas);
          }}
        />
      )}

      {etapa === "resumo" && parcelasSelecionadas && (
        <LoanConfirmation
          valor={valor}
          parcelas={parcelasSelecionadas}
          onVoltar={() => setEtapa("parcelas")}
          onConfirmar={() => {
            console.log("Enviar solicitação!");
            setEtapa("confirmacao");
          }}
        />
      )}
      {etapa === "confirmacao" && parcelasSelecionadas && (
        <LoanSummary
          valor={valor}
          parcelas={parcelasSelecionadas}
          onVoltar={() => setEtapa("resumo")}
          onSolicitar={() => {
            setEtapa("status");
          }}
        />
      )}
      {etapa === "status" && (
        <LoanStatus
          onVoltar={() => setEtapa("confirmacao")}
          onNovoEmprestimo={() => {
            setParcelasSelecionadas(null);
            setValor(10000);
            setEtapa("form");
          }}
        />
      )}
    </>
  );
}
