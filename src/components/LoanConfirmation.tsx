import { ChevronLeft, ChevronDown, User } from "lucide-react";

interface LoanConfirmationProps {
  valor: number;
  parcelas: number;
  onVoltar: () => void;
  onConfirmar: () => void;
}

export function LoanConfirmation({
  valor,
  parcelas,
  onVoltar,
  onConfirmar,
}: LoanConfirmationProps) {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const calcularVencimentos = (quantidade: number): string[] => {
    const hoje = new Date();
    const vencimentos: string[] = [];

    for (let i = 1; i <= quantidade; i++) {
      const vencimento = new Date(hoje);
      vencimento.setMonth(hoje.getMonth() + i);
      vencimentos.push(
        vencimento.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      );
    }

    return vencimentos;
  };

  const vencimentos = calcularVencimentos(parcelas);

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

      {/* Content */}
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
            Resumo da Solicitação
          </h2>

          <div className="text-center mb-6">
            <span className="text-gray-800 text-xl">Valor total:</span>
            <br />
            <span className="text-2xl font-bold text-teal-700">
              {formatCurrency(valor)}
            </span>
          </div>

          <div className="text-center mb-6">
            <span className="text-gray-600">Parcelado em</span>
            <br />
            <span className="text-lg font-medium text-gray-800">
              {parcelas}x de {formatCurrency(valor / parcelas)}
            </span>
          </div>

          <div className="mb-6">
            <span className="block text-sm text-gray-500 mb-2">
              Vencimentos:
            </span>
            <ul className="list-disc list-inside text-gray-700">
              {vencimentos.map((v, idx) => (
                <li key={idx}>{v}</li>
              ))}
            </ul>
          </div>

          {/* Botões */}
          <div className="flex justify-between">
            <button
              onClick={onVoltar}
              className="px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-full font-medium hover:bg-teal-50 transition"
            >
              Voltar
            </button>
            <button
              onClick={onConfirmar}
              className="px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition"
            >
              Seguinte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
