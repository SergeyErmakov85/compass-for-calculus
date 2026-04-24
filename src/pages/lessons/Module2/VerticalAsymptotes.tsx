import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const VerticalAsymptotes = () => {
  return (
    <Layout>
      <LessonLayout moduleId={2} lessonPath="/module/2/vertical-asymptotes">
        <LessonContent
          title="Вертикальные асимптоты"
          subtitle="Деление на ноль и бесконечные разрывы"
          graphDescription="Функция f(x) = 1/x не определена при x = 0. При приближении 
            к нулю справа функция уходит в +∞, слева — в -∞. Вертикальная линия x = 0 
            (пунктир) — вертикальная асимптота: график приближается, но никогда не касается."
          concept="Вертикальная асимптота возникает в точках, где знаменатель обращается 
            в ноль, а числитель — нет. Функция «взрывается» при приближении к этой точке, 
            уходя в бесконечность."
          formula="f(x) = 1/x"
          graphProps={{
            fn: (x) => {
              if (Math.abs(x) < 0.05) return null;
              return 1 / x;
            },
            xMin: -5,
            xMax: 5,
            yMin: -10,
            yMax: 10,
            title: "График функции f(x) = 1/x",
            asymptotes: [
              { value: 0, axis: "x", label: "Вертикальная асимптота x = 0" },
            ],
            annotations: [
              { x: 1, y: 1, label: "f(1) = 1" },
              { x: -1, y: -1, label: "f(-1) = -1" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default VerticalAsymptotes;
