import { TrendingUp } from "lucide-react";
import { FunctionPageLayout } from "@/components/function-page/FunctionPageLayout";
import { GraphContainer } from "@/components/graphs/GraphContainer";
import { FunctionGraph } from "@/components/graphs/FunctionGraph";
import { PropertyBadge } from "@/components/function-page/PropertyBadge";

const ExponentialFunctions = () => {
  return (
    <FunctionPageLayout
      title="Экспоненциальные функции"
      description="Функции вида f(x) = aˣ, где a > 0. Описывают процессы с постоянной относительной скоростью роста: популяции, радиоактивный распад, сложные проценты."
      icon={TrendingUp}
    >
      <div className="space-y-12">
        <div className="flex flex-wrap gap-2">
          <PropertyBadge label="Область определения" value="ℝ" />
          <PropertyBadge label="Область значений" value="(0, +∞)" />
          <PropertyBadge label="Горизонтальная асимптота" value="y = 0" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Экспонента"
            formula="f(x) = eˣ"
            description="Натуральная экспонента — единственная функция, равная своей производной: (eˣ)' = eˣ. Основание e ≈ 2.718."
          >
            <FunctionGraph
              fn={(x) => Math.exp(x)}
              xDomain={[-3, 3]}
              yDomain={[-1, 10]}
              showAsymptotes={{ horizontal: [0] }}
              highlightPoints={[
                { x: 0, y: 1, label: "e⁰ = 1" },
                { x: 1, y: Math.E, label: "e¹ ≈ 2.72" }
              ]}
            />
          </GraphContainer>

          <GraphContainer
            title="Убывающая экспонента"
            formula="f(x) = e⁻ˣ"
            description="Экспоненциальный спад. Описывает радиоактивный распад, охлаждение, затухание. При x → +∞ функция стремится к нулю."
          >
            <FunctionGraph
              fn={(x) => Math.exp(-x)}
              xDomain={[-2, 4]}
              yDomain={[-1, 8]}
              showAsymptotes={{ horizontal: [0] }}
              highlightPoints={[
                { x: 0, y: 1, label: "e⁰ = 1" }
              ]}
              color="hsl(var(--graph-secondary))"
            />
          </GraphContainer>
        </div>

        <div className="section-divider" />

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Сравнение оснований"
            formula="2ˣ, eˣ, 3ˣ"
            description="Чем больше основание a, тем быстрее рост при x > 0. При x < 0 соотношение обратное. Все проходят через (0, 1)."
          >
            <FunctionGraph
              fn={(x) => Math.pow(2, x)}
              xDomain={[-3, 3]}
              yDomain={[-1, 10]}
              additionalFns={[
                { fn: (x) => Math.exp(x), color: "hsl(var(--graph-secondary))" },
                { fn: (x) => Math.pow(3, x), color: "hsl(var(--graph-tertiary))" }
              ]}
            />
          </GraphContainer>

          <GraphContainer
            title="Экспонента vs линейная"
            formula="eˣ vs 3x"
            description="Экспоненциальный рост в конечном счёте превосходит любой полиномиальный. Это фундаментальное свойство для асимптотического анализа."
          >
            <FunctionGraph
              fn={(x) => Math.exp(x)}
              xDomain={[-2, 4]}
              yDomain={[-2, 20]}
              additionalFns={[
                { fn: (x) => 3 * x, color: "hsl(var(--graph-tertiary))" }
              ]}
              color="hsl(var(--graph-quaternary))"
            />
          </GraphContainer>
        </div>

        <div className="bg-secondary/50 rounded-xl p-6 border border-border">
          <h3 className="font-serif text-xl font-semibold mb-4">Свойства экспоненты</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>eˣ⁺ʸ = eˣ · eʸ — мультипликативность</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>(eˣ)' = eˣ — равенство производной самой функции</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>lim(x→+∞) eˣ/xⁿ = +∞ — экспонента растёт быстрее любой степени</span>
            </li>
          </ul>
        </div>
      </div>
    </FunctionPageLayout>
  );
};

export default ExponentialFunctions;
