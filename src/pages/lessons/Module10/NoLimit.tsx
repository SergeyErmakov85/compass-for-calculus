import { Layout } from "@/components/layout/Layout";
import { LessonLayout } from "@/components/lesson/LessonLayout";
import { LessonContent } from "@/components/lesson/LessonContent";

const NoLimit = () => {
  return (
    <Layout>
      <LessonLayout moduleId={10} lessonPath="/module/10/no-limit">
        <LessonContent
          title="Отсутствие предела"
          subtitle="Когда предел не существует"
          graphDescription="Функция x·sin(1/x) колеблется, но амплитуда затухает. 
            Несмотря на колебания, предел при x → 0 существует и равен 0: 
            колебания «зажаты» между ±|x|."
          concept="Предел не существует, если: 
            1) f уходит в ±∞, 2) односторонние пределы различны, 
            3) значения колеблются без стабилизации. 
            Но если колебания затухают — предел может существовать."
          formula="lim x·sin(1/x) = 0 при x → 0"
          graphProps={{
            fn: (x) => {
              if (Math.abs(x) < 0.01) return 0;
              return x * Math.sin(1 / x);
            },
            xMin: -1,
            xMax: 1,
            yMin: -1,
            yMax: 1,
            samples: 500,
            title: "x·sin(1/x): колебания затухают → предел = 0",
            secondaryFn: (x) => Math.abs(x), // Огибающая
            annotations: [
              { x: 0, y: 0, label: "lim = 0" },
            ],
          }}
        >
          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <p className="text-muted-foreground">
              Пунктир — огибающая |x|. Функция колеблется внутри этого «конуса». 
              Поскольку |x| → 0, функция тоже → 0 (теорема о сжатии).
            </p>
          </div>
        </LessonContent>
      </LessonLayout>
    </Layout>
  );
};

export default NoLimit;
