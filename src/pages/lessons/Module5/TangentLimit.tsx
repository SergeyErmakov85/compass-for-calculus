import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const TangentLimit = () => {
  return (
    <Layout>
      <LessonLayout moduleId={5} lessonPath="/module/5/tangent-limit">
        <LessonContent
          title="Касательная как предел"
          subtitle="От секущей к касательной"
          graphDescription="Секущая проходит через две точки графика. 
            При сближении точек секущая «поворачивается» и в пределе 
            становится касательной — прямой, которая касается графика в одной точке."
          concept="Касательная к графику f в точке a — это предел секущих. 
            Наклон касательной равен lim [f(a+h) - f(a)]/h при h → 0. 
            Это и есть производная f'(a)."
          formula="f'(a) = lim [f(a+h) - f(a)]/h"
          graphProps={{
            fn: (x) => x * x,
            xMin: -1,
            xMax: 4,
            yMin: -2,
            yMax: 10,
            title: "Касательная к параболе в точке (1, 1)",
            secondaryFn: (x) => 2 * x - 1, // Касательная y = 2x - 1
            annotations: [
              { x: 1, y: 1, label: "Точка касания (1, 1)" },
            ],
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <p className="text-muted-foreground">
              Пунктирная линия — касательная y = 2x - 1 к параболе y = x² в точке (1, 1). 
              Наклон касательной равен f'(1) = 2.
            </p>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default TangentLimit;
