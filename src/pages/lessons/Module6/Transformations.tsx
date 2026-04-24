import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const Transformations = () => {
  return (
    <Layout>
      <LessonLayout moduleId={6} lessonPath="/module/6/transformations">
        <LessonContent
          title="Преобразования графиков"
          subtitle="Сдвиги, растяжения, отражения"
          graphDescription="Функция f(x) = 2sin(x - π/4) — это sin(x), 
            растянутый вдвое по вертикали и сдвинутый на π/4 вправо. 
            Амплитуда 2, фаза π/4."
          concept="Преобразования: y = Af(ω(x - φ)) + B. 
            A — вертикальное растяжение (амплитуда), ω — горизонтальное сжатие, 
            φ — горизонтальный сдвиг (фаза), B — вертикальный сдвиг."
          formula="y = A·sin(ω(x - φ)) + B"
          graphProps={{
            fn: (x) => 2 * Math.sin(x - Math.PI / 4),
            xMin: -2 * Math.PI,
            xMax: 2 * Math.PI,
            yMin: -3,
            yMax: 3,
            title: "2sin(x - π/4) vs sin(x)",
            secondaryFn: (x) => Math.sin(x),
          }}
        >
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Синяя: 2sin(x - π/4)</h4>
              <p className="text-sm text-muted-foreground">
                Амплитуда 2, сдвиг π/4 вправо
              </p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Пунктир: sin(x)</h4>
              <p className="text-sm text-muted-foreground">
                Исходная функция для сравнения
              </p>
            </div>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default Transformations;
