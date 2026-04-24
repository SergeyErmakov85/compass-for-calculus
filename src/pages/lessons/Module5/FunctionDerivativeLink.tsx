import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const FunctionDerivativeLink = () => {
  return (
    <Layout>
      <LessonLayout moduleId={5} lessonPath="/module/5/function-derivative-link">
        <LessonContent
          title="Связь функции и производной"
          subtitle="f и f' на одном графике"
          graphDescription="Синяя кривая — sin(x), пунктир — cos(x) = (sin x)'. 
            Когда sin растёт, cos > 0. Когда sin убывает, cos < 0. 
            Экстремумы sin соответствуют нулям cos."
          concept="Производная «читает» наклон функции. Где f растёт, там f' > 0. 
            Где f убывает, f' < 0. Где f достигает экстремума, f' = 0 
            (касательная горизонтальна)."
          formula="(sin x)' = cos x"
          graphProps={{
            fn: (x) => Math.sin(x),
            xMin: -2 * Math.PI,
            xMax: 2 * Math.PI,
            yMin: -1.5,
            yMax: 1.5,
            title: "sin(x) и его производная cos(x)",
            secondaryFn: (x) => Math.cos(x),
            annotations: [
              { x: Math.PI / 2, y: 1, label: "max sin, cos = 0" },
              { x: -Math.PI / 2, y: -1, label: "min sin, cos = 0" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default FunctionDerivativeLink;
