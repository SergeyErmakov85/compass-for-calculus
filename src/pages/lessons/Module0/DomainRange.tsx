import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const DomainRange = () => {
  return (
    <Layout>
      <LessonLayout moduleId={0} lessonPath="/module/0/domain-range">
        <LessonContent
          title="Область определения и значения"
          subtitle="Где функция существует и какие значения принимает"
          graphDescription="График функции f(x) = √x существует только для x ≥ 0 
            (область определения). Значения функции — все неотрицательные числа y ≥ 0 
            (область значений). Пустота слева от оси y показывает, где функция не определена."
          concept="Область определения — множество всех допустимых значений x, для которых 
            функция имеет смысл. Область значений — множество всех возможных значений y, 
            которые функция может принимать."
          formula="f(x) = √x, x ≥ 0"
          graphProps={{
            fn: (x) => (x >= 0 ? Math.sqrt(x) : null),
            xMin: -2,
            xMax: 6,
            yMin: -1,
            yMax: 3,
            title: "График функции f(x) = √x",
            annotations: [
              { x: 0, y: 0, label: "Начало области определения" },
              { x: 4, y: 2, label: "√4 = 2" },
            ],
          }}
        >
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Область определения</h4>
              <p className="text-sm text-muted-foreground">D(f) = [0, +∞)</p>
              <p className="text-sm text-muted-foreground mt-1">
                Все x, для которых подкоренное выражение неотрицательно
              </p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Область значений</h4>
              <p className="text-sm text-muted-foreground">E(f) = [0, +∞)</p>
              <p className="text-sm text-muted-foreground mt-1">
                Корень всегда неотрицателен
              </p>
            </div>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default DomainRange;
