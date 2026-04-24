import { Card } from "@/components/ui/card";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const ProbabilityTheory = () => {
  return (
    <div className="space-y-8">
      {/* I. Случайные события - Основные формулы */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-primary">I. Случайные события</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Классическое определение вероятности */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
            <h4 className="text-lg font-bold mb-4 text-primary">2. Классическое определение вероятности</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-muted/30 p-3 rounded-lg">
                <BlockMath math="P(A) = \frac{m}{n}" />
              </div>
              <p className="text-muted-foreground">
                где <InlineMath math="m" /> — число благоприятствующих событию исходов,{" "}
                <InlineMath math="n" /> — число всех элементарных равновозможных исходов.
              </p>
            </div>
          </Card>

          {/* Вероятность суммы событий */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
            <h4 className="text-lg font-bold mb-4 text-secondary">3. Вероятность суммы событий</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-foreground mb-2">Несовместные события:</p>
                <div className="bg-muted/30 p-2 rounded-lg">
                  <BlockMath math="P(A + B) = P(A) + P(B)" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Совместные события:</p>
                <div className="bg-muted/30 p-2 rounded-lg">
                  <BlockMath math="P(A + B) = P(A) + P(B) - P(AB)" />
                </div>
              </div>
            </div>
          </Card>

          {/* Вероятность произведения событий */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
            <h4 className="text-lg font-bold mb-4 text-accent">4. Вероятность произведения событий</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-foreground mb-2">Независимые события:</p>
                <div className="bg-muted/30 p-2 rounded-lg">
                  <BlockMath math="P(A \cdot B) = P(A) \cdot P(B)" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Зависимые события:</p>
                <div className="bg-muted/30 p-2 rounded-lg space-y-1">
                  <BlockMath math="P(A \cdot B) = P(A) \cdot P(B|A)" />
                  <BlockMath math="P(A \cdot B) = P(B) \cdot P(A|B)" />
                </div>
              </div>
            </div>
          </Card>

          {/* Формула полной вероятности */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
            <h4 className="text-lg font-bold mb-4 text-primary">5. Формула полной вероятности</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-muted/30 p-3 rounded-lg">
                <BlockMath math="P(A) = \sum_{k=1}^{n} P(H_k) \cdot P(A|H_k)" />
              </div>
              <p className="text-muted-foreground">
                где <InlineMath math="H_1, H_2, \ldots, H_n" /> — полная группа гипотез,{" "}
                <InlineMath math="H_i \cdot H_j = \emptyset" /> при <InlineMath math="i \neq j" />
              </p>
            </div>
          </Card>

          {/* Формула Байеса */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
            <h4 className="text-lg font-bold mb-4 text-secondary">6. Формула Байеса</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-muted/30 p-3 rounded-lg">
                <BlockMath math="P(H_m|A) = \frac{P(H_m) \cdot P(A|H_m)}{\sum_{k=1}^{n} P(H_k) \cdot P(A|H_k)}" />
              </div>
              <p className="text-muted-foreground">
                Вычисление апостериорных вероятностей гипотез
              </p>
            </div>
          </Card>

          {/* Формула Бернулли */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
            <h4 className="text-lg font-bold mb-4 text-accent">7. Формула Бернулли</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-muted/30 p-3 rounded-lg">
                <BlockMath math="P(k) = C_n^k \cdot p^k \cdot (1-p)^{n-k}" />
              </div>
              <p className="text-muted-foreground">
                Вероятность появления события ровно <InlineMath math="k" /> раз при <InlineMath math="n" /> независимых испытаниях
              </p>
            </div>
          </Card>

          {/* Наивероятнейшее число */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
            <h4 className="text-lg font-bold mb-4 text-primary">8. Наивероятнейшее число</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-muted/30 p-3 rounded-lg">
                <BlockMath math="np - (1-p) \leq k_0 \leq np + p" />
              </div>
              <p className="text-muted-foreground">
                Наивероятнейшее число <InlineMath math="k_0" /> появления события при <InlineMath math="n" /> испытаниях
              </p>
            </div>
          </Card>

          {/* Локальная формула Лапласа */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
            <h4 className="text-lg font-bold mb-4 text-secondary">9. Локальная формула Лапласа</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-muted/30 p-3 rounded-lg">
                <BlockMath math="P(k) \approx \frac{1}{\sqrt{2\pi npq}} \cdot \varphi\left(\frac{k - np}{\sqrt{npq}}\right)" />
              </div>
              <p className="text-muted-foreground">
                где <InlineMath math="q = 1 - p" />, применяется при больших <InlineMath math="n" />
              </p>
            </div>
          </Card>

          {/* Интегральная формула Лапласа */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
            <h4 className="text-lg font-bold mb-4 text-accent">10. Интегральная формула Лапласа</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-muted/30 p-3 rounded-lg">
                <BlockMath math="P(m_1, m_2) \approx \Phi\left(\frac{m_2 - np}{\sqrt{npq}}\right) - \Phi\left(\frac{m_1 - np}{\sqrt{npq}}\right)" />
              </div>
              <p className="text-muted-foreground">
                Вероятность появления события от <InlineMath math="m_1" /> до <InlineMath math="m_2" /> раз
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* II. Комбинаторика */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-primary">II. Комбинаторика</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Комбинаторика */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
            <h4 className="text-lg font-bold mb-4 text-primary">1. Основные формулы</h4>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-foreground mb-2">а) Перестановки:</p>
              <div className="bg-muted/30 p-2 rounded-lg">
                <BlockMath math="P_n = n! = 1 \cdot 2 \cdot 3 \cdot \ldots \cdot (n-1) \cdot n" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">б) Размещения:</p>
              <div className="bg-muted/30 p-2 rounded-lg">
                <BlockMath math="A_n^m = n \cdot (n-1) \cdot \ldots \cdot (n-m+1)" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">в) Сочетания:</p>
              <div className="bg-muted/30 p-2 rounded-lg">
                <BlockMath math="C_n^k = \frac{A_n^k}{P_k} = \frac{n!}{(n-k)! \cdot k!}" />
              </div>
            </div>
          </div>
        </Card>

          {/* Схема испытаний Бернулли */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
            <h4 className="text-lg font-bold mb-4 text-accent">2. Схема испытаний Бернулли</h4>
          <div className="space-y-3 text-sm">
            <p className="text-muted-foreground">
              <InlineMath math="A" /> – СЛУЧАЙНОЕ СОБЫТИЕ.{" "}
              <InlineMath math="\bar{A}" /> – СОБЫТИЕ A НЕ ПРОИЗОШЛО
            </p>
            <div className="space-y-2 bg-muted/30 p-3 rounded-lg">
              <p className="text-foreground">
                <InlineMath math="p" /> – Вероятность наступления события A
              </p>
              <p className="text-foreground">
                <InlineMath math="q" /> – Вероятность того, что событие A не наступило
              </p>
              <div className="text-center mt-2">
                <BlockMath math="p + q = 1" />
                <BlockMath math="q = 1 - p" />
              </div>
            </div>
            <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
              <p className="font-semibold text-foreground text-center">
                ВСЕ ВОЗМОЖНЫЕ СОБЫТИЯ ПОСЛЕ ТРЁХ ИСПЫТАНИЙ
              </p>
            </div>
          </div>
        </Card>

          {/* Примеры перестановок */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <h4 className="text-lg font-bold mb-4 text-primary">3. Перестановки (пример)</h4>
          <div className="space-y-4 text-sm">
            <p className="text-muted-foreground">Количество элементов = 3</p>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-muted/30 p-2 rounded">①②③</div>
              <div className="bg-muted/30 p-2 rounded">①③②</div>
              <div className="bg-muted/30 p-2 rounded">②①③</div>
              <div className="bg-muted/30 p-2 rounded">②③①</div>
              <div className="bg-muted/30 p-2 rounded">③①②</div>
              <div className="bg-muted/30 p-2 rounded">③②①</div>
            </div>
            <div className="bg-primary/10 p-2 rounded-lg border border-primary/20 text-center">
              <BlockMath math="P_3 = 3! = 6" />
            </div>
          </div>
        </Card>

          {/* Примеры сочетаний */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300">
            <h4 className="text-lg font-bold mb-4 text-secondary">4. Сочетания (пример)</h4>
          <div className="space-y-3 text-sm">
            <p className="text-muted-foreground">Выбор 2 из 3 элементов (порядок не важен):</p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-muted/30 p-2 rounded">①②</div>
              <div className="bg-muted/30 p-2 rounded">①③</div>
              <div className="bg-muted/30 p-2 rounded">②③</div>
            </div>
            <div className="bg-secondary/10 p-2 rounded-lg border border-secondary/20 text-center">
              <BlockMath math="C_3^2 = \frac{3!}{1! \cdot 2!} = 3" />
            </div>
          </div>
        </Card>

          {/* Размещения */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
            <h4 className="text-lg font-bold mb-4 text-accent">5. Размещения (пример)</h4>
          <div className="space-y-3 text-sm">
            <p className="text-muted-foreground">Выбор 2 из 3 элементов (порядок важен):</p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-muted/30 p-2 rounded">①②</div>
              <div className="bg-muted/30 p-2 rounded">②①</div>
              <div className="bg-muted/30 p-2 rounded">①③</div>
              <div className="bg-muted/30 p-2 rounded">③①</div>
              <div className="bg-muted/30 p-2 rounded">②③</div>
              <div className="bg-muted/30 p-2 rounded">③②</div>
            </div>
            <div className="bg-accent/10 p-2 rounded-lg border border-accent/20 text-center">
              <BlockMath math="A_3^2 = 3 \cdot 2 = 6" />
            </div>
          </div>
        </Card>

          {/* Формулы событий */}
          <Card className="p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300">
            <h4 className="text-lg font-bold mb-4 text-secondary">6. Формулы событий (n=3)</h4>
          <div className="space-y-2 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-muted/20 p-2 rounded-lg text-center">
                <BlockMath math="P(AAA) = p^3" />
              </div>
              <div className="bg-muted/20 p-2 rounded-lg text-center">
                <BlockMath math="P(\bar{A}\bar{A}\bar{A}) = q^3" />
              </div>
            </div>
            <div className="bg-muted/20 p-2 rounded-lg text-center">
              <BlockMath math="P(AA\bar{A}) = P(A\bar{A}A) = P(\bar{A}AA) = p^2q" />
            </div>
            <div className="bg-muted/20 p-2 rounded-lg text-center">
              <BlockMath math="P(A\bar{A}\bar{A}) = P(\bar{A}A\bar{A}) = P(\bar{A}\bar{A}A) = pq^2" />
            </div>
          </div>
        </Card>
        </div>
      </div>

      {/* Треугольник Паскаля */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-to-br from-card via-primary/5 to-secondary/5 border-2 border-primary/30">
          <h4 className="text-lg font-bold mb-4 text-primary text-center">7. Треугольник Паскаля</h4>
          <div className="flex flex-col items-center space-y-1 font-mono text-sm">
            <div className="text-center">1</div>
            <div className="text-center">1 1</div>
            <div className="text-center">1 2 1</div>
            <div className="text-center">1 3 3 1</div>
            <div className="text-center">1 4 6 4 1</div>
            <div className="text-center">1 5 10 10 5 1</div>
            <div className="text-center">1 6 15 20 15 6 1</div>
            <div className="text-center">1 7 21 35 35 21 7 1</div>
            <div className="text-center">1 8 28 56 70 56 28 8 1</div>
            <div className="text-center text-primary font-bold">1 9 36 84 126 126 84 36 9 1</div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Биномиальные коэффициенты <InlineMath math="C_n^k" />
          </p>
        </Card>

        {/* Общая формула */}
        <Card className="p-6 bg-gradient-to-br from-card via-secondary/5 to-accent/5 border-2 border-secondary/30">
          <h4 className="text-lg font-bold mb-4 text-secondary text-center">8. Общая формула Бернулли</h4>
          <div className="space-y-4 text-sm">
            <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
              <BlockMath math="P(p, n, k) = C_n^k \cdot p^k \cdot q^{n-k}" />
              <p className="text-muted-foreground text-center mt-2">
                Вероятность того, что событие A наступит ровно k раз после n испытаний
              </p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-foreground mb-2 font-semibold">Биномиальное распределение:</p>
              <BlockMath math="M(X) = np" />
              <BlockMath math="D(X) = npq" />
              <BlockMath math="\sigma = \sqrt{npq}" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
