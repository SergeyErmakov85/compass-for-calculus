import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const PiecewiseAnalysis = () => {
  return (
    <Layout>
      <LessonLayout moduleId={8} lessonPath="/module/8/piecewise-analysis">
        <LessonContent
          title="Анализ по частям"
          subtitle="Разные формулы на разных интервалах"
          graphDescription="Кусочная функция: x² при x ≤ 0 и √x при x > 0. 
            На каждом интервале — своя формула. 
            Важно проверить поведение в точках «склейки»."
          concept="Кусочно-заданные функции требуют анализа на каждом интервале отдельно. 
            Особое внимание — к точкам перехода: там проверяют непрерывность, 
            существование производной, характер склейки."
          formula="f(x) = { x², x ≤ 0; √x, x > 0 }"
          graphProps={{
            fn: (x) => {
              if (x <= 0) return x * x;
              return Math.sqrt(x);
            },
            xMin: -3,
            xMax: 4,
            yMin: -1,
            yMax: 5,
            title: "Кусочная функция",
            annotations: [
              { x: 0, y: 0, label: "Точка склейки (0, 0)" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default PiecewiseAnalysis;
