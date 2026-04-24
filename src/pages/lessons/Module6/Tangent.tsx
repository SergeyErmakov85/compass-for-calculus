import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const Tangent = () => {
  return (
    <Layout>
      <LessonLayout moduleId={6} lessonPath="/module/6/tangent">
        <LessonContent
          title="Тангенс и асимптоты"
          subtitle="Периодические разрывы"
          graphDescription="tan(x) = sin(x)/cos(x) не определён при cos(x) = 0, 
            то есть при x = ±π/2, ±3π/2, ... В этих точках — вертикальные асимптоты. 
            Функция периодична с периодом π."
          concept="Тангенс сочетает периодичность с разрывами. 
            В точках вида π/2 + πk функция уходит в ±∞. 
            Между асимптотами — монотонный рост от -∞ до +∞."
          formula="tan(x) = sin(x)/cos(x)"
          graphProps={{
            fn: (x) => {
              const val = Math.tan(x);
              if (Math.abs(val) > 20) return null;
              return val;
            },
            xMin: -2 * Math.PI,
            xMax: 2 * Math.PI,
            yMin: -10,
            yMax: 10,
            title: "tan(x): периодические асимптоты",
            asymptotes: [
              { value: -3 * Math.PI / 2, axis: "x" },
              { value: -Math.PI / 2, axis: "x" },
              { value: Math.PI / 2, axis: "x" },
              { value: 3 * Math.PI / 2, axis: "x" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default Tangent;
