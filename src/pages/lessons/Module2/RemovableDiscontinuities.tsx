import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const RemovableDiscontinuities = () => {
  return (
    <Layout>
      <LessonLayout moduleId={2} lessonPath="/module/2/removable-discontinuities">
        <LessonContent
          title="Устранимые разрывы"
          subtitle="Дыры в графике"
          graphDescription="Функция f(x) = (x² - 1)/(x - 1) не определена при x = 1 
            (деление на ноль). Но после сокращения f(x) = x + 1 при x ≠ 1. 
            Предел при x → 1 равен 2, хотя сама точка (1, 2) отсутствует — это «дыра»."
          concept="Устранимый разрыв возникает, когда предел существует, но функция 
            не определена в точке (или имеет другое значение). Можно «залатать» разрыв, 
            доопределив f(a) = lim f(x) при x → a."
          formula="f(x) = (x² - 1)/(x - 1) = x + 1, x ≠ 1"
          graphProps={{
            fn: (x) => {
              if (Math.abs(x - 1) < 0.02) return null;
              return (x * x - 1) / (x - 1);
            },
            xMin: -3,
            xMax: 4,
            yMin: -2,
            yMax: 6,
            title: "График функции f(x) = (x² - 1)/(x - 1)",
            annotations: [
              { x: 1, y: 2, label: "Устранимый разрыв (дыра)", color: "hsl(var(--graph-secondary))" },
            ],
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <h4 className="font-serif text-lg font-semibold mb-3">Как распознать устранимый разрыв</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Числитель и знаменатель обращаются в ноль одновременно</li>
              <li>• После сокращения общего множителя функция становится непрерывной</li>
              <li>• Предел существует и конечен</li>
            </ul>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default RemovableDiscontinuities;
