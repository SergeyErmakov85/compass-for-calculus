import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const AbsoluteValue = () => {
  return (
    <Layout>
      <LessonLayout moduleId={9} lessonPath="/module/9/absolute-value">
        <LessonContent
          title="Функция с модулем"
          subtitle="Отражение отрицательной части"
          graphDescription="Модуль |x| «отражает» отрицательную часть вверх. 
            При x ≥ 0: |x| = x. При x < 0: |x| = -x. 
            Результат — V-образный график с вершиной в начале координат."
          concept="Модуль |f(x)| берёт функцию f и отражает все части с f < 0 
            относительно оси x. Геометрически: «переворачивает» отрицательные участки вверх."
          formula="|x| = { x, x≥0; -x, x<0 }"
          graphProps={{
            fn: (x) => Math.abs(x),
            xMin: -4,
            xMax: 4,
            yMin: -1,
            yMax: 5,
            title: "Функция |x|",
            annotations: [
              { x: 0, y: 0, label: "Угловая точка" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default AbsoluteValue;
