import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const CornerPoints = () => {
  return (
    <Layout>
      <LessonLayout moduleId={9} lessonPath="/module/9/corner-points">
        <LessonContent
          title="Потеря дифференцируемости"
          subtitle="Угловые точки"
          graphDescription="В точке x = 0 функция |x| имеет угол: 
            слева наклон -1, справа +1. Касательной нет — 
            производная не существует, хотя функция непрерывна."
          concept="Угловая точка — точка, где функция непрерывна, 
            но производная не существует из-за разных односторонних производных. 
            Геометрически: нельзя провести единственную касательную."
          formula="f'(0) не существует для f(x) = |x|"
          graphProps={{
            fn: (x) => Math.abs(x),
            xMin: -3,
            xMax: 3,
            yMin: -1,
            yMax: 4,
            title: "|x|: производная не существует в x = 0",
            secondaryFn: (x) => -x, // Касательная слева
            annotations: [
              { x: 0, y: 0, label: "Угол: f'(0⁻) = -1, f'(0⁺) = 1" },
            ],
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <p className="text-muted-foreground">
              Пунктирная линия y = -x — это «касательная слева». 
              Справа касательная была бы y = x. 
              Они не совпадают, поэтому производной нет.
            </p>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default CornerPoints;
