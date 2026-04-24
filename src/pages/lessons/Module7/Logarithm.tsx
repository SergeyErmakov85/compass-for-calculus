import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const Logarithm = () => {
  return (
    <Layout>
      <LessonLayout moduleId={7} lessonPath="/module/7/logarithm">
        <LessonContent
          title="Логарифмическая функция"
          subtitle="Медленный рост"
          graphDescription="ln(x) определён только для x > 0. 
            Растёт очень медленно: ln(1000000) ≈ 13.8. 
            При x → 0⁺ уходит в -∞. Вертикальная асимптота x = 0."
          concept="Логарифм — обратная функция к экспоненте: ln(eˣ) = x, e^(ln x) = x. 
            Производная (ln x)' = 1/x. Логарифм «замедляет» рост, 
            превращая умножение в сложение: ln(ab) = ln a + ln b."
          formula="(ln x)' = 1/x"
          graphProps={{
            fn: (x) => (x > 0 ? Math.log(x) : null),
            xMin: -1,
            xMax: 8,
            yMin: -4,
            yMax: 3,
            title: "Натуральный логарифм ln(x)",
            annotations: [
              { x: 1, y: 0, label: "ln(1) = 0" },
              { x: Math.E, y: 1, label: "ln(e) = 1" },
            ],
            asymptotes: [
              { value: 0, axis: "x", label: "x = 0" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default Logarithm;
