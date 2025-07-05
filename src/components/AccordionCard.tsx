import { ChevronDown, ChevronUp, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

interface AccordionCardProps {
  titulo: string;
  status: "aprovado" | "reprovado";
  motivo?: string;
  empresa: string;
  vencimento: string;
  valorSolicitado: number;
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
  valorSolicitado,
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
                {valorParcela?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Valor Solicitado</p>
              <p>
                {valorSolicitado.toLocaleString("pt-BR", {
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
