export interface Lesson {
  id: string;
  title: string;
  description: string;
  path: string;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
  color: string;
}

export const courseStructure: Module[] = [
  {
    id: 0,
    title: "Что такое функция",
    description: "Основы: график как множество точек",
    color: "module-0",
    lessons: [
      {
        id: "0-1",
        title: "Что такое функция",
        description: "График как множество точек (x, f(x))",
        path: "/module/0/function-definition",
      },
      {
        id: "0-2",
        title: "Область определения и значения",
        description: "Где функция существует и какие значения принимает",
        path: "/module/0/domain-range",
      },
      {
        id: "0-3",
        title: "График как объект анализа",
        description: "Визуальное исследование свойств функции",
        path: "/module/0/graph-analysis",
      },
    ],
  },
  {
    id: 1,
    title: "Полиномиальные функции",
    description: "Идеальный мир анализа",
    color: "module-1",
    lessons: [
      {
        id: "1-1",
        title: "Линейные функции",
        description: "Скорость изменения и угловой коэффициент",
        path: "/module/1/linear",
      },
      {
        id: "1-2",
        title: "Квадратичные функции",
        description: "Экстремумы и параболы",
        path: "/module/1/quadratic",
      },
      {
        id: "1-3",
        title: "Кубические функции",
        description: "Точка перегиба",
        path: "/module/1/cubic",
      },
      {
        id: "1-4",
        title: "Полиномы высокой степени",
        description: "Форма графика и степень полинома",
        path: "/module/1/higher-degree",
      },
    ],
  },
  {
    id: 2,
    title: "Рациональные функции",
    description: "Разрывы и асимптоты",
    color: "module-2",
    lessons: [
      {
        id: "2-1",
        title: "Вертикальные асимптоты",
        description: "Деление на ноль и разрывы",
        path: "/module/2/vertical-asymptotes",
      },
      {
        id: "2-2",
        title: "Горизонтальные асимптоты",
        description: "Поведение на бесконечности",
        path: "/module/2/horizontal-asymptotes",
      },
      {
        id: "2-3",
        title: "Наклонные асимптоты",
        description: "Линейное приближение при x → ∞",
        path: "/module/2/oblique-asymptotes",
      },
      {
        id: "2-4",
        title: "Устранимые разрывы",
        description: "Дыры в графике",
        path: "/module/2/removable-discontinuities",
      },
    ],
  },
  {
    id: 3,
    title: "Предел",
    description: "Фундаментальное понятие анализа",
    color: "module-3",
    lessons: [
      {
        id: "3-1",
        title: "Геометрический смысл предела",
        description: "К чему стремится функция",
        path: "/module/3/limit-geometry",
      },
      {
        id: "3-2",
        title: "Односторонние пределы",
        description: "Слева и справа",
        path: "/module/3/one-sided-limits",
      },
      {
        id: "3-3",
        title: "Предел и значение функции",
        description: "Почему они могут не совпадать",
        path: "/module/3/limit-vs-value",
      },
      {
        id: "3-4",
        title: "Предел при бесконечности",
        description: "Поведение на бесконечности",
        path: "/module/3/limit-at-infinity",
      },
    ],
  },
  {
    id: 4,
    title: "Непрерывность",
    description: "Целостность функции",
    color: "module-4",
    lessons: [
      {
        id: "4-1",
        title: "Определение непрерывности",
        description: "Три условия непрерывности",
        path: "/module/4/continuity-definition",
      },
      {
        id: "4-2",
        title: "Типы разрывов",
        description: "Устранимые, скачок, бесконечные",
        path: "/module/4/discontinuity-types",
      },
      {
        id: "4-3",
        title: "Геометрическая интерпретация",
        description: "График без разрывов",
        path: "/module/4/continuity-geometry",
      },
    ],
  },
  {
    id: 5,
    title: "Производная",
    description: "Мгновенная скорость изменения",
    color: "module-5",
    lessons: [
      {
        id: "5-1",
        title: "Касательная как предел",
        description: "От секущей к касательной",
        path: "/module/5/tangent-limit",
      },
      {
        id: "5-2",
        title: "Производная как скорость",
        description: "Скорость изменения функции",
        path: "/module/5/derivative-rate",
      },
      {
        id: "5-3",
        title: "Связь функции и производной",
        description: "f и f' на одном графике",
        path: "/module/5/function-derivative-link",
      },
      {
        id: "5-4",
        title: "Экстремумы и производная",
        description: "Максимумы и минимумы",
        path: "/module/5/extrema",
      },
    ],
  },
  {
    id: 6,
    title: "Тригонометрические функции",
    description: "Периодический мир",
    color: "module-6",
    lessons: [
      {
        id: "6-1",
        title: "Синус и косинус",
        description: "Основные периодические функции",
        path: "/module/6/sin-cos",
      },
      {
        id: "6-2",
        title: "Периодичность",
        description: "Повторяющиеся паттерны",
        path: "/module/6/periodicity",
      },
      {
        id: "6-3",
        title: "Тангенс и асимптоты",
        description: "Периодические разрывы",
        path: "/module/6/tangent",
      },
      {
        id: "6-4",
        title: "Преобразования графиков",
        description: "Сдвиги, растяжения, отражения",
        path: "/module/6/transformations",
      },
    ],
  },
  {
    id: 7,
    title: "Экспонента и логарифм",
    description: "Рост и обратимость",
    color: "module-7",
    lessons: [
      {
        id: "7-1",
        title: "Экспоненциальный рост",
        description: "Быстрее любого полинома",
        path: "/module/7/exponential-growth",
      },
      {
        id: "7-2",
        title: "Сравнение с линейным ростом",
        description: "Почему экспонента особенная",
        path: "/module/7/linear-vs-exponential",
      },
      {
        id: "7-3",
        title: "Логарифмическая функция",
        description: "Медленный рост",
        path: "/module/7/logarithm",
      },
      {
        id: "7-4",
        title: "Обратимость",
        description: "exp и ln как обратные функции",
        path: "/module/7/inverse",
      },
    ],
  },
  {
    id: 8,
    title: "Кусочно-заданные функции",
    description: "Анализ по частям",
    color: "module-8",
    lessons: [
      {
        id: "8-1",
        title: "Анализ по частям",
        description: "Разные формулы на разных интервалах",
        path: "/module/8/piecewise-analysis",
      },
      {
        id: "8-2",
        title: "Точки склейки",
        description: "Поведение в точках соединения",
        path: "/module/8/junction-points",
      },
      {
        id: "8-3",
        title: "Непрерывность и дифференцируемость",
        description: "Гладкость в точках склейки",
        path: "/module/8/smoothness",
      },
    ],
  },
  {
    id: 9,
    title: "Модуль и изломы",
    description: "Потеря гладкости",
    color: "module-9",
    lessons: [
      {
        id: "9-1",
        title: "Функция с модулем",
        description: "Отражение отрицательной части",
        path: "/module/9/absolute-value",
      },
      {
        id: "9-2",
        title: "Потеря дифференцируемости",
        description: "Угловые точки",
        path: "/module/9/corner-points",
      },
    ],
  },
  {
    id: 10,
    title: "Пределы интуиции",
    description: "Границы применимости",
    color: "module-10",
    lessons: [
      {
        id: "10-1",
        title: "Осциллирующие функции",
        description: "Бесконечные колебания",
        path: "/module/10/oscillating",
      },
      {
        id: "10-2",
        title: "Отсутствие предела",
        description: "Когда предел не существует",
        path: "/module/10/no-limit",
      },
      {
        id: "10-3",
        title: "Границы анализа",
        description: "Где интуиция отказывает",
        path: "/module/10/limits-of-analysis",
      },
    ],
  },
];

export const getModule = (moduleId: number): Module | undefined => {
  return courseStructure.find((m) => m.id === moduleId);
};

export const getLesson = (moduleId: number, lessonPath: string): Lesson | undefined => {
  const module = getModule(moduleId);
  if (!module) return undefined;
  return module.lessons.find((l) => l.path === lessonPath);
};
