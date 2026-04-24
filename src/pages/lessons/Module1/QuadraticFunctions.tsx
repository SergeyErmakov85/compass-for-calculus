import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const QuadraticFunctions = () => {
  return (
    <Layout>
      <LessonLayout moduleId={1} lessonPath="/module/1/quadratic">
        <LessonContent
          title="Квадратичные функции"
          subtitle="Экстремумы и параболы"
          graphDescription="Парабола f(x) = -x² + 4 имеет максимум в вершине (0, 4). 
            Ветви параболы направлены вниз (коэффициент при x² отрицателен). 
            Вершина — это точка экстремума, где функция меняет направление."
          concept="Квадратичная функция имеет ровно один экстремум — вершину параболы. 
            Это точка, где производная равна нулю: скорость изменения функции меняет знак 
            с положительной на отрицательную (или наоборот)."
          formula="f(x) = -x² + 4"
          graphProps={{
            fn: (x) => -x * x + 4,
            xMin: -4,
            xMax: 4,
            yMin: -8,
            yMax: 6,
            title: "График функции f(x) = -x² + 4",
            annotations: [
              { x: 0, y: 4, label: "Максимум (вершина)", color: "hsl(var(--graph-secondary))" },
              { x: -2, y: 0, label: "Нуль функции" },
              { x: 2, y: 0, label: "Нуль функции" },
            ],
          }}
        >
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Вершина параболы</h4>
              <p className="text-sm text-muted-foreground">
                Координаты: x = -b/(2a), y = f(-b/(2a))
              </p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Нули функции</h4>
              <p className="text-sm text-muted-foreground">
                Точки пересечения с осью x: x = ±2
              </p>
            </div>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default QuadraticFunctions;
