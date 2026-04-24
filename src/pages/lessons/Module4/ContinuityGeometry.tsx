import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const ContinuityGeometry = () => {
  return (
    <Layout>
      <LessonLayout moduleId={4} lessonPath="/module/4/continuity-geometry">
        <LessonContent
          title="Геометрическая интерпретация"
          subtitle="График без разрывов"
          graphDescription="Непрерывную функцию можно нарисовать, не отрывая карандаша 
            от бумаги. График sin(x) — пример идеальной непрерывности: 
            гладкая волнообразная кривая без скачков и дыр."
          concept="Геометрически непрерывность означает «связность» графика: 
            нет точек, где нужно «перепрыгивать». Теорема о промежуточном значении: 
            непрерывная функция принимает все промежуточные значения между f(a) и f(b)."
          formula="f(x) = sin(x)"
          graphProps={{
            fn: (x) => Math.sin(x),
            xMin: -2 * Math.PI,
            xMax: 2 * Math.PI,
            yMin: -1.5,
            yMax: 1.5,
            title: "Непрерывная функция sin(x)",
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default ContinuityGeometry;
