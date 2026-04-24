import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const JunctionPoints = () => {
  return (
    <Layout>
      <LessonLayout moduleId={8} lessonPath="/module/8/junction-points">
        <LessonContent
          title="Точки склейки"
          subtitle="Поведение в точках соединения"
          graphDescription="Функция со скачком: слева от 0 равна x + 1, 
            справа — x² + 2. В точке x = 0 значения «не стыкуются»: 
            слева f → 1, справа f = 2. Разрыв первого рода (скачок)."
          concept="В точке склейки нужно проверить: 
            1) Сходятся ли значения слева и справа? 
            2) Сходятся ли производные? 
            Если нет — разрыв или излом."
          formula="f(x) = { x+1, x<0; x²+2, x≥0 }"
          graphProps={{
            fn: (x) => {
              if (x < 0) return x + 1;
              return x * x + 2;
            },
            xMin: -4,
            xMax: 3,
            yMin: -2,
            yMax: 6,
            title: "Скачок в точке склейки",
            annotations: [
              { x: 0, y: 1, label: "lim слева = 1", color: "hsl(var(--graph-primary))" },
              { x: 0, y: 2, label: "f(0) = 2", color: "hsl(var(--graph-secondary))" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default JunctionPoints;
