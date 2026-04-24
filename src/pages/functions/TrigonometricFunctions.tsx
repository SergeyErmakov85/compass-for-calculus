import { Waves } from "lucide-react";
import { FunctionPageLayout } from "@/components/function-page/FunctionPageLayout";
import { GraphContainer } from "@/components/graphs/GraphContainer";
import { FunctionGraph } from "@/components/graphs/FunctionGraph";
import { PropertyBadge } from "@/components/function-page/PropertyBadge";

const TrigonometricFunctions = () => {
  return (
    <FunctionPageLayout
      title="Тригонометрические функции"
      description="Периодические функции, связанные с единичной окружностью. Основа гармонического анализа, волновых процессов и преобразования Фурье."
      icon={Waves}
    >
      <div className="space-y-12">
        <div className="flex flex-wrap gap-2">
          <PropertyBadge label="Периодичность" value="sin, cos: 2π | tan: π" />
          <PropertyBadge label="Область значений" value="sin, cos: [-1, 1]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Синус и косинус"
            formula="sin(x), cos(x)"
            description="Фундаментальные тригонометрические функции. Косинус — это сдвинутый на π/2 синус. Обе ограничены: |sin x|, |cos x| ≤ 1."
          >
            <FunctionGraph
              fn={(x) => Math.sin(x)}
              xDomain={[-2 * Math.PI, 2 * Math.PI]}
              yDomain={[-1.5, 1.5]}
              additionalFns={[
                { fn: (x) => Math.cos(x), color: "hsl(var(--graph-secondary))" }
              ]}
              highlightPoints={[
                { x: Math.PI / 2, y: 1, label: "max sin" },
                { x: 0, y: 1, label: "max cos" }
              ]}
            />
          </GraphContainer>

          <GraphContainer
            title="Тангенс"
            formula="tan(x) = sin(x)/cos(x)"
            description="Вертикальные асимптоты в точках x = π/2 + πn. Период равен π. Не ограничена: tan(x) → ±∞."
          >
            <FunctionGraph
              fn={(x) => Math.tan(x)}
              xDomain={[-2 * Math.PI, 2 * Math.PI]}
              yDomain={[-5, 5]}
              showAsymptotes={{ vertical: [-1.5 * Math.PI, -Math.PI / 2, Math.PI / 2, 1.5 * Math.PI] }}
              discontinuities={[-1.5 * Math.PI, -Math.PI / 2, Math.PI / 2, 1.5 * Math.PI]}
              color="hsl(var(--graph-tertiary))"
            />
          </GraphContainer>
        </div>

        <div className="section-divider" />

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Преобразование амплитуды"
            formula="2·sin(x), 0.5·sin(x)"
            description="Коэффициент перед функцией изменяет амплитуду колебаний. A·sin(x) колеблется от -A до +A."
          >
            <FunctionGraph
              fn={(x) => 2 * Math.sin(x)}
              xDomain={[-2 * Math.PI, 2 * Math.PI]}
              yDomain={[-2.5, 2.5]}
              additionalFns={[
                { fn: (x) => 0.5 * Math.sin(x), color: "hsl(var(--graph-secondary))" }
              ]}
            />
          </GraphContainer>

          <GraphContainer
            title="Преобразование периода"
            formula="sin(2x), sin(x/2)"
            description="Коэффициент при x изменяет частоту. sin(ωx) имеет период 2π/ω. Чем больше ω, тем чаще колебания."
          >
            <FunctionGraph
              fn={(x) => Math.sin(2 * x)}
              xDomain={[-2 * Math.PI, 2 * Math.PI]}
              yDomain={[-1.5, 1.5]}
              additionalFns={[
                { fn: (x) => Math.sin(x / 2), color: "hsl(var(--graph-tertiary))" }
              ]}
              color="hsl(var(--graph-secondary))"
            />
          </GraphContainer>
        </div>

        <div className="bg-secondary/50 rounded-xl p-6 border border-border">
          <h3 className="font-serif text-xl font-semibold mb-4">Основные тождества</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <code className="math-formula block p-3">sin²(x) + cos²(x) = 1</code>
            <code className="math-formula block p-3">tan(x) = sin(x)/cos(x)</code>
            <code className="math-formula block p-3">sin(x + π/2) = cos(x)</code>
            <code className="math-formula block p-3">sin(2x) = 2·sin(x)·cos(x)</code>
          </div>
        </div>
      </div>
    </FunctionPageLayout>
  );
};

export default TrigonometricFunctions;
