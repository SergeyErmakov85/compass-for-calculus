import { TrendingUp } from "lucide-react";
import { FunctionPageLayout } from "@/components/function-page/FunctionPageLayout";
import { GraphContainer } from "@/components/graphs/GraphContainer";
import { FunctionGraph } from "@/components/graphs/FunctionGraph";
import { PropertyBadge } from "@/components/function-page/PropertyBadge";

const PolynomialFunctions = () => {
  return (
    <FunctionPageLayout
      title="Полиномиальные функции"
      description="Полиномы — это функции вида P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀. Они непрерывны, бесконечно дифференцируемы и определены на всей числовой прямой."
      icon={TrendingUp}
    >
      <div className="space-y-12">
        {/* Properties overview */}
        <div className="flex flex-wrap gap-2">
          <PropertyBadge label="Область определения" value="ℝ" />
          <PropertyBadge label="Непрерывность" value="Везде" />
          <PropertyBadge label="Дифференцируемость" value="Бесконечная" />
        </div>

        {/* Linear function */}
        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Линейная функция"
            formula="f(x) = 2x + 1"
            description="Линейная функция — полином первой степени. Характеризуется постоянной скоростью роста (угловой коэффициент). График — прямая линия."
          >
            <FunctionGraph
              fn={(x) => 2 * x + 1}
              xDomain={[-4, 4]}
              yDomain={[-7, 9]}
              highlightPoints={[
                { x: -0.5, y: 0, label: "ноль" },
                { x: 0, y: 1, label: "y-пересечение" }
              ]}
            />
          </GraphContainer>

          <GraphContainer
            title="Квадратичная функция"
            formula="f(x) = x² - 2x - 3"
            description="Парабола с вершиной в точке (1, -4). Нули функции: x = -1 и x = 3. Ветви направлены вверх (a > 0)."
          >
            <FunctionGraph
              fn={(x) => x * x - 2 * x - 3}
              xDomain={[-3, 5]}
              yDomain={[-5, 8]}
              highlightPoints={[
                { x: 1, y: -4, label: "вершина" },
                { x: -1, y: 0, label: "x₁" },
                { x: 3, y: 0, label: "x₂" }
              ]}
              color="hsl(var(--graph-secondary))"
            />
          </GraphContainer>
        </div>

        <div className="section-divider" />

        {/* Cubic and higher degree */}
        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Кубическая функция"
            formula="f(x) = x³ - 3x"
            description="Кубический полином с двумя экстремумами: локальный максимум в x = -1 и локальный минимум в x = 1. Точка перегиба в начале координат."
          >
            <FunctionGraph
              fn={(x) => x * x * x - 3 * x}
              xDomain={[-3, 3]}
              yDomain={[-5, 5]}
              highlightPoints={[
                { x: -1, y: 2, label: "max" },
                { x: 1, y: -2, label: "min" },
                { x: 0, y: 0, label: "перегиб" }
              ]}
              color="hsl(var(--graph-tertiary))"
            />
          </GraphContainer>

          <GraphContainer
            title="Полином четвёртой степени"
            formula="f(x) = x⁴ - 4x² + 2"
            description="Полином чётной степени с тремя экстремумами. W-образный профиль характерен для биквадратных уравнений."
          >
            <FunctionGraph
              fn={(x) => Math.pow(x, 4) - 4 * x * x + 2}
              xDomain={[-3, 3]}
              yDomain={[-3, 10]}
              highlightPoints={[
                { x: 0, y: 2, label: "max" },
                { x: -1.41, y: -2, label: "min" },
                { x: 1.41, y: -2, label: "min" }
              ]}
              color="hsl(var(--graph-quaternary))"
            />
          </GraphContainer>
        </div>

        {/* Educational notes */}
        <div className="bg-secondary/50 rounded-xl p-6 border border-border">
          <h3 className="font-serif text-xl font-semibold mb-4">Ключевые свойства</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Полином степени n имеет не более n действительных корней</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Производная полинома степени n есть полином степени n-1</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>При x → ±∞ поведение определяется старшим членом aₙxⁿ</span>
            </li>
          </ul>
        </div>
      </div>
    </FunctionPageLayout>
  );
};

export default PolynomialFunctions;
