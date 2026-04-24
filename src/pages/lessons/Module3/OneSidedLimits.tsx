import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const OneSidedLimits = () => {
  return (
    <Layout>
      <LessonLayout moduleId={3} lessonPath="/module/3/one-sided-limits">
        <LessonContent
          title="Односторонние пределы"
          subtitle="Подход слева и справа"
          graphDescription="Функция f(x) = 1/x при x → 0 имеет разные пределы слева и справа: 
            слева уходит в -∞, справа в +∞. Односторонние пределы существуют, 
            но обычный (двусторонний) предел не существует."
          concept="Предел слева lim f(x) при x → a⁻ — это значение, к которому стремится 
            функция при подходе к a со стороны меньших x. Предел справа — со стороны больших x. 
            Обычный предел существует, только если оба односторонних равны."
          formula="lim 1/x при x → 0⁺ = +∞, lim 1/x при x → 0⁻ = -∞"
          graphProps={{
            fn: (x) => {
              if (Math.abs(x) < 0.05) return null;
              return 1 / x;
            },
            xMin: -5,
            xMax: 5,
            yMin: -10,
            yMax: 10,
            title: "Односторонние пределы функции 1/x",
            asymptotes: [
              { value: 0, axis: "x", label: "x = 0" },
            ],
          }}
        >
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary/50 rounded-lg border-l-4 border-graph-primary">
              <h4 className="font-semibold text-foreground mb-2">Справа (x → 0⁺)</h4>
              <p className="text-sm text-muted-foreground">
                При x → 0 с положительной стороны: f(x) → +∞
              </p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg border-l-4 border-graph-secondary">
              <h4 className="font-semibold text-foreground mb-2">Слева (x → 0⁻)</h4>
              <p className="text-sm text-muted-foreground">
                При x → 0 с отрицательной стороны: f(x) → -∞
              </p>
            </div>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default OneSidedLimits;
