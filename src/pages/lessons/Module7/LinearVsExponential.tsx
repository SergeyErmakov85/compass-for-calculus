import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const LinearVsExponential = () => {
  return (
    <Layout>
      <LessonLayout moduleId={7} lessonPath="/module/7/linear-vs-exponential">
        <LessonContent
          title="Сравнение с линейным ростом"
          subtitle="Почему экспонента особенная"
          graphDescription="Сначала линейная функция 2x (пунктир) выше экспоненты eˣ. 
            Но после точки пересечения экспонента обгоняет и уходит в отрыв. 
            При больших x разница становится колоссальной."
          concept="Линейный рост: каждый шаг добавляет одинаковую величину. 
            Экспоненциальный рост: каждый шаг умножает на одинаковую величину. 
            Поэтому eˣ в итоге обгоняет любой полином xⁿ."
          formula="lim xⁿ/eˣ = 0 при x → ∞"
          graphProps={{
            fn: (x) => Math.exp(x),
            xMin: -2,
            xMax: 4,
            yMin: -2,
            yMax: 20,
            title: "eˣ vs 2x: экспонента побеждает",
            secondaryFn: (x) => 2 * x,
            annotations: [
              { x: 1.26, y: 3.5, label: "Точка пересечения" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default LinearVsExponential;
