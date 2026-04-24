import { Sparkles } from "lucide-react";
import { FunctionPageLayout } from "@/components/function-page/FunctionPageLayout";
import { GraphContainer } from "@/components/graphs/GraphContainer";
import { FunctionGraph } from "@/components/graphs/FunctionGraph";
import { PropertyBadge } from "@/components/function-page/PropertyBadge";

const SpecialFunctions = () => {
  return (
    <FunctionPageLayout
      title="Особые и предельные случаи"
      description="Функции с необычным поведением вблизи особых точек: осцилляции, отсутствие предела, существенные особенности. Важны для понимания границ понятия предела."
      icon={Sparkles}
    >
      <div className="space-y-12">
        <div className="flex flex-wrap gap-2">
          <PropertyBadge label="Характер" value="Осцилляции, существенные особенности" />
          <PropertyBadge label="Пределы" value="Могут не существовать" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Осциллирующая функция"
            formula="f(x) = sin(1/x)"
            description="При x → 0 частота колебаний неограниченно возрастает. Предел не существует — функция осциллирует между -1 и 1."
          >
            <FunctionGraph
              fn={(x) => Math.sin(1 / x)}
              xDomain={[-1, 1]}
              yDomain={[-1.5, 1.5]}
              samples={500}
              discontinuities={[0]}
            />
          </GraphContainer>

          <GraphContainer
            title="Затухающие осцилляции"
            formula="f(x) = x·sin(1/x)"
            description="Множитель x гасит осцилляции при x → 0. Предел существует и равен 0 по теореме о сжатии (о двух милиционерах)."
          >
            <FunctionGraph
              fn={(x) => x * Math.sin(1 / x)}
              xDomain={[-1, 1]}
              yDomain={[-0.5, 0.5]}
              samples={500}
              discontinuities={[0]}
              highlightPoints={[
                { x: 0, y: 0, label: "lim = 0" }
              ]}
              color="hsl(var(--graph-secondary))"
            />
          </GraphContainer>
        </div>

        <div className="section-divider" />

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Функция Дирихле (приближение)"
            formula="Концепт: D(x) = {1, x ∈ ℚ; 0, x ∉ ℚ}"
            description="Разрывна в каждой точке — нигде не непрерывна. Визуализация показывает лишь концепцию (рациональные числа плотны)."
          >
            <FunctionGraph
              fn={(x) => {
                // Approximation: show as oscillating noise
                return Math.abs(Math.sin(x * 50)) > 0.9 ? 1 : 0;
              }}
              xDomain={[-2, 2]}
              yDomain={[-0.5, 1.5]}
              samples={400}
              color="hsl(var(--graph-tertiary))"
            />
          </GraphContainer>

          <GraphContainer
            title="Существенная особенность"
            formula="f(x) = e^(1/x)"
            description="При x → 0⁺ функция → +∞, при x → 0⁻ функция → 0. Разное поведение с разных сторон — существенная особенность."
          >
            <FunctionGraph
              fn={(x) => Math.exp(1 / x)}
              xDomain={[-2, 2]}
              yDomain={[-1, 10]}
              samples={300}
              discontinuities={[0]}
              showAsymptotes={{ horizontal: [0] }}
              color="hsl(var(--graph-quaternary))"
            />
          </GraphContainer>
        </div>

        <div className="bg-secondary/50 rounded-xl p-6 border border-border">
          <h3 className="font-serif text-xl font-semibold mb-4">Когда предел не существует</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span><strong>Осцилляции:</strong> функция колеблется, не приближаясь к одному значению</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span><strong>Разные односторонние пределы:</strong> lim₋ ≠ lim₊</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span><strong>Неограниченность:</strong> функция → ±∞ (но можно говорить о несобственном пределе)</span>
            </li>
          </ul>
        </div>
      </div>
    </FunctionPageLayout>
  );
};

export default SpecialFunctions;
