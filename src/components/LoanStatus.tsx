import { ChevronLeft, ChevronDown, User } from "lucide-react";
import { AccordionCard } from "../components/AccordionCard";
import { useEffect, useState } from "react";

import { api } from "../services/api";

interface LoanStatusProps {
  onVoltar: () => void;
  onNovoEmprestimo: () => void;
  cpf: string;
}
interface Emprestimo {
  cpf: string;
  valorSolicitado: number;
  numeroParcelas: number;
  status: "aprovado" | "rejeitado";
  motivo?: string;
  criadoEm: string;
}

export function LoanStatus({
  cpf,
  onVoltar,
  onNovoEmprestimo,
}: LoanStatusProps) {
  const [emprestimos, setEmprestimos] = useState<Emprestimo[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get(`/emprestimos/${cpf}`);
        setEmprestimos(data);
      } catch (err) {
        alert("Erro ao carregar empréstimos.");
      }
    }

    fetchData();
  }, [cpf]);

  function formatarVencimento(iso: string) {
    const data = new Date(iso);
    data.setMonth(data.getMonth() + 1);
    return data.toLocaleDateString("pt-BR");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-600 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="font-bold text-lg">credifit</span>
        </div>
        <div className="flex items-center space-x-2">
          <User className="w-5 h-5" />
          <span className="text-sm">Diego Viana</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </header>

      {/* Conteúdo */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6">
          <ChevronLeft
            className="w-5 h-5 text-gray-600 cursor-pointer"
            onClick={onVoltar}
          />
          <span className="text-gray-600 text-sm">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 text-sm">Crédito Consignado</span>
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Crédito Consignado
        </h1>

        <div className="bg-white shadow-md rounded-xl p-6">
          {/* Info box */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 text-sm text-gray-700">
            <p>
              <strong>Você solicitou seu empréstimo!</strong> Agora aguarde as
              etapas de análises serem concluídas!
            </p>
          </div>

          {/* Cards de status */}
          <div className="space-y-4">
            {emprestimos.map((e, index) => (
              <AccordionCard
                key={e.criadoEm + index}
                titulo={`Empréstimo ${index + 1}`}
                status={e.status === "rejeitado" ? "reprovado" : e.status}
                motivo={e.motivo}
                valorSolicitado={e.valorSolicitado}
                empresa="Seguros Seguradora"
                vencimento={formatarVencimento(e.criadoEm)}
                parcelas={e.numeroParcelas}
                valorParcela={Math.floor(e.valorSolicitado / e.numeroParcelas)}
                valorTotal={e.valorSolicitado}
              />
            ))}
          </div>
        </div>

        {/* Botões */}
        <div className="flex justify-between mt-8">
          <button
            onClick={onVoltar}
            className="px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-full font-medium hover:bg-teal-50 transition"
          >
            Voltar
          </button>
          <button
            onClick={onNovoEmprestimo}
            className="px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition"
          >
            Novo empréstimo
          </button>
        </div>
      </div>
    </div>
  );
}
