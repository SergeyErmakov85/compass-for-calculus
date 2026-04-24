import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const HigherDegree = () => {
  return (
    <Layout>
      <LessonLayout moduleId={1} lessonPath="/module/1/higher-degree">
        <LessonContent
          title="Полиномы высокой степени"
          subtitle="Форма графика и степень полинома"
          graphDescription="Полином четвёртой степени f(x) = x⁴ - 5x² + 4 имеет форму 
            с тремя экстремумами. Чем выше степень, тем больше «волн» может иметь график. 
            На бесконечности график ведёт себя как x⁴ — уходит вверх."
          concept="Степень полинома определяет максимальное число экстремумов (n-1) и 
            нулей (n). Поведение на бесконечности определяется старшим членом: 
            чётная степень — график уходит в одну сторону, нечётная — в разные."
          formula="f(x) = x⁴ - 5x² + 4"
          graphProps={{
            fn: (x) => Math.pow(x, 4) - 5 * x * x + 4,
            xMin: -3,
            xMax: 3,
            yMin: -4,
            yMax: 10,
            title: "График функции f(x) = x⁴ - 5x² + 4",
            annotations: [
              { x: 0, y: 4, label: "Локальный максимум" },
              { x: -1.58, y: -2.25, label: "Локальный минимум", color: "hsl(var(--graph-tertiary))" },
              { x: 1.58, y: -2.25, label: "Локальный минимум", color: "hsl(var(--graph-tertiary))" },
            ],
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <h4 className="font-serif text-lg font-semibold mb-3">Правило степени</h4>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Полином степени n:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• До n нулей</li>
                  <li>• До n-1 экстремумов</li>
                  <li>• До n-2 точек перегиба</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground">Поведение на ∞:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Чётная n: оба конца вверх (или вниз)</li>
                  <li>• Нечётная n: концы в разные стороны</li>
                </ul>
              </div>
            </div>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default HigherDegree;
