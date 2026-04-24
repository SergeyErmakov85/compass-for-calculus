import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const ContinuityDefinition = () => {
  return (
    <Layout>
      <LessonLayout moduleId={4} lessonPath="/module/4/continuity-definition">
        <LessonContent
          title="Определение непрерывности"
          subtitle="Три условия непрерывности"
          graphDescription="Функция f(x) = x² непрерывна всюду: в каждой точке 
            выполнены три условия — функция определена, предел существует, 
            и предел равен значению. График — гладкая кривая без разрывов."
          concept="Функция непрерывна в точке a, если: 1) f(a) определено, 
            2) lim f(x) при x → a существует, 3) lim f(x) = f(a). 
            Нарушение любого условия создаёт разрыв."
          formula="f непрерывна в a ⟺ lim f(x) = f(a)"
          graphProps={{
            fn: (x) => x * x,
            xMin: -3,
            xMax: 3,
            yMin: -1,
            yMax: 9,
            title: "Непрерывная функция f(x) = x²",
            annotations: [
              { x: 2, y: 4, label: "f(2) = lim f(x) = 4" },
            ],
          }}
        />
      </LessonLayout>
    </Layout>
  );
};

export default ContinuityDefinition;
