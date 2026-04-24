import { BarChart3 } from "lucide-react";
import { FunctionPageLayout } from "@/components/function-page/FunctionPageLayout";
import { GraphContainer } from "@/components/graphs/GraphContainer";
import { FunctionGraph } from "@/components/graphs/FunctionGraph";
import { PropertyBadge } from "@/components/function-page/PropertyBadge";

const LogarithmicFunctions = () => {
  return (
    <FunctionPageLayout
      title="Логарифмические функции"
      description="Логарифм — обратная функция к экспоненте. log_a(x) = y означает aʸ = x. Характеризуется медленным ростом и вертикальной асимптотой."
      icon={BarChart3}
    >
      <div className="space-y-12">
        <div className="flex flex-wrap gap-2">
          <PropertyBadge label="Область определения" value="(0, +∞)" />
          <PropertyBadge label="Область значений" value="ℝ" />
          <PropertyBadge label="Вертикальная асимптота" value="x = 0" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Натуральный логарифм"
            formula="f(x) = ln(x)"
            description="Обратная функция к eˣ. Производная: (ln x)' = 1/x. Логарифм не определён при x ≤ 0."
          >
            <FunctionGraph
              fn={(x) => Math.log(x)}
              xDomain={[0.01, 8]}
              yDomain={[-3, 3]}
              showAsymptotes={{ vertical: [0] }}
              highlightPoints={[
                { x: 1, y: 0, label: "ln(1) = 0" },
                { x: Math.E, y: 1, label: "ln(e) = 1" }
              ]}
            />
          </GraphContainer>

          <GraphContainer
            title="Связь с экспонентой"
            formula="ln(x) и eˣ"
            description="Графики ln(x) и eˣ симметричны относительно прямой y = x. Они являются обратными функциями друг к другу."
          >
            <FunctionGraph
              fn={(x) => Math.log(x)}
              xDomain={[-1, 5]}
              yDomain={[-2, 5]}
              additionalFns={[
                { fn: (x) => Math.exp(x), color: "hsl(var(--graph-secondary))" },
                { fn: (x) => x, color: "hsl(var(--graph-grid))" }
              ]}
              showAsymptotes={{ vertical: [0] }}
            />
          </GraphContainer>
        </div>

        <div className="section-divider" />

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Сравнение оснований"
            formula="log₂(x), ln(x), log₁₀(x)"
            description="Все логарифмы проходят через (1, 0). Чем больше основание, тем медленнее рост. log₂ > ln > log₁₀ при x > 1."
          >
            <FunctionGraph
              fn={(x) => Math.log2(x)}
              xDomain={[0.1, 10]}
              yDomain={[-3, 4]}
              additionalFns={[
                { fn: (x) => Math.log(x), color: "hsl(var(--graph-secondary))" },
                { fn: (x) => Math.log10(x), color: "hsl(var(--graph-tertiary))" }
              ]}
              showAsymptotes={{ vertical: [0] }}
            />
          </GraphContainer>

          <GraphContainer
            title="Логарифм vs корень"
            formula="ln(x) vs √x"
            description="Логарифм растёт медленнее любой положительной степени x. Это ключевое свойство для анализа алгоритмов (O(log n))."
          >
            <FunctionGraph
              fn={(x) => Math.log(x)}
              xDomain={[0.1, 15]}
              yDomain={[-2, 5]}
              additionalFns={[
                { fn: (x) => Math.sqrt(x), color: "hsl(var(--graph-tertiary))" }
              ]}
              showAsymptotes={{ vertical: [0] }}
              color="hsl(var(--graph-quaternary))"
            />
          </GraphContainer>
        </div>

        <div className="bg-secondary/50 rounded-xl p-6 border border-border">
          <h3 className="font-serif text-xl font-semibold mb-4">Свойства логарифма</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <code className="math-formula block p-3">ln(xy) = ln(x) + ln(y)</code>
            <code className="math-formula block p-3">ln(x/y) = ln(x) - ln(y)</code>
            <code className="math-formula block p-3">ln(xⁿ) = n·ln(x)</code>
            <code className="math-formula block p-3">(ln x)' = 1/x</code>
          </div>
        </div>
      </div>
    </FunctionPageLayout>
  );
};

export default LogarithmicFunctions;
