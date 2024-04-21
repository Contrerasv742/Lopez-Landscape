#include <iostream>

int main() {
  // Tests Number: 1789372997
  std::string account_number = "1789372997";

  int count = 0;
  for (int i = account_number.size() - 1; i >= 0; i--) {
    int digit = account_number[i] - '0';

    if (i % 2 == 1) {
      int doubled = digit * 2;
      int sum = (doubled / 10) + (doubled % 10);
      count += sum;

      // std::cout << sum << std::endl;
    } else {
      count += digit;

      // std::cout << digit << std::endl;
    }
  }

  std::cout << "Full Account: " << account_number;
  std::cout << 10 - (count % 10) << std::endl;

  return 0;
}
