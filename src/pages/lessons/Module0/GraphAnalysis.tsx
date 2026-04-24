import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const GraphAnalysis = () => {
  return (
    <Layout>
      <LessonLayout moduleId={0} lessonPath="/module/0/graph-analysis">
        <LessonContent
          title="График как объект анализа"
          subtitle="Визуальное исследование свойств функции"
          graphDescription="График функции f(x) = sin(x)/x (sinc-функция) демонстрирует, 
            как форма кривой раскрывает свойства функции: колебания затухают по мере 
            удаления от начала координат, функция симметрична относительно оси y, 
            а в точке x = 0 имеет особенность (предел равен 1)."
          concept="Анализируя график, мы можем определить: симметрию, периодичность, 
            монотонность, экстремумы, нули, асимптотическое поведение — всё это 
            считывается с формы кривой без вычислений."
          formula="f(x) = sin(x)/x"
          graphProps={{
            fn: (x) => {
              if (Math.abs(x) < 0.001) return 1;
              return Math.sin(x) / x;
            },
            xMin: -15,
            xMax: 15,
            yMin: -0.5,
            yMax: 1.2,
            title: "График функции f(x) = sin(x)/x",
            annotations: [
              { x: 0, y: 1, label: "lim = 1" },
              { x: Math.PI, y: 0, label: "Нуль при x = π" },
            ],
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <h4 className="font-serif text-lg font-semibold mb-3">Что видно на графике</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Симметрия:</strong> f(-x) = f(x) — чётная функция</li>
              <li>• <strong>Нули:</strong> в точках x = ±π, ±2π, ±3π, ...</li>
              <li>• <strong>Затухание:</strong> амплитуда колебаний уменьшается</li>
              <li>• <strong>Устранимая особенность:</strong> при x → 0 предел равен 1</li>
            </ul>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default GraphAnalysis;
