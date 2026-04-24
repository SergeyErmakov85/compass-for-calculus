import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const DerivativeRate = () => {
  return (
    <Layout>
      <LessonLayout moduleId={5} lessonPath="/module/5/derivative-rate">
        <LessonContent
          title="Производная как скорость"
          subtitle="Мгновенная скорость изменения"
          graphDescription="Если f(t) — положение объекта в момент t, 
            то f'(t) — его скорость. На графике f(t) = t² скорость в момент t = 2 
            равна f'(2) = 4: касательная имеет наклон 4."
          concept="Производная — это мгновенная скорость изменения функции. 
            Если f описывает положение, f' — скорость, f'' — ускорение. 
            Знак производной показывает направление: f' > 0 — рост, f' < 0 — убывание."
          formula="v(t) = f'(t) = lim Δf/Δt"
          graphProps={{
            fn: (x) => x * x,
            xMin: -1,
            xMax: 4,
            yMin: -2,
            yMax: 16,
            title: "Положение f(t) = t² и скорость f'(t) = 2t",
            secondaryFn: (x) => 2 * x, // Производная
            annotations: [
              { x: 2, y: 4, label: "f(2) = 4 (положение)" },
              { x: 2, y: 4, label: "f'(2) = 4 (скорость)", color: "hsl(var(--graph-tertiary))" },
            ],
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <p className="text-muted-foreground">
              Синяя кривая — положение t². Пунктир — скорость 2t. 
              В каждый момент скорость равна наклону касательной к кривой положения.
            </p>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default DerivativeRate;
