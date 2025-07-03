interface LoanCardDetalhadoProps {
  titulo: string;
  status: "aprovado" | "reprovado";
  motivoRejeicao?: string;
  empresa: string;
  vencimento: string;
  parcelas: number;
  valorParcela: number;
  valorTotal?: number; // apenas se aprovado
  expandido?: boolean;
}

export function LoanCardDetalhado({
  titulo,
  status,
  motivoRejeicao,
  empresa,
  vencimento,
  parcelas,
  valorParcela,
  valorTotal,
  expandido = true,
}: LoanCardDetalhadoProps) {
  const formatCurrency = (v: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(v);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-4 space-y-3">
      {/* Título + Ocultar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">⏱️</span>
          <h3 className="text-sm font-medium text-gray-800">{titulo}</h3>
        </div>
        <span className="text-sm text-gray-400 cursor-pointer">Ocultar</span>
      </div>

      {/* Status */}
      {status === "reprovado" ? (
        <div className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full inline-block w-fit font-semibold">
          ⏱️ {motivoRejeicao || "Reprovado"}
        </div>
      ) : (
        <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full inline-block w-fit font-semibold">
          ✅ Crédito aprovado
        </div>
      )}

      {/* Detalhes */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
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
            <p>{formatCurrency(valorTotal || 0)}</p>
          </div>
        )}
        <div>
          <p className="text-gray-500">Número de parcelas</p>
          <p>{parcelas}x</p>
        </div>
        <div>
          <p className="text-gray-500">Valor da Parcela</p>
          <p>{formatCurrency(valorParcela)}</p>
        </div>
      </div>

      {/* Link */}
      <div className="text-teal-600 text-sm font-medium mt-2 cursor-pointer hover:underline">
        Mais detalhes
      </div>
    </div>
  );
}
