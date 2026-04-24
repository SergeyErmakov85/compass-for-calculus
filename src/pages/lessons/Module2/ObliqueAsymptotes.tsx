import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const ObliqueAsymptotes = () => {
  return (
    <Layout>
      <LessonLayout moduleId={2} lessonPath="/module/2/oblique-asymptotes">
        <LessonContent
          title="Наклонные асимптоты"
          subtitle="Линейное приближение при x → ∞"
          graphDescription="Функция f(x) = (x² + 1)/x при больших x ведёт себя как прямая y = x. 
            Это наклонная асимптота: график всё ближе прижимается к этой прямой, 
            разница стремится к нулю."
          concept="Наклонная асимптота y = kx + b появляется, когда степень числителя 
            на единицу больше степени знаменателя. Коэффициенты находятся делением: 
            k = lim[f(x)/x], b = lim[f(x) - kx] при x → ∞."
          formula="f(x) = (x² + 1)/x = x + 1/x"
          graphProps={{
            fn: (x) => {
              if (Math.abs(x) < 0.1) return null;
              return (x * x + 1) / x;
            },
            xMin: -6,
            xMax: 6,
            yMin: -8,
            yMax: 8,
            title: "График функции f(x) = (x² + 1)/x",
            asymptotes: [
              { value: 0, axis: "x", label: "Вертикальная асимптота" },
            ],
            secondaryFn: (x) => x, // Наклонная асимптота y = x
            annotations: [
              { x: 3, y: 3.33, label: "f(3) ≈ 3.33" },
            ],
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <h4 className="font-serif text-lg font-semibold mb-3">Пунктирная линия — асимптота y = x</h4>
            <p className="text-muted-foreground">
              При x → ∞ разница f(x) - x = 1/x → 0. График приближается к прямой y = x.
            </p>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default ObliqueAsymptotes;
