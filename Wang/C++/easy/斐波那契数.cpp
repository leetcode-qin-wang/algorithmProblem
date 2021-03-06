#include <vector>

using namespace std;

class Solution {
 public:
  int fib(int N) {
    if (N == 0) {
      return 0;
    }
    if (N == 1 || N == 2) {
      return 1;
    }

    vector<int> dp(N + 1, 0);
    dp[1] = 1;
    dp[2] = 1;

    for (int i = 3; i <= N; ++i) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[N];
  }
};