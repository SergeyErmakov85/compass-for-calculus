import { Divide } from "lucide-react";
import { FunctionPageLayout } from "@/components/function-page/FunctionPageLayout";
import { GraphContainer } from "@/components/graphs/GraphContainer";
import { FunctionGraph } from "@/components/graphs/FunctionGraph";
import { PropertyBadge } from "@/components/function-page/PropertyBadge";

const RationalFunctions = () => {
  return (
    <FunctionPageLayout
      title="Рациональные функции"
      description="Рациональные функции — это отношение двух полиномов P(x)/Q(x). Они имеют разрывы в точках, где знаменатель равен нулю, и могут иметь вертикальные и горизонтальные асимптоты."
      icon={Divide}
    >
      <div className="space-y-12">
        <div className="flex flex-wrap gap-2">
          <PropertyBadge label="Область определения" value="ℝ \ {нули Q(x)}" />
          <PropertyBadge label="Асимптоты" value="Вертикальные, горизонтальные, наклонные" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Простейшая дробь"
            formula="f(x) = 1/x"
            description="Гипербола с вертикальной асимптотой x = 0 и горизонтальной асимптотой y = 0. Классический пример функции с разрывом второго рода."
          >
            <FunctionGraph
              fn={(x) => 1 / x}
              xDomain={[-5, 5]}
              yDomain={[-5, 5]}
              showAsymptotes={{ vertical: [0], horizontal: [0] }}
              discontinuities={[0]}
            />
          </GraphContainer>

          <GraphContainer
            title="Горизонтальная асимптота"
            formula="f(x) = (2x + 1)/(x - 1)"
            description="При x → ±∞ функция стремится к 2 (горизонтальная асимптота). Вертикальная асимптота в точке x = 1."
          >
            <FunctionGraph
              fn={(x) => (2 * x + 1) / (x - 1)}
              xDomain={[-5, 7]}
              yDomain={[-10, 15]}
              showAsymptotes={{ vertical: [1], horizontal: [2] }}
              discontinuities={[1]}
              color="hsl(var(--graph-secondary))"
            />
          </GraphContainer>
        </div>

        <div className="section-divider" />

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Две вертикальные асимптоты"
            formula="f(x) = 1/(x² - 1)"
            description="Вертикальные асимптоты в x = -1 и x = 1 (нули знаменателя). Функция меняет знак при переходе через асимптоты."
          >
            <FunctionGraph
              fn={(x) => 1 / (x * x - 1)}
              xDomain={[-4, 4]}
              yDomain={[-5, 5]}
              showAsymptotes={{ vertical: [-1, 1], horizontal: [0] }}
              discontinuities={[-1, 1]}
              color="hsl(var(--graph-tertiary))"
            />
          </GraphContainer>

          <GraphContainer
            title="Устранимый разрыв"
            formula="f(x) = (x² - 1)/(x - 1)"
            description="При x ≠ 1 упрощается до x + 1. В точке x = 1 — устранимый разрыв (выколотая точка). Доопределение: f(1) = 2."
          >
            <FunctionGraph
              fn={(x) => (x * x - 1) / (x - 1)}
              xDomain={[-3, 4]}
              yDomain={[-2, 5]}
              discontinuities={[1]}
              highlightPoints={[
                { x: 1, y: 2, label: "устр. разрыв" }
              ]}
              color="hsl(var(--graph-quaternary))"
            />
          </GraphContainer>
        </div>

        <div className="bg-secondary/50 rounded-xl p-6 border border-border">
          <h3 className="font-serif text-xl font-semibold mb-4">Типы асимптот</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-2">Вертикальные</h4>
              <p className="text-sm text-muted-foreground">Возникают в точках, где знаменатель обращается в ноль, а числитель — нет.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Горизонтальные</h4>
              <p className="text-sm text-muted-foreground">Предел функции при x → ±∞. Существует, если deg(P) ≤ deg(Q).</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Наклонные</h4>
              <p className="text-sm text-muted-foreground">Возникает, если deg(P) = deg(Q) + 1. Найти делением полиномов.</p>
            </div>
          </div>
        </div>
      </div>
    </FunctionPageLayout>
  );
};

export default RationalFunctions;
