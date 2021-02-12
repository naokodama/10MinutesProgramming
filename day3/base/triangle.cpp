#include <iostream>
using namespace std;
#include <math.h>

int main(void){

  /* 正三角形の面積 */
  float S;
 
  /* 三角形の辺 */
  float a;
  std::cin >> a;
 
  /* 辺と角度を入力 */
  printf("正三角形の辺を入力:\n");
  printf("辺 a = ");
  scanf("%f", &a);
 
  /* 三角形の面積を計算・出力 */
  S  = sqrt(3) * a * a / 4.0;
 
  printf("面積 S = %.3f\n", S);
 
  return 0;

}
