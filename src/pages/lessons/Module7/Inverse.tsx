import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const Inverse = () => {
  return (
    <Layout>
      <LessonLayout moduleId={7} lessonPath="/module/7/inverse">
        <LessonContent
          title="Обратимость"
          subtitle="exp и ln как обратные функции"
          graphDescription="Графики eˣ и ln(x) симметричны относительно прямой y = x (показана пунктиром). 
            Это геометрический признак обратных функций: 
            отражение одного графика даёт другой."
          concept="Если f и g — обратные функции, то g(f(x)) = x и f(g(x)) = x. 
            Для экспоненты и логарифма: e^(ln x) = x и ln(eˣ) = x. 
            Графики симметричны относительно y = x."
          formula="e^(ln x) = x, ln(eˣ) = x"
          graphProps={{
            fn: (x) => Math.exp(x),
            xMin: -3,
            xMax: 4,
            yMin: -3,
            yMax: 4,
            title: "eˣ и ln(x): взаимно обратные функции",
            secondaryFn: (x) => (x > 0 ? Math.log(x) : null),
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <p className="text-muted-foreground">
              Синяя кривая — eˣ, пунктир — ln(x). 
              Они симметричны относительно диагонали y = x (не показана).
            </p>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default Inverse;
