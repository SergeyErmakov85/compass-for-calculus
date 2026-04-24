import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const LinearFunctions = () => {
  return (
    <Layout>
      <LessonLayout moduleId={1} lessonPath="/module/1/linear">
        <LessonContent
          title="Линейные функции"
          subtitle="Скорость изменения и угловой коэффициент"
          graphDescription="Прямая линия — простейший график. Угловой коэффициент k = 2 
            означает, что при увеличении x на 1, значение y увеличивается на 2. 
            Это и есть скорость изменения — постоянная для линейной функции."
          concept="Линейная функция f(x) = kx + b имеет постоянную скорость изменения, 
            равную k. Это прообраз производной: наклон касательной к прямой в любой точке 
            одинаков и равен k."
          formula="f(x) = 2x + 1"
          graphProps={{
            fn: (x) => 2 * x + 1,
            xMin: -4,
            xMax: 4,
            yMin: -6,
            yMax: 10,
            title: "График линейной функции f(x) = 2x + 1",
            annotations: [
              { x: 0, y: 1, label: "Точка пересечения с осью y" },
              { x: 1, y: 3, label: "Δy = 2 при Δx = 1" },
            ],
            secondaryFn: (x) => -0.5 * x + 2,
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <h4 className="font-serif text-lg font-semibold mb-3">Угловой коэффициент</h4>
            <p className="text-muted-foreground">
              k = Δy/Δx = (y₂ - y₁)/(x₂ - x₁) показывает, насколько «круто» поднимается прямая. 
              Пунктирная линия показывает функцию с отрицательным наклоном k = -0.5.
            </p>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default LinearFunctions;
