import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const CubicFunctions = () => {
  return (
    <Layout>
      <LessonLayout moduleId={1} lessonPath="/module/1/cubic">
        <LessonContent
          title="Кубические функции"
          subtitle="Точка перегиба"
          graphDescription="Кубическая парабола f(x) = x³ проходит через начало координат 
            и имеет точку перегиба в (0, 0). Слева от неё график выпуклый вверх, 
            справа — выпуклый вниз. Это точка, где кривизна меняет знак."
          concept="Точка перегиба — особая точка, где график меняет характер выпуклости. 
            В этой точке вторая производная равна нулю. Для кубической функции f(x) = x³ 
            точка перегиба находится в начале координат."
          formula="f(x) = x³"
          graphProps={{
            fn: (x) => x * x * x,
            xMin: -2.5,
            xMax: 2.5,
            yMin: -8,
            yMax: 8,
            title: "График функции f(x) = x³",
            annotations: [
              { x: 0, y: 0, label: "Точка перегиба", color: "hsl(var(--graph-secondary))" },
            ],
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <h4 className="font-serif text-lg font-semibold mb-3">Свойства точки перегиба</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Вторая производная f''(x) = 6x равна нулю при x = 0</li>
              <li>• При x &lt; 0: f''(x) &lt; 0 (выпуклость вверх)</li>
              <li>• При x &gt; 0: f''(x) &gt; 0 (выпуклость вниз)</li>
              <li>• Касательная в точке перегиба пересекает график</li>
            </ul>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default CubicFunctions;
