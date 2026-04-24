import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const ExponentialGrowth = () => {
  return (
    <Layout>
      <LessonLayout moduleId={7} lessonPath="/module/7/exponential-growth">
        <LessonContent
          title="Экспоненциальный рост"
          subtitle="Быстрее любого полинома"
          graphDescription="Функция eˣ растёт быстрее любого полинома. 
            При x > 0 она стремительно уходит вверх. 
            При x < 0 приближается к нулю, но никогда его не достигает."
          concept="Экспонента — единственная функция, равная своей производной: (eˣ)' = eˣ. 
            Это означает, что скорость роста пропорциональна текущему значению — 
            основа моделей роста населения, радиоактивного распада, сложных процентов."
          formula="(eˣ)' = eˣ"
          graphProps={{
            fn: (x) => Math.exp(x),
            xMin: -4,
            xMax: 3,
            yMin: -1,
            yMax: 15,
            title: "Экспонента eˣ",
            annotations: [
              { x: 0, y: 1, label: "e⁰ = 1" },
              { x: 1, y: Math.E, label: "e¹ ≈ 2.72" },
            ],
            asymptotes: [
              { value: 0, axis: "y", label: "y = 0 (горизонтальная асимптота при x → -∞)" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default ExponentialGrowth;
