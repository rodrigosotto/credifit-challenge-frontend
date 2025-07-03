import {
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  User,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

interface LoanStatusProps {
  onVoltar: () => void;
  onNovoEmprestimo: () => void;
}

export function LoanStatus({ onVoltar, onNovoEmprestimo }: LoanStatusProps) {
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

      <main className="max-w-2xl mx-auto px-4 py-8">
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

        {/* Título + info */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Crédito Consignado
        </h1>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 text-sm text-gray-700">
          <p>
            <strong>Você solicitou seu empréstimo!</strong> Agora aguarde as
            etapas de análises serem concluídas!
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          <AccordionCard
            titulo="SOLICITAÇÃO DE EMPRÉSTIMO 01"
            status="reprovado"
            motivo="Reprovado por score"
            empresa="Seguros Seguradora"
            vencimento="29/11/2022"
            parcelas={2}
            valorParcela={5000}
          />

          <AccordionCard
            titulo="EMPRÉSTIMO CORRENTE 02"
            status="aprovado"
            empresa="Seguros Seguradora"
            vencimento="29/11/2022"
            parcelas={1}
            valorParcela={5000}
            valorTotal={10000}
          />
        </div>

        {/* Botões */}
        <div className="flex justify-between mt-10">
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
      </main>
    </div>
  );
}

interface AccordionCardProps {
  titulo: string;
  status: "aprovado" | "reprovado";
  motivo?: string;
  empresa: string;
  vencimento: string;
  parcelas: number;
  valorParcela: number;
  valorTotal?: number;
}

export function AccordionCard({
  titulo,
  status,
  motivo,
  empresa,
  vencimento,
  parcelas,
  valorParcela,
  valorTotal,
}: AccordionCardProps) {
  const [aberto, setAberto] = useState(false);
  const toggle = () => setAberto((v) => !v);

  return (
    <div className="border border-gray-200 rounded-xl shadow bg-white">
      {/* Cabeçalho */}
      <button
        onClick={toggle}
        className="w-full px-4 py-3 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          {status === "aprovado" ? (
            <CheckCircle className="text-teal-600 w-5 h-5" />
          ) : (
            <Clock className="text-orange-500 w-5 h-5" />
          )}
          <span className="text-gray-800 font-medium text-sm">{titulo}</span>
        </div>
        {aberto ? (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        )}
      </button>

      {/* Corpo */}
      {aberto && (
        <div className="px-4 pb-4 space-y-3 text-sm text-gray-800">
          {status === "reprovado" && (
            <div className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold">
              ⏱️ {motivo || "Reprovado"}
            </div>
          )}
          {status === "aprovado" && (
            <div className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">
              ✅ Crédito aprovado
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Empresa</p>
              <p>{empresa}</p>
            </div>
            <div>
              <p className="text-gray-500">Próximo Vencimento</p>
              <p>{vencimento}</p>
            </div>
            {status === "aprovado" && (
              <div>
                <p className="text-gray-500">Total Financiado</p>
                <p>
                  {valorTotal?.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            )}
            <div>
              <p className="text-gray-500">Número de parcelas</p>
              <p>{parcelas}x</p>
            </div>
            <div>
              <p className="text-gray-500">Valor da Parcela</p>
              <p>
                {valorParcela.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </div>

          <div className="text-teal-600 text-sm font-medium mt-2 cursor-pointer hover:underline">
            Mais detalhes
          </div>
        </div>
      )}
    </div>
  );
}
