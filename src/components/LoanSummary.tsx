import { ChevronLeft, ChevronDown, User } from "lucide-react";

interface LoanSummaryProps {
  valor: number;
  parcelas: number;
  onVoltar: () => void;
  onSolicitar: () => void;
}

export function LoanSummary({
  valor,
  parcelas,
  onVoltar,
  onSolicitar,
}: LoanSummaryProps) {
  const formatCurrency = (value: number): string =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

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
          <h2 className="text-teal-600 text-lg font-semibold mb-4">
            Resumo da simulação
          </h2>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 text-sm text-gray-700">
            <p>
              <strong>Pronto!</strong> Agora você já pode solicitar o empréstimo
              e recebê-lo na sua Conta Credifit! Veja o resumo da simulação:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm text-gray-800 mb-6">
            <div>
              <p className="text-gray-500">Valor a Creditar</p>
              <p className="font-medium">{formatCurrency(valor)}</p>
            </div>
            <div>
              <p className="text-gray-500">Valor a financiar</p>
              <p className="font-medium">{formatCurrency(valor)}</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-500">Parcelamento</p>
              <p className="font-medium">
                {parcelas}x de {formatCurrency(valor / parcelas)}
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={onVoltar}
              className="px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-full font-medium hover:bg-teal-50 transition"
            >
              Voltar
            </button>
            <button
              onClick={onSolicitar}
              className="px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition"
            >
              Solicitar empréstimo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
