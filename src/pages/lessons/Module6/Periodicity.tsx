import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const Periodicity = () => {
  return (
    <Layout>
      <LessonLayout moduleId={6} lessonPath="/module/6/periodicity">
        <LessonContent
          title="Периодичность"
          subtitle="Повторяющиеся паттерны"
          graphDescription="Функция f(x) = sin(2x) имеет период π (вдвое меньше, чем sin x). 
            Аргумент 2x «ускоряет» колебания: волна повторяется чаще."
          concept="Период T — наименьшее число, при котором f(x + T) = f(x). 
            Для sin(ωx) период равен 2π/ω. Чем больше ω, тем чаще колебания."
          formula="sin(ωx): период T = 2π/ω"
          graphProps={{
            fn: (x) => Math.sin(2 * x),
            xMin: -2 * Math.PI,
            xMax: 2 * Math.PI,
            yMin: -1.5,
            yMax: 1.5,
            title: "sin(2x): период π",
            secondaryFn: (x) => Math.sin(x),
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <p className="text-muted-foreground">
              Синяя кривая — sin(2x), пунктир — sin(x) для сравнения. 
              За один период sin(x) функция sin(2x) совершает два полных колебания.
            </p>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default Periodicity;
