import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const SinCos = () => {
  return (
    <Layout>
      <LessonLayout moduleId={6} lessonPath="/module/6/sin-cos">
        <LessonContent
          title="Синус и косинус"
          subtitle="Основные периодические функции"
          graphDescription="sin(x) и cos(x) — волнообразные функции с периодом 2π. 
            cos сдвинут относительно sin на π/2 влево. 
            Обе ограничены: |sin x| ≤ 1, |cos x| ≤ 1."
          concept="Синус и косинус связаны с единичной окружностью: 
            cos θ — координата x, sin θ — координата y точки на окружности. 
            Отсюда тождество sin²x + cos²x = 1."
          formula="sin²x + cos²x = 1"
          graphProps={{
            fn: (x) => Math.sin(x),
            xMin: -2 * Math.PI,
            xMax: 2 * Math.PI,
            yMin: -1.5,
            yMax: 1.5,
            title: "sin(x) и cos(x)",
            secondaryFn: (x) => Math.cos(x),
            annotations: [
              { x: 0, y: 0, label: "sin(0) = 0" },
              { x: 0, y: 1, label: "cos(0) = 1", color: "hsl(var(--graph-tertiary))" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default SinCos;
