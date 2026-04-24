import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const HorizontalAsymptotes = () => {
  return (
    <Layout>
      <LessonLayout moduleId={2} lessonPath="/module/2/horizontal-asymptotes">
        <LessonContent
          title="Горизонтальные асимптоты"
          subtitle="Поведение функции на бесконечности"
          graphDescription="При x → ±∞ функция f(x) = x/(x+1) стремится к 1. 
            Горизонтальная асимптота y = 1 показывает предельное поведение: 
            график приближается к этой линии, но никогда её не пересекает при больших |x|."
          concept="Горизонтальная асимптота y = L существует, если предел функции 
            при x → ∞ или x → -∞ равен конечному числу L. Это «уровень стабилизации» 
            функции на бесконечности."
          formula="f(x) = x/(x+1)"
          graphProps={{
            fn: (x) => {
              if (Math.abs(x + 1) < 0.05) return null;
              return x / (x + 1);
            },
            xMin: -8,
            xMax: 8,
            yMin: -5,
            yMax: 5,
            title: "График функции f(x) = x/(x+1)",
            asymptotes: [
              { value: 1, axis: "y", label: "Горизонтальная асимптота y = 1" },
              { value: -1, axis: "x", label: "Вертикальная асимптота x = -1" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default HorizontalAsymptotes;
