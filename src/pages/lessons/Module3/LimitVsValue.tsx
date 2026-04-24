import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const LimitVsValue = () => {
  return (
    <Layout>
      <LessonLayout moduleId={3} lessonPath="/module/3/limit-vs-value">
        <LessonContent
          title="Предел и значение функции"
          subtitle="Почему они могут не совпадать"
          graphDescription="Для этой кусочной функции предел при x → 1 равен 2, 
            но значение f(1) = 5. Точка (1, 5) «оторвана» от кривой — 
            предел описывает, куда стремится функция, а не где она находится."
          concept="Предел и значение функции — разные понятия. Предел lim f(x) при x → a 
            не зависит от f(a): он определяется поведением функции вблизи точки a, 
            но не в самой точке. Для непрерывности нужно равенство f(a) = lim f(x)."
          formula="f(x) = { x + 1, если x ≠ 1; 5, если x = 1 }"
          graphProps={{
            fn: (x) => {
              if (Math.abs(x - 1) < 0.02) return null;
              return x + 1;
            },
            xMin: -2,
            xMax: 4,
            yMin: -1,
            yMax: 6,
            title: "Предел ≠ значение в точке",
            annotations: [
              { x: 1, y: 2, label: "lim = 2 (дыра)", color: "hsl(var(--graph-primary))" },
              { x: 1, y: 5, label: "f(1) = 5 (значение)", color: "hsl(var(--graph-secondary))" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default LimitVsValue;
