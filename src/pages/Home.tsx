import { useState } from "react";
import { LoanForm } from "../components/LoanForm";
import { LoanOptions } from "../components/LoanOptions";
import { LoanConfirmation } from "../components/LoanConfirmation";
import { LoanSummary } from "../components/LoanSummary";
import { LoanStatus } from "../components/LoanStatus";
import { api } from "../services/api";

export default function Home() {
  const [cpf] = useState("12345679999");

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
          }}
        />
      )}

      {etapa === "resumo" && parcelasSelecionadas && (
        <LoanConfirmation
          valor={valor}
          parcelas={parcelasSelecionadas}
          onVoltar={() => setEtapa("parcelas")}
          onConfirmar={() => {
            setEtapa("confirmacao");
          }}
        />
      )}
      {etapa === "confirmacao" && parcelasSelecionadas && (
        <LoanSummary
          valor={valor}
          parcelas={parcelasSelecionadas}
          onVoltar={() => setEtapa("resumo")}
          onSolicitar={async () => {
            try {
              await api.post("/emprestimos", {
                cpf: cpf,
                valorSolicitado: valor,
                numeroParcelas: parcelasSelecionadas,
              });

              setEtapa("status");
            } catch (err) {
              alert("Erro ao solicitar empréstimo.");
            }
          }}
        />
      )}

      {etapa === "status" && (
        <LoanStatus
          cpf={cpf}
          onVoltar={() => setEtapa("confirmacao")}
          onNovoEmprestimo={() => {
            setValor(10000);
            setParcelasSelecionadas(null);
            setEtapa("form");
          }}
        />
      )}
    </>
  );
}
