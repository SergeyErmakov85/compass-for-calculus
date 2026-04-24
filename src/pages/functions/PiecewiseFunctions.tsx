import { GitBranch } from "lucide-react";
import { FunctionPageLayout } from "@/components/function-page/FunctionPageLayout";
import { GraphContainer } from "@/components/graphs/GraphContainer";
import { FunctionGraph } from "@/components/graphs/FunctionGraph";
import { PropertyBadge } from "@/components/function-page/PropertyBadge";

const PiecewiseFunctions = () => {
  return (
    <FunctionPageLayout
      title="Кусочно-заданные функции"
      description="Функции, определённые разными формулами на разных интервалах. Важны для изучения непрерывности, дифференцируемости и разрывов."
      icon={GitBranch}
    >
      <div className="space-y-12">
        <div className="flex flex-wrap gap-2">
          <PropertyBadge label="Ключевые понятия" value="Разрывы, склейки, углы" />
          <PropertyBadge label="Анализ" value="Пределы слева и справа" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Функция знака"
            formula="sign(x) = {-1, x<0; 0, x=0; 1, x>0}"
            description="Классический пример разрыва первого рода. Односторонние пределы существуют, но не совпадают: lim₋ = -1, lim₊ = 1."
          >
            <FunctionGraph
              fn={(x) => Math.sign(x)}
              xDomain={[-5, 5]}
              yDomain={[-2, 2]}
              discontinuities={[0]}
              highlightPoints={[
                { x: 0, y: 0, label: "разрыв" }
              ]}
            />
          </GraphContainer>

          <GraphContainer
            title="Ступенчатая функция"
            formula="⌊x⌋ (целая часть)"
            description="Функция пола — наибольшее целое, не превосходящее x. Имеет разрыв в каждой целой точке."
          >
            <FunctionGraph
              fn={(x) => Math.floor(x)}
              xDomain={[-3, 4]}
              yDomain={[-4, 5]}
              samples={400}
              discontinuities={[-2, -1, 0, 1, 2, 3]}
              color="hsl(var(--graph-secondary))"
            />
          </GraphContainer>
        </div>

        <div className="section-divider" />

        <div className="grid lg:grid-cols-2 gap-8">
          <GraphContainer
            title="Непрерывная склейка"
            formula="f(x) = {x², x≤1; 2x-1, x>1}"
            description="Функция непрерывна в точке склейки x = 1, так как оба выражения дают f(1) = 1. Но производная имеет разрыв."
          >
            <FunctionGraph
              fn={(x) => x <= 1 ? x * x : 2 * x - 1}
              xDomain={[-2, 4]}
              yDomain={[-1, 7]}
              highlightPoints={[
                { x: 1, y: 1, label: "склейка" }
              ]}
              color="hsl(var(--graph-tertiary))"
            />
          </GraphContainer>

          <GraphContainer
            title="Разрывная склейка"
            formula="f(x) = {x+1, x<0; x², x≥0}"
            description="В точке x = 0 функция разрывна: lim₋ f(x) = 1, но f(0) = 0. Это разрыв первого рода (скачок)."
          >
            <FunctionGraph
              fn={(x) => x < 0 ? x + 1 : x * x}
              xDomain={[-3, 3]}
              yDomain={[-2, 5]}
              discontinuities={[0]}
              highlightPoints={[
                { x: 0, y: 0, label: "разрыв" }
              ]}
              color="hsl(var(--graph-quaternary))"
            />
          </GraphContainer>
        </div>

        <div className="bg-secondary/50 rounded-xl p-6 border border-border">
          <h3 className="font-serif text-xl font-semibold mb-4">Типы разрывов</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-2">Устранимый разрыв</h4>
              <p className="text-sm text-muted-foreground">Пределы слева и справа совпадают, но не равны значению функции (или функция не определена).</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Разрыв первого рода (скачок)</h4>
              <p className="text-sm text-muted-foreground">Односторонние пределы существуют, но различаются. Пример: sign(x).</p>
            </div>
          </div>
        </div>
      </div>
    </FunctionPageLayout>
  );
};

export default PiecewiseFunctions;
