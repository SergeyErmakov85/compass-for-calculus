import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const Oscillating = () => {
  return (
    <Layout>
      <LessonLayout moduleId={10} lessonPath="/module/10/oscillating">
        <LessonContent
          title="Осциллирующие функции"
          subtitle="Бесконечные колебания"
          graphDescription="Функция sin(1/x) при x → 0 колеблется всё быстрее и быстрее. 
            Частота колебаний стремится к бесконечности. 
            Это «патологический» пример — предел при x → 0 не существует."
          concept="Некоторые функции ведут себя настолько «дико» вблизи точки, 
            что предел не существует: значения не стабилизируются, а продолжают колебаться. 
            sin(1/x) при x → 0 — классический пример."
          formula="lim sin(1/x) при x → 0 не существует"
          graphProps={{
            fn: (x) => {
              if (Math.abs(x) < 0.02) return null;
              return Math.sin(1 / x);
            },
            xMin: -1,
            xMax: 1,
            yMin: -1.5,
            yMax: 1.5,
            samples: 500,
            title: "sin(1/x): бесконечные колебания при x → 0",
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default Oscillating;
