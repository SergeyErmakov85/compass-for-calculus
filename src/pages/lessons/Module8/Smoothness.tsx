import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const Smoothness = () => {
  return (
    <Layout>
      <LessonLayout moduleId={8} lessonPath="/module/8/smoothness">
        <LessonContent
          title="Непрерывность и дифференцируемость"
          subtitle="Гладкость в точках склейки"
          graphDescription="Функция x² при x ≤ 0 и x при x > 0 непрерывна в 0 
            (оба предела равны 0), но не дифференцируема: 
            слева производная 0, справа 1. Излом без разрыва."
          concept="Непрерывность не гарантирует дифференцируемость. 
            Для гладкой склейки нужно: 1) равенство значений, 
            2) равенство производных. Иначе — излом."
          formula="f(x) = { x², x≤0; x, x>0 }"
          graphProps={{
            fn: (x) => {
              if (x <= 0) return x * x;
              return x;
            },
            xMin: -3,
            xMax: 3,
            yMin: -1,
            yMax: 4,
            title: "Непрерывна, но не дифференцируема в 0",
            annotations: [
              { x: 0, y: 0, label: "Угловая точка (излом)" },
            ],
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <h4 className="font-serif text-lg font-semibold mb-3">Условия гладкости</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• f(0⁻) = f(0⁺) = f(0) — непрерывность ✓</li>
              <li>• f'(0⁻) = 0, f'(0⁺) = 1 — производные не равны ✗</li>
              <li>• Результат: излом, производная в 0 не существует</li>
            </ul>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default Smoothness;
