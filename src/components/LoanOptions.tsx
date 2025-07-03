import { ChevronLeft, ChevronDown, User } from "lucide-react";

interface LoanOptionsProps {
  valor: number;
  onVoltar: () => void;
  onSelecionarParcela: (parcelas: number) => void;
}

export function LoanOptions({
  valor,
  onVoltar,
  onSelecionarParcela,
}: LoanOptionsProps) {
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const opcoesParcelas = [1, 2, 3, 4];

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
            Simular Empréstimo
          </h2>

          {/* Info Card */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              Escolha a opção de parcelamento que melhor funcionar para você:
            </p>
          </div>

          {/* Valor total */}
          <div className="text-center mb-6">
            <span className="text-2xl text-gray-800 font-bold">
              {formatCurrency(valor)}
            </span>
          </div>

          {/* Opções de parcelas */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {opcoesParcelas.map((qtd) => (
              <button
                key={qtd}
                onClick={() => onSelecionarParcela(qtd)}
                className="flex justify-between items-center px-4 py-3 bg-white rounded-lg shadow hover:shadow-md border-l-4 border-orange-500 transition"
              >
                <span className="text-gray-600 font-medium">{qtd}x de</span>
                <span className="text-teal-600 font-semibold">
                  {formatCurrency(valor / qtd)}
                </span>
              </button>
            ))}
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
              disabled
              className="px-6 py-3 bg-gray-200 text-gray-500 rounded-full font-medium cursor-not-allowed"
            >
              Seguinte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
