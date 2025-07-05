import { ChevronDown, ChevronLeft, User } from "lucide-react";
interface LoanFormProps {
  valor: number;
  onChangeValor: (valor: number) => void;
  onSimular: () => void;
}

export function LoanForm({ valor, onChangeValor, onSimular }: LoanFormProps) {
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValor(Number(e.target.value));
  };

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
          <ChevronLeft className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600 text-sm">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 text-sm">Crédito Consignado</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">
          Crédito Consignado
        </h1>

        {/* Simular Empréstimo Section */}
        <div className="mb-8">
          <h2 className="text-teal-600 text-lg font-medium mb-4">
            Simular Empréstimo
          </h2>

          {/* Info Card */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">👤</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Você possui saldo para Crédito Consignado pela empresa Seguros
                  Seguradora. Faça uma simulação! Digite quanto você precisa:
                </p>
              </div>
            </div>
          </div>

          {/* Value Display */}
          <div className="text-center mb-8">
            <div className="inline-block bg-teal-50 border border-teal-200 rounded-lg px-6 py-3">
              <span className="text-teal-700 text-2xl font-semibold">
                {formatCurrency(valor)}
              </span>
            </div>
          </div>

          {/* Slider */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={valor}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #14b8a6 0%, #14b8a6 ${
                    ((valor - 100) / (50000 - 1000)) * 100
                  }%, #d1d5db ${
                    ((valor - 1000) / (50000 - 1000)) * 100
                  }%, #d1d5db 100%)`,
                }}
              />
              <div
                className="absolute top-0 w-4 h-4 bg-teal-600 rounded-full border-2 border-white shadow-md transform -translate-y-1 -translate-x-2 pointer-events-none"
                style={{ left: `${((valor - 1000) / (50000 - 1000)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-full font-medium hover:bg-teal-50 transition-colors">
              Voltar
            </button>
            <button
              onClick={onSimular}
              className="px-8 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
            >
              Simular empréstimo
            </button>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 16px;
            height: 16px;
            background: #0d9488;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            cursor: pointer;
          }
          
          input[type="range"]::-moz-range-thumb {
            width: 16px;
            height: 16px;
            background: #0d9488;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            cursor: pointer;
            border: none;
          }
          
          input[type="range"]::-moz-range-track {
            background: transparent;
            border: none;
          }
        `,
        }}
      />
    </div>
  );
}
