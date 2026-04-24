import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const DiscontinuityTypes = () => {
  return (
    <Layout>
      <LessonLayout moduleId={4} lessonPath="/module/4/discontinuity-types">
        <LessonContent
          title="Типы разрывов"
          subtitle="Устранимые, скачок, бесконечные"
          graphDescription="Функция со скачком: при x < 0 равна -1, при x ≥ 0 равна 1. 
            В точке x = 0 односторонние пределы различны (-1 и 1), 
            поэтому это разрыв первого рода (скачок)."
          concept="Устранимый разрыв: предел есть, но ≠ f(a). 
            Скачок (разрыв I рода): односторонние пределы конечны, но различны. 
            Бесконечный разрыв (II рода): хотя бы один предел бесконечен."
          formula="f(x) = sign(x)"
          graphProps={{
            fn: (x) => {
              if (Math.abs(x) < 0.02) return null;
              return x > 0 ? 1 : -1;
            },
            xMin: -4,
            xMax: 4,
            yMin: -2,
            yMax: 2,
            title: "Функция sign(x) — разрыв типа «скачок»",
            annotations: [
              { x: 0, y: 1, label: "lim справа = 1", color: "hsl(var(--graph-primary))" },
              { x: 0, y: -1, label: "lim слева = -1", color: "hsl(var(--graph-secondary))" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default DiscontinuityTypes;
