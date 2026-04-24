import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const LimitAtInfinity = () => {
  return (
    <Layout>
      <LessonLayout moduleId={3} lessonPath="/module/3/limit-at-infinity">
        <LessonContent
          title="Предел при бесконечности"
          subtitle="Поведение функции на бесконечности"
          graphDescription="Функция f(x) = (2x + 1)/(x + 1) стремится к 2 при x → ±∞. 
            Это горизонтальная асимптота: при очень больших |x| функция 
            практически неотличима от константы 2."
          concept="Предел при x → ∞ описывает асимптотическое поведение функции. 
            Для рациональных функций он зависит от соотношения степеней: 
            если степени равны, предел равен отношению старших коэффициентов."
          formula="lim (2x + 1)/(x + 1) = 2 при x → ∞"
          graphProps={{
            fn: (x) => {
              if (Math.abs(x + 1) < 0.05) return null;
              return (2 * x + 1) / (x + 1);
            },
            xMin: -10,
            xMax: 10,
            yMin: -5,
            yMax: 8,
            title: "Предел при x → ∞",
            asymptotes: [
              { value: 2, axis: "y", label: "y = 2 (горизонтальная асимптота)" },
              { value: -1, axis: "x", label: "x = -1" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default LimitAtInfinity;
