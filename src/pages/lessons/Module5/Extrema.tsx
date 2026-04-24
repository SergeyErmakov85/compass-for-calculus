import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const Extrema = () => {
  return (
    <Layout>
      <LessonLayout moduleId={5} lessonPath="/module/5/extrema">
        <LessonContent
          title="Экстремумы и производная"
          subtitle="Максимумы и минимумы"
          graphDescription="Функция f(x) = x³ - 3x имеет локальный максимум при x = -1 
            и минимум при x = 1. В обеих точках f'(x) = 3x² - 3 = 0. 
            Это критические точки — кандидаты в экстремумы."
          concept="В точке экстремума f'(a) = 0 или не существует. 
            Если f' меняет знак с + на − — максимум. 
            С − на + — минимум. Если не меняет — точка перегиба."
          formula="f'(x) = 0 → кандидат в экстремум"
          graphProps={{
            fn: (x) => x * x * x - 3 * x,
            xMin: -3,
            xMax: 3,
            yMin: -4,
            yMax: 4,
            title: "f(x) = x³ - 3x: экстремумы",
            annotations: [
              { x: -1, y: 2, label: "Локальный max", color: "hsl(var(--graph-secondary))" },
              { x: 1, y: -2, label: "Локальный min", color: "hsl(var(--graph-tertiary))" },
            ],
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <h4 className="font-serif text-lg font-semibold mb-3">Алгоритм поиска экстремумов</h4>
            <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
              <li>Найти f'(x)</li>
              <li>Решить f'(x) = 0</li>
              <li>Проверить знак f' слева и справа от критических точек</li>
              <li>Определить тип экстремума по смене знака</li>
            </ol>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default Extrema;
