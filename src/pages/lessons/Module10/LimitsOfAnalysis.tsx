import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const LimitsOfAnalysis = () => {
  return (
    <Layout>
      <LessonLayout moduleId={10} lessonPath="/module/10/limits-of-analysis">
        <LessonContent
          title="Границы анализа"
          subtitle="Где интуиция отказывает"
          graphDescription="Функция Вейерштрасса — непрерывна всюду, 
            но нигде не дифференцируема. Это «монстр» анализа: 
            бесконечно изломанная кривая без касательных."
          concept="Существуют функции, нарушающие нашу интуицию: 
            непрерывные, но нигде не дифференцируемые; 
            всюду разрывные; фракталы. Классический анализ имеет границы."
          formula="Функция Вейерштрасса: ∑ aⁿcos(bⁿπx)"
          graphProps={{
            fn: (x) => {
              // Упрощённая версия функции Вейерштрасса
              let sum = 0;
              const a = 0.5;
              const b = 7;
              for (let n = 0; n < 8; n++) {
                sum += Math.pow(a, n) * Math.cos(Math.pow(b, n) * Math.PI * x);
              }
              return sum;
            },
            xMin: -2,
            xMax: 2,
            yMin: -2,
            yMax: 2,
            samples: 800,
            title: "Приближение функции Вейерштрасса",
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <h4 className="font-serif text-lg font-semibold mb-3">Почему это важно</h4>
            <p className="text-muted-foreground">
              Классический анализ строился на интуиции «гладких» функций. 
              Но математика XX века показала, что «патологические» случаи — не исключение. 
              Это расширило понимание непрерывности и дифференцируемости.
            </p>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default LimitsOfAnalysis;
