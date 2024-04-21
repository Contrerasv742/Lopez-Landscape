#include <iostream>

/* @brief Implementation of Lunh's law
 * @params account_number is the account we want to validate
 * @return full acount number if valid
 * */
std::string validate_account(std::string account_number) {
  int count = 0;
  for (int i = account_number.size() - 1; i >= 0; i--) {
    int digit = account_number[i] - '0';

    if (i % 2 == 1) {
      int doubled = digit * 2;
      int sum = (doubled / 10) + (doubled % 10);
      count += sum;
    } else {
      count += digit;
    }
  }
  int last_num = 10 - (count % 10); 
  return account_number + std::to_string(last_num);   
}

int main() {
  // Tests Number: 1789372997
  std::string account_number = "1789372997";

  std::string full_account = validate_account(account_number); 

  std::cout << "Full Account: " << full_account << "\n";

  return 0;
}
