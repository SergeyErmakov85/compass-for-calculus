import { Maximize2 } from "lucide-react";
import { FunctionPageLayout } from "@/components/function-page/FunctionPageLayout";
import { GraphContainer } from "@/components/graphs/GraphContainer";
import { FunctionGraph } from "@/components/graphs/FunctionGraph";
import { PropertyBadge } from "@/components/function-page/PropertyBadge";

const AbsoluteValueFunctions = () => {
  return (
    <FunctionPageLayout
      title="Функции с модулем"
      description="Модуль |x| превращает отрицательные значения в положительные. Создаёт характерные «изломы» — точки, где функция непрерывна, но не дифференцируема."
      icon={Maximize2}
    >
      <div className="space-y-12">
        <div className="flex flex-wrap gap-2">
          <PropertyBadge label="Непрерывность" value="Да" />
          <PropertyBadge label="Дифференцируемость" value="Кроме точек излома" />
          <PropertyBadge label="Область значений" value="[0, +∞)" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Базовый модуль"
            formula="f(x) = |x|"
            description="V-образный график с вершиной в начале координат. В точке x = 0 функция непрерывна, но не дифференцируема (угол)."
          >
            <FunctionGraph
              fn={(x) => Math.abs(x)}
              xDomain={[-5, 5]}
              yDomain={[-1, 6]}
              highlightPoints={[
                { x: 0, y: 0, label: "излом" }
              ]}
            />
          </GraphContainer>

          <GraphContainer
            title="Сдвинутый модуль"
            formula="f(x) = |x - 2| + 1"
            description="Сдвиг по горизонтали на 2 единицы вправо и по вертикали на 1 вверх. Вершина в точке (2, 1)."
          >
            <FunctionGraph
              fn={(x) => Math.abs(x - 2) + 1}
              xDomain={[-2, 6]}
              yDomain={[-1, 6]}
              highlightPoints={[
                { x: 2, y: 1, label: "вершина" }
              ]}
              color="hsl(var(--graph-secondary))"
            />
          </GraphContainer>
        </div>

        <div className="section-divider" />

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Двойной модуль"
            formula="f(x) = |x - 1| + |x + 1|"
            description="Сумма двух модулей. Три участка с разными наклонами. Линейна на отрезке [-1, 1] с нулевым наклоном."
          >
            <FunctionGraph
              fn={(x) => Math.abs(x - 1) + Math.abs(x + 1)}
              xDomain={[-4, 4]}
              yDomain={[-1, 7]}
              highlightPoints={[
                { x: -1, y: 2, label: "угол" },
                { x: 1, y: 2, label: "угол" }
              ]}
              color="hsl(var(--graph-tertiary))"
            />
          </GraphContainer>

          <GraphContainer
            title="Модуль квадратичной функции"
            formula="f(x) = |x² - 4|"
            description="Части параболы ниже оси x отражаются вверх. Углы в точках x = -2 и x = 2, где исходная парабола пересекает ось."
          >
            <FunctionGraph
              fn={(x) => Math.abs(x * x - 4)}
              xDomain={[-4, 4]}
              yDomain={[-1, 10]}
              highlightPoints={[
                { x: -2, y: 0, label: "угол" },
                { x: 2, y: 0, label: "угол" },
                { x: 0, y: 4, label: "max" }
              ]}
              color="hsl(var(--graph-quaternary))"
            />
          </GraphContainer>
        </div>

        <div className="bg-secondary/50 rounded-xl p-6 border border-border">
          <h3 className="font-serif text-xl font-semibold mb-4">Свойства модуля</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <code className="math-formula block p-3">|x| = √(x²)</code>
            <code className="math-formula block p-3">|xy| = |x| · |y|</code>
            <code className="math-formula block p-3">|x + y| ≤ |x| + |y|</code>
            <code className="math-formula block p-3">||x| - |y|| ≤ |x - y|</code>
          </div>
        </div>
      </div>
    </FunctionPageLayout>
  );
};

export default AbsoluteValueFunctions;
