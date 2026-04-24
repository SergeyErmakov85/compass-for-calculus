import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const LimitGeometry = () => {
  return (
    <Layout>
      <LessonLayout moduleId={3} lessonPath="/module/3/limit-geometry">
        <LessonContent
          title="Геометрический смысл предела"
          subtitle="К чему стремится функция"
          graphDescription="При x → 0 функция sin(x)/x стремится к 1. 
            Это видно на графике: кривая подходит всё ближе к точке (0, 1), 
            хотя сама функция не определена в x = 0."
          concept="Предел lim f(x) при x → a равен L, если значения f(x) можно сделать 
            сколь угодно близкими к L, выбирая x достаточно близко к a. 
            Геометрически: график «целится» в точку (a, L)."
          formula="lim sin(x)/x = 1 при x → 0"
          graphProps={{
            fn: (x) => {
              if (Math.abs(x) < 0.001) return 1;
              return Math.sin(x) / x;
            },
            xMin: -8,
            xMax: 8,
            yMin: -0.5,
            yMax: 1.5,
            title: "График sin(x)/x — первый замечательный предел",
            annotations: [
              { x: 0, y: 1, label: "lim = 1", color: "hsl(var(--graph-secondary))" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default LimitGeometry;
