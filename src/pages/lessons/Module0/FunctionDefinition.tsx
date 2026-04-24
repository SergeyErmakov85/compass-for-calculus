import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const FunctionDefinition = () => {
  return (
    <Layout>
      <LessonLayout moduleId={0} lessonPath="/module/0/function-definition">
        <LessonContent
          title="Что такое функция"
          subtitle="График как множество точек (x, f(x))"
          graphDescription="Каждая точка на графике представляет пару (x, y), где y = f(x). 
            Функция f(x) = x² отображает каждое значение x в его квадрат. 
            Синяя кривая — это множество всех таких точек."
          concept="Функция — это правило, которое каждому значению x из области определения 
            сопоставляет ровно одно значение y. График функции — визуальное представление 
            этого правила: все точки (x, f(x)) образуют кривую."
          formula="f(x) = x²"
          graphProps={{
            fn: (x) => x * x,
            xMin: -3,
            xMax: 3,
            yMin: -1,
            yMax: 9,
            title: "График функции f(x) = x²",
            annotations: [
              { x: 0, y: 0, label: "Вершина параболы" },
              { x: 1, y: 1, label: "Точка (1, 1)" },
              { x: 2, y: 4, label: "Точка (2, 4)" },
            ],
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <h4 className="font-serif text-lg font-semibold mb-3">Ключевые наблюдения</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Для каждого x существует только одно значение y</li>
              <li>• Вертикальная прямая пересекает график не более чем в одной точке</li>
              <li>• Форма графика полностью определяется формулой функции</li>
            </ul>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default FunctionDefinition;
